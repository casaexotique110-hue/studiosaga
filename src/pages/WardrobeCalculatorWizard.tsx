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
  Layers,
  Gem,
  Hammer
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type CalculatorStep = "LENGTH" | "TYPE" | "FINISH" | "CORE_MATERIAL" | "ACCESSORIES" | "ESTIMATE";
type WardrobeType = "Swing Door" | "Sliding Door";
type FinishType = "Laminate" | "Acrylic" | "PU Paint" | "Glass/Tinted Profile";
type CoreMaterial = "Commercial Plywood" | "HDHMR" | "MDF";

interface LeadProfile {
  name: string;
  email: string;
  phone: string;
  city: string;
}

interface AccessoryItem {
  id: string;
  name: string;
  cost: number;
}

const WardrobeCalculatorWizard: React.FC = () => {
  const navigate = useNavigate();

  // Wizard state management
  const [step, setStep] = useState<CalculatorStep>("LENGTH");
  const [length, setLength] = useState<number>(0);
  const [wardrobeType, setWardrobeType] = useState<WardrobeType | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<FinishType | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<CoreMaterial | null>(null);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);

  // Quote Modal state
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteStep, setQuoteStep] = useState<"FORM" | "OTP" | "SUCCESS">("FORM");
  const [profile, setProfile] = useState<LeadProfile>({
    name: "",
    email: "",
    phone: "",
    city: ""
  });

  // OTP State
  const [generatedOtp, setGeneratedOtp] = useState<string>("");
  const [enteredOtp, setEnteredOtp] = useState<string>("");
  const [otpTimer, setOtpTimer] = useState<number>(60);
  const [isSubmittingLead, setIsSubmittingLead] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Errors
  const [profileErrors, setProfileErrors] = useState<Partial<LeadProfile>>({});
  const [lengthError, setLengthError] = useState<string>("");

  // Accessory details
  const availableAccessories: AccessoryItem[] = [
    { id: "drawer", name: "Pull-out Internal Drawer", cost: 2500 },
    { id: "hanger", name: "Heavy Duty Hanger Rod", cost: 1000 },
    { id: "shoerack", name: "Pull-out Shoe Rack", cost: 3500 },
    { id: "led", name: "Smart LED strip lighting", cost: 2000 },
    { id: "trouser", name: "Metallic Trouser Rack", cost: 3000 },
    { id: "mirror", name: "Vanity Dressing Mirror", cost: 4500 }
  ];

  // Base Running Foot rates based on door style and core substrate
  const getBaseRatePerRft = (type: WardrobeType, material: CoreMaterial): number => {
    if (type === "Swing Door") {
      switch (material) {
        case "MDF": return 4500;
        case "HDHMR": return 6000;
        case "Commercial Plywood": return 7500;
      }
    } else {
      // Sliding wardrobes carry a premium due to sliding guide track channels
      switch (material) {
        case "MDF": return 6000;
        case "HDHMR": return 8000;
        case "Commercial Plywood": return 9500;
      }
    }
  };

  // Finish rate premium (adds to base running foot rate)
  const getFinishRatePerRft = (finish: FinishType): number => {
    switch (finish) {
      case "Laminate": return 0;
      case "Acrylic": return 1500;
      case "PU Paint": return 2500;
      case "Glass/Tinted Profile": return 3500;
    }
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

  // MATH CALCULATIONS
  const computePrices = () => {
    if (length <= 0 || !wardrobeType || !selectedFinish || !selectedMaterial) {
      return { basePrice: 0, minPrice: 0, maxPrice: 0, rftRate: 0, accessoriesCost: 0 };
    }

    const baseRate = getBaseRatePerRft(wardrobeType, selectedMaterial);
    const finishRate = getFinishRatePerRft(selectedFinish);
    const rftRate = baseRate + finishRate;

    // Total cost = (length in feet * running foot rate) + cost of chosen accessories
    const accessoriesCost = availableAccessories
      .filter((a) => selectedAccessories.includes(a.id))
      .reduce((sum, a) => sum + a.cost, 0);

    const basePrice = (length * rftRate) + accessoriesCost;
    const minPrice = basePrice - (basePrice * 0.10); // -10%
    const maxPrice = basePrice + (basePrice * 0.20); // +20%

    return {
      basePrice,
      minPrice,
      maxPrice,
      rftRate,
      accessoriesCost
    };
  };

  const { basePrice, minPrice, maxPrice, rftRate, accessoriesCost } = computePrices();

  // Reset calculator
  const handleRecalculate = () => {
    setLength(0);
    setWardrobeType(null);
    setSelectedFinish(null);
    setSelectedMaterial(null);
    setSelectedAccessories([]);
    setProfile({ name: "", email: "", phone: "", city: "" });
    setGeneratedOtp("");
    setEnteredOtp("");
    setOtpTimer(60);
    setProfileErrors({});
    setLengthError("");
    setIsQuoteModalOpen(false);
    setQuoteStep("FORM");
    setStep("LENGTH");
    toast.success("Wardrobe calculator cleared.");
  };

  // Navigation handlers
  const handleLengthNext = () => {
    if (isNaN(length) || length < 4 || length > 25) {
      setLengthError("Wardrobe length must be between 4 and 25 feet.");
      toast.error("Please enter a valid length.");
      return;
    }
    setLengthError("");
    setStep("TYPE");
  };

  const handleTypeSelect = (type: WardrobeType) => {
    setWardrobeType(type);
    setStep("FINISH");
  };

  const handleFinishSelect = (finish: FinishType) => {
    setSelectedFinish(finish);
    setStep("CORE_MATERIAL");
  };

  const handleMaterialSelect = (material: CoreMaterial) => {
    setSelectedMaterial(material);
    setStep("ACCESSORIES");
  };

  const handleAccessoriesNext = () => {
    setStep("ESTIMATE");
  };

  // Form submission / lead verification
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
      wardrobeDetails: {
        type: wardrobeType,
        length: length,
        finish: selectedFinish,
        material: selectedMaterial,
        accessories: availableAccessories.filter(a => selectedAccessories.includes(a.id)).map(a => a.name)
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
        throw new Error("Server response failed");
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

  const formatCurrency = (val: number): string => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  const getStepProgressPercentage = () => {
    switch (step) {
      case "LENGTH": return 16.6;
      case "TYPE": return 33.3;
      case "FINISH": return 50;
      case "CORE_MATERIAL": return 66.6;
      case "ACCESSORIES": return 83.3;
      case "ESTIMATE": return 100;
      default: return 0;
    }
  };

  const toggleAccessory = (id: string) => {
    if (selectedAccessories.includes(id)) {
      setSelectedAccessories(selectedAccessories.filter((acc) => acc !== id));
    } else {
      setSelectedAccessories([...selectedAccessories, id]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between font-sans">
      <Header />

      <main className="flex-grow pb-16 pt-24">
        <div className="max-w-5xl mx-auto px-6 mt-8">

          {/* Progress Tracker */}
          <div className="mb-12 max-w-3xl mx-auto">
            <div className="flex justify-between items-center relative">
              <div className="absolute left-0 right-0 top-4 h-[2px] bg-slate-200 -z-10" />
              <div
                className="absolute left-0 top-4 h-[2px] bg-amber-600 transition-all duration-500 -z-10"
                style={{ width: `${getStepProgressPercentage() - 8.3}%` }}
              />

              {[
                { id: "LENGTH", num: 1, label: "Length" },
                { id: "TYPE", num: 2, label: "Type" },
                { id: "FINISH", num: 3, label: "Finish" },
                { id: "CORE_MATERIAL", num: 4, label: "Core" },
                { id: "ACCESSORIES", num: 5, label: "Add-ons" },
                { id: "ESTIMATE", num: 6, label: "Estimate" }
              ].map((s) => {
                const isCurrent = step === s.id;
                const isCompleted =
                  (s.id === "LENGTH" && step !== "LENGTH") ||
                  (s.id === "TYPE" && step !== "LENGTH" && step !== "TYPE") ||
                  (s.id === "FINISH" && step !== "LENGTH" && step !== "TYPE" && step !== "FINISH") ||
                  (s.id === "CORE_MATERIAL" && step !== "LENGTH" && step !== "TYPE" && step !== "FINISH" && step !== "CORE_MATERIAL") ||
                  (s.id === "ACCESSORIES" && step === "ESTIMATE");

                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      if (s.id === "LENGTH") setStep("LENGTH");
                      else if (s.id === "TYPE" && length > 0) setStep("TYPE");
                      else if (s.id === "FINISH" && length > 0 && wardrobeType) setStep("FINISH");
                      else if (s.id === "CORE_MATERIAL" && length > 0 && wardrobeType && selectedFinish) setStep("CORE_MATERIAL");
                      else if (s.id === "ACCESSORIES" && length > 0 && wardrobeType && selectedFinish && selectedMaterial) setStep("ACCESSORIES");
                    }}
                    disabled={s.id === "ESTIMATE"}
                    className="flex flex-col items-center gap-2 group focus:outline-none"
                  >
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 text-sm font-semibold transition-all duration-300 ${isCurrent
                      ? "border-amber-600 bg-amber-600 text-white scale-110 shadow-md shadow-amber-600/20"
                      : isCompleted
                        ? "border-amber-600 bg-amber-50 text-amber-600"
                        : "border-slate-300 bg-white text-slate-400 group-hover:border-slate-400"
                      }`}>
                      {isCompleted ? <Check className="w-4 h-4 stroke-[3px]" /> : s.num}
                    </div>
                    <span className={`text-xs tracking-wider uppercase font-medium transition-colors duration-200 ${isCurrent ? "text-amber-700" : "text-slate-500 font-light"}`}>
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
                if (step === "LENGTH") navigate("/wardrobe-price-calculator");
                else if (step === "TYPE") setStep("LENGTH");
                else if (step === "FINISH") setStep("TYPE");
                else if (step === "CORE_MATERIAL") setStep("FINISH");
                else if (step === "ACCESSORIES") setStep("CORE_MATERIAL");
              }}
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-sm font-light mb-8 transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>Go Back</span>
            </button>
          )}

          {/* Main Card container */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden transition-all duration-300">

            {/* Step 1: Length */}
            {step === "LENGTH" && (
              <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                    Step 1: Enter wardrobe length
                  </h2>
                  <p className="text-slate-500 font-light text-sm">
                    Specify the horizontal width/length of your wardrobe wall layout in feet. Values must range from 4 to 25 ft.
                  </p>
                </div>

                <div className="max-w-md space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="length" className="text-sm font-medium text-slate-700">
                      Wardrobe Length (ft) <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="length"
                      type="number"
                      min="4"
                      max="25"
                      value={length || ""}
                      onChange={(e) => {
                        setLength(parseFloat(e.target.value) || 0);
                        setLengthError("");
                      }}
                      placeholder="e.g. 8"
                      className={`p-4 rounded-xl border ${lengthError ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:ring-amber-500"}`}
                    />
                    {lengthError && <p className="text-xs text-red-500 font-light">{lengthError}</p>}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button
                    onClick={handleLengthNext}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-5 rounded-xl shadow-md transition-all duration-300 flex items-center gap-1.5"
                  >
                    <span>Proceed to Type</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Wardrobe Type */}
            {step === "TYPE" && (
              <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                    Step 2: Choose door configuration type
                  </h2>
                  <p className="text-slate-500 font-light text-sm">
                    Swing doors offer classic accessibility, while sliding doors optimize tight floor space.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                  {[
                    { id: "Swing Door" as WardrobeType, name: "Swing Door Wardrobe", desc: "Hinged traditional doors. Best visual depth access." },
                    { id: "Sliding Door" as WardrobeType, name: "Sliding Door Wardrobe", desc: "Horizontal sliding rails. Saves premium floor space." }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => handleTypeSelect(type.id)}
                      className={`group p-8 text-left border-2 rounded-2xl transition-all duration-350 hover:shadow-lg flex flex-col space-y-3 cursor-pointer ${wardrobeType === type.id
                        ? "border-amber-600 bg-amber-50/10"
                        : "border-slate-200 hover:border-amber-400 hover:bg-slate-50/20"
                      }`}
                    >
                      <Layers className={`w-8 h-8 ${wardrobeType === type.id ? "text-amber-600 animate-pulse" : "text-slate-400 group-hover:text-amber-500"}`} />
                      <h3 className="text-lg font-medium text-slate-800">{type.name}</h3>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">{type.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Finish */}
            {step === "FINISH" && (
              <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                    Step 3: Pick shutter finish
                  </h2>
                  <p className="text-slate-500 font-light text-sm">
                    Shutter finish heavily impacts overall cost index as well as wardrobe aesthetics.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-2">
                  {[
                    { id: "Laminate" as FinishType, desc: "Budget-friendly, highly scratch-resistant and functional." },
                    { id: "Acrylic" as FinishType, desc: "High gloss mirror sheen, premium reflective visual texture." },
                    { id: "PU Paint" as FinishType, desc: "Sleek, seamless hand-painted matte or gloss luxury lacquer finish." },
                    { id: "Glass/Tinted Profile" as FinishType, desc: "Tinted translucent profile safety glass with metal framing." }
                  ].map((finish) => (
                    <button
                      key={finish.id}
                      onClick={() => handleFinishSelect(finish.id)}
                      className={`group p-6 text-left border-2 rounded-2xl transition-all duration-300 hover:shadow-md flex flex-col space-y-3 cursor-pointer ${selectedFinish === finish.id
                        ? "border-amber-600 bg-amber-50/10"
                        : "border-slate-200 hover:border-amber-400 hover:bg-slate-50/20"
                      }`}
                    >
                      <Gem className={`w-6 h-6 ${selectedFinish === finish.id ? "text-amber-600" : "text-slate-400 group-hover:text-amber-500"}`} />
                      <h3 className="text-base font-semibold text-slate-800">{finish.id}</h3>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">{finish.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Core Material */}
            {step === "CORE_MATERIAL" && (
              <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                    Step 4: Pick core substrate material
                  </h2>
                  <p className="text-slate-500 font-light text-sm">
                    The core wood material dictates durability, load threshold and moisture-resistance indexes.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                  {[
                    { id: "MDF" as CoreMaterial, desc: "Medium Density Fiberboard. Fine grain surface, best for PU paint overlays." },
                    { id: "HDHMR" as CoreMaterial, desc: "High Density High Moisture Resistant wood fiber core. Highly durable." },
                    { id: "Commercial Plywood" as CoreMaterial, desc: "Cross-laminated wood veneers. Extremely robust mechanical load hold." }
                  ].map((material) => (
                    <button
                      key={material.id}
                      onClick={() => handleMaterialSelect(material.id)}
                      className={`group p-6 text-left border-2 rounded-2xl transition-all duration-300 hover:shadow-md flex flex-col space-y-3 cursor-pointer ${selectedMaterial === material.id
                        ? "border-amber-600 bg-amber-50/10"
                        : "border-slate-200 hover:border-amber-400 hover:bg-slate-50/20"
                      }`}
                    >
                      <Hammer className={`w-6 h-6 ${selectedMaterial === material.id ? "text-amber-600" : "text-slate-400 group-hover:text-amber-500"}`} />
                      <h3 className="text-base font-semibold text-slate-800">{material.id}</h3>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">{material.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Accessories */}
            {step === "ACCESSORIES" && (
              <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                    Step 5: Pick organizer accessories
                  </h2>
                  <p className="text-slate-500 font-light text-sm">
                    Select wardrobe add-ons and space layout accessories to include in your estimate.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                  {availableAccessories.map((acc) => {
                    const isSelected = selectedAccessories.includes(acc.id);
                    return (
                      <button
                        key={acc.id}
                        onClick={() => toggleAccessory(acc.id)}
                        className={`group flex items-center justify-between p-5 border-2 rounded-2xl text-left transition-all duration-200 hover:shadow-sm cursor-pointer ${isSelected
                          ? "border-amber-600 bg-amber-50/10"
                          : "border-slate-200 hover:border-amber-400 hover:bg-slate-50/55"
                        }`}
                      >
                        <div className="space-y-1">
                          <span className={`text-sm font-medium block ${isSelected ? "text-amber-800" : "text-slate-700"}`}>
                            {acc.name}
                          </span>
                          <span className="text-xs text-slate-400 font-light block">+ {formatCurrency(acc.cost)}</span>
                        </div>
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
                    onClick={handleAccessoriesNext}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-5 rounded-xl shadow-md transition-all duration-300 flex items-center gap-1.5"
                  >
                    <span>Proceed to Estimate</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 6: Estimate Results */}
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
                        <span className="text-slate-400 font-light block">Wardrobe Width / Length:</span>
                        <span className="font-semibold text-slate-800 text-base">{length} ft</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-slate-400 font-light block">Door Config Type:</span>
                        <span className="font-semibold text-slate-800 text-base">{wardrobeType}</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-slate-400 font-light block">Shutter Finish:</span>
                        <span className="font-semibold text-slate-800 text-base">{selectedFinish}</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-slate-400 font-light block">Core Wood substrate:</span>
                        <span className="font-semibold text-slate-800 text-base">{selectedMaterial}</span>
                      </div>
                    </div>

                    {/* Math breakdown */}
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                      <div className="text-xs font-light text-slate-500 space-y-1.5">
                        <span className="font-medium text-slate-700 block mb-1">Pricing Formula detail:</span>
                        <div>Core substrate + Finish rate: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">INR {rftRate} / Rft</code></div>
                        <div>Linear width cost: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">{length} ft × {formatCurrency(rftRate)} = {formatCurrency(length * rftRate)}</code></div>
                        <div>Smart Accessories cost: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">INR {accessoriesCost} ({selectedAccessories.length} items selected)</code></div>
                        <div>Total Calculation: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">({length} ft × {rftRate}) + {accessoriesCost} = {formatCurrency(basePrice)}</code></div>
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
                    Please provide your contact details to register your modular wardrobe estimation and schedule a free design session.
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
                    Hello <strong className="text-slate-800 font-medium">{profile.name}</strong>, your modular wardrobe estimate has been successfully registered. A design specialist will contact you shortly at <span className="text-slate-800 font-medium">{profile.email}</span> / <span className="text-slate-800 font-medium">+91 {profile.phone}</span>.
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

      <Footer />
    </div>
  );
};

export default WardrobeCalculatorWizard;
