import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lock,
  Phone,
  Mail,
  User,
  MapPin,
  RefreshCw,
  Clock,
  Check,
  ChevronRight,
  Sparkles,
  Info,
  X,
  Home,
  CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type CalculatorStep = "BHK_TYPE" | "HOUSE_SIZE" | "ROOMS_DESIGN" | "PACKAGE" | "ESTIMATE";
type BHKType = "1 BHK" | "2 BHK" | "3 BHK" | "4 BHK" | "5 BHK+";
type MaterialPackage = "Essential" | "Premium" | "Luxury";

interface LeadProfile {
  name: string;
  email: string;
  phone: string;
  city: string;
}

interface RoomItem {
  id: string;
  name: string;
  weight: number;
}

const HomeCalculatorWizard: React.FC = () => {
  const navigate = useNavigate();

  // Wizard state management
  const [step, setStep] = useState<CalculatorStep>("BHK_TYPE");
  const [selectedBhk, setSelectedBhk] = useState<BHKType | null>(null);
  const [houseSize, setHouseSize] = useState<number>(0);
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<MaterialPackage | null>(null);

  // Form profile state
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteStep, setQuoteStep] = useState<"FORM" | "OTP" | "SUCCESS">("FORM");
  const [profile, setProfile] = useState<LeadProfile>({
    name: "",
    email: "",
    phone: "",
    city: ""
  });

  // OTP Verification
  const [generatedOtp, setGeneratedOtp] = useState<string>("");
  const [enteredOtp, setEnteredOtp] = useState<string>("");
  const [otpTimer, setOtpTimer] = useState<number>(60);
  const [isSubmittingLead, setIsSubmittingLead] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Error states
  const [profileErrors, setProfileErrors] = useState<Partial<LeadProfile>>({});
  const [sizeError, setSizeError] = useState<string>("");

  // Default house sizes based on BHK
  const getBhkDefaultSize = (bhk: BHKType): number => {
    switch (bhk) {
      case "1 BHK": return 600;
      case "2 BHK": return 1000;
      case "3 BHK": return 1400;
      case "4 BHK": return 2000;
      case "5 BHK+": return 3000;
      default: return 1000;
    }
  };

  // Rooms list with cost weight multipliers
  const availableRooms: RoomItem[] = [
    { id: "living", name: "Living Room", weight: 1.0 },
    { id: "kitchen", name: "Modular Kitchen", weight: 1.2 },
    { id: "master_bed", name: "Master Bedroom", weight: 1.0 },
    { id: "kids_bed", name: "Kids Bedroom", weight: 0.9 },
    { id: "guest_bed", name: "Guest Bedroom", weight: 0.8 },
    { id: "dining", name: "Dining Room", weight: 0.7 },
    { id: "bathrooms", name: "Bathrooms", weight: 0.5 },
    { id: "balcony", name: "Balconies", weight: 0.4 },
    { id: "pooja", name: "Pooja Room", weight: 0.5 }
  ];

  // Standard room weight sum based on BHK configuration to normalize scope multiplier
  const getBhkStandardSum = (bhk: BHKType): number => {
    switch (bhk) {
      case "1 BHK": return 3.7; // Living, Kitchen, Master Bed, 1 Bathroom (1.0 + 1.2 + 1.0 + 0.5)
      case "2 BHK": return 5.0; // Living, Kitchen, Master, Guest, 2 Bathrooms (1.0 + 1.2 + 1.0 + 0.8 + 1.0)
      case "3 BHK": return 6.6; // Living, Kitchen, Master, Kids, Guest, Dining, 2 Bathrooms
      case "4 BHK": return 7.7; // Living, Kitchen, Master, Kids, Guest, Dining, 3 Bathrooms
      case "5 BHK+": return 9.5; // Living, Kitchen, Master, Kids, Guest, Dining, Balcony, Pooja, 4 Bathrooms
      default: return 5.0;
    }
  };

  // Pricing constants (INR per sq ft)
  const getPackageRate = (pkg: MaterialPackage): number => {
    switch (pkg) {
      case "Essential": return 950;
      case "Premium": return 1250;
      case "Luxury": return 1500;
      default: return 600;
    }
  };

  // Auto-fill default size on BHK selection
  const handleBhkSelect = (bhk: BHKType) => {
    setSelectedBhk(bhk);
    setHouseSize(getBhkDefaultSize(bhk));

    // Auto-select standard rooms for the BHK
    const standardRoomIds: string[] = ["living", "kitchen", "master_bed"];
    if (bhk === "2 BHK") {
      standardRoomIds.push("guest_bed", "bathrooms");
    } else if (bhk === "3 BHK") {
      standardRoomIds.push("kids_bed", "guest_bed", "dining", "bathrooms");
    } else if (bhk === "4 BHK" || bhk === "5 BHK+") {
      standardRoomIds.push("kids_bed", "guest_bed", "dining", "bathrooms", "balcony", "pooja");
    }
    setSelectedRooms(standardRoomIds);
    setStep("HOUSE_SIZE");
  };

  // OTP Countdown timer
  useEffect(() => {
    if (isQuoteModalOpen && quoteStep === "OTP" && otpTimer > 0) {
      timerRef.current = setTimeout(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    } else if (otpTimer === 0 && timerRef.current) {
      clearTimeout(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isQuoteModalOpen, quoteStep, otpTimer]);

  // MATH PRICING CALCULATIONS
  const computePrices = () => {
    if (!selectedBhk || !selectedPackage || houseSize <= 0) {
      return { basePrice: 0, minPrice: 0, maxPrice: 0, roomScopeMultiplier: 0 };
    }

    const rate = getPackageRate(selectedPackage);
    const standardSum = getBhkStandardSum(selectedBhk);

    // Calculate total weights of selected rooms
    const selectedRoomsWeight = availableRooms
      .filter((r) => selectedRooms.includes(r.id))
      .reduce((sum, r) => sum + r.weight, 0);

    // Normalize room weights compared to standard BHK
    const roomScopeMultiplier = selectedRoomsWeight / standardSum;

    // Total price estimation: Size * Rate * Scope Multiplier
    const basePrice = houseSize * rate * roomScopeMultiplier;
    const minPrice = basePrice - (basePrice * 0.10); // -10%
    const maxPrice = basePrice + (basePrice * 0.20); // +20%

    return {
      basePrice,
      minPrice,
      maxPrice,
      roomScopeMultiplier
    };
  };

  const { basePrice, minPrice, maxPrice, roomScopeMultiplier } = computePrices();

  // Reset calculator wizard
  const handleRecalculate = () => {
    setSelectedBhk(null);
    setHouseSize(0);
    setSelectedRooms([]);
    setSelectedPackage(null);
    setProfile({ name: "", email: "", phone: "", city: "" });
    setGeneratedOtp("");
    setEnteredOtp("");
    setOtpTimer(60);
    setProfileErrors({});
    setSizeError("");
    setIsQuoteModalOpen(false);
    setQuoteStep("FORM");
    setStep("BHK_TYPE");
    toast.success("Home Interior calculator cleared.");
  };

  // Nav Handlers
  const handleSizeNext = () => {
    if (isNaN(houseSize) || houseSize < 200 || houseSize > 10000) {
      setSizeError("House size must be between 200 and 10,000 sq ft.");
      toast.error("Please enter a valid house size.");
      return;
    }
    setSizeError("");
    setStep("ROOMS_DESIGN");
  };

  const handleRoomsNext = () => {
    if (selectedRooms.length === 0) {
      toast.error("Please select at least one room to design.");
      return;
    }
    setStep("PACKAGE");
  };

  const handlePackageSelect = (pkg: MaterialPackage) => {
    setSelectedPackage(pkg);
    setStep("ESTIMATE");
  };

  // Profile capture submission
  const validateProfileForm = (): boolean => {
    const errors: Partial<LeadProfile> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!profile.name.trim()) errors.name = "Full Name is required.";
    if (!profile.email.trim()) {
      errors.email = "Email Address is required.";
    } else if (!emailRegex.test(profile.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!profile.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(profile.phone)) {
      errors.phone = "Must be a 10-digit number starting with 6-9.";
    }
    if (!profile.city) errors.city = "Please select your city.";

    setProfileErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateProfileForm()) {
      toast.error("Please fill in all details correctly.");
      return;
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otp);
    setOtpTimer(60);
    setEnteredOtp("");

    toast.success(`Verification Code sent to +91 ${profile.phone}!`, {
      description: `MOCK SMS OTP is: ${otp}`,
      duration: 10000,
    });

    setQuoteStep("OTP");
  };

  const handleResendOtp = () => {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otp);
    setOtpTimer(60);
    setEnteredOtp("");
    toast.success("Verification Code resent!", {
      description: `New MOCK SMS OTP is: ${otp}`,
      duration: 10000,
    });
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredOtp !== generatedOtp) {
      toast.error("Invalid OTP entered. Please try again.");
      return;
    }

    setIsSubmittingLead(true);

    const payload = {
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      city: profile.city,
      interiorDetails: {
        type: "Full Home Interior",
        bhkType: selectedBhk,
        houseSize: houseSize,
        selectedRooms: availableRooms.filter(r => selectedRooms.includes(r.id)).map(r => r.name),
        packageType: selectedPackage
      },
      pricingEstimate: {
        basePrice,
        minPrice,
        maxPrice
      },
      isVerified: true,
      createdAt: new Date().toISOString()
    };

    try {
      const response = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const resData = await response.ok ? await response.json() : null;
      if (resData && resData.success) {
        toast.success("Details successfully verified and saved!");
        setQuoteStep("SUCCESS");
      } else {
        throw new Error("Server failed, running simulation fallback");
      }
    } catch (err) {
      console.warn("Backend down. Saving to local simulation store.", err);
      const saved = JSON.parse(localStorage.getItem("studia_saga_leads") || "[]");
      saved.push(payload);
      localStorage.setItem("studia_saga_leads", JSON.stringify(saved));
      toast.success("Details saved locally successfully!");
      setQuoteStep("SUCCESS");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  // Currency utility
  const formatCurrency = (val: number): string => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  const getStepProgressPercentage = () => {
    switch (step) {
      case "BHK_TYPE": return 20;
      case "HOUSE_SIZE": return 40;
      case "ROOMS_DESIGN": return 60;
      case "PACKAGE": return 80;
      case "ESTIMATE": return 100;
      default: return 0;
    }
  };

  const toggleRoomSelection = (roomId: string) => {
    if (selectedRooms.includes(roomId)) {
      setSelectedRooms(selectedRooms.filter((id) => id !== roomId));
    } else {
      setSelectedRooms([...selectedRooms, roomId]);
    }
  };



  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between font-sans">
      {/* <Header /> */}

      <main className="flex-grow pb-16 pt-24">
        <div className="max-w-5xl mx-auto px-6 mt-8">

          {/* Progress Tracker */}
          <div className="mb-12 max-w-3xl mx-auto px-4 py-6 bg-white/60 backdrop-blur-md rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center relative px-2">
              {/* Gray Background Line */}
              <div className="absolute left-6 right-6 top-[18px] h-[3px] bg-slate-100 rounded-full -z-10" />

              {/* Filled Amber Progress Line */}
              <div
                className="absolute left-6 top-[18px] h-[3px] bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500 ease-out rounded-full -z-10"
                style={{ width: `${getStepProgressPercentage() - 12}%` }}
              />

              {[
                { id: "BHK_TYPE", num: 1, label: "BHK" },
                { id: "HOUSE_SIZE", num: 2, label: "Area" },
                { id: "ROOMS_DESIGN", num: 3, label: "Rooms" },
                { id: "PACKAGE", num: 4, label: "Package" },
                { id: "ESTIMATE", num: 5, label: "Estimate" }
              ].map((s) => {
                const isCurrent = step === s.id;
                const isCompleted =
                  (s.id === "BHK_TYPE" && step !== "BHK_TYPE") ||
                  (s.id === "HOUSE_SIZE" && step !== "BHK_TYPE" && step !== "HOUSE_SIZE") ||
                  (s.id === "ROOMS_DESIGN" && step !== "BHK_TYPE" && step !== "HOUSE_SIZE" && step !== "ROOMS_DESIGN") ||
                  (s.id === "PACKAGE" && step === "ESTIMATE");

                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      if (s.id === "BHK_TYPE") setStep("BHK_TYPE");
                      else if (s.id === "HOUSE_SIZE" && selectedBhk) setStep("HOUSE_SIZE");
                      else if (s.id === "ROOMS_DESIGN" && selectedBhk && houseSize > 0) setStep("ROOMS_DESIGN");
                      else if (s.id === "PACKAGE" && selectedBhk && houseSize > 0 && selectedRooms.length > 0) setStep("PACKAGE");
                    }}
                    disabled={s.id === "ESTIMATE"}
                    className="flex flex-col items-center gap-3 group focus:outline-none relative min-w-[65px]"
                  >
                    {/* Step Circle */}
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 text-xs font-bold transition-all duration-300 ${isCurrent
                      ? "border-amber-600 bg-amber-600 text-white scale-115 shadow-lg shadow-amber-600/30 ring-4 ring-amber-50"
                      : isCompleted
                        ? "border-amber-500 bg-amber-50 text-amber-600 shadow-sm"
                        : "border-slate-200 bg-white text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600"
                      }`}>
                      {isCompleted ? (
                        <Check className="w-4 h-4 stroke-[3px] animate-fade-in" />
                      ) : (
                        <span>{s.num}</span>
                      )}
                    </div>

                    {/* Step Label */}
                    <span className={`text-[11px] tracking-wider uppercase font-semibold transition-colors duration-200 ${isCurrent
                      ? "text-amber-600 font-bold"
                      : isCompleted
                        ? "text-slate-700 font-medium"
                        : "text-slate-400 font-medium group-hover:text-slate-500"
                      }`}>
                      {s.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Go Back button */}
          {step !== "ESTIMATE" && (
            <button
              onClick={() => {
                if (step === "BHK_TYPE") navigate("/home-interior-price-calculator");
                else if (step === "HOUSE_SIZE") setStep("BHK_TYPE");
                else if (step === "ROOMS_DESIGN") setStep("HOUSE_SIZE");
                else if (step === "PACKAGE") setStep("ROOMS_DESIGN");
              }}
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-sm font-light mb-8 transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>Go Back</span>
            </button>
          )}

          {/* Main Wizard Form Body Card */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden transition-all duration-300">

            {/* Step 1: BHK Type */}
            {step === "BHK_TYPE" && (
              <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                    Step 1: Choose house configuration
                  </h2>
                  <p className="text-slate-500 font-light text-sm">
                    Select your BHK configuration to estimate room allocation and floor space guidelines.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                  {(["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK+"] as BHKType[]).map((bhk) => (
                    <button
                      key={bhk}
                      onClick={() => handleBhkSelect(bhk)}
                      className={`group p-8 text-center border-2 rounded-2xl transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center space-y-3 cursor-pointer ${selectedBhk === bhk
                        ? "border-amber-600 bg-amber-50/10"
                        : "border-slate-200 hover:border-amber-400 hover:bg-slate-50/20"
                        }`}
                    >
                      <Home className={`w-8 h-8 ${selectedBhk === bhk ? "text-amber-600 animate-pulse" : "text-slate-400 group-hover:text-amber-500"}`} />
                      <span className="text-lg font-medium text-slate-800">{bhk} Layout</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Size of House */}
            {step === "HOUSE_SIZE" && (
              <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                    Step 2: Enter built-up house size
                  </h2>
                  <p className="text-slate-500 font-light text-sm">
                    Specify the total carpet/built-up area in square feet. We pre-fill average values for a standard {selectedBhk}.
                  </p>
                </div>

                <div className="max-w-md space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="houseSize" className="text-sm font-medium text-slate-700">
                      House Size (sq ft) <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="houseSize"
                      type="number"
                      min="200"
                      max="10000"
                      value={houseSize || ""}
                      onChange={(e) => {
                        setHouseSize(parseInt(e.target.value) || 0);
                        setSizeError("");
                      }}
                      placeholder="e.g. 1200"
                      className={`p-4 rounded-xl border ${sizeError ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:ring-amber-500"}`}
                    />
                    {sizeError && <p className="text-xs text-red-500 font-light">{sizeError}</p>}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button
                    onClick={handleSizeNext}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-5 rounded-xl shadow-md transition-all duration-300 flex items-center gap-1.5"
                  >
                    <span>Proceed to Rooms</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Pick Rooms */}
            {step === "ROOMS_DESIGN" && (
              <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                    Step 3: Select spaces to design
                  </h2>
                  <p className="text-slate-500 font-light text-sm">
                    Customize your interior project scope by toggling specific rooms in and out of the calculation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                  {availableRooms.map((room) => {
                    const isSelected = selectedRooms.includes(room.id);
                    return (
                      <button
                        key={room.id}
                        onClick={() => toggleRoomSelection(room.id)}
                        className={`group flex items-center justify-between p-5 border-2 rounded-2xl text-left transition-all duration-200 hover:shadow-sm cursor-pointer ${isSelected
                          ? "border-amber-600 bg-amber-50/10"
                          : "border-slate-200 hover:border-amber-400 hover:bg-slate-50/55"
                          }`}
                      >
                        <span className={`text-sm font-medium ${isSelected ? "text-amber-800" : "text-slate-700"}`}>
                          {room.name}
                        </span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${isSelected
                          ? "bg-amber-600 border-amber-600 text-white"
                          : "bg-white border-slate-350"
                          }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3px]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-4">
                  <Button
                    onClick={handleRoomsNext}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-5 rounded-xl shadow-md transition-all duration-300 flex items-center gap-1.5"
                  >
                    <span>Proceed to Packages</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Package preference */}
            {step === "PACKAGE" && (
              <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                    Step 4: Select material package
                  </h2>
                  <p className="text-slate-500 font-light text-sm">
                    Select a budget tier matching the grade of wood core, fittings, accessories, and paint coats.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {[
                    {
                      name: "Essential" as MaterialPackage,
                      rate: 350,
                      sub: "Modern & Cost-Effective",
                      specs: [
                        "Commercial Ply & MDF grids",
                        "High durability matte laminate Shutter",
                        "Standard functional accessories",
                        "Aqueous paint coat finishes"
                      ]
                    },
                    {
                      name: "Premium" as MaterialPackage,
                      rate: 600,
                      sub: "Elegant & Hardwearing",
                      specs: [
                        "Water-resistant HDHMR substrates",
                        "Scratch-proof premium gloss laminates",
                        "High-end soft-close runners",
                        "Premium emulsions & false ceilings"
                      ],
                      highlight: true
                    },
                    {
                      name: "Luxury" as MaterialPackage,
                      rate: 950,
                      sub: "Bespoke Opulence",
                      specs: [
                        "Boiling waterproof Ply substrates",
                        "Imported acrylic & PU lacquer shutter",
                        "High-end automation organizers",
                        "Premium architectural wallpapers & lights"
                      ]
                    }
                  ].map((pkg) => (
                    <button
                      key={pkg.name}
                      onClick={() => handlePackageSelect(pkg.name)}
                      className={`group p-6 text-left border-2 rounded-2xl transition-all duration-300 relative flex flex-col justify-between space-y-6 hover:shadow-md cursor-pointer ${selectedPackage === pkg.name
                        ? "border-amber-600 bg-amber-50/10 shadow-[0_4px_20px_rgba(217,119,6,0.08)]"
                        : "border-slate-200 hover:border-amber-400 hover:bg-slate-50/50"
                        }`}
                    >
                      {pkg.highlight && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white">
                          Most Popular
                        </span>
                      )}

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-medium text-slate-900 group-hover:text-amber-600 transition-colors">
                            {pkg.name}
                          </h3>
                          <p className="text-xs text-amber-600 mt-0.5 tracking-wide uppercase font-light">
                            {pkg.sub}
                          </p>
                        </div>

                        <div className="text-3xl font-serif text-slate-800">
                          {formatCurrency(pkg.rate)}
                          <span className="text-xs text-slate-400 font-sans block mt-1">per square foot</span>
                        </div>

                        <hr className="border-slate-100" />

                        <ul className="space-y-2.5 text-xs text-slate-500 font-light">
                          {pkg.specs.map((spec, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="w-full text-center pt-2">
                        <span className={`inline-flex w-full justify-center text-white text-xs font-medium py-3 rounded-xl transition-colors duration-300 ${selectedPackage === pkg.name ? "bg-amber-600" : "bg-slate-900 hover:bg-amber-600"}`}>
                          Choose {pkg.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Estimate Result */}
            {step === "ESTIMATE" && (
              <div className="p-8 md:p-12 space-y-8 animate-fade-in bg-white">
                <div className="text-center space-y-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-600">Calculated Budget Estimate</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-slate-900 font-light">
                    Estimated Cost Breakdown
                  </h2>
                </div>

                <div className="max-w-2xl mx-auto border border-slate-100 rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-slate-55 bg-white">
                  <div className="bg-slate-900 text-white p-8 text-center space-y-4">
                    <p className="text-xs text-slate-400 uppercase tracking-widest">Estimated Price</p>
                    <div className="text-4xl md:text-5xl font-bold font-serif text-amber-500">
                      {formatCurrency(basePrice)}
                    </div>
                    <div className="pt-2 border-t border-white/10 max-w-sm mx-auto">
                      <p className="text-xs text-slate-400 uppercase tracking-widest mb-1.5">Estimated Range (-10% to +20%)</p>
                      <div className="text-lg md:text-xl font-medium">
                        {formatCurrency(minPrice)} - {formatCurrency(maxPrice)}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                      <div className="space-y-1">
                        <span className="text-slate-400 font-light block">BHK Layout Type:</span>
                        <span className="font-semibold text-slate-800 text-base">{selectedBhk} Configuration</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-slate-400 font-light block">Built-up Size:</span>
                        <span className="font-semibold text-slate-800 text-base">{houseSize} sq ft</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-slate-400 font-light block">Package Quality:</span>
                        <span className="font-semibold text-slate-800 text-base">{selectedPackage} Tier</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-slate-400 font-light block">Design Room Count:</span>
                        <span className="font-semibold text-slate-800 text-base">{selectedRooms.length} Rooms Selected</span>
                      </div>
                    </div>

                    {/* Math parameters detail */}
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                      <div className="text-xs font-light text-slate-500 space-y-1.5">
                        <span className="font-medium text-slate-700 block mb-1">Pricing Formula detail:</span>
                        <div>Base rate for {selectedPackage}: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">INR {getPackageRate(selectedPackage || "Premium")} / sq ft</code></div>
                        <div>Design Scope factor: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">{roomScopeMultiplier.toFixed(2)}x (Adjusted by Room Selection weights)</code></div>
                        <div>Calculation: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">{houseSize} sq ft × {formatCurrency(getPackageRate(selectedPackage || "Premium"))} × {roomScopeMultiplier.toFixed(2)} = {formatCurrency(basePrice)}</code></div>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={() => setIsQuoteModalOpen(true)}
                        className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-medium py-6 rounded-xl shadow-md transition-all duration-300 text-base"
                      >
                        Request Detailed Quote
                      </Button>
                      <Button
                        onClick={handleRecalculate}
                        variant="outline"
                        className="border-slate-200 hover:border-slate-300 text-slate-600 py-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                        <span>Recalculate</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="max-w-2xl mx-auto text-center">
                  <p className="text-[11px] leading-relaxed text-slate-400 font-light">
                    Disclaimer: This estimate constitutes a budget projection based on standard module configurations. The final cost may shift depending on detailed onsite measurements, custom hardware selections, structural components, and custom materials selected.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>

      {/* ================= DETAILED QUOTE MODAL OVERLAY ================= */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden relative animate-scale-in">
            <button
              onClick={() => {
                setIsQuoteModalOpen(false);
                setQuoteStep("FORM");
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>

            {quoteStep === "FORM" && (
              <div className="p-8 space-y-6">
                <div className="space-y-2 pr-6">
                  <div className="flex items-center gap-1.5 text-amber-600">
                    <Lock className="w-4 h-4" />
                    <span className="text-xs uppercase font-bold tracking-wider">Unlock Details</span>
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900 font-light">Request Detailed Quote</h3>
                  <p className="text-slate-500 font-light text-xs">
                    Please provide your contact details to register your custom home interior estimation and schedule a free design session.
                  </p>
                </div>

                <form onSubmit={handleProfileSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs font-semibold text-slate-700">Full Name <span className="text-red-500">*</span></Label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        id="name"
                        type="text"
                        value={profile.name}
                        onChange={(e) => {
                          setProfile(prev => ({ ...prev, name: e.target.value }));
                          setProfileErrors(prev => ({ ...prev, name: undefined }));
                        }}
                        placeholder="e.g. Rahul Sharma"
                        className={`pl-10 py-5 rounded-xl border text-sm ${profileErrors.name ? "border-red-500" : "border-slate-200"}`}
                      />
                    </div>
                    {profileErrors.name && <p className="text-[10px] text-red-500 font-light">{profileErrors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></Label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => {
                          setProfile(prev => ({ ...prev, email: e.target.value }));
                          setProfileErrors(prev => ({ ...prev, email: undefined }));
                        }}
                        placeholder="e.g. rahul@example.com"
                        className={`pl-10 py-5 rounded-xl border text-sm ${profileErrors.email ? "border-red-500" : "border-slate-200"}`}
                      />
                    </div>
                    {profileErrors.email && <p className="text-[10px] text-red-500 font-light">{profileErrors.email}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-xs font-semibold text-slate-700">Phone Number <span className="text-red-500">*</span></Label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-light">+91</div>
                      <Input
                        id="phone"
                        type="text"
                        maxLength={10}
                        value={profile.phone}
                        onChange={(e) => {
                          const clean = e.target.value.replace(/\D/g, "");
                          setProfile(prev => ({ ...prev, phone: clean }));
                          setProfileErrors(prev => ({ ...prev, phone: undefined }));
                        }}
                        placeholder="e.g. 9876543210"
                        className={`pl-20 py-5 rounded-xl border text-sm ${profileErrors.phone ? "border-red-500" : "border-slate-200"}`}
                      />
                    </div>
                    {profileErrors.phone && <p className="text-[10px] text-red-500 font-light">{profileErrors.phone}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="city" className="text-xs font-semibold text-slate-700">Select City <span className="text-red-500">*</span></Label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <select
                        id="city"
                        value={profile.city}
                        onChange={(e) => {
                          setProfile(prev => ({ ...prev, city: e.target.value }));
                          setProfileErrors(prev => ({ ...prev, city: undefined }));
                        }}
                        className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm appearance-none outline-none focus:ring-1 focus:ring-amber-500 ${profileErrors.city ? "border-red-500" : "border-slate-200"}`}
                      >
                        <option value="">Choose your city</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Pune">Pune</option>
                        <option value="Hyderabad">Hyderabad</option>
                      </select>
                    </div>
                    {profileErrors.city && <p className="text-[10px] text-red-500 font-light">{profileErrors.city}</p>}
                  </div>

                  <div className="pt-2">
                    <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-1.5">
                      <span>Send Verification OTP</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {quoteStep === "OTP" && (
              <div className="p-8 space-y-6">
                <div className="space-y-2 text-center max-w-sm mx-auto">
                  <div className="mx-auto w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-2">
                    <Clock className="w-6 h-6 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-serif text-slate-900 font-light">Enter Verification Code</h3>
                  <p className="text-slate-500 font-light text-xs">
                    Enter the code we dispatched to <span className="font-semibold text-slate-800">+91 {profile.phone}</span>.
                  </p>
                </div>

                <form onSubmit={handleVerifyOtp} className="space-y-4 max-w-xs mx-auto">
                  <Input
                    type="text"
                    maxLength={4}
                    value={enteredOtp}
                    onChange={(e) => setEnteredOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="0 0 0 0"
                    className="text-center text-xl tracking-[1em] p-5 rounded-xl border border-slate-200 focus:border-amber-600 font-mono font-bold"
                    autoFocus
                  />
                  <div className="flex items-center justify-between text-xs font-light text-slate-500">
                    <div>
                      {otpTimer > 0 ? (
                        <span>Resend in <strong className="text-slate-700">{otpTimer}s</strong></span>
                      ) : (
                        <button type="button" onClick={handleResendOtp} className="text-amber-600 font-medium underline">Resend Code</button>
                      )}
                    </div>
                    <button type="button" onClick={() => setQuoteStep("FORM")} className="text-slate-500 hover:text-slate-800">Change Details</button>
                  </div>
                  <div className="pt-2">
                    <Button type="submit" disabled={enteredOtp.length !== 4 || isSubmittingLead} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2">
                      {isSubmittingLead ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Verifying...</span>
                        </>
                      ) : (
                        <span>Verify & Submit Request</span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {quoteStep === "SUCCESS" && (
              <div className="p-8 text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif text-slate-900 font-light">Quote Request Submitted!</h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed max-w-sm mx-auto">
                    Hello <strong className="text-slate-800 font-medium">{profile.name}</strong>, your custom full home estimate has been successfully registered. A design specialist will contact you shortly at <span className="text-slate-800 font-medium">{profile.email}</span> / <span className="text-slate-800 font-medium">+91 {profile.phone}</span>.
                  </p>
                </div>
                <div className="pt-2">
                  <Button onClick={() => { setIsQuoteModalOpen(false); setQuoteStep("FORM"); }} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 rounded-xl">
                    Close
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* <Footer /> */}
    </div>
  );
};

export default HomeCalculatorWizard;
