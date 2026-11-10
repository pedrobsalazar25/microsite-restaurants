import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { BusinessProvider } from "@/context/BusinessContext";
import { DemoSwitcher } from "@/components/DemoSwitcher";
import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import ScrollToTop from "@/components/ScrollToTop";
import PullToRefresh from "@/components/PullToRefresh";

const HomePage = lazy(() => import("@/pages/HomePage"));
const MenuCategoryPage = lazy(() => import("@/pages/MenuCategoryPage"));
const ProductPage = lazy(() => import("@/pages/ProductPage"));
const CartPage = lazy(() => import("@/pages/CartPage"));
const EventsPage = lazy(() => import("@/pages/EventsPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Top Client Demo Switcher Toolbar */}
      <DemoSwitcher />

      <div className="max-w-lg mx-auto relative min-h-screen animated-gradient-bg shadow-2xl">
        <ScrollToTop />
        <TopNav />
        <PullToRefresh>
          <div className="pt-14">
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
                </div>
              }
            >
              <Routes>
                {/* Dynamic business routes */}
                <Route path="/b/:slug" element={<HomePage />} />
                <Route path="/b/:slug/cocina" element={<MenuCategoryPage category="cocina" />} />
                <Route path="/b/:slug/postres" element={<MenuCategoryPage category="postres" />} />
                <Route path="/b/:slug/bebidas" element={<MenuCategoryPage category="bebidas" />} />
                <Route path="/b/:slug/plato/:id" element={<ProductPage />} />
                <Route path="/b/:slug/carrito" element={<CartPage />} />
                <Route path="/b/:slug/eventos" element={<EventsPage />} />

                {/* Root & fallback routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/cocina" element={<MenuCategoryPage category="cocina" />} />
                <Route path="/postres" element={<MenuCategoryPage category="postres" />} />
                <Route path="/bebidas" element={<MenuCategoryPage category="bebidas" />} />
                <Route path="/plato/:id" element={<ProductPage />} />
                <Route path="/carrito" element={<CartPage />} />
                <Route path="/eventos" element={<EventsPage />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </PullToRefresh>
        <WhatsAppBubble />
        <BottomNav />
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CurrencyProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <BusinessProvider>
              <AppContent />
            </BusinessProvider>
          </BrowserRouter>
        </CartProvider>
      </CurrencyProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
