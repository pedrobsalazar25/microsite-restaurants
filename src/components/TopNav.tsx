import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  Search,
  X,
  Home,
  UtensilsCrossed,
  Cake,
  Wine,
  ShoppingCart,
  CalendarDays,
  Phone,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { useBusiness } from "@/context/BusinessContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const TopNav = () => {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const { currency, setCurrency, bcvRate, formatCurrency } = useCurrency();
  const { activeBusiness } = useBusiness();

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const basePath = `/b/${activeBusiness.slug}`;

  const menuLinks = [
    { path: basePath, icon: Home, label: "Inicio" },
    { path: `${basePath}/eventos`, icon: CalendarDays, label: "Eventos y Promociones" },
    { path: `${basePath}/cocina`, icon: UtensilsCrossed, label: "Cocina & Especialidades" },
    { path: `${basePath}/postres`, icon: Cake, label: "Postres" },
    { path: `${basePath}/bebidas`, icon: Wine, label: "Bebidas" },
    { path: `${basePath}/carrito`, icon: ShoppingCart, label: "Carrito" },
  ];

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return activeBusiness.offerings.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [searchQuery, activeBusiness.offerings]);

  // Close search on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    if (searchOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [searchOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-dark border-b border-gold/20">
      <div className="flex items-center justify-between h-14 max-w-lg mx-auto px-4">
        {/* Hamburger */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button className="text-cream/80 hover:text-gold transition-colors p-1" aria-label="Abrir menú">
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-primary/95 backdrop-blur-xl border-gold/20 w-72 p-0 text-white">
            <SheetHeader className="p-5 pb-2">
              <SheetTitle className="flex items-center gap-3">
                {activeBusiness.logoImage ? (
                  <img src={activeBusiness.logoImage} alt={activeBusiness.name} className="h-10 object-contain" />
                ) : (
                  <span className="font-heading text-lg font-bold text-cream tracking-wide">
                    {activeBusiness.name}
                  </span>
                )}
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col py-2">
              {menuLinks.map(({ path, icon: Icon, label }) => (
                <button
                  key={path}
                  onClick={() => {
                    navigate(path);
                    setSheetOpen(false);
                  }}
                  className="flex items-center gap-4 px-6 py-3 text-cream/70 hover:text-gold hover:bg-gold/10 transition-all font-body text-sm text-left"
                >
                  <Icon className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                  <span>{label}</span>
                  {path.includes("/carrito") && totalItems > 0 && (
                    <span className="ml-auto bg-gold text-primary text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              ))}

              {/* Contact */}
              <button
                onClick={() => {
                  const el = document.getElementById("contact-section");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate(basePath);
                    setTimeout(() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" }), 300);
                  }
                  setSheetOpen(false);
                }}
                className="flex items-center gap-4 px-6 py-3 text-cream/70 hover:text-gold hover:bg-gold/10 transition-all font-body text-sm text-left"
              >
                <Phone className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                <span>Ubicación y Contacto</span>
              </button>

              {/* Currency Toggle */}
              <div className="my-3 mx-6 border-t border-gold/15" />
              <p className="px-6 text-[10px] uppercase tracking-widest text-cream/40 font-body mb-1">
                Moneda
              </p>
              {bcvRate && (
                <p className="px-6 text-[10px] text-gold/70 font-body mb-2">
                  Tasa BCV: 1 USD = {bcvRate.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Bs.
                </p>
              )}
              <div className="flex px-6 gap-2">
                <button
                  onClick={() => setCurrency("USD")}
                  className={`px-3 py-1 text-xs rounded-full font-body font-bold transition-all ${
                    currency === "USD" ? "bg-gold text-primary" : "text-cream/50 bg-cream/5 hover:text-cream"
                  }`}
                >
                  USD ($)
                </button>
                <button
                  onClick={() => setCurrency("VES")}
                  className={`px-3 py-1 text-xs rounded-full font-body font-bold transition-all ${
                    currency === "VES" ? "bg-gold text-primary" : "text-cream/50 bg-cream/5 hover:text-cream"
                  }`}
                >
                  VES (Bs.)
                </button>
              </div>

              {/* Social Links */}
              <div className="my-3 mx-6 border-t border-gold/15" />
              <p className="px-6 text-[10px] uppercase tracking-widest text-cream/40 font-body mb-2">
                Redes Sociales
              </p>
              <div className="flex px-6 gap-3">
                <a
                  href={activeBusiness.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-cream/10 text-cream/70 hover:text-gold hover:bg-gold/10 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href={activeBusiness.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-cream/10 text-cream/70 hover:text-gold hover:bg-gold/10 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Brand / Logo */}
        <button
          onClick={() => navigate(basePath)}
          className="flex items-center gap-2 hover:opacity-85 transition-opacity"
        >
          {activeBusiness.logoImage ? (
            <img src={activeBusiness.logoImage} alt={activeBusiness.name} className="h-9 object-contain" />
          ) : (
            <span className="font-heading text-lg font-bold text-cream tracking-wide truncate max-w-[200px]">
              {activeBusiness.name}
            </span>
          )}
        </button>

        {/* Right Actions: Currency Toggle + Search */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrency(currency === "USD" ? "VES" : "USD")}
            className="flex items-center gap-1 bg-gold/15 hover:bg-gold/25 border border-gold/40 text-gold text-xs font-bold px-2.5 py-1 rounded-full transition-all shadow-sm"
            title={`Cambiar moneda (Tasa BCV: ${bcvRate ? bcvRate.toFixed(2) : '75.00'} Bs.)`}
          >
            <span>{currency === "USD" ? "$ USD" : "Bs. VES"}</span>
          </button>

          <button
            onClick={() => setSearchOpen(true)}
            className="text-cream/80 hover:text-gold transition-colors p-1"
            aria-label="Buscar en el menú"
          >
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div ref={searchRef} className="absolute top-14 left-0 right-0 glass-dark border-b border-gold/30 p-4 animate-fade-up">
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              placeholder={`Buscar en ${activeBusiness.name}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full bg-cream/10 border border-gold/30 rounded-full py-2.5 pl-10 pr-10 text-cream placeholder-cream/40 font-body text-sm focus:outline-none focus:border-gold"
            />
            <Search className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
            <button
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery("");
              }}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-cream/50 hover:text-cream"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Results */}
          {searchQuery.trim() && (
            <div className="max-w-lg mx-auto mt-3 max-h-60 overflow-y-auto space-y-2 no-scrollbar">
              {searchResults.length === 0 ? (
                <p className="text-center text-cream/50 text-xs py-4 font-body">No se encontraron platos</p>
              ) : (
                searchResults.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      navigate(`${basePath}/plato/${item.id}`);
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-cream/5 cursor-pointer transition-colors"
                  >
                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-cream text-xs font-medium font-body truncate">{item.name}</p>
                      <p className="text-gold text-xs font-bold font-body">{formatCurrency(item.price)}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default TopNav;
