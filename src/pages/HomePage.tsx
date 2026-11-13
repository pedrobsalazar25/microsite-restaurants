import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UtensilsCrossed, Cake, Wine, MapPin, Clock, Phone, Mail, Star, ExternalLink, ShieldCheck, Truck, ShoppingBag } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { heroBg, eventNight, events } from "@/data/menuData";
import MenuCard from "@/components/MenuCard";
import InstagramFeed from "@/components/InstagramFeed";
import { useBusiness } from "@/context/BusinessContext";

const categories = [
  { path: "cocina", icon: UtensilsCrossed, label: "Cocina", color: "from-gold-dark to-gold" },
  { path: "postres", icon: Cake, label: "Postres", color: "from-gold to-gold-light" },
  { path: "bebidas", icon: Wine, label: "Bebidas", color: "from-gold-light to-gold" },
];

const isOpenNow = () => {
  const now = new Date();
  const hour = now.getHours();
  return hour >= 10 && hour < 22;
};

const HomePage = () => {
  const navigate = useNavigate();
  const { activeBusiness } = useBusiness();
  const open = isOpenNow();
  const [heroApi, setHeroApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Recommendations from active business
  const chefPicks = activeBusiness.offerings.filter((o) => o.isChefRecommendation);
  const featuredOfferings = chefPicks.length > 0 ? chefPicks : activeBusiness.offerings.slice(0, 4);

  useEffect(() => {
    if (!heroApi) return;
    setCount(heroApi.scrollSnapList().length);
    setCurrent(heroApi.selectedScrollSnap());
    heroApi.on("select", () => setCurrent(heroApi.selectedScrollSnap()));
  }, [heroApi]);

  const basePath = `/b/${activeBusiness.slug}`;

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[72vh] min-h-[490px] overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem] md:rounded-b-[3.5rem] border-b border-gold/30 shadow-2xl">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]}
          className="w-full h-full"
          setApi={setHeroApi}
        >
          <CarouselContent className="ml-0 h-full">
            {/* Slide 1 - Brand Identity & Specialty */}
            <CarouselItem className="pl-0 relative h-[72vh] min-h-[490px] flex items-center justify-center">
              <img
                src={activeBusiness.heroImage || heroBg}
                alt={activeBusiness.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />

              <div className="relative z-10 flex flex-col items-center text-center px-6 animate-fade-up max-w-lg">
                {activeBusiness.logoImage ? (
                  <img
                    src={activeBusiness.logoImage}
                    alt={activeBusiness.name}
                    className="w-44 md:w-56 mb-3 drop-shadow-2xl"
                  />
                ) : (
                  <div className="mb-3">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-cream drop-shadow-lg tracking-wide">
                      {activeBusiness.name}
                    </h1>
                    <span className="text-gold text-xs uppercase tracking-widest font-body font-semibold">
                      {activeBusiness.category}
                    </span>
                  </div>
                )}

                <p className="text-gold font-body text-xs md:text-sm font-semibold max-w-md tracking-wider uppercase mb-1">
                  {activeBusiness.specialtyTagline}
                </p>

                <p className="text-cream/80 font-body text-xs md:text-sm max-w-sm tracking-wide">
                  {activeBusiness.heroSubtitle}
                </p>

                {/* Google My Business Rating Badge */}
                <div className="flex items-center gap-2 mt-4 bg-black/60 backdrop-blur-md border border-gold/30 px-3 py-1 rounded-full">
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-white text-xs font-bold font-mono">
                    {activeBusiness.rating.toFixed(1)}
                  </span>
                  <span className="text-cream/60 text-[11px] font-body">
                    ({activeBusiness.reviewCount} opiniones en Google)
                  </span>
                </div>

                {/* Open status */}
                <div className="flex items-center gap-2 mt-3 text-cream/70 text-xs font-body">
                  <span className={`w-2 h-2 rounded-full ${open ? "bg-green-400" : "bg-red-400"} animate-pulse`} />
                  <span>{open ? "Abierto Ahora" : "Cerrado"} · {activeBusiness.hours.split(":")[1]?.trim() ? activeBusiness.hours : "11:00 AM - 10:00 PM"}</span>
                </div>
              </div>
            </CarouselItem>

            {/* Slide 2 - Delivery & WhatsApp Ordering */}
            <CarouselItem className="pl-0 relative h-[72vh] min-h-[490px] flex items-center justify-center">
              <img
                src={activeBusiness.offerings[0]?.image || activeBusiness.heroImage || heroBg}
                alt={`Delivery ${activeBusiness.name}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />
              <div className="relative z-10 flex flex-col items-center text-center px-6 animate-fade-up max-w-lg">
                <div className="inline-flex items-center gap-1.5 bg-gold/20 border border-gold/40 text-gold text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Servicio Delivery a Domicilio</span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-cream mb-2 drop-shadow-lg">
                  Llevamos {activeBusiness.shortName || activeBusiness.name} a tu Puerta
                </h2>
                <p className="text-cream/85 font-body text-xs md:text-sm max-w-md tracking-wide mb-4">
                  Ordena tus platos favoritos de nuestro menú digital y recíbelos calientes y recién preparados en tu hogar u oficina en Puerto Ordaz.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${activeBusiness.phone}?text=${encodeURIComponent(`¡Hola ${activeBusiness.name}! Quisiera hacer un pedido para delivery a domicilio.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-body font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform inline-flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" /> Pedir Delivery por WhatsApp
                  </a>
                  <button
                    onClick={() => navigate(`${basePath}/cocina`)}
                    className="bg-neutral-900/80 hover:bg-neutral-800 text-cream border border-gold/40 font-body font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md hover:scale-105 transition-transform inline-flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-gold" /> Ver Carta Digital
                  </button>
                </div>
              </div>
            </CarouselItem>

            {/* Slide 3 - Specialties Showcase */}
            <CarouselItem className="pl-0 relative h-[72vh] min-h-[490px] flex items-center justify-center">
              <img
                src={activeBusiness.offerings[1]?.image || activeBusiness.offerings[0]?.image || activeBusiness.heroImage || heroBg}
                alt={activeBusiness.offerings[1]?.name || activeBusiness.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
              <div className="relative z-10 flex flex-col items-center text-center px-6 animate-fade-up max-w-lg">
                <span className="text-gold text-xs uppercase tracking-widest font-body font-semibold mb-2">
                  Especialidad de la Casa
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-cream mb-2 drop-shadow-lg">
                  {activeBusiness.offerings[1]?.name || activeBusiness.offerings[0]?.name || activeBusiness.name}
                </h2>
                <p className="text-cream/80 font-body text-xs md:text-sm max-w-md tracking-wide mb-4">
                  {activeBusiness.offerings[1]?.description || activeBusiness.specialtyTagline}
                </p>
                <button
                  onClick={() => navigate(`${basePath}/cocina`)}
                  className="gold-gradient text-black font-body font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                  Explorar Menú Completo
                </button>
              </div>
            </CarouselItem>
          </CarouselContent>

          {/* Dot indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => heroApi?.scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-gold w-6" : "bg-cream/40 hover:bg-cream/60"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </section>

      {/* Category Navigation Circles */}
      <section className="px-4 -mt-8 relative z-10">
        <div className="glass-dark border border-gold/30 rounded-full px-6 py-3 flex justify-center gap-8 mx-auto w-fit shadow-2xl">
          {categories.map(({ path, icon: Icon, label }) => (
            <button
              key={path}
              onClick={() => navigate(`${basePath}/${path}`)}
              className="flex flex-col items-center gap-1.5 group"
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-gold group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="text-[10px] font-body text-foreground font-medium">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Specialty Highlights / Chef's Picks */}
      <section className="px-4 mt-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">
              Especialidades de {activeBusiness.shortName || activeBusiness.name}
            </h2>
            <p className="text-cream/60 text-xs font-body">Platos más solicitados por nuestros clientes</p>
          </div>
          <span className="text-gold text-xs font-body font-semibold">⭐ Destacados</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {featuredOfferings.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Google Verified Testimonials & Reviews */}
      <section className="px-4 mt-10">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 text-gold text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Reseñas de Google Maps</span>
              <span className="text-[10px] font-normal text-muted-foreground bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-full">
                {activeBusiness.rating.toFixed(1)} ★ ({activeBusiness.reviewCount} opiniones)
              </span>
            </div>
            <h2 className="font-heading text-xl font-bold text-foreground mt-0.5">
              Lo que opinan nuestros clientes
            </h2>
          </div>
          <a
            href={activeBusiness.gmbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light text-xs font-body flex items-center gap-1 shrink-0"
          >
            <span>Ver perfil</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="space-y-3">
          {activeBusiness.reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-dark border border-gold/20 rounded-xl p-4 shadow-md transition-all hover:border-gold/40"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 text-gold font-bold text-xs flex items-center justify-center font-heading">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <p className="text-xs font-bold text-foreground font-body">{rev.author}</p>
                      {rev.isLocalGuide && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 font-semibold border border-amber-500/30 flex items-center gap-0.5">
                          <span className="text-[9px]">★</span> Local Guide
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-foreground/50 font-body">{rev.relativeTime}</p>
                  </div>
                </div>
                <div className="flex text-amber-400 shrink-0">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-foreground/80 font-body leading-relaxed italic">
                "{rev.text}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Events / Promos Carousel */}
      <section className="px-4 mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-xl font-bold text-foreground">Noches Especiales</h2>
          <button onClick={() => navigate(`${basePath}/eventos`)} className="text-gold text-xs font-body hover:underline">
            Ver Todos →
          </button>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {events.map((event) => (
              <CarouselItem key={event.id} className="pl-3 basis-[280px]">
                <div className="glass-white rounded-xl overflow-hidden">
                  <div className="relative h-36">
                    <img src={eventNight} alt={event.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                    <span className="absolute bottom-2 left-3 text-cream text-[10px] font-body bg-gold/80 px-2 py-0.5 rounded-full">
                      {event.date}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="font-heading text-sm font-semibold">{event.title}</h3>
                    <p className="text-black text-xs mt-1 line-clamp-2 font-body">{event.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Social Feed Preview */}
      <InstagramFeed />

      {/* Contact Section & Google Maps View */}
      <section id="contact-section" className="px-4 mt-10 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-heading text-xl font-bold text-foreground">Ubicación y Contacto</h2>
          <span className="text-gold text-xs font-body font-semibold">Google Maps</span>
        </div>

        <div className="glass-dark border border-gold/30 rounded-2xl p-5 space-y-4 shadow-xl">
          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-body font-medium text-foreground">Dirección</p>
              <p className="text-xs text-foreground/75 font-body">
                {activeBusiness.address}, {activeBusiness.city}
              </p>
            </div>
          </div>

          {/* Phone / WhatsApp */}
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-body font-medium text-foreground">Teléfono / WhatsApp</p>
              <a
                href={`tel:+${activeBusiness.phone}`}
                className="text-xs text-foreground/75 font-body hover:text-gold transition-colors font-mono"
              >
                {activeBusiness.displayPhone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-body font-medium text-foreground">Email</p>
              <a
                href={`mailto:${activeBusiness.email}`}
                className="text-xs text-foreground/75 font-body hover:text-gold transition-colors"
              >
                {activeBusiness.email}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-body font-medium text-foreground">Horario de Atención</p>
              <p className="text-xs text-foreground/75 font-body">{activeBusiness.hours}</p>
            </div>
          </div>

          {/* Interactive Google Maps View */}
          <div className="pt-2">
            <div className="rounded-xl overflow-hidden border border-gold/30 h-48 relative shadow-inner">
              <iframe
                title={`Ubicación de ${activeBusiness.name}`}
                src={activeBusiness.mapEmbedUrl}
                className="w-full h-full border-0 opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <div className="flex justify-between items-center mt-2.5">
              <span className="text-[11px] text-cream/50 font-body">Vista en Google Maps</span>
              <a
                href={activeBusiness.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light text-xs font-bold font-body flex items-center gap-1 transition-colors"
              >
                <span>Cómo llegar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
