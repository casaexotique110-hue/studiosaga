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
  Maximize2
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import kitchen background asset
import kitchenBg from "@/assets/Modular-Kitchen/1.jpg";

// Constants for math pricing calculations
const RATE_ESSENTIAL = 12000;
const RATE_PREMIUM = 18000;
const RATE_LUXURY = 25000;

type CalculatorStep = "LANDING" | "SHAPE" | "DIMENSIONS" | "PACKAGE" | "PROFILE" | "OTP" | "DASHBOARD";
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

  // Dimensions
  const [dimensions, setDimensions] = useState<Dimensions>({
    wallA: 0,
    wallB: 0,
    wallC: 0
  });

  // Package
  const [selectedPackage, setSelectedPackage] = useState<MaterialPackage | null>(null);

  // Lead Profile
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

  // Verification success checkmark
  const [verificationSuccess, setVerificationSuccess] = useState<boolean>(false);

  // Form field errors
  const [profileErrors, setProfileErrors] = useState<Partial<LeadProfile>>({});
  const [dimensionErrors, setDimensionErrors] = useState<Partial<Record<keyof Dimensions, string>>>({});

  // Countdown timer logic for OTP
  useEffect(() => {
    if (step === "OTP" && otpTimer > 0) {
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
  }, [step, otpTimer]);

  // MATH CALCULATIONS
  // 1. Running Foot (Rft) Output Deductions
  const calculateTotalRft = (): number => {
    if (!selectedShape) return 0;
    const { wallA, wallB, wallC } = dimensions;

    switch (selectedShape) {
      case "L-Shape":
        // L-Shape: Total_Rft = (Wall_A + Wall_B) - 2 (1 common corner 2 ft deduction)
        return (wallA + wallB) - 2;
      case "Straight":
        // Straight: Total_Rft = Wall_A
        return wallA;
      case "U-Shape":
        // U-Shape: Total_Rft = (Wall_A + Wall_B + Wall_C) - 4 (2 common corners 4 ft deduction)
        return (wallA + wallB + wallC) - 4;
      case "Parallel":
        // Parallel: Total_Rft = Wall_A + Wall_B
        return wallA + wallB;
      default:
        return 0;
    }
  };

  // 2. Package Price Rates Allocation & Pricing Range Buffering Logic
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
    const minPrice = basePrice - (basePrice * 0.10); // Downside buffer 10%
    const maxPrice = basePrice + (basePrice * 0.20); // Upside buffer 20%

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
    setVerificationSuccess(false);
    setProfileErrors({});
    setDimensionErrors({});
    setStep("LANDING");
    toast.success("Calculator values cleared successfully.");
  };

  // Navigation validation handlers
  const handleShapeSelect = (shape: KitchenShape) => {
    setSelectedShape(shape);
    // Initialize dimension inputs with zero or empty
    setDimensions({ wallA: 0, wallB: 0, wallC: 0 });
    setDimensionErrors({});
    // Switch state to open the dimension box inputs immediately
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
      const err = checkValue(dimensions.wallA, "Wall A Length");
      if (err) errors.wallA = err;
    } else if (selectedShape === "L-Shape" || selectedShape === "Parallel") {
      const errA = checkValue(dimensions.wallA, "Wall A Length");
      const errB = checkValue(dimensions.wallB, "Wall B Length");
      if (errA) errors.wallA = errA;
      if (errB) errors.wallB = errB;
    } else if (selectedShape === "U-Shape") {
      const errA = checkValue(dimensions.wallA, "Wall A Length");
      const errB = checkValue(dimensions.wallB, "Wall B Length");
      const errC = checkValue(dimensions.wallC, "Wall C Length");
      if (errA) errors.wallA = errA;
      if (errB) errors.wallB = errB;
      if (errC) errors.wallC = errC;
    }

    if (Object.keys(errors).length > 0) {
      setDimensionErrors(errors);
      toast.error("Please correct the dimensions before proceeding.");
      return;
    }

    setDimensionErrors({});
    setStep("PACKAGE");
  };

  const handlePackageSelect = (pkg: MaterialPackage) => {
    setSelectedPackage(pkg);
    setStep("PROFILE");
  };

  // Form Validations
  const validateProfileForm = (): boolean => {
    const errors: Partial<LeadProfile> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone starting with 6-9 and exactly 10 digits
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
      errors.phone = "Phone Number is required.";
    } else if (!phoneRegex.test(profile.phone)) {
      errors.phone = "Phone number must be a 10-digit number starting with 6-9.";
    }

    if (!profile.city) {
      errors.city = "Please select a city.";
    }

    setProfileErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Dispatch OTP trigger
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateProfileForm()) {
      toast.error("Please fill in all profile details correctly.");
      return;
    }

    // Trigger mock OTP dispatch
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otp);
    setOtpTimer(60);
    setEnteredOtp("");

    // Simulate SMS dispatch
    toast.success(`Verification Code sent to +91 ${profile.phone}!`, {
      description: `MOCK SMS OTP is: ${otp}`,
      duration: 10000,
    });

    setStep("OTP");
  };

  // Resend OTP
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

  // Verify OTP and trigger POST Lead Save API
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredOtp !== generatedOtp) {
      toast.error("Invalid OTP entered. Please try again.");
      return;
    }

    setIsSubmittingLead(true);
    setVerificationSuccess(true);

    // Payload block matching specifications
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

    console.log("Saving lead profile data simulation payload:", payload);

    try {
      // Simulate endpoint route POST /api/leads with 1.2s delay
      const response = await new Promise<{ status: number; data: typeof payload }>((resolve) => {
        setTimeout(() => {
          resolve({
            status: 200,
            data: payload
          });
        }, 1200);
      });

      if (response.status === 200) {
        // Store locally as backup simulation log
        const savedLeads = JSON.parse(localStorage.getItem("studia_saga_leads") || "[]");
        savedLeads.push(response.data);
        localStorage.setItem("studia_saga_leads", JSON.stringify(savedLeads));

        toast.success("Details successfully verified and saved!");
        // Transition to final pricing dashboard panel
        setStep("DASHBOARD");
      }
    } catch (err) {
      toast.error("Database connection simulation failed, showing local results dashboard.");
      setStep("DASHBOARD");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  // Currency formatting Helper
  const formatCurrency = (val: number): string => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between font-sans">
      <Header />

      {/* Main Container */}
      <main className="flex-grow pt-24 pb-16">

        {/* ================= STEP 2: HERO / LANDING VIEW ================= */}
        {step === "LANDING" && (
          <div className="relative min-h-[80vh] flex items-center justify-start px-6 md:px-16 overflow-hidden">
            {/* Backdrop Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
              style={{ backgroundImage: `url(${kitchenBg})` }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/60 to-transparent" />

            <div className="relative z-10 max-w-3xl space-y-6 text-white animate-fade-in-up">
              <span className="text-amber-500 font-medium tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Premium Pricing Estimator
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight tracking-tight text-slate-50">
                Calculate Your Dream Kitchen Estimate Instantly
              </h1>
              <p className="text-lg text-slate-300 font-light max-w-xl leading-relaxed">
                Get a highly customized price breakdown based on your exact layout and material preferences. Transparent budgeting tailored for luxury living.
              </p>

              <div className="pt-4">
                <Button
                  onClick={() => setStep("SHAPE")}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-6 text-base rounded-full shadow-lg hover:shadow-amber-900/20 transition-all duration-300 group flex items-center gap-2"
                >
                  <span>Get Free Estimate Price</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 3: INTERACTIVE WIZARD FORM ================= */}
        {step !== "LANDING" && (
          <div className="max-w-4xl mx-auto px-6 mt-8">

            {/* Progress indicators */}
            <div className="mb-10">
              <div className="flex justify-between items-center max-w-lg mx-auto">
                <button
                  onClick={() => setStep("SHAPE")}
                  className={`flex flex-col items-center gap-1.5 focus:outline-none transition-all duration-300 ${step === "SHAPE" ? "text-amber-600 scale-105 font-medium" : "text-slate-400 hover:text-slate-600"
                    }`}
                  disabled={step === "DASHBOARD"}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-xs transition-colors duration-300 ${step === "SHAPE" ? "border-amber-600 bg-amber-50 text-amber-600" : "border-slate-300"
                    }`}>1</span>
                  <span className="text-xs tracking-wider uppercase font-light">Shape</span>
                </button>
                <div className="flex-1 h-[2px] bg-slate-200 mx-2" />

                <button
                  onClick={() => {
                    if (selectedShape) setStep("DIMENSIONS");
                  }}
                  className={`flex flex-col items-center gap-1.5 focus:outline-none transition-all duration-300 ${step === "DIMENSIONS" ? "text-amber-600 scale-105 font-medium" : "text-slate-400 hover:text-slate-600"
                    }`}
                  disabled={!selectedShape || step === "DASHBOARD"}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-xs transition-colors duration-300 ${step === "DIMENSIONS" ? "border-amber-600 bg-amber-50 text-amber-600" : "border-slate-300"
                    }`}>2</span>
                  <span className="text-xs tracking-wider uppercase font-light">Dimensions</span>
                </button>
                <div className="flex-1 h-[2px] bg-slate-200 mx-2" />

                <button
                  onClick={() => {
                    if (selectedShape && dimensions.wallA > 0) setStep("PACKAGE");
                  }}
                  className={`flex flex-col items-center gap-1.5 focus:outline-none transition-all duration-300 ${step === "PACKAGE" ? "text-amber-600 scale-105 font-medium" : "text-slate-400 hover:text-slate-600"
                    }`}
                  disabled={!selectedShape || dimensions.wallA <= 0 || step === "DASHBOARD"}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-xs transition-colors duration-300 ${step === "PACKAGE" ? "border-amber-600 bg-amber-50 text-amber-600" : "border-slate-300"
                    }`}>3</span>
                  <span className="text-xs tracking-wider uppercase font-light">Package</span>
                </button>
                <div className="flex-1 h-[2px] bg-slate-200 mx-2" />

                <div
                  className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${step === "PROFILE" || step === "OTP" ? "text-amber-600 font-medium" : "text-slate-400"
                    }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-xs transition-colors duration-300 ${step === "PROFILE" || step === "OTP" ? "border-amber-600 bg-amber-50 text-amber-600" : "border-slate-300"
                    }`}>4</span>
                  <span className="text-xs tracking-wider uppercase font-light">Verify</span>
                </div>
              </div>
            </div>

            {/* Back Arrow button */}
            {step !== "DASHBOARD" && step !== "SHAPE" && (
              <button
                onClick={() => {
                  if (step === "DIMENSIONS") setStep("SHAPE");
                  else if (step === "PACKAGE") setStep("DIMENSIONS");
                  else if (step === "PROFILE") setStep("PACKAGE");
                  else if (step === "OTP") setStep("PROFILE");
                }}
                className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-sm font-light mb-6 transition-colors duration-200 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <span>Go Back</span>
              </button>
            )}

            {/* CARD MAIN BODY CONTAINER */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden transition-all duration-300">

              {/* VIEW A: SHAPE SELECTION */}
              {step === "SHAPE" && (
                <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                      Step 1: Choose Your Kitchen Layout Shape
                    </h2>
                    <p className="text-slate-500 font-light text-sm">
                      Select the configuration shape that best matches your kitchen structural design layout.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    {[
                      {
                        name: "L-Shape Kitchen" as KitchenShape,
                        desc: "Ideal for corner layouts, utilizes two adjacent walls.",
                        icon: (
                          <svg className="w-12 h-12 text-slate-400 group-hover:text-amber-600 transition-colors" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8" y="8" width="8" height="32" rx="1.5" fill="currentColor" opacity="0.3" />
                            <rect x="16" y="32" width="24" height="8" rx="1.5" fill="currentColor" opacity="0.3" />
                            <path d="M8 8H16V32H40V40H8V8Z" fill="currentColor" className="text-amber-600 group-hover:scale-105 origin-bottom-left transition-transform" />
                          </svg>
                        )
                      },
                      {
                        name: "Straight Kitchen" as KitchenShape,
                        desc: "Compact one-wall design layout, ideal for studio rooms.",
                        icon: (
                          <svg className="w-12 h-12 text-slate-400 group-hover:text-amber-600 transition-colors" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8" y="20" width="32" height="8" rx="1.5" fill="currentColor" opacity="0.3" />
                            <path d="M8 20H40V28H8V20Z" fill="currentColor" className="text-amber-600 group-hover:scale-105 origin-center transition-transform" />
                          </svg>
                        )
                      },
                      {
                        name: "U-Shape Kitchen" as KitchenShape,
                        desc: "Surrounds you with countertops on three surrounding walls.",
                        icon: (
                          <svg className="w-12 h-12 text-slate-400 group-hover:text-amber-600 transition-colors" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8" y="8" width="8" height="32" rx="1.5" fill="currentColor" opacity="0.3" />
                            <rect x="16" y="32" width="16" height="8" rx="1.5" fill="currentColor" opacity="0.3" />
                            <rect x="32" y="8" width="8" height="32" rx="1.5" fill="currentColor" opacity="0.3" />
                            <path d="M8 8H16V32H32V8H40V40H8V8Z" fill="currentColor" className="text-amber-600 group-hover:scale-105 origin-bottom transition-transform" />
                          </svg>
                        )
                      },
                      {
                        name: "Parallel Kitchen" as KitchenShape,
                        desc: "Double galley setup with counter surfaces facing each other.",
                        icon: (
                          <svg className="w-12 h-12 text-slate-400 group-hover:text-amber-600 transition-colors" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8" y="8" width="8" height="32" rx="1.5" fill="currentColor" opacity="0.3" />
                            <rect x="32" y="8" width="8" height="32" rx="1.5" fill="currentColor" opacity="0.3" />
                            <path d="M8 8H16V40H8V8ZM32 8H40V40H32V8Z" fill="currentColor" className="text-amber-600 group-hover:scale-105 origin-center transition-transform" />
                          </svg>
                        )
                      }
                    ].map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleShapeSelect(item.name)}
                        className={`group p-6 text-left border-2 rounded-2xl transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-md cursor-pointer ${selectedShape === item.name
                          ? "border-amber-600 bg-amber-50/20"
                          : "border-slate-200 hover:border-amber-400 hover:bg-slate-50/50"
                          }`}
                      >
                        <div className="p-3 bg-slate-100 rounded-xl w-fit transition-colors group-hover:bg-amber-100/50">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-slate-900 group-hover:text-amber-600 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-slate-500 font-light text-sm mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* VIEW B: RUNNING FOOT DIMENSIONS */}
              {step === "DIMENSIONS" && (
                <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                      Step 2: Enter Layout Dimensions for {selectedShape}
                    </h2>
                    <p className="text-slate-500 font-light text-sm">
                      Specify length measurements (in Running Feet) for the active layout. Values must range from 1 to 30 ft.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    {/* Render fields dynamically */}
                    {(selectedShape === "Straight" || selectedShape === "L-Shape" || selectedShape === "Parallel" || selectedShape === "U-Shape") && (
                      <div className="space-y-2">
                        <Label htmlFor="wallA" className="text-sm font-medium text-slate-700">
                          Wall A Length (ft) <span className="text-red-500">*</span>
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
                          placeholder="e.g. 12"
                          className={`p-4 rounded-xl border ${dimensionErrors.wallA ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:ring-amber-500"
                            }`}
                        />
                        {dimensionErrors.wallA && (
                          <p className="text-xs text-red-500 font-light">{dimensionErrors.wallA}</p>
                        )}
                      </div>
                    )}

                    {(selectedShape === "L-Shape" || selectedShape === "Parallel" || selectedShape === "U-Shape") && (
                      <div className="space-y-2">
                        <Label htmlFor="wallB" className="text-sm font-medium text-slate-700">
                          Wall B Length (ft) <span className="text-red-500">*</span>
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
                          placeholder="e.g. 10"
                          className={`p-4 rounded-xl border ${dimensionErrors.wallB ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:ring-amber-500"
                            }`}
                        />
                        {dimensionErrors.wallB && (
                          <p className="text-xs text-red-500 font-light">{dimensionErrors.wallB}</p>
                        )}
                      </div>
                    )}

                    {selectedShape === "U-Shape" && (
                      <div className="space-y-2">
                        <Label htmlFor="wallC" className="text-sm font-medium text-slate-700">
                          Wall C Length (ft) <span className="text-red-500">*</span>
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
                          placeholder="e.g. 8"
                          className={`p-4 rounded-xl border ${dimensionErrors.wallC ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:ring-amber-500"
                            }`}
                        />
                        {dimensionErrors.wallC && (
                          <p className="text-xs text-red-500 font-light">{dimensionErrors.wallC}</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Math Deduction Trace Info Box */}
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-slate-800">Corner Adjustment Logic</h4>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">
                        {selectedShape === "L-Shape" && "L-Shape includes 1 corner overlap. A standard 2 ft deduction will be applied automatically from the sum of Wall A + Wall B."}
                        {selectedShape === "Straight" && "Straight configurations require no corner deductions. Total running length matches Wall A."}
                        {selectedShape === "U-Shape" && "U-Shape includes 2 corner overlaps. A total 4 ft deduction (2 ft per corner) is applied from Wall A + Wall B + Wall C."}
                        {selectedShape === "Parallel" && "Parallel configurations feature independent counter walls. No corner deductions are applied."}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button
                      onClick={handleDimensionsNext}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-5 rounded-xl shadow-md transition-all duration-300 flex items-center gap-1.5"
                    >
                      <span>Next: Choose Finish Package</span>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* VIEW C: MATERIAL FINISH PACKAGE */}
              {step === "PACKAGE" && (
                <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                      Step 3: Select Material & Finish Package
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
                        className={`group p-6 text-left border-2 rounded-2xl transition-all duration-300 relative flex flex-col justify-between space-y-6 hover:shadow-md cursor-pointer ${pkg.highlight
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
                              {pkg.name} Bundle
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
                          <span className="inline-flex w-full justify-center bg-slate-900 text-white text-xs font-medium py-3 rounded-xl hover:bg-amber-600 transition-colors duration-300">
                            Choose {pkg.name} Package
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: LEAD PROFILE FORM */}
              {step === "PROFILE" && (
                <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-amber-600">
                      <Lock className="w-4 h-4" />
                      <span className="text-xs uppercase font-bold tracking-wider">Secure Step</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-light">
                      Unlock Your Customized Price Estimate
                    </h2>
                    <p className="text-slate-500 font-light text-sm">
                      Please enter your contact details to verify and register your budget projection.
                    </p>
                  </div>

                  <form onSubmit={handleProfileSubmit} className="space-y-6 pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {/* Name */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-slate-700">
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
                            className={`pl-10 p-4 rounded-xl border ${profileErrors.name ? "border-red-500" : "border-slate-200"
                              }`}
                          />
                        </div>
                        {profileErrors.name && (
                          <p className="text-xs text-red-500 font-light">{profileErrors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-slate-700">
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
                            className={`pl-10 p-4 rounded-xl border ${profileErrors.email ? "border-red-500" : "border-slate-200"
                              }`}
                          />
                        </div>
                        {profileErrors.email && (
                          <p className="text-xs text-red-500 font-light">{profileErrors.email}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
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
                              // Only allow numbers
                              const clean = e.target.value.replace(/\D/g, "");
                              setProfile(prev => ({ ...prev, phone: clean }));
                              setProfileErrors(prev => ({ ...prev, phone: undefined }));
                            }}
                            placeholder="e.g. 9876543210"
                            className={`pl-20 p-4 rounded-xl border ${profileErrors.phone ? "border-red-500" : "border-slate-200"
                              }`}
                          />
                        </div>
                        {profileErrors.phone && (
                          <p className="text-xs text-red-500 font-light">{profileErrors.phone}</p>
                        )}
                      </div>

                      {/* City */}
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-sm font-medium text-slate-700">
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
                          <p className="text-xs text-red-500 font-light">{profileErrors.city}</p>
                        )}
                      </div>

                    </div>

                    <div className="flex justify-end pt-4">
                      <Button
                        type="submit"
                        className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-5 rounded-xl shadow-md transition-all duration-300 flex items-center gap-1.5"
                      >
                        <span>Send Verification OTP</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {/* STEP 4 CONT: OTP VERIFICATION MODAL SCREEN */}
              {step === "OTP" && (
                <div className="p-8 md:p-12 space-y-8 animate-fade-in">
                  <div className="space-y-2 text-center max-w-md mx-auto">
                    <div className="mx-auto w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-2">
                      <Clock className="w-6 h-6 animate-pulse" />
                    </div>
                    <h2 className="text-2xl font-serif text-slate-900 font-light">
                      Enter Verification Code
                    </h2>
                    <p className="text-slate-500 font-light text-sm">
                      We have dispatched a 4-digit code to <span className="font-medium text-slate-800">+91 {profile.phone}</span>.
                    </p>
                  </div>

                  <form onSubmit={handleVerifyOtp} className="space-y-6 max-w-sm mx-auto pt-2">
                    <div className="space-y-2 text-center">
                      <Input
                        type="text"
                        maxLength={4}
                        value={enteredOtp}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, "");
                          setEnteredOtp(val);
                        }}
                        placeholder="0 0 0 0"
                        className="text-center text-2xl tracking-[1em] p-6 rounded-xl border border-slate-200 focus:border-amber-600 focus:ring-amber-500 font-mono font-bold"
                        autoFocus
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs font-light text-slate-500">
                      <div>
                        {otpTimer > 0 ? (
                          <span className="flex items-center gap-1">
                            Resend code in <strong className="text-slate-700">{otpTimer}s</strong>
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={handleResendOtp}
                            className="text-amber-600 hover:text-amber-700 font-medium underline focus:outline-none"
                          >
                            Resend Verification Code
                          </button>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setStep("PROFILE")}
                        className="text-slate-500 hover:text-slate-800"
                      >
                        Change Details
                      </button>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={enteredOtp.length !== 4 || isSubmittingLead}
                        className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white font-medium py-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        {isSubmittingLead ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Verifying & Saving...</span>
                          </>
                        ) : (
                          <span>Verify & Show Estimate</span>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {/* ================= STEP 6: PRICING DASHBOARD ESTIMATED VALUE PANEL ================= */}
              {step === "DASHBOARD" && (
                <div className="p-8 md:p-12 space-y-8 animate-fade-in bg-white">

                  {/* Verified Checkmark Banner */}
                  <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left transition-all duration-300">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-md">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium text-emerald-800">
                        Profile Verified & Budget Projection Generated
                      </h3>
                      <p className="text-xs text-emerald-600 font-light">
                        Hello {profile.name}, your estimator request is successfully registered in the database for client ID: K-{profile.phone.slice(-4)}.
                      </p>
                    </div>
                  </div>

                  {/* Main Cost Display */}
                  <div className="text-center py-6 border-b border-slate-100 space-y-4">
                    <span className="text-xs uppercase font-bold tracking-widest text-slate-400">Estimated Price Range</span>
                    <div className="text-4xl md:text-6xl font-bold font-serif text-slate-900 tracking-tight">
                      {formatCurrency(minPrice)} - {formatCurrency(maxPrice)}
                    </div>

                    {/* Trace breakdown subtext */}
                    <p className="text-sm text-slate-500 font-light">
                      Base Configuration Pricing: <strong className="text-slate-700">{formatCurrency(basePrice)}</strong> (Calculated for <span className="font-semibold text-slate-700">{totalRft} Running Feet</span> layout model)
                    </p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">

                    {/* Left: Summary config */}
                    <div className="space-y-4 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">Configuration Summary</h4>

                      <ul className="space-y-3 text-sm">
                        <li className="flex justify-between font-light">
                          <span className="text-slate-500">Layout Shape:</span>
                          <span className="font-medium text-slate-800">{selectedShape}</span>
                        </li>
                        <li className="flex justify-between font-light">
                          <span className="text-slate-500">Material Finish:</span>
                          <span className="font-medium text-amber-600">{selectedPackage} Bundle</span>
                        </li>
                        <li className="flex justify-between font-light">
                          <span className="text-slate-500">Deduction Buffer applied:</span>
                          <span className="font-medium text-slate-800">
                            {selectedShape === "L-Shape" && "2 ft (1 Corner)"}
                            {selectedShape === "Straight" && "0 ft (None)"}
                            {selectedShape === "U-Shape" && "4 ft (2 Corners)"}
                            {selectedShape === "Parallel" && "0 ft (None)"}
                          </span>
                        </li>
                        <li className="flex justify-between font-light border-t border-slate-200/60 pt-3">
                          <span className="text-slate-500">Rate per Running Foot:</span>
                          <span className="font-medium text-slate-800">{formatCurrency(getRatePerRft())}/ft</span>
                        </li>
                      </ul>
                    </div>

                    {/* Right: Lead data / Verification */}
                    <div className="space-y-4 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">Verification & User Status</h4>

                      <ul className="space-y-3 text-sm">
                        <li className="flex justify-between font-light">
                          <span className="text-slate-500">Full Name:</span>
                          <span className="font-medium text-slate-800">{profile.name}</span>
                        </li>
                        <li className="flex justify-between font-light">
                          <span className="text-slate-500">Registered Email:</span>
                          <span className="font-medium text-slate-800">{profile.email}</span>
                        </li>
                        <li className="flex justify-between font-light">
                          <span className="text-slate-500">Contact Number:</span>
                          <span className="font-medium text-slate-800">+91 {profile.phone}</span>
                        </li>
                        <li className="flex justify-between font-light">
                          <span className="text-slate-500">Target Region:</span>
                          <span className="font-medium text-slate-800">{profile.city}</span>
                        </li>
                        <li className="flex justify-between font-light border-t border-slate-200/60 pt-3">
                          <span className="text-slate-500">OTP Database Verification:</span>
                          <span className="inline-flex items-center gap-1 font-semibold text-emerald-600">
                            <Check className="w-4 h-4 bg-emerald-50 rounded-full border border-emerald-200 p-0.5" />
                            <span>Verified</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Legality Fineprint Disclaimer Text */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <p className="text-[11px] leading-relaxed text-slate-400 font-light">
                      Disclaimer: This output constitutes an estimated financial budget range model. Ultimate order value calculations dynamically shift depending upon field site engineers&apos; structural measurements, material changes, and specialized structural fits chosen.
                    </p>
                  </div>

                  {/* Recalculate CTA */}
                  <div className="flex justify-center pt-2">
                    <Button
                      onClick={handleRecalculate}
                      className="border border-slate-200 hover:border-amber-600 text-slate-600 hover:text-amber-600 bg-white hover:bg-amber-50/20 font-medium px-8 py-5 rounded-full transition-all duration-300 flex items-center gap-2 group"
                    >
                      <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                      <span>Start New Pricing Calculation</span>
                    </Button>
                  </div>

                </div>
              )}

            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default KitchenCalculator;
