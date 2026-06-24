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
  ShieldCheck,
  Check,
  ChevronRight,
  Sparkles,
  Info,
  X
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import kitchen background asset
import kitchenBg from "@/assets/Modular-Kitchen/1.jpg";

// Constants for math pricing calculations
const RATE_ESSENTIAL = 12000;
const RATE_PREMIUM = 18000;
const RATE_LUXURY = 25000;

type CalculatorStep = "LANDING" | "LAYOUT" | "PACKAGE" | "DIMENSIONS" | "ESTIMATE";
type KitchenShape = "L-Shape" | "Straight" | "U-Shape" | "Parallel";
type MaterialPackage = "Essential" | "Premium" | "Luxury";

interface Dimensions {
  wallA: number;
  wallB: number;
  wallC: number;
}

interface LeadProfile {
  name: string;
  email: string;
  phone: string;
  city: string;
}

const KitchenCalculator: React.FC = () => {
  const navigate = useNavigate();

  // Wizard state management
  const [step, setStep] = useState<CalculatorStep>("LANDING");
  const [selectedShape, setSelectedShape] = useState<KitchenShape | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<MaterialPackage | null>(null);

  // Dimensions
  const [dimensions, setDimensions] = useState<Dimensions>({
    wallA: 0,
    wallB: 0,
    wallC: 0
  });

  // Lead capture dialog/form state
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

  // Form field errors
  const [profileErrors, setProfileErrors] = useState<Partial<LeadProfile>>({});
  const [dimensionErrors, setDimensionErrors] = useState<Partial<Record<keyof Dimensions, string>>>({});

  // Countdown timer logic for OTP
  useEffect(() => {
    if (isQuoteModalOpen && quoteStep === "OTP" && otpTimer > 0) {
      timerRef.current = setTimeout(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    } else if (otpTimer === 0 && timerRef.current) {
      clearTimeout(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isQuoteModalOpen, quoteStep, otpTimer]);

  // MATH CALCULATIONS
  const calculateTotalRft = (): number => {
    if (!selectedShape) return 0;
    const { wallA, wallB, wallC } = dimensions;

    switch (selectedShape) {
      case "L-Shape":
        // ((A + B) - 2)
        return Math.max(0, (wallA + wallB) - 2);
      case "Straight":
        // A
        return wallA;
      case "U-Shape":
        // ((A + B + C) - 4)
        return Math.max(0, (wallA + wallB + wallC) - 4);
      case "Parallel":
        // (A + B)
        return wallA + wallB;
      default:
        return 0;
    }
  };

  const getRatePerRft = (): number => {
    switch (selectedPackage) {
      case "Essential":
        return RATE_ESSENTIAL;
      case "Premium":
        return RATE_PREMIUM;
      case "Luxury":
        return RATE_LUXURY;
      default:
        return 0;
    }
  };

  const computePrices = () => {
    const totalRft = calculateTotalRft();
    const rate = getRatePerRft();
    const basePrice = totalRft * rate;
    const minPrice = basePrice - (basePrice * 0.10); // -10%
    const maxPrice = basePrice + (basePrice * 0.20); // +20%

    return {
      totalRft,
      basePrice,
      minPrice,
      maxPrice
    };
  };

  const { totalRft, basePrice, minPrice, maxPrice } = computePrices();

  // Reset calculator
  const handleRecalculate = () => {
    setSelectedShape(null);
    setDimensions({ wallA: 0, wallB: 0, wallC: 0 });
    setSelectedPackage(null);
    setProfile({ name: "", email: "", phone: "", city: "" });
    setGeneratedOtp("");
    setEnteredOtp("");
    setOtpTimer(60);
    setProfileErrors({});
    setDimensionErrors({});
    setIsQuoteModalOpen(false);
    setQuoteStep("FORM");
    setStep("LANDING");
    toast.success("Calculator values cleared successfully.");
  };

  // Nav handlers
  const handleShapeSelect = (shape: KitchenShape) => {
    setSelectedShape(shape);
    // Auto-advance to Step 2: PACKAGE
    setStep("PACKAGE");
  };

  const handlePackageSelect = (pkg: MaterialPackage) => {
    setSelectedPackage(pkg);
    // Auto-advance to Step 3: DIMENSIONS
    setStep("DIMENSIONS");
  };

  const handleDimensionsNext = () => {
    if (!selectedShape) return;

    const errors: Partial<Record<keyof Dimensions, string>> = {};
    const checkValue = (val: number, label: string): string | null => {
      if (isNaN(val) || val <= 0) {
        return `${label} must be a positive number.`;
      }
      if (val < 1 || val > 30) {
        return `${label} must be between 1 and 30 feet.`;
      }
      return null;
    };

    if (selectedShape === "Straight") {
      const err = checkValue(dimensions.wallA, "Length A");
      if (err) errors.wallA = err;
    } else if (selectedShape === "L-Shape" || selectedShape === "Parallel") {
      const errA = checkValue(dimensions.wallA, "Side A Length");
      const errB = checkValue(dimensions.wallB, "Side B Length");
      if (errA) errors.wallA = errA;
      if (errB) errors.wallB = errB;
    } else if (selectedShape === "U-Shape") {
      const errA = checkValue(dimensions.wallA, "Side A Length");
      const errB = checkValue(dimensions.wallB, "Side B Length");
      const errC = checkValue(dimensions.wallC, "Side C Length");
      if (errA) errors.wallA = errA;
      if (errB) errors.wallB = errB;
      if (errC) errors.wallC = errC;
    }

    if (Object.keys(errors).length > 0) {
      setDimensionErrors(errors);
      toast.error("Please enter valid dimensions before proceeding.");
      return;
    }

    setDimensionErrors({});
    // Go to Step 4: ESTIMATE
    setStep("ESTIMATE");
  };

  // Form validation
  const validateProfileForm = (): boolean => {
    const errors: Partial<LeadProfile> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!profile.name.trim()) {
      errors.name = "Full Name is required.";
    }

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

    if (!profile.city) {
      errors.city = "Please select your city.";
    }

    setProfileErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateProfileForm()) {
      toast.error("Please fill in all details correctly.");
      return;
    }

    // Trigger mock OTP dispatch
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
      kitchenDetails: {
        shape: selectedShape,
        dimensions: {
          wallA: dimensions.wallA,
          wallB: dimensions.wallB,
          wallC: dimensions.wallC
        },
        packageType: selectedPackage
      },
      pricingEstimate: {
        basePrice: basePrice,
        minPrice: minPrice,
        maxPrice: maxPrice
      },
      isVerified: true,
      createdAt: new Date().toISOString()
    };

    try {
      // First try backend API
      const response = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const resData = await response.json();
      if (response.ok && resData.success) {
        toast.success("Details successfully verified and saved!");
        setQuoteStep("SUCCESS");
      } else {
        throw new Error(resData.error || "Server response failed");
      }
    } catch (err) {
      console.warn("Backend unavailable. Saving to local simulation store.", err);

      // Local backup simulation log
      const savedLeads = JSON.parse(localStorage.getItem("studia_saga_leads") || "[]");
      savedLeads.push(payload);
      localStorage.setItem("studia_saga_leads", JSON.stringify(savedLeads));

      toast.success("Details successfully verified and saved locally!");
      setQuoteStep("SUCCESS");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  // Currency helper
  const formatCurrency = (val: number): string => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  // Render step headers
  const getStepProgressPercentage = () => {
    switch (step) {
      case "LAYOUT": return 25;
      case "PACKAGE": return 50;
      case "DIMENSIONS": return 75;
      case "ESTIMATE": return 100;
      default: return 0;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between font-sans">
      <Header />

      {/* Main Container */}
      <main className="flex-grow pt-24 pb-16">

        {/* ================= SECTION 1: HERO / LANDING VIEW ================= */}
        {step === "LANDING" && (
          <div className="relative min-h-[85vh] flex items-center justify-start px-6 md:px-16 overflow-hidden">
            {/* Backdrop Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
              style={{ backgroundImage: `url(${kitchenBg})` }}
            />
            {/* Premium dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/70 to-transparent" />

            <div className="relative z-10 max-w-3xl space-y-6 text-white animate-fade-in-up">
              <span className="inline-flex items-center gap-1.5 text-amber-500 font-medium tracking-widest text-xs uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/25">
                <Sparkles className="w-3.5 h-3.5" />
                Premium Pricing Estimator
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight tracking-tight text-slate-50">
                Kitchen Price Calculator
              </h1>
              <p className="text-base md:text-lg text-slate-300 font-light max-w-xl leading-relaxed">
                Estimate your modular kitchen cost instantly. Get a customized price breakdown based on your layout, package preferences, and kitchen dimensions.
              </p>

              <div className="pt-4">
                <Button
                  onClick={() => setStep("LAYOUT")}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-6 text-base rounded-full shadow-lg hover:shadow-amber-950/30 transition-all duration-300 group flex items-center gap-2"
                >
                  <span>Get Free Estimate</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        )}







        {/* ================= ACTIVE WIZARD WRAPPER ================= */}
        {step !== "LANDING" && (
          <div className="max-w-5xl mx-auto px-6 mt-8">

            {/* Premium progress tracker */}
            <div className="mb-12 max-w-2xl mx-auto">
              <div className="flex justify-between items-center relative">

                {/* Background Connecting Line */}
                <div className="absolute left-0 right-0 top-4 h-[2px] bg-slate-200 -z-10" />

                {/* Active Progress Filler Line */}
                <div
                  className="absolute left-0 top-4 h-[2px] bg-amber-600 transition-all duration-500 -z-10"
                  style={{ width: `${getStepProgressPercentage() - 12.5}%` }}
                />

                {[
                  { id: "LAYOUT", num: 1, label: "Layout" },
                  { id: "PACKAGE", num: 2, label: "Package" },
                  { id: "DIMENSIONS", num: 3, label: "Dimensions" },
                  { id: "ESTIMATE", num: 4, label: "Estimate" }
                ].map((s) => {
                  const isCurrent = step === s.id;
                  const isCompleted =
                    (s.id === "LAYOUT" && (step === "PACKAGE" || step === "DIMENSIONS" || step === "ESTIMATE")) ||
                    (s.id === "PACKAGE" && (step === "DIMENSIONS" || step === "ESTIMATE")) ||
                    (s.id === "DIMENSIONS" && step === "ESTIMATE");

                  return (
                    <button
                      key={s.id}
                      onClick={() => {
                        if (s.id === "LAYOUT") setStep("LAYOUT");
                        else if (s.id === "PACKAGE" && selectedShape) setStep("PACKAGE");
                        else if (s.id === "DIMENSIONS" && selectedShape && selectedPackage) setStep("DIMENSIONS");
                      }}
                      disabled={
                        (s.id === "PACKAGE" && !selectedShape) ||
                        (s.id === "DIMENSIONS" && (!selectedShape || !selectedPackage)) ||
                        (s.id === "ESTIMATE")
                      }
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
                      <span className={`text-xs tracking-wider uppercase font-medium transition-colors duration-200 ${isCurrent ? "text-amber-700" : "text-slate-500 font-light"
                        }`}>
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Back Arrow button */}
            {step !== "ESTIMATE" && (
              <button
                onClick={() => {
                  if (step === "LAYOUT") setStep("LANDING");
                  else if (step === "PACKAGE") setStep("LAYOUT");
                  else if (step === "DIMENSIONS") setStep("PACKAGE");
                }}
                className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-sm font-light mb-8 transition-colors duration-200 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <span>Go Back</span>
              </button>
            )}

            {/* CARD MAIN BODY CONTAINER */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden transition-all duration-300">

              {/* ================= STEP 1: LAYOUT SELECTION ================= */}
              {step === "LAYOUT" && (
                <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                      Step 1: Select Kitchen Layout
                    </h2>
                    <p className="text-slate-500 font-light text-sm">
                      Choose the configuration shape that best matches your kitchen structural design layout.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                    {[
                      {
                        id: "L-Shape" as KitchenShape,
                        name: "L-Shaped Kitchen",
                        desc: "Ideal for corner layouts, utilizes two adjacent walls.",
                        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
                      },
                      {
                        id: "Straight" as KitchenShape,
                        name: "Straight Kitchen",
                        desc: "Compact one-wall design layout, ideal for studio rooms.",
                        image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=600&q=80"
                      },
                      {
                        id: "U-Shape" as KitchenShape,
                        name: "U-Shaped Kitchen",
                        desc: "Surrounds you with countertops on three surrounding walls.",
                        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
                      },
                      {
                        id: "Parallel" as KitchenShape,
                        name: "Parallel Kitchen",
                        desc: "Double galley setup with counter surfaces facing each other.",
                        image: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=600&q=80"
                      }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleShapeSelect(item.id)}
                        className={`group flex flex-col text-left border-2 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer ${selectedShape === item.id
                          ? "border-amber-600 bg-amber-50/10"
                          : "border-slate-200 hover:border-amber-400 hover:bg-slate-50/20"
                          }`}
                      >
                        {/* Layout Image */}
                        <div className="h-48 w-full overflow-hidden relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />

                          {/* Selection circle */}
                          <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedShape === item.id
                            ? "bg-amber-600 border-amber-600 text-white"
                            : "bg-white/80 border-slate-300 text-transparent"
                            }`}>
                            <Check className="w-3.5 h-3.5 stroke-[3px]" />
                          </div>
                        </div>

                        <div className="p-6 space-y-2">
                          <h3 className="text-lg font-medium text-slate-900 group-hover:text-amber-600 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-slate-500 font-light text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ================= STEP 2: PACKAGE OPTIONS ================= */}
              {step === "PACKAGE" && (
                <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                      Step 2: Select Package Options
                    </h2>
                    <p className="text-slate-500 font-light text-sm">
                      Choose the quality tier for wood substrates, hardware details, and shutter finishes.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    {[
                      {
                        name: "Essential" as MaterialPackage,
                        rate: RATE_ESSENTIAL,
                        sub: "Budget-Friendly Core",
                        specs: [
                          "Commercial plywood base core",
                          "Glossy/matte laminate finish",
                          "Sleek soft-close hinges & channels",
                          "Standard functional modules"
                        ]
                      },
                      {
                        name: "Premium" as MaterialPackage,
                        rate: RATE_PREMIUM,
                        sub: "Durability & Fine Touch",
                        specs: [
                          "High Moisture Resistance (HDHMR)",
                          "Scratch-proof acrylic/PU coating",
                          "Elite luxury hardware lines",
                          "Premium storage optimization"
                        ],
                        highlight: true
                      },
                      {
                        name: "Luxury" as MaterialPackage,
                        rate: RATE_LUXURY,
                        sub: "Opulent Studio Standard",
                        specs: [
                          "Elite tinted profile glass shutters",
                          "Imported soft-close hydraulic runners",
                          "Premium pull-out steel cargo accessories",
                          "Advanced corner solutions & lighting"
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
                            <span className="text-xs text-slate-400 font-sans block mt-1">per running foot</span>
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
                          <span className={`inline-flex w-full justify-center text-white text-xs font-medium py-3 rounded-xl transition-colors duration-300 ${selectedPackage === pkg.name ? "bg-amber-600" : "bg-slate-900 hover:bg-amber-600"
                            }`}>
                            Choose {pkg.name}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ================= STEP 3: DIMENSIONS INPUTS ================= */}
              {step === "DIMENSIONS" && (
                <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                      Step 3: Enter Dimensions ({selectedShape})
                    </h2>
                    <p className="text-slate-500 font-light text-sm">
                      Specify length measurements (in feet) for the selected layout. Values must range from 1 to 30 ft.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    {/* Side A / Length A input */}
                    {(selectedShape === "Straight" || selectedShape === "L-Shape" || selectedShape === "Parallel" || selectedShape === "U-Shape") && (
                      <div className="space-y-2">
                        <Label htmlFor="wallA" className="text-sm font-medium text-slate-700">
                          {selectedShape === "Straight" ? "Length A (ft)" : "Side A (ft)"} <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="wallA"
                          type="number"
                          min="1"
                          max="30"
                          value={dimensions.wallA || ""}
                          onChange={(e) => {
                            setDimensions(prev => ({ ...prev, wallA: parseFloat(e.target.value) || 0 }));
                            setDimensionErrors(prev => ({ ...prev, wallA: undefined }));
                          }}
                          placeholder="e.g. 10"
                          className={`p-4 rounded-xl border ${dimensionErrors.wallA ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:ring-amber-500"}`}
                        />
                        {dimensionErrors.wallA && (
                          <p className="text-xs text-red-500 font-light">{dimensionErrors.wallA}</p>
                        )}
                      </div>
                    )}

                    {/* Side B input */}
                    {(selectedShape === "L-Shape" || selectedShape === "Parallel" || selectedShape === "U-Shape") && (
                      <div className="space-y-2">
                        <Label htmlFor="wallB" className="text-sm font-medium text-slate-700">
                          Side B (ft) <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="wallB"
                          type="number"
                          min="1"
                          max="30"
                          value={dimensions.wallB || ""}
                          onChange={(e) => {
                            setDimensions(prev => ({ ...prev, wallB: parseFloat(e.target.value) || 0 }));
                            setDimensionErrors(prev => ({ ...prev, wallB: undefined }));
                          }}
                          placeholder="e.g. 8"
                          className={`p-4 rounded-xl border ${dimensionErrors.wallB ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:ring-amber-500"}`}
                        />
                        {dimensionErrors.wallB && (
                          <p className="text-xs text-red-500 font-light">{dimensionErrors.wallB}</p>
                        )}
                      </div>
                    )}

                    {/* Side C input */}
                    {selectedShape === "U-Shape" && (
                      <div className="space-y-2">
                        <Label htmlFor="wallC" className="text-sm font-medium text-slate-700">
                          Side C (ft) <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="wallC"
                          type="number"
                          min="1"
                          max="30"
                          value={dimensions.wallC || ""}
                          onChange={(e) => {
                            setDimensions(prev => ({ ...prev, wallC: parseFloat(e.target.value) || 0 }));
                            setDimensionErrors(prev => ({ ...prev, wallC: undefined }));
                          }}
                          placeholder="e.g. 6"
                          className={`p-4 rounded-xl border ${dimensionErrors.wallC ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:ring-amber-500"}`}
                        />
                        {dimensionErrors.wallC && (
                          <p className="text-xs text-red-500 font-light">{dimensionErrors.wallC}</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Corner adjustment explanation card */}
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-slate-800">Deduction Buffer Rule</h4>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">
                        {selectedShape === "L-Shape" && "An L-Shape kitchen contains 1 corner layout overlap. A standard 2 ft deduction is automatically subtracted: ((A + B) - 2) × Rate."}
                        {selectedShape === "Straight" && "No corner deductions are needed. A straight layout is calculated directly as A × Rate."}
                        {selectedShape === "U-Shape" && "A U-Shape kitchen contains 2 corner overlaps. A standard 4 ft deduction (2 ft per corner) is applied: ((A + B + C) - 4) × Rate."}
                        {selectedShape === "Parallel" && "Galley/Parallel kitchens run independently. No corner deduction is applied: (A + B) × Rate."}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button
                      onClick={handleDimensionsNext}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-5 rounded-xl shadow-md transition-all duration-300 flex items-center gap-1.5"
                    >
                      <span>Calculate Estimated Price</span>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* ================= STEP 4: ESTIMATED PRICE RESULT CARD ================= */}
              {step === "ESTIMATE" && (
                <div className="p-8 md:p-12 space-y-8 animate-fade-in bg-white">
                  <div className="text-center space-y-2">
                    <span className="text-xs uppercase font-bold tracking-widest text-amber-600">Calculated Budget Estimate</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 font-light">
                      Estimated Cost Breakdown
                    </h2>
                  </div>

                  {/* Pricing Result Card */}
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
                          <span className="text-slate-400 font-light block">Selected Layout:</span>
                          <span className="font-semibold text-slate-800 text-base">{selectedShape} Kitchen</span>
                        </div>
                        <div className="space-y-1">
                          <span className="text-slate-400 font-light block">Selected Package:</span>
                          <span className="font-semibold text-slate-800 text-base">{selectedPackage}</span>
                        </div>
                        <div className="space-y-1">
                          <span className="text-slate-400 font-light block">Package Rate:</span>
                          <span className="font-semibold text-slate-800 text-base">{formatCurrency(getRatePerRft())} / Rft</span>
                        </div>
                        <div className="space-y-1">
                          <span className="text-slate-400 font-light block">Running Feet:</span>
                          <span className="font-semibold text-slate-800 text-base">{totalRft} ft</span>
                        </div>
                      </div>

                      {/* Display Formula math details */}
                      <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                        <div className="text-xs font-light text-slate-500 space-y-1.5">
                          <span className="font-medium text-slate-700 block mb-1">Running Feet Calculation:</span>
                          {selectedShape === "L-Shape" && (
                            <>
                              <div>Formula: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">((Side A + Side B) - 2)</code></div>
                              <div>Calculation: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">(({dimensions.wallA} + {dimensions.wallB}) - 2) = {totalRft} Running Feet</code></div>
                            </>
                          )}
                          {selectedShape === "Straight" && (
                            <>
                              <div>Formula: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">Length A</code></div>
                              <div>Calculation: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">{dimensions.wallA} = {totalRft} Running Feet</code></div>
                            </>
                          )}
                          {selectedShape === "U-Shape" && (
                            <>
                              <div>Formula: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">((Side A + Side B + Side C) - 4)</code></div>
                              <div>Calculation: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">(({dimensions.wallA} + {dimensions.wallB} + {dimensions.wallC}) - 4) = {totalRft} Running Feet</code></div>
                            </>
                          )}
                          {selectedShape === "Parallel" && (
                            <>
                              <div>Formula: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">(Side A + Side B)</code></div>
                              <div>Calculation: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">({dimensions.wallA} + {dimensions.wallB}) = {totalRft} Running Feet</code></div>
                            </>
                          )}
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
        )}
      </main>

      {/* ================= DETAILED QUOTE MODAL OVERLAY ================= */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden relative animate-scale-in">

            {/* Close Button */}
            <button
              onClick={() => {
                setIsQuoteModalOpen(false);
                setQuoteStep("FORM");
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>

            {/* FORM STEP */}
            {quoteStep === "FORM" && (
              <div className="p-8 space-y-6">
                <div className="space-y-2 pr-6">
                  <div className="flex items-center gap-1.5 text-amber-600">
                    <Lock className="w-4 h-4" />
                    <span className="text-xs uppercase font-bold tracking-wider">Unlock Details</span>
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900 font-light">
                    Request Detailed Quote
                  </h3>
                  <p className="text-slate-500 font-light text-xs">
                    Please provide your contact details to register your custom modular kitchen estimation and schedule a free design session.
                  </p>
                </div>

                <form onSubmit={handleProfileSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs font-semibold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
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
                    {profileErrors.name && (
                      <p className="text-[10px] text-red-500 font-light">{profileErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-semibold text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
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
                    {profileErrors.email && (
                      <p className="text-[10px] text-red-500 font-light">{profileErrors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-xs font-semibold text-slate-700">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-light">
                        +91
                      </div>
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
                    {profileErrors.phone && (
                      <p className="text-[10px] text-red-500 font-light">{profileErrors.phone}</p>
                    )}
                  </div>

                  {/* City */}
                  <div className="space-y-1.5">
                    <Label htmlFor="city" className="text-xs font-semibold text-slate-700">
                      Select City <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <select
                        id="city"
                        value={profile.city}
                        onChange={(e) => {
                          setProfile(prev => ({ ...prev, city: e.target.value }));
                          setProfileErrors(prev => ({ ...prev, city: undefined }));
                        }}
                        className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm appearance-none outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 ${profileErrors.city ? "border-red-500" : "border-slate-200"
                          }`}
                      >
                        <option value="">Choose your city</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Pune">Pune</option>
                        <option value="Hyderabad">Hyderabad</option>
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-500 w-0 h-0" />
                    </div>
                    {profileErrors.city && (
                      <p className="text-[10px] text-red-500 font-light">{profileErrors.city}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-1.5"
                    >
                      <span>Send Verification OTP</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* OTP STEP */}
            {quoteStep === "OTP" && (
              <div className="p-8 space-y-6">
                <div className="space-y-2 text-center max-w-sm mx-auto">
                  <div className="mx-auto w-12 h-12 bg-amber-55 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-2">
                    <Clock className="w-6 h-6 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-serif text-slate-900 font-light">
                    Enter Verification Code
                  </h3>
                  <p className="text-slate-500 font-light text-xs">
                    Enter the code we dispatched to <span className="font-semibold text-slate-800">+91 {profile.phone}</span>.
                  </p>
                </div>

                <form onSubmit={handleVerifyOtp} className="space-y-4 max-w-xs mx-auto">
                  <Input
                    type="text"
                    maxLength={4}
                    value={enteredOtp}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      setEnteredOtp(val);
                    }}
                    placeholder="0 0 0 0"
                    className="text-center text-xl tracking-[1em] p-5 rounded-xl border border-slate-200 focus:border-amber-600 focus:ring-amber-500 font-mono font-bold"
                    autoFocus
                  />

                  <div className="flex items-center justify-between text-xs font-light text-slate-500">
                    <div>
                      {otpTimer > 0 ? (
                        <span>Resend in <strong className="text-slate-700">{otpTimer}s</strong></span>
                      ) : (
                        <button
                          type="button"
                          onClick={handleResendOtp}
                          className="text-amber-600 hover:text-amber-700 font-medium underline focus:outline-none"
                        >
                          Resend Code
                        </button>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setQuoteStep("FORM")}
                      className="text-slate-500 hover:text-slate-800"
                    >
                      Change Details
                    </button>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={enteredOtp.length !== 4 || isSubmittingLead}
                      className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white font-medium py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
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

            {/* SUCCESS STEP */}
            {quoteStep === "SUCCESS" && (
              <div className="p-8 text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-serif text-slate-900 font-light">
                    Quote Request Submitted!
                  </h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed max-w-sm mx-auto">
                    Hello <strong className="text-slate-800 font-medium">{profile.name}</strong>, your layout estimate has been successfully registered. A design specialist will contact you shortly at <span className="text-slate-800 font-medium">{profile.email}</span> / <span className="text-slate-800 font-medium">+91 {profile.phone}</span>.
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    onClick={() => {
                      setIsQuoteModalOpen(false);
                      setQuoteStep("FORM");
                    }}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 rounded-xl transition-all"
                  >
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

export default KitchenCalculator;
