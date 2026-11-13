import { useState, useEffect, useMemo } from "react";
import { useBusiness } from "@/context/BusinessContext";
import { useCurrency } from "@/context/CurrencyContext";
import { Store, Plus, Copy, Check, ChevronDown, Sparkles, MapPin, ExternalLink, X, Type, Layers, FileSpreadsheet, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const HEADING_FONT_OPTIONS = [
  {
    id: "montserrat-alternates",
    name: "Montserrat Alternates",
    badge: "Activa",
    styleDesc: "Geométrica estilizada con caracteres alternativos lúdicos y modernos",
    fontFamily: "'Montserrat Alternates', 'Montserrat', sans-serif",
  },
  {
    id: "outfit",
    name: "Outfit",
    badge: "Opción 2",
    styleDesc: "Geométrica moderna, trazos circulares limpios y balance de lujo",
    fontFamily: "'Outfit', sans-serif",
  },
  {
    id: "space-grotesk",
    name: "Space Grotesk",
    badge: "Opción 3",
    styleDesc: "Neo-grotesque contemporánea, estética arquitectónica y audaz",
    fontFamily: "'Space Grotesk', sans-serif",
  },
  {
    id: "montserrat",
    name: "Montserrat",
    badge: "Opción 4",
    styleDesc: "Geométrica urbana sólida, gran impacto y legibilidad rotunda",
    fontFamily: "'Montserrat', sans-serif",
  },
];

export const DemoSwitcher = () => {
  const { activeBusiness, businesses, selectBusinessBySlug, addNewBusiness, addBulkBusinesses } = useBusiness();
  const { currency, setCurrency, bcvRate } = useCurrency();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [fontDropdownOpen, setFontDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [bulkModalOpen, setBulkModalOpen] = useState(false);
  const [bulkUrlsText, setBulkUrlsText] = useState("");
  const [copied, setCopied] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const [activeFont, setActiveFont] = useState<string>(() => {
    return localStorage.getItem("preferred_heading_font") || "montserrat-alternates";
  });

  const [bizSearch, setBizSearch] = useState("");
  const [cityFilter, setCityFilter] = useState<"all" | "valencia" | "pzo">("all");

  const filteredBusinesses = useMemo(() => {
    return businesses.filter((b) => {
      const matchesSearch =
        b.name.toLowerCase().includes(bizSearch.toLowerCase()) ||
        b.category.toLowerCase().includes(bizSearch.toLowerCase()) ||
        b.city.toLowerCase().includes(bizSearch.toLowerCase());
      if (!matchesSearch) return false;
      if (cityFilter === "valencia") {
        return b.city.toLowerCase().includes("valencia") || b.city.toLowerCase().includes("carabobo");
      }
      if (cityFilter === "pzo") {
        return b.city.toLowerCase().includes("bolívar") || b.city.toLowerCase().includes("puerto ordaz");
      }
      return true;
    });
  }, [businesses, bizSearch, cityFilter]);

  const applyHeadingFont = (fontId: string) => {
    const selected = HEADING_FONT_OPTIONS.find((f) => f.id === fontId) || HEADING_FONT_OPTIONS[0];
    document.documentElement.style.setProperty("--font-heading", selected.fontFamily);
    localStorage.setItem("preferred_heading_font", fontId);
    setActiveFont(fontId);
    toast.success(`Fuente de títulos cambiada a: ${selected.name}`, {
      description: selected.styleDesc,
    });
  };

  useEffect(() => {
    const saved = localStorage.getItem("preferred_heading_font") || "montserrat-alternates";
    const selected = HEADING_FONT_OPTIONS.find((f) => f.id === saved) || HEADING_FONT_OPTIONS[0];
    document.documentElement.style.setProperty("--font-heading", selected.fontFamily);
  }, []);

  // Form states for manual or GMB URL generation
  const [gmbUrl, setGmbUrl] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Extracted URLs from bulk input
  const parsedBulkUrls = useMemo(() => {
    return bulkUrlsText
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 5 && (line.startsWith("http") || line.includes("maps") || line.includes("goo.gl")));
  }, [bulkUrlsText]);

  const handleBulkImport = (e: React.FormEvent) => {
    e.preventDefault();
    if (parsedBulkUrls.length === 0) {
      toast.error("Por favor ingresa al menos una URL válida de Google Maps");
      return;
    }

    const created = addBulkBusinesses(parsedBulkUrls);
    toast.success(`¡${created.length} microsites generados exitosamente!`, {
      description: `Mostrando ahora: ${created[0]?.name || "Nuevo sitio"}`,
    });

    setBulkModalOpen(false);
    setBulkUrlsText("");
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/b/${activeBusiness.slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("Enlace del microsite copiado al portapapeles", {
      description: url,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCreateBusiness = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim() && !gmbUrl.trim()) {
      toast.error("Por favor ingresa al menos el Nombre o la URL de Google Maps");
      return;
    }

    const created = addNewBusiness({
      url: gmbUrl || `https://maps.google.com/?q=${encodeURIComponent(businessName)}`,
      name: businessName,
      category: category || "Restaurante & Gastronomía",
      specialty: specialty || "Especialidades seleccionadas",
      phone: phone || "584249147877",
      address: address || "Zona Comercial Principal",
    });

    toast.success(`Microsite creado para ${created.name}!`, {
      description: `Ruta activa: /b/${created.slug}`,
    });

    setModalOpen(false);
    setGmbUrl("");
    setBusinessName("");
    setCategory("");
    setSpecialty("");
    setPhone("");
    setAddress("");
  };

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed top-2 right-2 z-50 bg-black/80 backdrop-blur-md border border-gold/40 text-gold text-xs px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 hover:bg-black transition-colors"
      >
        <Store className="w-3.5 h-3.5" />
        <span className="font-medium truncate max-w-[120px]">{activeBusiness.name}</span>
        <ChevronDown className="w-3 h-3" />
      </button>
    );
  }

  return (
    <>
      {/* Top Demo Bar */}
      <div className="bg-black/90 backdrop-blur-md border-b border-gold/30 text-white text-xs px-3 py-1.5 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="bg-gold/20 text-gold text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Demo
          </span>

          {/* Business Selector Button */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-700 hover:border-gold/50 px-2.5 py-1 rounded-md text-white font-medium transition-all"
            >
              <Store className="w-3.5 h-3.5 text-gold" />
              <span className="truncate max-w-[140px] sm:max-w-[200px]">{activeBusiness.name}</span>
              <span className="text-gold/80 text-[10px] font-mono">({activeBusiness.rating}★)</span>
              <ChevronDown className="w-3 h-3 text-neutral-400" />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                className="absolute left-0 mt-1 w-80 bg-neutral-950 border border-gold/40 rounded-xl shadow-2xl p-2.5 z-50 space-y-2 animate-fade-up max-h-[80vh] flex flex-col"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="flex items-center justify-between px-1">
                  <div className="text-[11px] font-semibold text-gold uppercase tracking-wider flex items-center gap-1.5">
                    <Store className="w-3.5 h-3.5" />
                    <span>Microsites ({businesses.length})</span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-mono">
                    {filteredBusinesses.length} visibles
                  </span>
                </div>

                {/* City Tabs */}
                <div className="grid grid-cols-3 gap-1 p-0.5 bg-neutral-900 rounded-lg text-[10px] font-semibold">
                  <button
                    onClick={() => setCityFilter("all")}
                    className={`py-1 rounded text-center transition-colors ${
                      cityFilter === "all" ? "bg-gold text-black font-bold shadow" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Todos ({businesses.length})
                  </button>
                  <button
                    onClick={() => setCityFilter("valencia")}
                    className={`py-1 rounded text-center transition-colors ${
                      cityFilter === "valencia" ? "bg-gold text-black font-bold shadow" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Valencia ({businesses.filter((b) => b.city.toLowerCase().includes("valencia") || b.city.toLowerCase().includes("carabobo")).length})
                  </button>
                  <button
                    onClick={() => setCityFilter("pzo")}
                    className={`py-1 rounded text-center transition-colors ${
                      cityFilter === "pzo" ? "bg-gold text-black font-bold shadow" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Pto Ordaz ({businesses.filter((b) => b.city.toLowerCase().includes("bolívar") || b.city.toLowerCase().includes("puerto ordaz")).length})
                  </button>
                </div>

                {/* Search Input */}
                <div>
                  <input
                    type="text"
                    value={bizSearch}
                    onChange={(e) => setBizSearch(e.target.value)}
                    placeholder="Buscar por nombre, tipo..."
                    className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded-md px-2.5 py-1 text-xs text-white placeholder-neutral-500 outline-none"
                  />
                </div>

                {/* Scrollable list */}
                <div className="overflow-y-auto max-h-64 space-y-1 pr-1 custom-scrollbar">
                  {filteredBusinesses.map((biz) => {
                    const isValencia = biz.city.toLowerCase().includes("valencia") || biz.city.toLowerCase().includes("carabobo");
                    return (
                      <button
                        key={biz.slug}
                        onClick={() => {
                          selectBusinessBySlug(biz.slug);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-2 py-1.5 rounded-md flex items-center justify-between transition-colors ${
                          biz.slug === activeBusiness.slug
                            ? "bg-gold/20 text-gold border border-gold/40 font-semibold"
                            : "text-neutral-200 hover:bg-neutral-800"
                        }`}
                      >
                        <div className="truncate pr-2">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs truncate font-medium">{biz.name}</span>
                            <span
                              className={`text-[9px] px-1 py-0.2 rounded font-mono ${
                                isValencia ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : "bg-blue-950 text-blue-300 border border-blue-800"
                              }`}
                            >
                              {isValencia ? "VLN" : "PZO"}
                            </span>
                          </div>
                          <p className="text-[10px] text-neutral-400 truncate">{biz.category}</p>
                        </div>
                        <span className="text-[10px] text-gold shrink-0">{biz.rating}★</span>
                      </button>
                    );
                  })}
                  {filteredBusinesses.length === 0 && (
                    <div className="py-4 text-center text-xs text-neutral-500">
                      No se encontraron resultados para "{bizSearch}"
                    </div>
                  )}
                </div>

                <div className="border-t border-neutral-800 pt-1.5 mt-1">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      setModalOpen(true);
                    }}
                    className="w-full text-center py-1 text-gold hover:text-gold-light text-xs font-medium flex items-center justify-center gap-1"
                  >
                    <Plus className="w-3 h-3" /> Añadir otro negocio (URL)
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Heading Font Selector */}
          <div className="relative">
            <button
              onClick={() => {
                setFontDropdownOpen(!fontDropdownOpen);
                setDropdownOpen(false);
              }}
              className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-700 hover:border-gold/50 px-2 py-1 rounded-md text-white font-medium transition-all"
              title="Cambiar tipografía de los títulos"
            >
              <Type className="w-3.5 h-3.5 text-gold" />
              <span className="hidden sm:inline text-neutral-400 text-[10px]">Títulos:</span>
              <span className="text-white font-semibold text-xs">
                {HEADING_FONT_OPTIONS.find((f) => f.id === activeFont)?.name || "Montserrat Alternates"}
              </span>
              <ChevronDown className="w-3 h-3 text-neutral-400" />
            </button>

            {fontDropdownOpen && (
              <div
                className="absolute left-0 mt-1 w-72 bg-neutral-950 border border-gold/40 rounded-lg shadow-2xl p-2 z-50 space-y-1.5 animate-fade-up"
                onMouseLeave={() => setFontDropdownOpen(false)}
              >
                <div className="px-2 py-1 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Tipografía para Títulos</span>
                  <span className="text-gold text-[10px] font-normal">Previsualización en vivo</span>
                </div>
                {HEADING_FONT_OPTIONS.map((f) => {
                  const isSelected = f.id === activeFont;
                  return (
                    <button
                      key={f.id}
                      onClick={() => {
                        applyHeadingFont(f.id);
                        setFontDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md transition-all ${
                        isSelected
                          ? "bg-gold/20 text-gold border border-gold/50 shadow-md"
                          : "text-neutral-200 hover:bg-neutral-900 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span
                          className="text-base font-bold text-cream"
                          style={{ fontFamily: f.fontFamily }}
                        >
                          {f.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 text-gold font-mono font-medium">
                          {f.badge}
                        </span>
                      </div>
                      <p className="text-[10px] text-neutral-400 leading-tight">
                        {f.styleDesc}
                      </p>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Currency Toggle */}
          <button
            onClick={() => setCurrency(currency === "USD" ? "VES" : "USD")}
            className="flex items-center gap-1 bg-gold/15 hover:bg-gold/25 border border-gold/40 text-gold text-[11px] font-bold px-2 py-0.5 rounded transition-all shadow-sm"
            title={`Alternar moneda principal ($ USD / Bs. VES). Tasa BCV: ${bcvRate ? bcvRate.toFixed(2) : '75.00'} Bs.`}
          >
            <span>{currency === "USD" ? "$ USD" : "Bs. VES"}</span>
          </button>

          <button
            onClick={() => setModalOpen(true)}
            className="hidden sm:flex items-center gap-1 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 px-2 py-0.5 rounded text-[11px] font-medium transition-colors"
          >
            <Plus className="w-3 h-3" /> Nuevo GMB
          </button>

          <button
            onClick={() => setBulkModalOpen(true)}
            className="flex items-center gap-1 bg-gold/20 hover:bg-gold/30 text-gold border border-gold/40 px-2 py-0.5 rounded text-[11px] font-semibold transition-colors shadow-sm"
            title="Importar múltiples URLs de Google Maps a la vez"
          >
            <Layers className="w-3 h-3" />
            <span>+ Lote GMB</span>
          </button>

          <button
            onClick={handleCopyLink}
            title="Copiar enlace directo"
            className="flex items-center gap-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-2 py-0.5 rounded text-[11px] transition-colors"
          >
            {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
            <span className="hidden sm:inline">Compartir</span>
          </button>

          <button
            onClick={() => setIsMinimized(true)}
            title="Minimizar barra demo"
            className="text-neutral-400 hover:text-white p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Modal to add a business from Google My Business */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-950 border border-gold/40 rounded-2xl w-full max-w-md p-5 shadow-2xl relative animate-fade-up text-white">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-gold">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-heading text-lg font-bold">Crear Microsite con Google Maps</h3>
            </div>
            <p className="text-xs text-neutral-400 mb-4 font-body">
              Pega la URL de la ficha de Google My Business o ingresa los datos de la empresa para autogenerar su sitio con menú y mapa interactivo.
            </p>

            <form onSubmit={handleCreateBusiness} className="space-y-3 font-body text-xs">
              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  URL de Google My Business / Google Maps
                </label>
                <input
                  type="text"
                  placeholder="https://maps.google.com/?cid=... o https://g.page/..."
                  value={gmbUrl}
                  onChange={(e) => {
                    setGmbUrl(e.target.value);
                    // Attempt name auto-extract
                    try {
                      const u = new URL(e.target.value);
                      if (u.pathname.includes("/place/")) {
                        const place = u.pathname.split("/place/")[1]?.split("/")[0];
                        if (place && !businessName) {
                          setBusinessName(decodeURIComponent(place).replace(/\+/g, " "));
                        }
                      }
                    } catch {}
                  }}
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded-lg px-3 py-2 text-white placeholder-neutral-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">Nombre de la Empresa *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Parrilla Don José"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded-lg px-3 py-2 text-white placeholder-neutral-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">Categoría / Ramo</label>
                  <input
                    type="text"
                    placeholder="Ej. Carnes & Parrilla"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded-lg px-3 py-2 text-white placeholder-neutral-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">Especialidad (Extraída de reseñas o info)</label>
                <input
                  type="text"
                  placeholder="Ej. Famosos por su bife de chorizo y chimichurri casero"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded-lg px-3 py-2 text-white placeholder-neutral-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">WhatsApp / Teléfono</label>
                  <input
                    type="text"
                    placeholder="584121234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded-lg px-3 py-2 text-white placeholder-neutral-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">Dirección / Zona</label>
                  <input
                    type="text"
                    placeholder="Ej. Av. Bolívar, Maturín"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded-lg px-3 py-2 text-white placeholder-neutral-500 outline-none"
                  />
                </div>
              </div>

              <div className="p-2.5 bg-neutral-900/60 border border-neutral-800 rounded-lg text-[11px] text-neutral-400 space-y-1">
                <p>⚡ <strong>Reglas automáticas aplicadas:</strong></p>
                <p>• Email generado: <code className="text-gold">info@{businessName ? businessName.toLowerCase().replace(/\s+/g, "") : "empresa"}.com</code></p>
                <p>• Mapa: Coordenadas y vista embebida generada con la dirección y nombre.</p>
                <p>• Pedidos: Enrutados al número de WhatsApp especificado.</p>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 py-2 rounded-lg font-medium transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gold hover:bg-gold-light text-black py-2 rounded-lg font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4" /> Generar Microsite
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bulk Import Modal for pasting multiple Google Maps URLs */}
      {bulkModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-950 border border-gold/40 rounded-2xl w-full max-w-lg p-5 shadow-2xl relative animate-fade-up text-white">
            <button
              onClick={() => setBulkModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-gold">
              <Layers className="w-5 h-5" />
              <h3 className="font-heading text-lg font-bold">Importador por Lotes de Google Maps</h3>
            </div>
            <p className="text-xs text-neutral-300 mb-3 font-body leading-relaxed">
              Pega múltiples enlaces de Google Maps o Google My Business (uno por línea). El sistema detectará automáticamente nombres, categorías, coordenadas y generará un catálogo completo con WhatsApp para cada uno.
            </p>

            <form onSubmit={handleBulkImport} className="space-y-3 font-body text-xs">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-neutral-300 font-medium">
                    URLs de Google Maps (1 por línea)
                  </label>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                    parsedBulkUrls.length > 0 ? "bg-gold/20 text-gold font-bold" : "text-neutral-500"
                  }`}>
                    {parsedBulkUrls.length} {parsedBulkUrls.length === 1 ? "URL detectada" : "URLs detectadas"}
                  </span>
                </div>
                <textarea
                  rows={6}
                  value={bulkUrlsText}
                  onChange={(e) => setBulkUrlsText(e.target.value)}
                  placeholder={`https://maps.google.com/?cid=123456789\nhttps://www.google.com/maps/place/La+Caba%C3%B1a+Parrilla/@9.74,-63.18,17z\nhttps://g.page/r/restaurant-demo`}
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded-lg p-3 text-white placeholder-neutral-500 font-mono text-[11px] outline-none resize-none leading-relaxed"
                />
              </div>

              {/* Sample Quick Fill */}
              <div className="flex items-center justify-between bg-neutral-900/60 border border-neutral-800 rounded-lg p-2.5">
                <span className="text-neutral-400 text-[11px]">¿Quieres probar con un lote de ejemplo?</span>
                <button
                  type="button"
                  onClick={() => {
                    setBulkUrlsText(
                      `https://maps.google.com/place/Parrilla+El+Tauro/@9.748,-63.181,17z\nhttps://maps.google.com/place/Sushi+Sakura+Lounge/@9.742,-63.179,17z\nhttps://maps.google.com/place/Cafeto+Bakery+Express/@9.751,-63.184,17z`
                    );
                  }}
                  className="text-gold hover:text-gold-light text-[11px] font-semibold underline underline-offset-2"
                >
                  Cargar 3 URLs de ejemplo
                </button>
              </div>

              <div className="p-2.5 bg-neutral-900/40 border border-neutral-800 rounded-lg text-[11px] text-neutral-400 space-y-1">
                <p className="text-cream font-medium">✨ Lo que se genera por cada URL:</p>
                <p>• Detección inteligente del nombre, ubicación y categoría gastronómica.</p>
                <p>• Generación de 8+ platos de menú temáticos con precios en dual ($ y Bs.).</p>
                <p>• Persistencia local automática en tu navegador para visitas futuras.</p>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setBulkModalOpen(false)}
                  className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 py-2.5 rounded-lg font-medium transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={parsedBulkUrls.length === 0}
                  className={`flex-1 py-2.5 rounded-lg font-bold transition-all flex items-center justify-center gap-1.5 ${
                    parsedBulkUrls.length > 0
                      ? "bg-gold hover:bg-gold-light text-black shadow-lg cursor-pointer hover:scale-[1.01]"
                      : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Procesar Lote ({parsedBulkUrls.length})</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
