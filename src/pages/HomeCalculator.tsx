import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Hammer } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeCalculator: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-800">
      <Header />
      
      <main className="flex-grow pt-32 pb-24 px-6 flex items-center justify-center">
        <div className="max-w-xl w-full text-center space-y-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 transition-all duration-300 hover:shadow-2xl">
          <div className="mx-auto w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 animate-pulse">
            <Hammer className="w-8 h-8" />
          </div>
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Coming Soon</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif text-slate-900 tracking-tight">
              Home Interior Price Calculator
            </h1>
            <p className="text-slate-500 font-light max-w-md mx-auto leading-relaxed">
              We are crafting a comprehensive price estimator for complete home interior transformations. Get real-time cost estimations for living rooms, bedrooms, and modular systems soon.
            </p>
          </div>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => navigate("/kitchen-price-calculator")}
              className="border-amber-600 text-amber-600 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 font-light"
            >
              Try Kitchen Price Calculator
            </Button>
            
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-slate-500 hover:text-slate-800 flex items-center justify-center gap-2 font-light"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomeCalculator;
