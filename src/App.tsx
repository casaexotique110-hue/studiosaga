import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OurSaga from "./pages/OurSaga";
import StylePalette from "./pages/StylePalette";
import InteriorKitBase from "./pages/InteriorKitBase";
import InteriorKitStandard from "./pages/InteriorKitStandard";
import InteriorKitPremium from "./pages/InteriorKitPremium";
import NotFound from "./pages/NotFound";
import Services from "./pages/services";
import Contact from "./pages/Contact";
import FullHomeInteriors from "./pages/FullHomeInteriors";
import LuxuryInteriors from "./pages/LuxuryInteriors";
import ModularInteriors from "./pages/ModularInteriors";

// BLOG COMPONENTS IMPORT (Sahi path structure ke sath)
import BlogList from './pages/BlogList';
import BlogDetails from './pages/BlogDetails';

// CALCULATORS IMPORT
import HomeCalculator from "./pages/HomeCalculator";
import KitchenCalculator from "./pages/KitchenCalculator";
import WardrobeCalculator from "./pages/WardrobeCalculator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-saga" element={<OurSaga />} />

          <Route path="/Contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/style-palette" element={<StylePalette />} />

          <Route
            path="/services/full-home-interiors"
            element={<FullHomeInteriors />}
          />

          <Route
            path="/services/luxury-interiors"
            element={<LuxuryInteriors />}
          />

          <Route
            path="/services/modular-interiors"
            element={<ModularInteriors />}
          />

          <Route path="/interior-kit/base/:size" element={<InteriorKitBase />} />
          <Route path="/interior-kit/standard/:size" element={<InteriorKitStandard />} />
          <Route path="/interior-kit/premium/:size" element={<InteriorKitPremium />} />

          {/* DYNAMIC BLOG ROUTES */}
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />

          {/* ESTIMATOR ROUTES */}
          <Route path="/calculator/home" element={<HomeCalculator />} />
          <Route path="/calculator/kitchen" element={<KitchenCalculator />} />
          <Route path="/calculator/wardrobe" element={<WardrobeCalculator />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;