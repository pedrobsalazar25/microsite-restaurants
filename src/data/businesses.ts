import type { BusinessProfile } from "@/types/business";
import { menuItems } from "@/data/menuData";
import logoAlJanna from "@/assets/logo.png";

// Generated high-fidelity hero & dish assets
import heroTuttoPasta from "@/assets/images/hero_tutto_pasta_1793932309399.jpg";
import tuttoPasticho from "@/assets/images/tutto_pasticho_1793932310246.jpg";
import tuttoFettuccine from "@/assets/images/tutto_fettuccine_1793932310400.jpg";
import tuttoTiramisu from "@/assets/images/tutto_tiramisu_1793932310725.jpg";

import heroFarofa from "@/assets/images/farofa_rodizio_hero_1793932689909.jpg";
import heroSpaPaella from "@/assets/images/spa_paella_hero_1793932690245.jpg";
import heroNapoletana from "@/assets/images/napoletana_pizza_hero_1793932690780.jpg";
import heroShanklish from "@/assets/images/shanklish_mezze_hero_1793932690843.jpg";

// New specialized archetype hero banners
import heroSushiNikkei from "@/assets/images/hero_sushi_nikkei_1794285770995.jpg";
import heroBurgerStreet from "@/assets/images/hero_burger_street_1794285783041.jpg";
import heroArepaCriollo from "@/assets/images/hero_arepa_criollo_1794285794770.jpg";
import heroPolloBrasas from "@/assets/images/hero_pollo_brasas_1794285807908.jpg";
import heroChurrosDessert from "@/assets/images/hero_churros_dessert_1794285820822.jpg";
import heroChineseWok from "@/assets/images/hero_chinese_wok_1794285833883.jpg";
import heroSopaSancocho from "@/assets/images/hero_sopa_sancocho_1794285847062.jpg";
import heroSmokeBbq from "@/assets/images/hero_smoke_bbq_1794285860058.jpg";

// Generated dish-specific authentic photography
import dishPuntaTrasera from "@/assets/images/dish_punta_trasera_1793934947431.jpg";
import dishParrilladaMixta from "@/assets/images/dish_parrillada_mixta_1793934947835.jpg";
import dishQuesilloVenezolano from "@/assets/images/dish_quesillo_venezolano_1793934948672.jpg";
import dishPizzaMargherita from "@/assets/images/dish_pizza_margherita_1793934966583.jpg";
import dishCannoliSiciliani from "@/assets/images/dish_cannoli_siciliani_1793934967579.jpg";
import dishRisottoPorcini from "@/assets/images/dish_risotto_porcini_1793934967110.jpg";
import dishShanklishMezze from "@/assets/images/dish_shanklish_mezze_1793934982878.jpg";
import dishShawarmaPlatter from "@/assets/images/dish_shawarma_platter_1793934983683.jpg";
import dishPaellaMariscos from "@/assets/images/dish_paella_mariscos_1793934983902.jpg";
import dishPicanhaChurrasco from "@/assets/images/dish_picanha_churrasco_1793934998687.jpg";
import dishAbacaxiGrelhado from "@/assets/images/dish_abacaxi_grelhado_1793934999605.jpg";
import dishKibbehFrito from "@/assets/images/dish_kibbeh_frito_1793934999439.jpg";
import cervezaPolarImg from "@/assets/dishes/Cerveza_Polar.png";
import cervezaSoleraImg from "@/assets/dishes/Cerveza_Solera.png";
import baklavaImg from "@/assets/dishes/Baklava.png";

export {
  heroTuttoPasta,
  tuttoPasticho,
  tuttoFettuccine,
  tuttoTiramisu,
  heroFarofa,
  heroSpaPaella,
  heroNapoletana,
  heroShanklish,
  heroSushiNikkei,
  heroBurgerStreet,
  heroArepaCriollo,
  heroPolloBrasas,
  heroChurrosDessert,
  heroChineseWok,
  heroSopaSancocho,
  heroSmokeBbq,
  dishPuntaTrasera,
  dishParrilladaMixta,
  dishQuesilloVenezolano,
  dishPizzaMargherita,
  dishCannoliSiciliani,
  dishRisottoPorcini,
  dishShanklishMezze,
  dishShawarmaPlatter,
  dishPaellaMariscos,
  dishPicanhaChurrasco,
  dishAbacaxiGrelhado,
  dishKibbehFrito,
  cervezaPolarImg,
  cervezaSoleraImg,
  baklavaImg,
};

// Helper to sanitize slugs
export const slugify = (text: string): string =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

// 1. LA CABAÑA STEAKHOUSE
export const LA_CABANA_PROFILE: BusinessProfile = {
  id: "la-cabana",
  slug: "la-cabana",
  name: "La Cabaña",
  shortName: "La Cabaña",
  heroImage: heroFarofa,
  gmbUrl: "https://www.google.com/maps/place/La+caba%C3%B1a/data=!4m7!3m6!1s0x8dcbf90501e71399:0x4736c3d9d822616f!8m2!3d8.2916621!4d-62.7337749!16s%2Fg%2F11p5rs9lmf",
  category: "Parrilla, Carnes & Steakhouse",
  specialtyTagline: "Cortes Madurados, Asado Tradicional y Parrillas Criollas",
  heroHeadline: "El Auténtico Asado a las Brasas en Alta Vista",
  heroSubtitle: "Cortes madurados con leña noble, punta trasera jugosa, chorizo artesanal, queso frito y las mejores parrilladas familiares de Puerto Ordaz.",
  rating: 4.6,
  reviewCount: 342,
  priceRange: "$$$",
  phone: "584143867590",
  displayPhone: "+58 414 386 7590",
  email: "info@lacabana.com",
  address: "Av. Guayana con Calle Cuchivero, Alta Vista",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 12:00 PM - 11:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2916621,-62.7337749&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/La+caba%C3%B1a/@8.2916621,-62.7337749,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/lacabanasteakhouse/",
    facebook: "https://www.facebook.com/lacabanapzo/",
  },
  features: ["Punta Trasera de Primera", "Parrillada Familiar", "Ambiente Clásico", "Delivery & Pickup"],
  reviews: [
    {
      id: "rev-lc-1",
      author: "Gustavo A. Morales",
      rating: 5,
      text: "La punta trasera servida en tabla caliente con yuca suave y guasacaca es de las mejores del oriente venezolano. Servicio rápido y atento.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-lc-2",
      author: "Carolina Fernández",
      rating: 5,
      text: "Un clásico indispensable en Alta Vista. Muy buen ambiente para almorzar en familia los domingos, carnes siempre suaves y con sabor a leña.",
      relativeTime: "Hace 2 semanas",
    },
    {
      id: "rev-lc-3",
      author: "Manuel E. Sifontes",
      rating: 5,
      text: "Los chorizos parrilleros y el queso telita asado de entrada son una delicia total. Buena selección de cervezas frías.",
      relativeTime: "Hace 1 mes",
    },
  ],
  offerings: [
    {
      id: "lc-punta",
      name: "Punta Trasera al Carbón (500g)",
      description: "Corte premium a la parrilla con sal marina gruesa, acompañada de yuca al vapor, queso a la plancha y guasacaca de la casa",
      price: 18.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["lc-cerveza", "lc-queso"],
    },
    {
      id: "lc-parrillada",
      name: "Parrillada Mixta La Cabaña (Para 2)",
      description: "Solomo de cuerito, pechuga de pollo marinada, chorizo criollo, morcilla, arepitas fritas con nata y ensalada mixta",
      price: 26.0,
      category: "cocina",
      image: dishParrilladaMixta,
      isChefRecommendation: true,
      pairsWellWith: ["lc-cerveza"],
    },
    {
      id: "lc-queso",
      name: "Queso Telita Asado con Nata Criolla",
      description: "Auténtico queso guayanés a la plancha con arepitas fritas y mantequilla campesina",
      price: 6.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: false,
    },
    {
      id: "lc-quesillo",
      name: "Quesillo Tradicional Venezolano",
      description: "Postre cremoso de leche condensada y vainilla cubierto de caramelo dorado tostado",
      price: 4.5,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: true,
    },
    {
      id: "lc-cerveza",
      name: "Cerveza Polar Pilsen / Solera Bien Fría",
      description: "Servida en vaso escarchado con hielo",
      price: 2.0,
      category: "bebidas",
      image: cervezaPolarImg,
      isChefRecommendation: false,
    },
  ],
};

// 2. EL MIRADOR DEL ÍTALO
export const EL_MIRADOR_ITALO_PROFILE: BusinessProfile = {
  id: "el-mirador-del-italo",
  slug: "el-mirador-del-italo",
  name: "El Mirador del Ítalo",
  shortName: "El Mirador",
  heroImage: heroNapoletana,
  gmbUrl: "https://www.google.com/maps/place/El+Mirador+del+Italo/data=!4m7!3m6!1s0x8dcbfba5362a823d:0xa6305965547bc1b3!8m2!3d8.2803824!4d-62.7095434!16s%2Fg%2F11h9d1pld9",
  category: "Cocina Italiana, Carnes & Terraza Panorámica",
  specialtyTagline: "Gastronomía Mediterránea con la Mejor Vista al Río Caroní",
  heroHeadline: "Gastronomía Selecta y Vista Panorámica al Caroní",
  heroSubtitle: "Ubicado dentro del Centro Ítalo Venezolano de Guayana. Una experiencia culinaria con pizzas al horno de leña, pastas frescas y cortes finos con vistas al atardecer.",
  rating: 4.7,
  reviewCount: 215,
  priceRange: "$$$",
  phone: "584147635511",
  displayPhone: "+58 414 763 5511",
  email: "info@elmiradordelitalo.com",
  address: "Centro Ítalo Venezolano de Guayana, Vía Toro Muerto",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Miércoles a Domingo: 12:00 PM - 11:30 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2803824,-62.7095434&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/El+Mirador+del+Italo/@8.2803824,-62.7095434,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/elmiradordelitalo/",
    facebook: "https://www.facebook.com/elmiradoritalopzo/",
  },
  features: ["Vista Panorámica al Río", "Pizzas al Horno de Piedra", "Terraza al Aire Libre", "Cava de Vinos"],
  reviews: [
    {
      id: "rev-mi-1",
      author: "Valeria Santoro",
      rating: 5,
      text: "La vista al atardecer sobre el Caroní es sencillamente mágica. Las pastas rellenas con trufa y el carpaccio de res son de nivel internacional.",
      relativeTime: "Hace 4 días",
    },
    {
      id: "rev-mi-2",
      author: "Diego R. Benítez",
      rating: 5,
      text: "Ambiente muy exclusivo y seguro dentro del club Ítalo. Las pizzas a la leña tienen la masa perfecta y el vino de la casa es excelente.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "mi-risotto",
      name: "Risotto ai Funghi Porcini & Tartufo",
      description: "Arroz arborio al dente con hongos porcini silvestres, mantequilla de trufa negra y parmesano reggiano de 24 meses",
      price: 16.0,
      category: "cocina",
      image: dishRisottoPorcini,
      isChefRecommendation: true,
      pairsWellWith: ["mi-vino"],
    },
    {
      id: "mi-pizza-parma",
      name: "Pizza Prosciutto di Parma & Rúgula",
      description: "Masa madre fina al horno de leña, pomodoro italiano, mozzarella fresca, prosciutto di Parma y láminas de parmesano",
      price: 14.5,
      category: "cocina",
      image: dishPizzaMargherita,
      isChefRecommendation: true,
      pairsWellWith: ["mi-tiramisu"],
    },
    {
      id: "mi-tiramisu",
      name: "Tiramisú al Mascarpone Veneziano",
      description: "Clásico postre italiano preparado al momento con café espresso recién extraído y cacao amargo",
      price: 6.0,
      category: "postres",
      image: tuttoTiramisu,
      isChefRecommendation: true,
    },
    {
      id: "mi-vino",
      name: "Copa de Vino Tinto Reserva",
      description: "Selección de uvas Cabernet Sauvignon / Malbec madurado en roble",
      price: 5.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: false,
    },
  ],
};

// 3. NAPOLETANA TRATTORIA Y PIZZERIA
export const NAPOLETANA_PROFILE: BusinessProfile = {
  id: "napoletana-trattoria-y-pizzeria",
  slug: "napoletana-trattoria-y-pizzeria",
  name: "Napoletana Trattoria y Pizzería",
  shortName: "Napoletana",
  heroImage: heroNapoletana,
  gmbUrl: "https://www.google.com/maps/place/Napoletana+Trattoria+y+Pizzeria/data=!4m7!3m6!1s0x8dcbfb04b1ff7f07:0x85b82c5a7eadbb61!8m2!3d8.3130586!4d-62.7227956!16s%2Fg%2F11thnp1xv7",
  category: "Pizzería Napolitana & Trattoria Italiana",
  specialtyTagline: "Pizzas de Masa Madre al Horno de Piedra y Pastas Napolitanas",
  heroHeadline: "Auténtica Pizza Napolitana en Castillito",
  heroSubtitle: "Fermentación lenta de 48 horas, borde aireado 'cornicione', pomodoro San Marzano y mozzarella fior di latte fundida al fuego vivo.",
  rating: 4.7,
  reviewCount: 168,
  priceRange: "$$",
  phone: "584125098158",
  displayPhone: "+58 412 509 8158",
  email: "info@napoletanatrattoriaypizzeria.com",
  address: "Parcela 20, Carrera Colombia, Castillito",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 12:00 PM - 10:30 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.3130586,-62.7227956&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Napoletana+Trattoria+y+Pizzeria/@8.3130586,-62.7227956,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/napoletana.pzo/",
    facebook: "https://www.facebook.com/napoletanapzo/",
  },
  features: ["Masa Madre 48h", "Horno de Piedra a 450°C", "Ingredientes Importados", "Takeout & Delivery"],
  reviews: [
    {
      id: "rev-nap-1",
      author: "Gabriel Vicentelli",
      rating: 5,
      text: "La mejor pizza estilo napolitano de Puerto Ordaz sin discusión. La masa ligera y suave, no te cae pesada, y la salsa de tomate sabe a gloria.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-nap-2",
      author: "Lucia Marcoccia",
      rating: 5,
      text: "La pizza Margherita con mozzarella di bufala y la Quattro Formaggi con miel picante son adictivas. Súper recomendado.",
      relativeTime: "Hace 3 semanas",
    },
  ],
  offerings: [
    {
      id: "nap-margherita",
      name: "Pizza Margherita D.O.P.",
      description: "Pomodoro San Marzano, mozzarella fior di latte fresca, hojas de albahaca fresca y aceite de oliva virgen extra",
      price: 11.0,
      category: "cocina",
      image: dishPizzaMargherita,
      isChefRecommendation: true,
      pairsWellWith: ["nap-cannoli"],
    },
    {
      id: "nap-diavola",
      name: "Pizza Diavola Piccante",
      description: "Mozzarella, salsa de tomate, salame picante italiano 'nduja y orégano silvestre",
      price: 13.5,
      category: "cocina",
      image: heroNapoletana,
      isChefRecommendation: true,
      pairsWellWith: ["nap-cannoli"],
    },
    {
      id: "nap-lasagna",
      name: "Lasagna Tradizionale Napolitana",
      description: "Capas de pasta artesanal con ragú de carne de res, ricotta cremosa, albondiguitas y queso parmesano",
      price: 12.5,
      category: "cocina",
      image: tuttoPasticho,
      isChefRecommendation: false,
    },
    {
      id: "nap-cannoli",
      name: "Cannoli Siciliani con Pistacho",
      description: "Masa frita crocante rellena de ricotta dulce, chispas de chocolate y pistachos molidos de Bronte",
      price: 4.5,
      category: "postres",
      image: dishCannoliSiciliani,
      isChefRecommendation: true,
    },
    {
      id: "nap-soda",
      name: "Soda Italiana de Frutos Rojos",
      description: "Agua mineral gasificada con sirope artesanal de moras, fresas y limón sutil",
      price: 3.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 1]?.image,
      isChefRecommendation: false,
    },
  ],
};

// 4. SHANKLISH PUERTO ORDAZ
export const SHANKLISH_PROFILE: BusinessProfile = {
  id: "shanklish-puerto-ordaz",
  slug: "shanklish-puerto-ordaz",
  name: "Shanklish Puerto Ordaz",
  shortName: "Shanklish",
  heroImage: heroShanklish,
  gmbUrl: "https://www.google.com/maps/place/Shanklish+Puerto+Ordaz/data=!4m7!3m6!1s0x8dcbfb85bffbe43b:0xfdfde059ea696f65!8m2!3d8.3099343!4d-62.7201004!16s%2Fg%2F11hh890xbl",
  category: "Auténtica Cocina Árabe & Libanesa",
  specialtyTagline: "Shawarmas, Shanklish Artesanal, Kibbe y Dulces Árabes",
  heroHeadline: "Tradición y Sabor del Líbano en Los Olivos",
  heroSubtitle: "El auténtico banquete libanés en Ciudad Guayana: queso shanklish artesanal con zátar y oliva, shawarmas jugosos, kibbe crujiente y mezze variado para compartir.",
  rating: 4.8,
  reviewCount: 194,
  priceRange: "$$",
  phone: "584249732879",
  displayPhone: "+58 424 973 2879",
  email: "info@shanklishpuertoordaz.com",
  address: "Casa 21, Carrera Ambato, Los Olivos",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Lunes a Domingo: 11:30 AM - 10:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.3099343,-62.7201004&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Shanklish+Puerto+Ordaz/@8.3099343,-62.7201004,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/shanklishpzo/",
    facebook: "https://www.facebook.com/shanklishpuertoordaz/",
  },
  features: ["Shanklish Artesanal Hecho en Casa", "Kibbe Frito y Crudo", "Platos Halal", "Pan Árabe Recién Salido"],
  reviews: [
    {
      id: "rev-sh-1",
      author: "Kamil El Hage",
      rating: 5,
      text: "El mejor queso shanklish curado de toda Guayana. Los shawarmas de carne con crema de ajo y salsa de ajonjolí (tahini) son inigualables.",
      relativeTime: "Hace 5 días",
    },
    {
      id: "rev-sh-2",
      author: "Daniela Kassar",
      rating: 5,
      text: "Excelente plato mixto de degustación. Hummus cremoso, tabaquitos de parra y kibbe con mucho sabor a especias libanesas.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "sh-plato-mixto",
      name: "Banquete Mixto Libanés (Mezze)",
      description: "Queso shanklish con tomate y aceite de oliva, kibbe frito de carne, hummus de garbanzo, tabaquitos de parra, ensalada tabule y pan árabe caliente",
      price: 15.5,
      category: "cocina",
      image: dishShanklishMezze,
      isChefRecommendation: true,
      pairsWellWith: ["sh-baklava", "sh-te"],
    },
    {
      id: "sh-shawarma",
      name: "Shawarma Especial de Carne y Pollo",
      description: "Finas láminas de res y pollo marinadas al carbón con crema de ajo de la casa, vegetales frescos y salsa tahini en pan árabe tostado",
      price: 7.5,
      category: "cocina",
      image: dishShawarmaPlatter,
      isChefRecommendation: true,
      pairsWellWith: ["sh-baklava"],
    },
    {
      id: "sh-kibbeh",
      name: "Kibbeh Frito Tradicional (4 Unidades)",
      description: "Croquetas crujientes de trigo bulgur y carne de res molida, rellenas de carne especiada, cebolla caramelizada y piñones tostados",
      price: 6.5,
      category: "cocina",
      image: dishKibbehFrito,
      isChefRecommendation: true,
      pairsWellWith: ["sh-shawarma"],
    },
    {
      id: "sh-baklava",
      name: "Baklava de Miel & Pistachos",
      description: "Capas crujientes de hojaldre filo bañadas en almíbar de azahar y nueces seleccionadas",
      price: 5.0,
      category: "postres",
      image: baklavaImg,
      isChefRecommendation: true,
    },
    {
      id: "sh-te",
      name: "Té Árabe con Hierbabuena Fresca",
      description: "Infusión aromática tradicional servida caliente en vaso de cristal labrado",
      price: 2.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 1]?.image,
      isChefRecommendation: false,
    },
  ],
};

// 5. SPA RESTOBAR
export const SPA_RESTOBAR_PROFILE: BusinessProfile = {
  id: "spa-restobar",
  slug: "spa-restobar",
  name: "Spa Restobar",
  shortName: "Spa Restobar",
  heroImage: heroSpaPaella,
  gmbUrl: "https://www.google.com/maps/place/Spa+Restobar/data=!4m7!3m6!1s0x8dcbfa2c4b34c105:0xadcf817fbd751f7c!8m2!3d8.3050602!4d-62.7234069!16s%2Fg%2F11b76lbjpl",
  category: "Cocina Mediterránea, Paellas & Mar y Tierra",
  specialtyTagline: "Famosos por sus Paellas de Mariscos y Cortes Mar y Tierra",
  heroHeadline: "Paellas de Mariscos, Fideuá y Alta Cocina en Chilemex",
  heroSubtitle: "El punto de encuentro gastronómico en Puerto Ordaz: paellas marineras rebosantes de mariscos frescos, fideuá con alioli, carnes al provenzal y coctelería premium.",
  rating: 4.6,
  reviewCount: 238,
  priceRange: "$$$",
  phone: "582869221550",
  displayPhone: "+58 286 922 1550",
  email: "info@sparestobar.com",
  address: "Urb. Chilemex, Calle Chile, Edif. Spa Médico Chilemex",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Lunes a Sábado: 12:00 PM - 11:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.3050602,-62.7234069&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Spa+Restobar/@8.3050602,-62.7234069,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/sparestobar/",
    facebook: "https://www.facebook.com/sparestobarpzo/",
  },
  features: ["Paellas Gigantes de Mariscos", "Fideuá Tradicional", "Ambiente Climatizado y Reservado", "Cava y Sangrías"],
  reviews: [
    {
      id: "rev-spa-1",
      author: "Luis Alejandro Medina",
      rating: 5,
      text: "La paella de mariscos es abundante, con langostinos, calamares y mejillones frescos. La mejor paella que he probado en Puerto Ordaz.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-spa-2",
      author: "Rosa María Yánez",
      rating: 5,
      text: "Excelente lugar en Chilemex para reuniones de trabajo y cumpleaños. El solomo a la parmesana y la jarra de sangría tinta son fantásticos.",
      relativeTime: "Hace 3 semanas",
    },
  ],
  offerings: [
    {
      id: "spa-paella",
      name: "Paella Marinera Especial Spa (Para 2)",
      description: "Arroz con azafrán español, langostinos, camarones gigantes, mejillones en concha, calamares y sofrito de pimientos asados",
      price: 28.0,
      category: "cocina",
      image: dishPaellaMariscos,
      isChefRecommendation: true,
      pairsWellWith: ["spa-sangria", "spa-crema"],
    },
    {
      id: "spa-fideua",
      name: "Fideuá de Mariscos con Alioli Casero",
      description: "Fideos tostados al horno caldosos con frutos del mar y salsa alioli suave de ajo y aceite de oliva",
      price: 22.0,
      category: "cocina",
      image: heroSpaPaella,
      isChefRecommendation: true,
      pairsWellWith: ["spa-sangria"],
    },
    {
      id: "spa-solomo",
      name: "Solomo al Provenzal",
      description: "Corte de res a la plancha bañado en reducción de vino blanco, ajo confitado y perejil con papas doradas",
      price: 18.0,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: false,
    },
    {
      id: "spa-crema",
      name: "Crema Catalana Quemada",
      description: "Crema pastelera perfumada con canela y piel de limón con crujiente capa de azúcar caramelizada",
      price: 5.5,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: true,
    },
    {
      id: "spa-sangria",
      name: "Jarra de Sangría Española Frutada",
      description: "Vino tinto joven con trozos de manzana, naranja fresca, licor de naranja y toque de canela",
      price: 12.0,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 6. FAROFA CHURRASQUERIA
export const FAROFA_PROFILE: BusinessProfile = {
  id: "farofa-churrasqueria",
  slug: "farofa-churrasqueria",
  name: "Farofa Churrasquería",
  shortName: "Farofa",
  heroImage: dishPicanhaChurrasco,
  gmbUrl: "https://www.google.com/maps/place/Farofa+Churrasqueria/data=!4m7!3m6!1s0x8dcbfb0039220f49:0xd06ff7dfc358895a!8m2!3d8.3057041!4d-62.7233235!16s%2Fg%2F11y3nxx67r",
  category: "Churrasquería Brasileña & Rodizio de Carnes",
  specialtyTagline: "Rodizio Brasileño Tradicional, Picanha y Piña Asada con Canela",
  heroHeadline: "El Auténtico Rodizio de Carnes Brasileño en Chilemex",
  heroSubtitle: "Desfile continuo de espadas con cortes nobles: picanha al punto, costillas de res braseadas, chorizo gaucho, corazón de pollo, barra libre de ensaladas y piña asada al fuego.",
  rating: 4.7,
  reviewCount: 282,
  priceRange: "$$$",
  phone: "584249085325",
  displayPhone: "+58 424 908 5325",
  email: "info@farofachurrasqueria.com",
  address: "C.C. Vplaza, Urb. Chilemex, Calle Chile",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 12:00 PM - 11:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.3057041,-62.7233235&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Farofa+Churrasqueria/@8.3057041,-62.7233235,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/farofachurrasqueria/",
    facebook: "https://www.facebook.com/farofachurrasqueriapzo/",
  },
  features: ["Rodizio Continuo de Espadas", "Picanha con Parmesano", "Barra de Ensaladas y Farofa", "Piña Asada con Canela"],
  reviews: [
    {
      id: "rev-fa-1",
      author: "Enrique S. Pinto",
      rating: 5,
      text: "La experiencia de rodizio es insuperable en la ciudad. Las espadas de picanha llegan humeando y la piña asada al final limpia el paladar a la perfección.",
      relativeTime: "Hace 4 días",
    },
    {
      id: "rev-fa-2",
      author: "Ana Lucía Rivas",
      rating: 5,
      text: "Excelente servicio de los camareros pasadores de carne. La farofa casera y el queso asado están exquisitos. Vale cada centavo.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "fa-rodizio",
      name: "Servicio Rodizio Completo Farofa",
      description: "Picanha clásica con sal gruesa, corte de res con queso parmesano, costillar al carbón, pollo envuelto en tocineta, farofa con huevo y buffet libre",
      price: 24.0,
      category: "cocina",
      image: dishPicanhaChurrasco,
      isChefRecommendation: true,
      pairsWellWith: ["fa-pina", "fa-caipirinha"],
    },
    {
      id: "fa-picanha-plato",
      name: "Plato Especial de Picanha al Plato (400g)",
      description: "Corte jugoso sellado a la parrilla con mantequilla de ajo, servido con arroz brasileño, farofa dorada y vinagreta",
      price: 18.0,
      category: "cocina",
      image: heroFarofa,
      isChefRecommendation: true,
      pairsWellWith: ["fa-pina"],
    },
    {
      id: "fa-pina",
      name: "Piña Asada a la Espada con Canela & Azúcar Moreno",
      description: "Rodajas tibias de piña caramelizada al fuego lento con canela aromática (digestivo tradicional)",
      price: 4.5,
      category: "postres",
      image: dishAbacaxiGrelhado,
      isChefRecommendation: true,
    },
    {
      id: "fa-pudim",
      name: "Pudim de Leite Condensado Brasileño",
      description: "Clásico flan brasileño sedoso bañado en abundante caramelo tostado",
      price: 5.0,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: false,
    },
    {
      id: "fa-caipirinha",
      name: "Caipirinha Clásica Brasileña",
      description: "Cachaça brasileña macerada con lima fresca y azúcar de caña",
      price: 5.0,
      category: "bebidas",
      image: menuItems[menuItems.length - 1]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 7. RESTAURANT Y MARISQUERÍA LA MANSIÓN DE LEONEL
export const LA_MANSION_LEONEL_PROFILE: BusinessProfile = {
  id: "la-mansion-de-leonel",
  slug: "la-mansion-de-leonel",
  name: "La Mansión de Leonel",
  shortName: "La Mansión",
  heroImage: dishPaellaMariscos,
  gmbUrl: "https://www.google.com/maps/place/Restaurant+Y+Marisqueria+La+Mansion+De+Leonel/data=!4m7!3m6!1s0x8dcbfa3bbb04ddcf:0xfdf5e7bc5d7fec22!8m2!3d8.3142942!4d-62.7168147!16s%2Fg%2F11cs4bz0fd",
  category: "Marisquería, Pescados Frescos & Gastronomía Marina",
  specialtyTagline: "Fosforera Oriental, Pescados Fritos del Río y Frutos del Mar",
  heroHeadline: "La Tradición Marina y del Río Caroní en Puerto Ordaz",
  heroSubtitle: "La marisquería de referencia en Ciudad Guayana: fosforera margariteña revitalizante, rueda de carite fresco, churrasco de mero a la plancha, camarones al ajillo y tostones playeros.",
  rating: 4.6,
  reviewCount: 310,
  priceRange: "$$",
  phone: "582869234812",
  displayPhone: "+58 286 923 4812",
  email: "info@lamansiondeleonel.com",
  address: "Calle Brasil con Carrera El Palmar, Castillito",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Lunes a Domingo: 11:00 AM - 9:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.3142942,-62.7168147&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Restaurant+Y+Marisqueria+La+Mansion+De+Leonel/@8.3142942,-62.7168147,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/lamansiondeleonel/",
    facebook: "https://www.facebook.com/lamansiondeleonelpzo/",
  },
  features: ["Fosforera Tradicional", "Pescado Frito con Tostones", "Cerveza Polar Vestida de Novia", "Ambiente Clásico"],
  reviews: [
    {
      id: "rev-ml-1",
      author: "Carlos E. Morillo",
      rating: 5,
      text: "La fosforera aquí es legendaria, concentrada con mariscos frescos y ese toque de ají dulce oriental que no tiene rival en Guayana.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-ml-2",
      author: "Beatriz Salazar",
      rating: 5,
      text: "El churrasco de mero y la rueda de carite frita vienen con ensalada rallada y tostones doraditos. Servicio rápido y muy atento.",
      relativeTime: "Hace 3 semanas",
    },
  ],
  offerings: [
    {
      id: "ml-fosforera",
      name: "Fosforera Criolla Especial La Mansión",
      description: "Sopa marina reconstituyente con pulpo, calamares, camarones, mejillones, chipichipi, ají dulce oriental y cilantro fresco",
      price: 12.0,
      category: "cocina",
      image: heroSpaPaella,
      isChefRecommendation: true,
      pairsWellWith: ["ml-polar"],
    },
    {
      id: "ml-carite",
      name: "Rueda de Carite Frito con Tostones & Ensalada",
      description: "Pescado fresco sazonado con ajo y limón, frito a la perfección con tostones crujientes y tártara casera",
      price: 14.5,
      category: "cocina",
      image: dishPaellaMariscos,
      isChefRecommendation: true,
      pairsWellWith: ["ml-polar"],
    },
    {
      id: "ml-camarones",
      name: "Camarones al Ajillo en Cazuela de Barro",
      description: "Camarones tiernos salteados en abundante aceite de oliva virgen extra, láminas de ajo tostado y perejil picado",
      price: 13.0,
      category: "cocina",
      image: tuttoFettuccine,
      isChefRecommendation: false,
    },
    {
      id: "ml-quesillo",
      name: "Quesillo Criollo Casero",
      description: "Tradicional quesillo dorado con caramelo tostado y toque de ron añejo",
      price: 4.5,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: true,
    },
    {
      id: "ml-polar",
      name: "Cerveza Polar Pilsen / Solera 'Vestida de Novia'",
      description: "Servida a temperatura bajo cero en vaso escarchado",
      price: 2.0,
      category: "bebidas",
      image: cervezaPolarImg,
      isChefRecommendation: false,
    },
  ],
};

// 8. CASA ALBA
export const CASA_ALBA_PROFILE: BusinessProfile = {
  id: "casa-alba",
  slug: "casa-alba",
  name: "Casa Alba",
  shortName: "Casa Alba",
  heroImage: dishRisottoPorcini,
  gmbUrl: "https://www.google.com/maps/place/Casa+Alba/data=!4m7!3m6!1s0x8dcbfb9ccab23d3d:0x82a8302fda078f92!8m2!3d8.3040273!4d-62.7159352!16s%2Fg%2F11n5ks_96t",
  category: "Cocina de Autor, Gastrobar & Coctelería de Vanguardia",
  specialtyTagline: "Gastronomía Contemporánea, Tapas de Autor y Coctelería de Autor",
  heroHeadline: "Experiencia Gastronómica de Autor en Puerto Ordaz",
  heroSubtitle: "Un espacio íntimo y vanguardista donde el diseño, la cocina de autor y la mixología premium se fusionan en platos sorprendentes y veladas inolvidables.",
  rating: 4.8,
  reviewCount: 185,
  priceRange: "$$$",
  phone: "584148902144",
  displayPhone: "+58 414 890 2144",
  email: "reservas@casaalbapzo.com",
  address: "Calle Los Pinos con Carrera El Callao, Los Olivos",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Miércoles a Domingo: 5:00 PM - 1:00 AM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.3040273,-62.7159352&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Casa+Alba/@8.3040273,-62.7159352,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/casaalbapzo/",
    facebook: "https://www.facebook.com/casaalbapzo/",
  },
  features: ["Cocina de Autor", "Mixología Signature", "Ambiente Íntimo & Sofisticado", "Música Lounge"],
  reviews: [
    {
      id: "rev-ca-1",
      author: "Ignacio De Abreu",
      rating: 5,
      text: "La propuesta gastronómica más refinada de Puerto Ordaz. El carpaccio trufado y los cócteles de autor tienen un nivel estético y de sabor sobresaliente.",
      relativeTime: "Hace 4 días",
    },
    {
      id: "rev-ca-2",
      author: "Camila V. Arismendi",
      rating: 5,
      text: "El diseño del lugar es espectacular, perfecto para citas románticas o celebraciones especiales. Cada plato es una obra de arte.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "ca-atun",
      name: "Tataki de Atún Rojo en Costra de Ajonjolí",
      description: "Lomo de atún sellado al momento con reducción de ponzu cítrica, aguacate cremoso y mayonesa de wasabi suave",
      price: 17.5,
      category: "cocina",
      image: dishRisottoPorcini,
      isChefRecommendation: true,
      pairsWellWith: ["ca-coctel"],
    },
    {
      id: "ca-solomillo",
      name: "Medallón de Solomo con Reducción al Malbec",
      description: "Carne tierna madurada a la brasa sobre puré trufado de papas rústicas y espárragos salteados en mantequilla clarificada",
      price: 21.0,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["ca-coctel"],
    },
    {
      id: "ca-tacos",
      name: "Tacos de Salmón & Maracuyá (3 Unidades)",
      description: "Tortillas crocantes con tartar de salmón fresco, emulsión de parchita y cebollas encurtidas",
      price: 13.5,
      category: "cocina",
      image: dishPizzaMargherita,
      isChefRecommendation: false,
    },
    {
      id: "ca-fondant",
      name: "Volcán Fondant de Chocolate Criollo 70%",
      description: "Bizcocho tibio de chocolate fino de aroma venezolano con corazón fluido, acompañado de helado artesanal de vainilla",
      price: 7.0,
      category: "postres",
      image: tuttoTiramisu,
      isChefRecommendation: true,
    },
    {
      id: "ca-coctel",
      name: "Cóctel Signature Casa Alba Smoke & Gold",
      description: "Ron añejo venezolano de 12 años, bitter aromático ahumado con madera de roble, naranja deshidratada y escarcha de oro comestible",
      price: 8.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 9. LA POSADA DE CHIQUITO TASCA
export const LA_POSADA_CHIQUITO_PROFILE: BusinessProfile = {
  id: "la-posada-de-chiquito-tasca",
  slug: "la-posada-de-chiquito-tasca",
  name: "La Posada de Chiquito Tasca",
  shortName: "La Posada",
  heroImage: heroSpaPaella,
  gmbUrl: "https://www.google.com/maps/place/La+Posada+de+Chiquito+Tasca/data=!4m7!3m6!1s0x8dcbfa3c3e4277eb:0x49c167b5a013f48c!8m2!3d8.3172547!4d-62.7158572!16s%2Fg%2F1tggvkkt",
  category: "Tasca Española, Tapas & Taberna Tradicional",
  specialtyTagline: "Tapas Españolas, Tortilla Gallega, Pulpo a la Gallega y Jamón Serrano",
  heroHeadline: "La Auténtica Tasca y Taberna Española en Castillito",
  heroSubtitle: "Más de 30 años de tradición sirviendo lo más sabroso de la madre patria: pulpo a feira, pimientos de padrón, callos a la madrileña, sangría de jarra y ambiente de taberna alegre.",
  rating: 4.5,
  reviewCount: 295,
  priceRange: "$$",
  phone: "582869230554",
  displayPhone: "+58 286 923 0554",
  email: "info@laposadadechiquito.com",
  address: "Calle San Félix, Edif. La Posada, Castillito",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 12:00 PM - 11:30 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.3172547,-62.7158572&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/La+Posada+de+Chiquito+Tasca/@8.3172547,-62.7158572,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/laposadadechiquitopzo/",
    facebook: "https://www.facebook.com/laposadadechiquito/",
  },
  features: ["Tapas Tradicionales", "Pulpo a la Gallega", "Jarras de Sangría de la Casa", "Ambiente Típico Español"],
  reviews: [
    {
      id: "rev-pc-1",
      author: "Fernando Gómez",
      rating: 5,
      text: "Un lugar histórico en Castillito. Los calamares a la romana y el pulpo con pimentón de la vera te transportan directo a Galicia.",
      relativeTime: "Hace 2 semanas",
    },
    {
      id: "rev-pc-2",
      author: "Marta R. Domínguez",
      rating: 5,
      text: "La tortilla española bien jugosa y los montaditos de jamón con tomate son imperdibles. Muy buena atención y sangría deliciosa.",
      relativeTime: "Hace 1 mes",
    },
  ],
  offerings: [
    {
      id: "pc-pulpo",
      name: "Pulpo a la Gallega (A Feira)",
      description: "Tentáculos de pulpo tierno cocidos al punto sobre cama de papas al vapor, con pimentón dulce y picante, sal marina y aceite de oliva virgen",
      price: 16.5,
      category: "cocina",
      image: dishPaellaMariscos,
      isChefRecommendation: true,
      pairsWellWith: ["pc-sangria"],
    },
    {
      id: "pc-tortilla",
      name: "Tortilla Española Tradicional Jugosa",
      description: "Tortilla de papas confitadas con cebolla tierna y huevos de campo, cocida a la minuta con centro cremoso",
      price: 8.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["pc-sangria"],
    },
    {
      id: "pc-calamares",
      name: "Calamares Fritos a la Romana",
      description: "Aros de calamar fresco rebozados y crujientes con rodajas de limón y alioli tradicional",
      price: 11.0,
      category: "cocina",
      image: tuttoFettuccine,
      isChefRecommendation: false,
    },
    {
      id: "pc-crema",
      name: "Crema Catalana Caramelizada",
      description: "Postre tradicional español con costra fina de caramelo crujiente y aroma a canela y cítricos",
      price: 4.8,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: true,
    },
    {
      id: "pc-sangria",
      name: "Jarra de Sangría de la Casa Chiquito (1L)",
      description: "Receta secreta de vino tinto español, brandi, frutas maceradas y soda fría",
      price: 10.0,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 10. CASA CLUB
export const CASA_CLUB_PROFILE: BusinessProfile = {
  id: "casa-club",
  slug: "casa-club",
  name: "Casa Club",
  shortName: "Casa Club",
  heroImage: dishParrilladaMixta,
  gmbUrl: "https://www.google.com/maps/place/Casa+Club/data=!4m7!3m6!1s0x8dcbf9f6059c4787:0x142a6e3abb97c9c5!8m2!3d8.2869718!4d-62.7345678!16s%2Fg%2F11hf2dm5ck",
  category: "Club Social, Restaurante Familiar & Eventos",
  specialtyTagline: "Gastronomía Social, Almuerzos Ejecutivos y Celebraciones Privadas",
  heroHeadline: "Gastronomía y Confort Social en Alta Vista Sur",
  heroSubtitle: "Punto de encuentro para compartir en familia y reuniones corporativas: cocina variada internacional, almuerzos ejecutivos, parrilladas y salones confortables para eventos.",
  rating: 4.5,
  reviewCount: 220,
  priceRange: "$$",
  phone: "584148761230",
  displayPhone: "+58 414 876 1230",
  email: "contacto@casaclubpzo.com",
  address: "Av. Las Américas, Alta Vista Sur",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Lunes a Domingo: 11:30 AM - 10:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2869718,-62.7345678&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Casa+Club/@8.2869718,-62.7345678,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/casaclubpzo/",
    facebook: "https://www.facebook.com/casaclubpzo/",
  },
  features: ["Amplios Salones Climatizados", "Menú Ejecutivo Semanal", "Estacionamiento Privado con Vigilancia", "Servicio para Fiestas"],
  reviews: [
    {
      id: "rev-cc-1",
      author: "Javier Rondón",
      rating: 5,
      text: "Excelente opción en Alta Vista para almorzar tranquilo o celebrar eventos familiares. Las carnes a la brasa y pastas son de gran calidad.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-cc-2",
      author: "Patricia Velásquez",
      rating: 5,
      text: "La atención del personal es muy educada y las instalaciones son cómodas y seguras. Muy recomendado para almuerzos de negocios.",
      relativeTime: "Hace 3 semanas",
    },
  ],
  offerings: [
    {
      id: "cc-cordon",
      name: "Pechuga Cordon Bleu en Salsa Cuatro Quesos",
      description: "Pechuga de pollo empanizada rellena de jamón ahumado y queso fundido con papas a la francesa y ensalada césar",
      price: 13.5,
      category: "cocina",
      image: tuttoPasticho,
      isChefRecommendation: true,
      pairsWellWith: ["cc-smoothie"],
    },
    {
      id: "cc-parrilla",
      name: "Parrilla Ejecutiva Casa Club",
      description: "Corte de res jugoso con chorizo parrillero, tostones dorados, queso guayanés a la plancha y guasacaca",
      price: 15.0,
      category: "cocina",
      image: dishParrilladaMixta,
      isChefRecommendation: true,
      pairsWellWith: ["cc-smoothie"],
    },
    {
      id: "cc-pasta",
      name: "Pasta Corta al Pesto Genovés con Pollo",
      description: "Penne al dente bañado en salsa pesto artesanal de albahaca fresca, nueces, ajo y queso pecorino",
      price: 11.5,
      category: "cocina",
      image: tuttoFettuccine,
      isChefRecommendation: false,
    },
    {
      id: "cc-marquesa",
      name: "Marquesa Casera de Chocolate Criollo",
      description: "Capas de galleta maría intercaladas con suave pudín de chocolate oscuro y lluvia de lluvia de cacao",
      price: 4.5,
      category: "postres",
      image: tuttoTiramisu,
      isChefRecommendation: true,
    },
    {
      id: "cc-smoothie",
      name: "Batido Natural de Frutas Tropicales",
      description: "Preparado al momento con pulpa natural de fresa, parchita o mango",
      price: 3.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 1]?.image,
      isChefRecommendation: false,
    },
  ],
};

// 11. EL BODEGÓN DE MIGUEL RESTOBAR
export const EL_BODEGON_MIGUEL_PROFILE: BusinessProfile = {
  id: "el-bodegon-de-miguel-restobar",
  slug: "el-bodegon-de-miguel-restobar",
  name: "El Bodegón de Miguel Restobar",
  shortName: "El Bodegón de Miguel",
  heroImage: dishParrilladaMixta,
  gmbUrl: "https://www.google.com/maps/place/El+Bodeg%C3%B3n+de+Miguel+Restobar/data=!4m7!3m6!1s0x8dcbff48f4b2b4bd:0x6c2d800a13b051c7!8m2!3d8.2635595!4d-62.7904428!16s%2Fg%2F11w42524qy",
  category: "Restobar, Parrilladas & Tablas para Compartir",
  specialtyTagline: "Parrillas Mixtas, Alitas Crispy, Hamburguesas y Cervezas Importadas",
  heroHeadline: "El Buen Sabor y Ambiente de Bodegón en Unare",
  heroSubtitle: "La parada obligada en Puerto Ordaz para disfrutar de tablas de picar abundantes, parrillitas al carbón, tragos preparados y la mejor selección de cervezas frías.",
  rating: 4.6,
  reviewCount: 164,
  priceRange: "$$",
  phone: "584148559021",
  displayPhone: "+58 414 855 9021",
  email: "info@elbodegondemiguel.com",
  address: "Av. Paseo Caroní, sector Unare",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Lunes a Domingo: 12:00 PM - 12:00 AM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2635595,-62.7904428&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/El+Bodeg%C3%B3n+de+Miguel+Restobar/@8.2635595,-62.7904428,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/elbodegondemiguel/",
    facebook: "https://www.facebook.com/elbodegondemiguelpzo/",
  },
  features: ["Tablas de Picar Abundantes", "Música en Vivo los Fines de Semana", "Cervezas Nacionales e Importadas", "Parrillas al Carbón"],
  reviews: [
    {
      id: "rev-bm-1",
      author: "Nelson C. Parra",
      rating: 5,
      text: "La tabla de carnes y embutidos para picar entre amigos es insuperable. Las cervezas siempre bien frías y la música crea un ambientazo.",
      relativeTime: "Hace 5 días",
    },
    {
      id: "rev-bm-2",
      author: "Lorena M. Bastardo",
      rating: 5,
      text: "Las hamburguesas gigantes y las papas cargadas de queso cheddar y tocineta son una locura. Excelente relación precio-calidad.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "bm-tabla",
      name: "Gran Tabla de Picar Miguel (Para 3-4)",
      description: "Cortes de solomo a la plancha, pollo crispy, chorizos criollos, tequeños gigantes de queso blanco, tostones y salsas mixtas",
      price: 22.0,
      category: "cocina",
      image: dishParrilladaMixta,
      isChefRecommendation: true,
      pairsWellWith: ["bm-polar"],
    },
    {
      id: "bm-burger",
      name: "Burger Monster Bodegón (Doble Carne 300g)",
      description: "Doble carne artesanal smash, queso cheddar americano fundido, tocineta ahumada crujiente, cebolla caramelizada y salsa especial",
      price: 9.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["bm-polar"],
    },
    {
      id: "bm-alitas",
      name: "Alitas de Pollo Crispy BBQ Ahumada (10 Unidades)",
      description: "Alitas doradas bañadas en salsa BBQ dulce con miel o picante búfalo, servidas con bastones de apio y aderezo ranch",
      price: 8.5,
      category: "cocina",
      image: dishKibbehFrito,
      isChefRecommendation: false,
    },
    {
      id: "bm-brownie",
      name: "Brownie Melcochudo con Helado de Mantecado",
      description: "Brownie tibio con abundante chocolate fudge, nueces y bola de helado con salsa de caramelo",
      price: 5.0,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: true,
    },
    {
      id: "bm-polar",
      name: "Balde de Cervezas Polar Pilsen / Solera (6 Unidades)",
      description: "En cubeta con abundante hielo frappé",
      price: 10.0,
      category: "bebidas",
      image: cervezaSoleraImg,
      isChefRecommendation: true,
    },
  ],
};

// 12. OPORTO'S RESTAURANT
export const OPORTOS_PROFILE: BusinessProfile = {
  id: "oportos-restaurant",
  slug: "oportos-restaurant",
  name: "Oporto's Restaurant",
  shortName: "Oporto's",
  heroImage: dishPaellaMariscos,
  gmbUrl: "https://www.google.com/maps/place/Oporto%27s+Restaurant/data=!4m7!3m6!1s0x8dcbf962e0f600a3:0x649c8bd8db7a8661!8m2!3d8.2912276!4d-62.7352021!16s%2Fg%2F1q5gj_j_q",
  category: "Cocina Portuguesa, Pescados & Carnes a la Brasa",
  specialtyTagline: "Bacalao a la Vizcaína, Espetadas en Vara de Laurel y Mariscos",
  heroHeadline: "La Tradición Lusitana y Sabores de Portugal en Alta Vista",
  heroSubtitle: "Herederos de la mejor gastronomía portuguesa en Guayana: auténtico bacalao preparado en múltiples estilos, espetadas de solomo a la brasa con laurel y vinos de Porto.",
  rating: 4.6,
  reviewCount: 320,
  priceRange: "$$$",
  phone: "582869614488",
  displayPhone: "+58 286 961 4488",
  email: "info@oportosrestaurant.com",
  address: "Calle Cuchivero con Carrera Tocoma, Alta Vista",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 12:00 PM - 11:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2912276,-62.7352021&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Oporto%27s+Restaurant/@8.2912276,-62.7352021,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/oportosrestaurant/",
    facebook: "https://www.facebook.com/oportosrestaurantpzo/",
  },
  features: ["Bacalao Importado Tradicional", "Espetada Portuguesa en Vara de Laurel", "Milho Frito Típico", "Vinos Verdes y de Oporto"],
  reviews: [
    {
      id: "rev-op-1",
      author: "Joao Manuel Da Silva",
      rating: 5,
      text: "El Bacalhau à Gomes de Sá y la espetada de lomo ensartada en rama de laurel con milho frito son auténticos como en Madeira. Excelente atención.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-op-2",
      author: "Mariángel C. Quintero",
      rating: 5,
      text: "Un clásico de prestigio en Alta Vista. Muy sobrio, seguro y con platos de mariscos y carnes de altísima calidad.",
      relativeTime: "Hace 3 semanas",
    },
  ],
  offerings: [
    {
      id: "op-bacalao",
      name: "Bacalhau à Gomes de Sá Tradicional",
      description: "Lomos de bacalao desalado confitado en aceite de oliva virgen extra portugués con papas torneadas, cebolla tierna, aceitunas negras y huevo duro",
      price: 19.5,
      category: "cocina",
      image: dishPaellaMariscos,
      isChefRecommendation: true,
      pairsWellWith: ["op-vinho"],
    },
    {
      id: "op-espetada",
      name: "Espetada Madeirense en Vara de Laurel",
      description: "Trozos de lomo de res ensartados en rama de laurel fresco, asados al carbón con sal gruesa y mantequilla de ajo, acompañados de milho frito",
      price: 18.0,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["op-vinho"],
    },
    {
      id: "op-caldo",
      name: "Caldo Verde Tradicional con Chouriço",
      description: "Sopa reconfortante de puré de papas y col verde finamente picada con rebanadas de chorizo portugués",
      price: 7.5,
      category: "cocina",
      image: tuttoPasticho,
      isChefRecommendation: false,
    },
    {
      id: "op-pasteles",
      name: "Pastéis de Nata (Pasteles de Belém - 2 Unidades)",
      description: "Tortitas hojaldradas crujientes rellenas de crema pastelera horneada con toque de canela molida",
      price: 5.0,
      category: "postres",
      image: dishCannoliSiciliani,
      isChefRecommendation: true,
    },
    {
      id: "op-vinho",
      name: "Copa de Vinho Verde / Vino de Oporto Reserva",
      description: "Fresco y aromático vino portugués traído de las colinas del Duero",
      price: 6.0,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 13. TASCA RESTAURANT JAI-ALAI
export const JAI_ALAI_PROFILE: BusinessProfile = {
  id: "tasca-restaurant-jai-alai",
  slug: "tasca-restaurant-jai-alai",
  name: "Tasca Restaurant Jai-Alai",
  shortName: "Jai-Alai",
  heroImage: dishPaellaMariscos,
  gmbUrl: "https://www.google.com/maps/place/Tasca+Restaurant+Jai-Alai/data=!4m7!3m6!1s0x8dcbfa3054fa607b:0xaf42d3ec93f196a5!8m2!3d8.308732!4d-62.7179222!16s%2Fg%2F1t_khk_x",
  category: "Tasca Vasca & Española, Marisquería y Asados",
  specialtyTagline: "Tapas Españolas, Pescados a la Vasca, Paellas y Jamón Ibérico",
  heroHeadline: "La Tradición Vasca y Española en Puerto Ordaz",
  heroSubtitle: "Un clásico gastronómico de Castillito: pimientos del piquillo rellenos, bacalao al pil-pil, cazuela de mariscos y ambiente tradicional de tasca con barra de tapas.",
  rating: 4.6,
  reviewCount: 380,
  priceRange: "$$$",
  phone: "582869233671",
  displayPhone: "+58 286 923 3671",
  email: "info@tascajaialai.com",
  address: "Calle Ciudad Piar con Carrera El Palmar, Castillito",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 12:00 PM - 11:30 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.308732,-62.7179222&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Tasca+Restaurant+Jai-Alai/@8.308732,-62.7179222,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/jaialaipzo/",
    facebook: "https://www.facebook.com/tascajaialai/",
  },
  features: ["Bacalao al Pil-Pil", "Paellas Marineras", "Cava de Vinos", "Barra de Tapas"],
  reviews: [
    {
      id: "rev-ja-1",
      author: "Iñaki Mendizábal",
      rating: 5,
      text: "El mejor bacalao al pil-pil y las almejas a la marinera de todo el estado Bolívar. El servicio es atento a la antigua usanza.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-ja-2",
      author: "Susana Delgado",
      rating: 5,
      text: "Ambiente muy acogedor y seguro. La sangría de la casa y los calamares en su tinta son excepcionales.",
      relativeTime: "Hace 3 semanas",
    },
  ],
  offerings: [
    {
      id: "ja-bacalao",
      name: "Bacalao al Pil-Pil Estilo Jai-Alai",
      description: "Lomo de bacalao confitado a baja temperatura con emulsión de ajo, aceite de oliva virgen y guindillas",
      price: 19.0,
      category: "cocina",
      image: dishPaellaMariscos,
      isChefRecommendation: true,
      pairsWellWith: ["ja-sangria"],
    },
    {
      id: "ja-cazuela",
      name: "Cazuela Marinera de Mariscos en Barro",
      description: "Camarones gigantes, calamares, mejillones y pulpo en salsa espesa al vino blanco con perejil fresco",
      price: 17.5,
      category: "cocina",
      image: heroSpaPaella,
      isChefRecommendation: true,
      pairsWellWith: ["ja-sangria"],
    },
    {
      id: "ja-pimientos",
      name: "Pimientos del Piquillo Rellenos de Centollo",
      description: "Pimientos asados rellenos de mariscos gratinados con salsa suave de pimientos",
      price: 11.0,
      category: "cocina",
      image: tuttoPasticho,
      isChefRecommendation: false,
    },
    {
      id: "ja-natillas",
      name: "Natillas Madrileñas con Canela & Galleta",
      description: "Crema suave aromatizada con vainilla natural, canela y galleta maría crujiente",
      price: 4.5,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: true,
    },
    {
      id: "ja-sangria",
      name: "Jarra de Sangría Especial Jai-Alai",
      description: "Vino tinto español con maceración de frutas frescas, brandi y soda bien fría",
      price: 11.0,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 14. EL SAZONAR
export const EL_SAZONAR_PROFILE: BusinessProfile = {
  id: "el-sazonar",
  slug: "el-sazonar",
  name: "El Sazonar",
  shortName: "El Sazonar",
  heroImage: heroArepaCriollo,
  gmbUrl: "https://www.google.com/maps/place/EL+SAZONAR/data=!4m7!3m6!1s0x8dcbf9400882ec71:0x86e90cbf61e78c7!8m2!3d8.2822003!4d-62.7537439!16s%2Fg%2F11hf8czc6c",
  category: "Cocina Criolla Tradicional & Menús Caseros",
  specialtyTagline: "Almuerzos Ejecutivos, Pabellón Criollo, Asado Negro y Sopas",
  heroHeadline: "El Auténtico Sazón Criollo de Hogar en Unare",
  heroSubtitle: "Comida venezolana casera con generosidad: pabellón criollo completo, asado negro caraqueño, sopas del día reconfortantes y hervidos sabatinos.",
  rating: 4.5,
  reviewCount: 140,
  priceRange: "$",
  phone: "584148972314",
  displayPhone: "+58 414 897 2314",
  email: "info@elsazonarpzo.com",
  address: "Av. Paseo Caroní, Centro Comercial Unare, Local 5",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Lunes a Sábado: 7:30 AM - 4:30 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2822003,-62.7537439&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/EL+SAZONAR/@8.2822003,-62.7537439,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/elsazonarpzo/",
    facebook: "https://www.facebook.com/elsazonar/",
  },
  features: ["Almuerzos Ejecutivos Diarios", "Hervidos los Sábados", "Pabellón Tradicional", "Delivery Rápido en Unare"],
  reviews: [
    {
      id: "rev-es-1",
      author: "José Gregorio Rivas",
      rating: 5,
      text: "El sazón es de verdad como el de mamá. Las porciones son bien despachadas y la sopa de costilla de los sábados levanta muertos.",
      relativeTime: "Hace 2 semanas",
    },
    {
      id: "rev-es-2",
      author: "Yulimar Blanco",
      rating: 5,
      text: "Los mejores almuerzos de Unare, limpios, rápidos y con un asado negro con tajadas y arroz inmejorable.",
      relativeTime: "Hace 1 mes",
    },
  ],
  offerings: [
    {
      id: "es-pabellon",
      name: "Pabellón Criollo Especial",
      description: "Carne mechada jugosa, caraotas negras con queso blanco rallado, arroz blanco suelto y tajadas doradas de plátano maduro",
      price: 8.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["es-papelon"],
    },
    {
      id: "es-asado",
      name: "Asado Negro en Reducción de Papelón",
      description: "Muchacho redondo cocido lentamente en salsa oscura de papelón tostado, ají dulce y vino tinto con puré de papas",
      price: 9.5,
      category: "cocina",
      image: dishParrilladaMixta,
      isChefRecommendation: true,
      pairsWellWith: ["es-papelon"],
    },
    {
      id: "es-sopa",
      name: "Sopa de Costilla / Hervido de Res Criollo",
      description: "Caldoso y abundante con verduras frescas (yuca, ocumo, plátano verde, maíz) y cilantro",
      price: 6.0,
      category: "cocina",
      image: heroSpaPaella,
      isChefRecommendation: false,
    },
    {
      id: "es-dulce-lechoza",
      name: "Dulce de Lechoza Criollo con Clavos de Olor",
      description: "Tiras cristalizadas de lechoza verde cocidas en almíbar espeso de papelón y canela",
      price: 3.5,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: true,
    },
    {
      id: "es-papelon",
      name: "Papelón con Limón Fresco Frappé",
      description: "Bebida típica venezolana refrescante a base de caña pura y limón criollo recién exprimido",
      price: 2.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 1]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 15. TOMASA RESTAURANT
export const TOMASA_PROFILE: BusinessProfile = {
  id: "tomasa-restaurant",
  slug: "tomasa-restaurant",
  name: "Tomasa Restaurant",
  shortName: "Tomasa",
  heroImage: dishRisottoPorcini,
  gmbUrl: "https://www.google.com/maps/place/Tomasa+Restaurant/data=!4m7!3m6!1s0x8dcbf964be5e9a97:0x3aa4d049aa80932d!8m2!3d8.2918056!4d-62.7395414!16s%2Fg%2F1yglpdn0m",
  category: "Cocina Internacional & Cortes Prime",
  specialtyTagline: "Alta Gastronomía, Cortes Madurados, Risottos y Cava Exclusiva",
  heroHeadline: "Elegancia Gastronómica y Cocina Prime en Alta Vista",
  heroSubtitle: "Uno de los referentes gourmet más galardonados de Ciudad Guayana: carnes maduradas importadas, pastas artesanales con trufa, pesca blanca del día y atención de etiqueta.",
  rating: 4.7,
  reviewCount: 310,
  priceRange: "$$$$",
  phone: "582869622941",
  displayPhone: "+58 286 962 2941",
  email: "reservaciones@tomasarestaurant.com",
  address: "Av. Las Américas, Edif. Banco Guayana, Alta Vista",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Lunes a Domingo: 12:00 PM - 11:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2918056,-62.7395414&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Tomasa+Restaurant/@8.2918056,-62.7395414,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/tomasarestaurant/",
    facebook: "https://www.facebook.com/tomasapzo/",
  },
  features: ["Cortes Angus Certificados", "Salón VIP Ejecutivo", "Cava Climatizada", "Sommelier en Sala"],
  reviews: [
    {
      id: "rev-to-1",
      author: "Dr. Eduardo Arreaza",
      rating: 5,
      text: "La calidad de los cortes y la preparación del Tomahawk y el risotto de hongos no tienen comparación en el oriente del país. Excelente servicio.",
      relativeTime: "Hace 5 días",
    },
    {
      id: "rev-to-2",
      author: "María Alejandra Bellorín",
      rating: 5,
      text: "El restaurante ideal para cerrar negocios o celebrar aniversarios. La atmósfera es sobria, lujosa y sumamente agradable.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "to-ribeye",
      name: "Ribeye Steak Angus Madurado (450g)",
      description: "Corte marmoleado con mantequilla de romero y ajo negro, acompañado de vegetales glaseados y milhojas de papa",
      price: 24.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["to-vino"],
    },
    {
      id: "to-salmon",
      name: "Salmón Noruego en Salsa de Eneldo & Espárragos",
      description: "Filete de salmón rosado sellado en piel crocante con emulsión tibia de cítricos y espárragos trigueros",
      price: 22.0,
      category: "cocina",
      image: dishRisottoPorcini,
      isChefRecommendation: true,
      pairsWellWith: ["to-vino"],
    },
    {
      id: "to-carpaccio",
      name: "Carpaccio de Lomito con Lascas de Parmesano",
      description: "Finas láminas de lomito fresco con alcaparras baby, aceite de oliva trufado y focaccia tostada",
      price: 13.0,
      category: "cocina",
      image: dishPizzaMargherita,
      isChefRecommendation: false,
    },
    {
      id: "to-cheesecake",
      name: "Cheesecake Horneado con Frutos del Bosque",
      description: "Tarta de queso crema suave con base de almendras y reducción casera de frambuesas y moras",
      price: 6.5,
      category: "postres",
      image: dishCannoliSiciliani,
      isChefRecommendation: true,
    },
    {
      id: "to-vino",
      name: "Copa de Vino Gran Reserva Sommelier",
      description: "Etiqueta seleccionada madurada en barricas de roble francés",
      price: 7.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 16. SPENCER STREET FOOD
export const SPENCER_STREET_FOOD_PROFILE: BusinessProfile = {
  id: "spencer-street-food",
  slug: "spencer-street-food",
  name: "Spencer Street Food",
  shortName: "Spencer",
  heroImage: heroBurgerStreet,
  gmbUrl: "https://www.google.com/maps/place/SPENCER+STREET+FOOD+@spencer_streetfood/data=!4m7!3m6!1s0x8dcbf914b4c481ad:0xda9c9b78d9e89d23!8m2!3d8.2746723!4d-62.7696673!16s%2Fg%2F11n974n6xq",
  category: "Street Food Gourmet, Smash Burgers & Hot Dogs",
  specialtyTagline: "Smash Burgers Dobles, Papas Loaded, Perros Calientes y Salsas de Autor",
  heroHeadline: "El Mejor Street Food Urbano en Puerto Ordaz",
  heroSubtitle: "Hamburguesas estilo smash crujientes con costra dorada, quesos derretidos, tocineta ahumada, papas trufadas y salsas especiales en pan brioche artesanal.",
  rating: 4.8,
  reviewCount: 220,
  priceRange: "$$",
  phone: "584126782341",
  displayPhone: "+58 412 678 2341",
  email: "contacto@spencerstreetfood.com",
  address: "Av. Atlántico con Calle Caurimare, Unare",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Miércoles a Domingo: 5:00 PM - 12:00 AM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2746723,-62.7696673&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/SPENCER+STREET+FOOD/@8.2746723,-62.7696673,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/spencer_streetfood/",
    facebook: "https://www.facebook.com/spencerstreetfood/",
  },
  features: ["Smash Burgers Dobles", "Pan Brioche de Mantequilla", "Papas Cargadas", "Take Away y Delivery"],
  reviews: [
    {
      id: "rev-sp-1",
      author: "Kevin Zerpa",
      rating: 5,
      text: "La Spencer Truffled Burger con cebolla caramelizada y queso cheddar americano es la mejor hamburguesa de Guayana sin discusión.",
      relativeTime: "Hace 3 días",
    },
    {
      id: "rev-sp-2",
      author: "Andrea Monagas",
      rating: 5,
      text: "El pan brioche esponjoso y la carne súper jugosa con costra smash perfecta. Las papas con bacon y cheddar son adictivas.",
      relativeTime: "Hace 1 semana",
    },
  ],
  offerings: [
    {
      id: "sp-double-smash",
      name: "Double Bacon Smash Spencer",
      description: "Doble carne artesanal (2x100g) aplastada en plancha caliente con doble queso cheddar, tocineta ahumada crujiente y salsa Spencer secreta",
      price: 8.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["sp-shake"],
    },
    {
      id: "sp-truffle",
      name: "Truffle & Mushroom Burger",
      description: "Carne smash con champiñones salteados en mantequilla, queso suizo gratinado y mayonesa trufada en pan brioche",
      price: 9.5,
      category: "cocina",
      image: dishParrilladaMixta,
      isChefRecommendation: true,
      pairsWellWith: ["sp-shake"],
    },
    {
      id: "sp-loaded-fries",
      name: "Papas Fritas Loaded con Cheddar & Bacon",
      description: "Papas rústicas doradas bañadas en queso cheddar fundido de la casa, lluvia de tocineta crocante y cebollín fresco",
      price: 5.5,
      category: "cocina",
      image: tuttoPasticho,
      isChefRecommendation: false,
    },
    {
      id: "sp-churros",
      name: "Churros Rellenos de Dulce de Leche (4 Unidades)",
      description: "Churros recién fritos pasados por azúcar y canela con abundante arequipe y chocolate caliente",
      price: 4.5,
      category: "postres",
      image: dishCannoliSiciliani,
      isChefRecommendation: true,
    },
    {
      id: "sp-shake",
      name: "Milkshake Grueso de Oreo & Vainilla",
      description: "Batido cremoso con helado de mantecado, galletas Oreo trituradas y crema chantilly",
      price: 4.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 1]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 17. LA SONATA RESTAURANT
export const LA_SONATA_PROFILE: BusinessProfile = {
  id: "la-sonata-restaurant",
  slug: "la-sonata-restaurant",
  name: "La Sonata Restaurant",
  shortName: "La Sonata",
  heroImage: dishRisottoPorcini,
  gmbUrl: "https://www.google.com/maps/place/La+Sonata+Restaurant/data=!4m7!3m6!1s0x8dcbf9b6b18e4791:0xf62a7d2e2accab9b!8m2!3d8.2932171!4d-62.7395169!16s%2Fg%2F11lp6j7mkv",
  category: "Cocina Internacional, Carnes & Terraza Bar",
  specialtyTagline: "Cortes Finos, Mariscos a la Brasa, Música en Vivo y Terraza",
  heroHeadline: "Armonía de Sabores y Buena Música en Alta Vista",
  heroSubtitle: "Una sinfonía gastronómica en el corazón de Puerto Ordaz: carnes a la brasa, pastas refinadas, veladas con música acústica en vivo y coctelería selecta.",
  rating: 4.6,
  reviewCount: 195,
  priceRange: "$$$",
  phone: "584148651122",
  displayPhone: "+58 414 865 1122",
  email: "reservas@lasonatarestaurant.com",
  address: "Calle Caura con Carrera Las Bonitas, Alta Vista",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 12:00 PM - 12:00 AM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2932171,-62.7395169&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/La+Sonata+Restaurant/@8.2932171,-62.7395169,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/lasonatarestaurant/",
    facebook: "https://www.facebook.com/lasonatapzo/",
  },
  features: ["Música Acústica en Vivo", "Cortes Madurados a la Parrilla", "Terraza Climatizada", "Coctelería de Autor"],
  reviews: [
    {
      id: "rev-ls-1",
      author: "Beatriz A. Guzmán",
      rating: 5,
      text: "La combinación de cena deliciosa y música en vivo al piano y saxo es insuperable en Puerto Ordaz. El lomito Sonata con salsa de hongos es exquisito.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-ls-2",
      author: "Rolando S. Marcano",
      rating: 5,
      text: "Excelente servicio de los mesoneros, ambiente distinguido sin ser pretencioso y la tabla de quesos y carnes con vino es perfecta.",
      relativeTime: "Hace 3 semanas",
    },
  ],
  offerings: [
    {
      id: "ls-lomito",
      name: "Medallones de Lomito Sonata a los Tres Hongos",
      description: "Lomito de res tierno sellado a la plancha con salsa cremosa de portobello, champiñones y porcini con risotto al parmesano",
      price: 19.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["ls-coctel"],
    },
    {
      id: "ls-pasta",
      name: "Fettuccine con Frutos del Mar en Salsa Blanca",
      description: "Pasta artesanal con calamares, langostinos y mejillones en salsa bechamel aromatizada con vino blanco y ajo",
      price: 16.0,
      category: "cocina",
      image: tuttoFettuccine,
      isChefRecommendation: true,
      pairsWellWith: ["ls-coctel"],
    },
    {
      id: "ls-ensalada",
      name: "Ensalada César con Pechuga a la Brasa & Crutones",
      description: "Lechugas romanas crujientes con aderezo casero de anchoas, láminas de parmesano y pechuga marinada al grill",
      price: 10.5,
      category: "cocina",
      image: dishPizzaMargherita,
      isChefRecommendation: false,
    },
    {
      id: "ls-tiramisu",
      name: "Tiramisú al Amaretto",
      description: "Tradicional receta italiana con licor de amaretto Disaronno y bizcochos soletilla",
      price: 5.5,
      category: "postres",
      image: tuttoTiramisu,
      isChefRecommendation: true,
    },
    {
      id: "ls-coctel",
      name: "Cóctel Melodía Tropical (Gin & Maracuyá)",
      description: "Gin botánico infusionado con pulpa de parchita fresca, tónica premium y ramas de romero ahumado",
      price: 7.0,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 18. AL REDA ARAB CUISINE
export const AL_REDA_PROFILE: BusinessProfile = {
  id: "al-reda-arab-cuisine",
  slug: "al-reda-arab-cuisine",
  name: "Al Reda Arab Cuisine",
  shortName: "Al Reda",
  heroImage: heroShanklish,
  gmbUrl: "https://www.google.com/maps/place/Al+Reda+Arab+Cuisine/data=!4m7!3m6!1s0x8dcbfbf9a7c2eb55:0x9745b81454c03127!8m2!3d8.2931191!4d-62.7293045!16s%2Fg%2F11p6wy34wn",
  category: "Auténtica Gastronomía Árabe & Cocina Libanesa",
  specialtyTagline: "Kibbeh Frito, Shawarmas al Carbón, Hummus, Tabule y Dulces Árabes",
  heroHeadline: "La Esencia y Riqueza de la Cocina Árabe en Alta Vista",
  heroSubtitle: "Sabores milenarios del Medio Oriente en Puerto Ordaz: banquetes libaneses con pan árabe inflado, cremas tradicionales, shawarmas jugosos y café con cardamomo.",
  rating: 4.8,
  reviewCount: 260,
  priceRange: "$$",
  phone: "584249120044",
  displayPhone: "+58 424 912 0044",
  email: "info@alreda.com",
  address: "Calle Cuchivero con Av. Guayana, Alta Vista",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Lunes a Domingo: 11:30 AM - 10:30 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2931191,-62.7293045&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Al+Reda+Arab+Cuisine/@8.2931191,-62.7293045,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/alreda_arabcuisine/",
    facebook: "https://www.facebook.com/alredaarabcuisine/",
  },
  features: ["Banquete Libanés Mixto", "Pan Árabe Recién Horneado", "Shawarmas al Carbón", "Dulcería Árabe Artesanal"],
  reviews: [
    {
      id: "rev-ar-1",
      author: "Hassan Maklad",
      rating: 5,
      text: "El sabor auténtico de Beirut en Puerto Ordaz. El hummus con carne picada y piñones tostados es insuperable y el pan árabe llega inflado a la mesa.",
      relativeTime: "Hace 4 días",
    },
    {
      id: "rev-ar-2",
      author: "Mariana Khoury",
      rating: 5,
      text: "La atención de la familia propietaria te hace sentir en casa. Los tabaquitos de parra y el falafel crujiente son de 10.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "ar-banquete",
      name: "Banquete Al Reda Especial (Para 2 Personas)",
      description: "Kibbe frito, tabaquitos de repollo y parra, hummus tahini, crema de berenjenas (mutabal), ensalada tabule y 6 panes árabes calientes",
      price: 16.5,
      category: "cocina",
      image: dishShanklishMezze,
      isChefRecommendation: true,
      pairsWellWith: ["ar-baklava", "ar-cafe"],
    },
    {
      id: "ar-shawarma",
      name: "Shawarma Mixto Premium de Carne & Pollo",
      description: "Carne de res y pollo marinados en especias orientales, salsa de ajo casera, pepinillos encurtidos y salsa de sésamo",
      price: 7.5,
      category: "cocina",
      image: dishShawarmaPlatter,
      isChefRecommendation: true,
      pairsWellWith: ["ar-baklava"],
    },
    {
      id: "ar-falafel",
      name: "Plato de Falafel Crocante con Salsa Tahini (6 Uds)",
      description: "Croquetas de garbanzos frescos molidos con hierbas aromáticas, acompañadas de lechuga, tomate y salsa de ajonjolí",
      price: 6.5,
      category: "cocina",
      image: dishKibbehFrito,
      isChefRecommendation: false,
    },
    {
      id: "ar-baklava",
      name: "Surtido de Baklawa & Mamul con Pistacho (4 Uds)",
      description: "Hojaldre fino con mantequilla clarificada, frutos secos y almíbar aromatizado con agua de azahar",
      price: 5.5,
      category: "postres",
      image: baklavaImg,
      isChefRecommendation: true,
    },
    {
      id: "ar-cafe",
      name: "Café Árabe Tradicional con Cardamomo",
      description: "Preparado en cafetera tradicional cezve, servido sin colar con intenso aroma a cardamomo",
      price: 2.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 1]?.image,
      isChefRecommendation: false,
    },
  ],
};

// 19. PORKI'S 286, C.A
export const PORKIS_286_PROFILE: BusinessProfile = {
  id: "porkis-286",
  slug: "porkis-286",
  name: "Porki's 286",
  shortName: "Porki's",
  heroImage: heroSmokeBbq,
  gmbUrl: "https://www.google.com/maps/place/Porki%27s+286,+C.A/data=!4m7!3m6!1s0x8dcbf9a1566c8edd:0xa5195767c74a861b!8m2!3d8.276754!4d-62.7652046!16s%2Fg%2F11k4x8zjnc",
  category: "Especialistas en Cerdo, Costillitas BBQ & Chicharrón",
  specialtyTagline: "Costillas BBQ Ahumadas, Pernil Horneado, Chicharrón y Hamburguesas de Cerdo",
  heroHeadline: "El Templo del Buen Cerdo y BBQ en Puerto Ordaz",
  heroSubtitle: "Costillitas tiernas bañadas en salsa barbacoa ahumada, pernil jugoso asado a fuego lento, chicharrón crujiente con limón y tostones con ensalada.",
  rating: 4.7,
  reviewCount: 180,
  priceRange: "$$",
  phone: "584148992860",
  displayPhone: "+58 414 899 2860",
  email: "ventas@porkis286.com",
  address: "Av. Atlántico, sector Los Olivos / Unare",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Miércoles a Domingo: 12:00 PM - 11:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.276754,-62.7652046&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Porki%27s+286/@8.276754,-62.7652046,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/porkis286/",
    facebook: "https://www.facebook.com/porkis286pzo/",
  },
  features: ["Costillas Ahumadas a la Leña", "Sándwiches de Pernil Criollo", "Chicharrón de Corte Duro", "Porciones Abundantes"],
  reviews: [
    {
      id: "rev-pk-1",
      author: "Marcos T. Rengel",
      rating: 5,
      text: "Las costillas BBQ se desprenden del hueso solitas con el tenedor. La salsa tiene ese ahumado dulzón perfecto y las papas son gigantes.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-pk-2",
      author: "Daniela Vicuña",
      rating: 5,
      text: "El chicharrón con limón y arepitas fritas con nata es una locura para empezar. Súper recomendado para comer con la familia.",
      relativeTime: "Hace 3 semanas",
    },
  ],
  offerings: [
    {
      id: "pk-ribs",
      name: "Costillar BBQ Porki's Ahumado (Medio Rack 600g)",
      description: "Costillas de cerdo ahumadas lentamente con leña durante 6 horas, glaseadas con BBQ dulce, papas rústicas y ensalada coleslaw",
      price: 15.5,
      category: "cocina",
      image: dishParrilladaMixta,
      isChefRecommendation: true,
      pairsWellWith: ["pk-polar"],
    },
    {
      id: "pk-sandwich",
      name: "Sándwich de Pernil Asado Tradicional",
      description: "Rebanadas gruesas de pernil jugoso en su jugo con rodajas de tomate fresco y mayonesa casera en pan campesino crujiente",
      price: 7.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["pk-polar"],
    },
    {
      id: "pk-chicharron",
      name: "Chicharrón de Cerdo Criollo con Tostones",
      description: "Trozos de cerdo fritos con piel crujiente y carne tierna, acompañados de tostones de plátano verde y gajos de limón",
      price: 9.0,
      category: "cocina",
      image: dishKibbehFrito,
      isChefRecommendation: false,
    },
    {
      id: "pk-quesillo",
      name: "Quesillo Criollo de la Abuela",
      description: "Postre cremoso tradicional venezolano bañado en abundante caramelo oscuro",
      price: 4.5,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: true,
    },
    {
      id: "pk-polar",
      name: "Cerveza Polar Solera / Pilsen Helada",
      description: "Bien fría servida en vaso con hielo",
      price: 2.0,
      category: "bebidas",
      image: cervezaPolarImg,
      isChefRecommendation: false,
    },
  ],
};

// 20. MUELLE MACAGUA
export const MUELLE_MACAGUA_PROFILE: BusinessProfile = {
  id: "muelle-macagua",
  slug: "muelle-macagua",
  name: "Muelle Macagua",
  shortName: "Muelle Macagua",
  heroImage: dishPaellaMariscos,
  gmbUrl: "https://www.google.com/maps/place/Muelle+Macagua/data=!4m7!3m6!1s0x8dcbfb64505992b3:0xff807c48df1f015e!8m2!3d8.2857303!4d-62.6659828!16s%2Fg%2F11ssxf5gnj",
  category: "Restaurante con Vista al Río, Pescados del Caroní & Mariscos",
  specialtyTagline: "Gastronomía Fluvial y Marina con Vista Insuperable a los Rápidos del Caroní",
  heroHeadline: "Sabor Marino y la Mejor Vista de Guayana en Muelle Macagua",
  heroSubtitle: "Ubicado a orillas del majestuoso Río Caroní: pescados de agua dulce y de mar, fosforera oriental, churrascos a la parrilla, cócteles al atardecer y brisa natural.",
  rating: 4.8,
  reviewCount: 340,
  priceRange: "$$$",
  phone: "584148801923",
  displayPhone: "+58 414 880 1923",
  email: "reservas@muellemacagua.com",
  address: "Sector Macagua, cerca del Embalse Macagua",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Jueves a Domingo: 12:00 PM - 10:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2857303,-62.6659828&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Muelle+Macagua/@8.2857303,-62.6659828,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/muellemacagua/",
    facebook: "https://www.facebook.com/muellemacaguapzo/",
  },
  features: ["Terraza Fluvial al Río Caroní", "Pescados Frescos del Día", "Puesta de Sol Espectacular", "Paseos en Bote"],
  reviews: [
    {
      id: "rev-mm-1",
      author: "Alfonso Quintero",
      rating: 5,
      text: "La vista al Caroní y a los raudales de Macagua no tiene comparación en todo el país. La lau-lau ahumada y el carite frito con tostones son una maravilla.",
      relativeTime: "Hace 4 días",
    },
    {
      id: "rev-mm-2",
      author: "Carla P. Méndez",
      rating: 5,
      text: "Lugar mágico para ver caer el sol tomando una piña colada bien fría y comiendo mariscos frescos. 100% recomendado.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "mm-laulau",
      name: "Filete de Lau-Lau a la Plancha con Alcaparras",
      description: "Pescado noble del río Caroní cocinado a la plancha en mantequilla aromatizada con alcaparras tiernas, puré de yuca y tostones",
      price: 16.5,
      category: "cocina",
      image: dishPaellaMariscos,
      isChefRecommendation: true,
      pairsWellWith: ["mm-coctel"],
    },
    {
      id: "mm-paella",
      name: "Paella de Mariscos Muelle Macagua (Para 2)",
      description: "Arroz con azafrán, camarones gigantes, mejillones en concha, pulpo, calamares y sofrito carupanero de pimientos",
      price: 26.0,
      category: "cocina",
      image: heroSpaPaella,
      isChefRecommendation: true,
      pairsWellWith: ["mm-coctel"],
    },
    {
      id: "mm-ceviche",
      name: "Ceviche Mixto Tropical con Mango & Ají Dulce",
      description: "Cubos de pescado blanco fresco y camarones marinados en jugo de lima sutil, tropezones de mango verde y cilantro fresco",
      price: 12.0,
      category: "cocina",
      image: dishRisottoPorcini,
      isChefRecommendation: false,
    },
    {
      id: "mm-mousse",
      name: "Mousse Cremoso de Parchita Criolla",
      description: "Postre ligero y aireado con la acidez vibrante de la fruta de la pasión venezolana y coulis dulce",
      price: 5.0,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: true,
    },
    {
      id: "mm-coctel",
      name: "Cóctel Atardecer en Macagua (Ron & Frutos Tropicales)",
      description: "Ron blanco y dorado venezolano, jugo de naranja recién exprimido, granadina y pulpa de maracuyá",
      price: 6.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 21. KLANDESTINO RESTOBAR
export const KLANDESTINO_PROFILE: BusinessProfile = {
  id: "klandestino-restobar",
  slug: "klandestino-restobar",
  name: "Klandestino Restobar",
  shortName: "Klandestino",
  heroImage: dishParrilladaMixta,
  gmbUrl: "https://www.google.com/maps/place/Klandestino+restobar/data=!4m7!3m6!1s0x8dcbf918fd543c6b:0xd73bc0086c5fa8f0!8m2!3d8.293413!4d-62.7328936!16s%2Fg%2F11n_ymrhhv",
  category: "Gastrobar Urbano, Coctelería de Autor & Tapas",
  specialtyTagline: "Tapas Urbanas, Burgers Gourmet, Cervezas Artesanales y Mixología",
  heroHeadline: "La Noche y Gastronomía Klandestina en Alta Vista",
  heroSubtitle: "El epicentro de las noches de Ciudad Guayana: tapas modernas para compartir, tablas mixtas, hamburguesas de autor, cócteles de mixología y ambiente con DJ en vivo.",
  rating: 4.6,
  reviewCount: 210,
  priceRange: "$$",
  phone: "584148924401",
  displayPhone: "+58 414 892 4401",
  email: "info@klandestinorestobar.com",
  address: "Calle Cuchivero, Centro Comercial Zulia, Alta Vista",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Miércoles a Domingo: 6:00 PM - 2:00 AM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.293413,-62.7328936&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Klandestino+restobar/@8.293413,-62.7328936,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/klandestinorestobar/",
    facebook: "https://www.facebook.com/klandestinopzo/",
  },
  features: ["Coctelería de Autor con Fuego", "Tablas de Tequeños y Carnes", "DJ en Vivo", "Ambiente Nocturno Exclusivo"],
  reviews: [
    {
      id: "rev-kl-1",
      author: "Reinaldo P. Cedeño",
      rating: 5,
      text: "El mejor ambiente de Alta Vista para tomarse unos tragos y picar con amigos. Los tequeños gourmet y los tragos con mezcal y ron son de primer nivel.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-kl-2",
      author: "Stephanie L. Gómez",
      rating: 5,
      text: "La atención de los bartenders es fenomenal y la comida sale súper rápido y caliente. La hamburguesa Klandestina es un 10 de 10.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "kl-tabla",
      name: "Tabla de Picoteo Klandestina (Para 3 Personas)",
      description: "Mini hamburguesas de lomito, tequeños rellenos de queso gouda y tocineta, alitas picantes buffalo y papas con queso fundido",
      price: 21.0,
      category: "cocina",
      image: dishParrilladaMixta,
      isChefRecommendation: true,
      pairsWellWith: ["kl-coctel"],
    },
    {
      id: "kl-burger",
      name: "Burger Klandestina con Queso Ahumado & Cebolla Crispy",
      description: "200g de carne de res prime, queso fundido ahumado, tocineta glaseada en miel de maple y aros crujientes de cebolla",
      price: 9.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["kl-coctel"],
    },
    {
      id: "kl-tequenos",
      name: "Tequeños Gigantes Tradicionales (6 Unidades)",
      description: "Masa hojaldrada crujiente rellena con abundante queso blanco semiduro llanero con salsa de papelón y ají dulce",
      price: 6.5,
      category: "cocina",
      image: tuttoPasticho,
      isChefRecommendation: false,
    },
    {
      id: "kl-brownie",
      name: "Brownie con Helado & Topping de Nutella",
      description: "Bizcocho de chocolate tibio con nueces tostadas, helado de vainilla y abundante nutella",
      price: 5.5,
      category: "postres",
      image: tuttoTiramisu,
      isChefRecommendation: true,
    },
    {
      id: "kl-coctel",
      name: "Cóctel Klandestino Flambeado",
      description: "Ron añejo especiado, licor de café, sirope de canela y toque cítrico flambeado en mesa",
      price: 8.0,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 22. PIMIENTA RESTAURANTE
export const PIMIENTA_PROFILE: BusinessProfile = {
  id: "pimienta-restaurante",
  slug: "pimienta-restaurante",
  name: "Pimienta Restaurante",
  shortName: "Pimienta",
  heroImage: dishRisottoPorcini,
  gmbUrl: "https://www.google.com/maps/place/PIMIENTA+RESTAURANTE/data=!4m7!3m6!1s0x8dcbfbe9ec667787:0x75856eb6becd4ded!8m2!3d8.3147411!4d-62.7160288!16s%2Fg%2F11vcv4m51j",
  category: "Cocina Fusión Contemporánea & Bistró Gourmet",
  specialtyTagline: "Carnes a la Pimienta Negra, Pastas Artesanales y Sabores Fusión",
  heroHeadline: "El Toque Perfecto de Alta Cocina en Castillito",
  heroSubtitle: "La alta cocina cobra vida con recetas equilibradas e ingredientes seleccionados: su famoso lomito a las tres pimientas, pastas caseras, pesca fresca del día y postres de autor.",
  rating: 4.7,
  reviewCount: 175,
  priceRange: "$$$",
  phone: "584148937711",
  displayPhone: "+58 414 893 7711",
  email: "contacto@pimientarestaurante.com",
  address: "Calle Brasil, sector Castillito",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 12:00 PM - 11:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.3147411,-62.7160288&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/PIMIENTA+RESTAURANTE/@8.3147411,-62.7160288,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/pimientarestaurantepzo/",
    facebook: "https://www.facebook.com/pimientarestaurante/",
  },
  features: ["Lomito a la Pimienta Negra de Madagascar", "Pastas Frescas Hechas a Mano", "Cava de Vinos", "Ambiente Climatizado y Reservado"],
  reviews: [
    {
      id: "rev-pm-1",
      author: "Gonzalo A. Silva",
      rating: 5,
      text: "El lomito a la pimienta es el mejor que he comido en Ciudad Guayana. La salsa tiene la cremosidad y el picor exacto sin tapar el sabor de la carne tierna.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-pm-2",
      author: "Claudia F. Valecillos",
      rating: 5,
      text: "Un lugar hermoso y muy tranquilo en Castillito. Las pastas caseras y la atención impecable lo hacen un sitio al que siempre quieres regresar.",
      relativeTime: "Hace 3 semanas",
    },
  ],
  offerings: [
    {
      id: "pm-lomito",
      name: "Lomito Especial a las Tres Pimientas",
      description: "Medallón de solomo de res tierno sellado a la plancha con salsa cremosa de pimienta verde, negra y rosa con papas dauphinoise gratinadas",
      price: 18.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["pm-vino"],
    },
    {
      id: "pm-raviolis",
      name: "Raviolis Rellenos de Ricotta & Espinaca con Pomodoro",
      description: "Pasta fresca casera rellena de espinacas tiernas salteadas con nuez moscada y ricotta, bañados en salsa pomodoro rústica y queso parmesano",
      price: 14.0,
      category: "cocina",
      image: tuttoPasticho,
      isChefRecommendation: true,
      pairsWellWith: ["pm-vino"],
    },
    {
      id: "pm-carpaccio",
      name: "Carpaccio de Salmón Ahumado con Alcaparras Baby",
      description: "Láminas de salmón fresco curado con aderezo de eneldo, limón, aceite de oliva virgen y tostadas finas",
      price: 13.5,
      category: "cocina",
      image: dishPizzaMargherita,
      isChefRecommendation: false,
    },
    {
      id: "pm-panna",
      name: "Panna Cotta con Coulis de Frutos Rojos",
      description: "Postre italiano clásico de crema de leche con vaina de vainilla bourbon y reducción dulce de moras y fresas",
      price: 5.5,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: true,
    },
    {
      id: "pm-vino",
      name: "Copa de Vino Tinto Malbec Reserva",
      description: "Cuerpo medio, notas a frutos negros y madera de roble",
      price: 6.0,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 23. LA ESTACIÓN DE RAFUCHA
export const LA_ESTACION_RAFUCHA_PROFILE: BusinessProfile = {
  id: "la-estacion-de-rafucha",
  slug: "la-estacion-de-rafucha",
  name: "La Estación de Rafucha",
  shortName: "Rafucha",
  heroImage: dishParrilladaMixta,
  gmbUrl: "https://www.google.com/maps/place/La+Estaci%C3%B3n+de+Rafucha/data=!4m7!3m6!1s0x8dcbfb000520b34b:0x403f69702feb2f9b!8m2!3d8.3035545!4d-62.7199783!16s%2Fg%2F11wpr88qrg",
  category: "Parrilla Criolla, Asados al Carbón & Comida Casera",
  specialtyTagline: "Parrilladas Familiares, Solomo a la Brasa, Arepitas y Cachapas con Queso",
  heroHeadline: "El Sabor del Carbón y la Tradición en Los Olivos",
  heroSubtitle: "La parada parrillera más querida: carnes suaves al carbón con leña, cachapas de maíz tierno con queso de mano, chorizos artesanales y ensaladas criollas.",
  rating: 4.6,
  reviewCount: 155,
  priceRange: "$$",
  phone: "584148773901",
  displayPhone: "+58 414 877 3901",
  email: "info@laestacionderafucha.com",
  address: "Calle Los Mangos con Av. Italia, Los Olivos",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 11:30 AM - 10:30 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.3035545,-62.7199783&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/La+Estaci%C3%B3n+de+Rafucha/@8.3035545,-62.7199783,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/laestacionderafucha/",
    facebook: "https://www.facebook.com/laestacionderafucha/",
  },
  features: ["Cachapas con Queso de Mano", "Parrilla Mixta al Carbón", "Guasacaca Casera", "Ambiente Familiar y Abierto"],
  reviews: [
    {
      id: "rev-rf-1",
      author: "Héctor J. Millán",
      rating: 5,
      text: "Las cachapas aquí son de verdad de puro jojoto tierno, nada de mezclas artificiales. El queso de mano se desborda y el pernil es delicioso.",
      relativeTime: "Hace 5 días",
    },
    {
      id: "rev-rf-2",
      author: "Maritza Romero",
      rating: 5,
      text: "La parrillada de solomo y chorizo con yuca y ensalada mixta es rendidora y con un sabor ahumado exquisito. Los precios son muy justos.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "rf-cachapa",
      name: "Cachapa de Jojoto Tierno con Queso de Mano & Pernil",
      description: "Cachapa dorada dulce recién hecha en budare con abundante queso de mano fresco, pernil asado y mantequilla criolla",
      price: 8.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["rf-papelon"],
    },
    {
      id: "rf-parrillada",
      name: "Parrillada Rafucha al Carbón",
      description: "Solomo de res jugoso, pechuga de pollo al grill, chorizo artesanal, yuca sancochada al vapor con mojo de ajo y ensalada rallada",
      price: 15.0,
      category: "cocina",
      image: dishParrilladaMixta,
      isChefRecommendation: true,
      pairsWellWith: ["rf-papelon"],
    },
    {
      id: "rf-arepitas",
      name: "Canasta de Arepitas Fritas con Nata & Queso Telita",
      description: "6 arepitas crujientes con huequito recién fritas acompañadas de nata criolla fresca y queso telita",
      price: 6.0,
      category: "cocina",
      image: tuttoPasticho,
      isChefRecommendation: false,
    },
    {
      id: "rf-quesillo",
      name: "Quesillo Criollo Casero Dorado",
      description: "Receta familiar tradicional con leche condensada y caramelo oscuro",
      price: 4.0,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: true,
    },
    {
      id: "rf-papelon",
      name: "Jarra de Papelón con Limón Fresco",
      description: "Papelón de caña pura disuelto con jugo de limón fresco y mucho hielo",
      price: 3.0,
      category: "bebidas",
      image: menuItems[menuItems.length - 1]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 24. ECHA VAINA
export const ECHA_VAINA_PROFILE: BusinessProfile = {
  id: "echa-vaina",
  slug: "echa-vaina",
  name: "Echa Vaina",
  shortName: "Echa Vaina",
  heroImage: heroBurgerStreet,
  gmbUrl: "https://www.google.com/maps/place/Echa+Vaina/data=!4m7!3m6!1s0x8dcbf931ae2a352b:0xd20102101b0e7f0!8m2!3d8.2962704!4d-62.7328396!16s%2Fg%2F11vl8llt52",
  category: "Restobar, Cervecería & Comida Urbana Venezolana",
  specialtyTagline: "Picaditas Criollas, Hamburguesas Monstruosas, Alitas y Cervezas Vestidas de Novia",
  heroHeadline: "El Punto de Encuentro para Echar Vaina y Comer Bueno",
  heroSubtitle: "El local más divertido y concurrido de Alta Vista: comida urbana venezolana sin remordimientos, hamburguesas triples, tequeñones, embutidos y cervezas bajo cero.",
  rating: 4.7,
  reviewCount: 230,
  priceRange: "$$",
  phone: "584148915533",
  displayPhone: "+58 414 891 5533",
  email: "hola@echavaina.com",
  address: "Av. Monseñor Zabaleta con Calle Cuchivero, Alta Vista",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 4:00 PM - 1:00 AM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2962704,-62.7328396&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Echa+Vaina/@8.2962704,-62.7328396,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/echavainapzo/",
    facebook: "https://www.facebook.com/echavainarestobar/",
  },
  features: ["Cervezas Vestidas de Novia", "Hamburguesas Monstruosas", "Tequeños Gigantes", "Pantallas Gigantes de Deporte"],
  reviews: [
    {
      id: "rev-ev-1",
      author: "Leonardo B. Guédez",
      rating: 5,
      text: "El mejor lugar para ver partidos de fútbol o béisbol y compartir con los panas. Las birras salen más frías que el polo norte y los tequeños son gigantes.",
      relativeTime: "Hace 4 días",
    },
    {
      id: "rev-ev-2",
      author: "Vanessa K. Cova",
      rating: 5,
      text: "La hamburguesa Echa Vaina con huevo frito, tocineta y queso amarillo es brutal. Música genial y el ambiente más prendido de la ciudad.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "ev-burger",
      name: "Burger Monstruo Echa Vaina (300g Carne)",
      description: "Carne jugosa sazonada a la parrilla con huevo frito, doble tocineta, queso cheddar, jamón ahumado, papas hilo crujientes y salsas especiales",
      price: 9.0,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["ev-balde"],
    },
    {
      id: "ev-picada",
      name: "Picada Criolla Entre Panas (Para 3-4)",
      description: "Trozos de carne de res, pollo al grill, chorizos parrilleros, tostones playeros con queso blanco y tártara casera",
      price: 18.0,
      category: "cocina",
      image: dishParrilladaMixta,
      isChefRecommendation: true,
      pairsWellWith: ["ev-balde"],
    },
    {
      id: "ev-tequenones",
      name: "Tequeñones Rellenos con Mucho Queso (4 Unidades)",
      description: "Tequeños jumbo rellenos de abundante queso llanero fundido con salsa tártara de ajo",
      price: 5.5,
      category: "cocina",
      image: tuttoPasticho,
      isChefRecommendation: false,
    },
    {
      id: "ev-churros",
      name: "Churros de Feria con Arequipe & Chocolate",
      description: "Recién hechos crujientes con azúcar y canela servidos con dipping de arequipe casero",
      price: 4.5,
      category: "postres",
      image: dishCannoliSiciliani,
      isChefRecommendation: true,
    },
    {
      id: "ev-balde",
      name: "Balde de Cervezas Polar Vestidas de Novia (6 Unidades)",
      description: "Cubeta con abundante hielo frappé y botellas bien escarchadas",
      price: 9.5,
      category: "bebidas",
      image: cervezaPolarImg,
      isChefRecommendation: true,
    },
  ],
};

// 25. CHALAN RESTO BAR PZO
export const CHALAN_RESTO_BAR_PROFILE: BusinessProfile = {
  id: "chalan-resto-bar-pzo",
  slug: "chalan-resto-bar-pzo",
  name: "Chalan Resto Bar PZO",
  shortName: "Chalan",
  heroImage: dishParrilladaMixta,
  gmbUrl: "https://www.google.com/maps/place/Chalan+Resto+Bar+PZO/data=!4m7!3m6!1s0x8dcbfff10a30206b:0x19ff6edc41271978!8m2!3d8.2570426!4d-62.8031757!16s%2Fg%2F11trqwbrc9",
  category: "Restobar, Parrilladas & Gastronomía Urbana",
  specialtyTagline: "Parrillas Mixtas al Carbón, Alitas Crispy, Hamburguesas y Cócteles",
  heroHeadline: "El Buen Sabor y Música en Chalan Resto Bar",
  heroSubtitle: "El ambiente perfecto para compartir entre amigos en Unare: tablas de carnes generosas, picadas de tequeños, hamburguesas jugosas y las cervezas más frías de la zona.",
  rating: 4.6,
  reviewCount: 165,
  priceRange: "$$",
  phone: "584148901245",
  displayPhone: "+58 414 890 1245",
  email: "info@chalanrestobar.com",
  address: "Av. Paseo Caroní, sector Unare II",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 12:00 PM - 12:00 AM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2570426,-62.8031757&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Chalan+Resto+Bar+PZO/@8.2570426,-62.8031757,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/chalanrestobar/",
    facebook: "https://www.facebook.com/chalanrestobarpzo/",
  },
  features: ["Parrilladas al Carbón", "Música en Vivo Fines de Semana", "Cócteles 2x1 en Happy Hour", "Pantallas de Deporte"],
  reviews: [
    {
      id: "rev-ch-1",
      author: "Carlos E. Villegas",
      rating: 5,
      text: "La parrillada mixta con yuca frita y guasacaca es de las mejores de Unare. Cervezas bien vestidas de novia y atención rápida.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-ch-2",
      author: "Yusmary Romero",
      rating: 5,
      text: "Buenísimo para celebrar cumpleaños. Los tequeños gigantes y las alitas BBQ ahumadas son imperdibles.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "ch-parrilla",
      name: "Gran Parrilla Mixta Chalan (Para 2-3)",
      description: "Solomo de res, pechuga de pollo a la brasa, chorizo criollo, morcilla, yuca frita dorada y guasacaca casera",
      price: 17.5,
      category: "cocina",
      image: dishParrilladaMixta,
      isChefRecommendation: true,
      pairsWellWith: ["ch-polar"],
    },
    {
      id: "ch-burger",
      name: "Burger Chalan Doble Carne & Tocineta",
      description: "Doble carne artesanal de res con queso amarillo fundido, tocineta crujiente, cebolla crispy y salsa de la casa",
      price: 8.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["ch-polar"],
    },
    {
      id: "ch-alitas",
      name: "Alitas de Pollo Crispy Glaseadas en Miel y Mostaza (8 Uds)",
      description: "Alitas doradas crujientes con salsa dulce picante y aderezo ranch de la casa",
      price: 7.5,
      category: "cocina",
      image: dishKibbehFrito,
      isChefRecommendation: false,
    },
    {
      id: "ch-brownie",
      name: "Brownie con Helado de Vainilla y Sirope de Chocolate",
      description: "Brownie tibio con nueces y generosa bola de helado mantecado",
      price: 4.5,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: true,
    },
    {
      id: "ch-polar",
      name: "Balde de Cervezas Polar Pilsen / Solera Escarchada (6 Uds)",
      description: "Servidas en cubeta con hielo frappé bien heladas",
      price: 9.5,
      category: "bebidas",
      image: cervezaPolarImg,
      isChefRecommendation: true,
    },
  ],
};

// 26. TROGLIS RESTAURANTE
export const TROGLIS_PROFILE: BusinessProfile = {
  id: "troglis-restaurante",
  slug: "troglis-restaurante",
  name: "Troglis Restaurante",
  shortName: "Troglis",
  heroImage: heroFarofa,
  gmbUrl: "https://www.google.com/maps/place/Troglis+restaurante/data=!4m7!3m6!1s0x8dce87a771653e55:0x6db354b62c76662a!8m2!3d8.2811226!4d-62.7099663!16s%2Fg%2F11cn94nvn5",
  category: "Cocina Internacional, Carnes & Terraza Social",
  specialtyTagline: "Gastronomía Selecta, Cortes a la Parrilla y Ambiente Exclusivo",
  heroHeadline: "Gastronomía Distinguida en Centro Ítalo",
  heroSubtitle: "Ubicado dentro del prestigioso Centro Ítalo Venezolano de Guayana: cortes finos madurados, pastas artesanales, ensaladas frescas y veladas acogedoras frente al Caroní.",
  rating: 4.7,
  reviewCount: 190,
  priceRange: "$$$",
  phone: "584148750011",
  displayPhone: "+58 414 875 0011",
  email: "contacto@troglisrestaurante.com",
  address: "Centro Ítalo Venezolano de Guayana, Vía Toro Muerto",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Miércoles a Domingo: 12:00 PM - 11:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2811226,-62.7099663&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Troglis+restaurante/@8.2811226,-62.7099663,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/troglisrestaurante/",
    facebook: "https://www.facebook.com/troglispzo/",
  },
  features: ["Cortes Madurados", "Pastas Frescas Hechas a Mano", "Seguridad y Estacionamiento Privado", "Cava de Vinos"],
  reviews: [
    {
      id: "rev-tr-1",
      author: "Salvatore Di Martino",
      rating: 5,
      text: "La atención dentro del club es impecable. El bife de chorizo y los fettuccine a la crema de trufa son extraordinarios.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-tr-2",
      author: "Elena M. Padrón",
      rating: 5,
      text: "Ambiente muy relajante para almorzar o cenar en familia. Los postres caseros y el café espresso son de primer nivel.",
      relativeTime: "Hace 3 semanas",
    },
  ],
  offerings: [
    {
      id: "tr-bife",
      name: "Bife de Chorizo a la Brasa con Mantequilla de Hierbas",
      description: "Corte grueso jugoso con sal marina gruesa, vegetales salteados y papas rústicas al romero",
      price: 19.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["tr-vino"],
    },
    {
      id: "tr-pasta",
      name: "Fettuccine ai Funghi Porcini & Parmigiano",
      description: "Pasta fresca artesanal en salsa mantecada de hongos silvestres, vino blanco y queso parmesano reggiano",
      price: 15.0,
      category: "cocina",
      image: tuttoFettuccine,
      isChefRecommendation: true,
      pairsWellWith: ["tr-vino"],
    },
    {
      id: "tr-carpaccio",
      name: "Carpaccio de Lomito con Rúgula y Parmesano",
      description: "Finas láminas de lomito fresco con alcaparras baby, aceite de oliva virgen extra y tostadas crujientes",
      price: 12.5,
      category: "cocina",
      image: dishPizzaMargherita,
      isChefRecommendation: false,
    },
    {
      id: "tr-tiramisu",
      name: "Tiramisú al Cacao Amargo Veneziano",
      description: "Postre tradicional con queso mascarpone, café fuerte y savoiardi suaves",
      price: 5.5,
      category: "postres",
      image: tuttoTiramisu,
      isChefRecommendation: true,
    },
    {
      id: "tr-vino",
      name: "Copa de Vino Tinto Selección Especial",
      description: "Cabernet Sauvignon madurado en roble, elegante y con cuerpo estructurado",
      price: 6.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 27. D'ORO RESTAURANTE
export const DORO_RESTAURANTE_PROFILE: BusinessProfile = {
  id: "doro-restaurante",
  slug: "doro-restaurante",
  name: "D'oro Restaurante",
  shortName: "D'oro",
  heroImage: heroTuttoPasta,
  gmbUrl: "https://www.google.com/maps/place/D%27oro+Restaurante/data=!4m7!3m6!1s0x8dcbf900302570b1:0x1554065324272d01!8m2!3d8.2870159!4d-62.730282!16s%2Fg%2F11wb14z7sn",
  category: "Alta Cocina Italiana & Pescados Nobles",
  specialtyTagline: "Pastas Rellenas al Huevo, Risottos al Parmesano, Mariscos y Pescados",
  heroHeadline: "La Excelencia de la Cocina Dorada Italiana en Alta Vista",
  heroSubtitle: "Un espacio sofisticado donde el buen comer es un arte: pastas frescas preparadas a la vista, risottos cremosos, pesca fresca del día y una cava de vinos seleccionada.",
  rating: 4.8,
  reviewCount: 215,
  priceRange: "$$$",
  phone: "584148943322",
  displayPhone: "+58 414 894 3322",
  email: "reservas@dororestaurante.com",
  address: "Av. Las Américas, sector Alta Vista Sur",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 12:00 PM - 11:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2870159,-62.730282&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/D%27oro+Restaurante/@8.2870159,-62.730282,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/dororestaurantepzo/",
    facebook: "https://www.facebook.com/dororestaurante/",
  },
  features: ["Pastas Artesanales al Huevo", "Risotto Mantecado al Parmigiano", "Salón VIP Climatizado", "Cava Importada"],
  reviews: [
    {
      id: "rev-do-1",
      author: "Vincenzo Bellini",
      rating: 5,
      text: "La calidad de los ingredientes es insuperable. Los agnolotti rellenos de ternera y el risotto a la marinera son pura seda en el paladar.",
      relativeTime: "Hace 4 días",
    },
    {
      id: "rev-do-2",
      author: "Mariana S. Arismendi",
      rating: 5,
      text: "El restaurante más elegante de Alta Vista para ocasiones especiales. Atención impecable de los camareros y presentación de lujo.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "do-risotto",
      name: "Risotto D'oro con Azafrán & Frutos del Mar",
      description: "Arroz carnaroli con azafrán español, langostinos frescos, calamares salteados, almejas y mantequilla clarificada",
      price: 21.0,
      category: "cocina",
      image: dishRisottoPorcini,
      isChefRecommendation: true,
      pairsWellWith: ["do-vino"],
    },
    {
      id: "do-agnolotti",
      name: "Agnolotti Rellenos de Ricotta & Espinacas al Tartufata",
      description: "Pasta fresca artesanal al huevo con crema suave de trufa blanca y lascas de parmesano de 24 meses",
      price: 16.5,
      category: "cocina",
      image: tuttoPasticho,
      isChefRecommendation: true,
      pairsWellWith: ["do-vino"],
    },
    {
      id: "do-salmon",
      name: "Filete de Salmón Glaseado en Miel Balsámica",
      description: "Salmón fresco a la plancha con reducción de vinagre balsámico de Módena y puré rústico de papas",
      price: 22.5,
      category: "cocina",
      image: dishPaellaMariscos,
      isChefRecommendation: false,
    },
    {
      id: "do-cannoli",
      name: "Cannoli Siciliani D'oro con Pistacho & Chocolate",
      description: "Crujiente masa hojaldrada frita con crema de ricotta dulce perfumada con azahar y lluvia de pistachos",
      price: 5.5,
      category: "postres",
      image: dishCannoliSiciliani,
      isChefRecommendation: true,
    },
    {
      id: "do-vino",
      name: "Copa de Vino Blanco Pinot Grigio / Chianti D'oro",
      description: "Etiqueta italiana seleccionada por el sommelier",
      price: 6.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 28. MACARENA RESTOBAR
export const MACARENA_RESTOBAR_PROFILE: BusinessProfile = {
  id: "macarena-restobar",
  slug: "macarena-restobar",
  name: "Macarena Restobar",
  shortName: "Macarena",
  heroImage: dishParrilladaMixta,
  gmbUrl: "https://www.google.com/maps/place/Macarena+Restobar/data=!4m7!3m6!1s0x8dcbfbfe5e99f1d7:0x59ec633d0588820b!8m2!3d8.3043598!4d-62.7229746!16s%2Fg%2F11qbgh7qcg",
  category: "Tapas Españolas, Gastrobar & Rumbas Temáticas",
  specialtyTagline: "Tapas Ibéricas, Tablas de Jamón Serrano, Sangrías y Noches de Fiesta",
  heroHeadline: "El Sabor de España y el Mejor Ambiente en Chilemex",
  heroSubtitle: "Tapas deliciosas, montaditos, tablas de charcutería, pulpo a la gallega y las mejores jarras de sangría en el epicentro de la movida nocturna de Puerto Ordaz.",
  rating: 4.6,
  reviewCount: 240,
  priceRange: "$$",
  phone: "584148967788",
  displayPhone: "+58 414 896 7788",
  email: "hola@macarenarestobar.com",
  address: "Calle Chile con Carrera El Palmar, Chilemex",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Miércoles a Domingo: 5:00 PM - 2:00 AM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.3043598,-62.7229746&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Macarena+Restobar/@8.3043598,-62.7229746,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/macarenarestobar/",
    facebook: "https://www.facebook.com/macarenapzo/",
  },
  features: ["Jarras de Sangría Española", "Montaditos y Tapas Variadas", "Música Bailable y DJ", "Terraza Climatizada"],
  reviews: [
    {
      id: "rev-mc-1",
      author: "Rodrigo E. Salazar",
      rating: 5,
      text: "La sangría tinta es una de las más ricas de Guayana. Las croquetas de jamón serrano y los calamares fritos salen calentitos y crocantes.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-mc-2",
      author: "Daniela C. Marcano",
      rating: 5,
      text: "El ambiente para salir con amigos los viernes o sábados es insuperable. Muy buena atención y comida rica para picar.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "mc-tabla",
      name: "Gran Tabla de Tapas Macarena (Para 3-4)",
      description: "Montaditos de jamón serrano con tomate, croquetas de queso manchego, calamares a la andaluza, papas bravas y tortilla española",
      price: 22.0,
      category: "cocina",
      image: dishParrilladaMixta,
      isChefRecommendation: true,
      pairsWellWith: ["mc-sangria"],
    },
    {
      id: "mc-bravas",
      name: "Papas Bravas con Alioli Casero y Salsa Picante",
      description: "Papas rústicas doradas bañadas en salsa brava tradicional española con alioli cremoso",
      price: 6.5,
      category: "cocina",
      image: tuttoPasticho,
      isChefRecommendation: false,
    },
    {
      id: "mc-pulpo",
      name: "Tapa de Pulpo a Feira con Pimentón de la Vera",
      description: "Pulpo tierno en rodajas con sal gruesa, pimentón ahumado y aceite de oliva virgen",
      price: 13.5,
      category: "cocina",
      image: dishPaellaMariscos,
      isChefRecommendation: true,
      pairsWellWith: ["mc-sangria"],
    },
    {
      id: "mc-churros",
      name: "Churros con Chocolate Caliente Madrileño",
      description: "Churros crujientes recién fritos con dipping espeso de chocolate negro fundido",
      price: 5.0,
      category: "postres",
      image: dishCannoliSiciliani,
      isChefRecommendation: true,
    },
    {
      id: "mc-sangria",
      name: "Jarra de Sangría Macarena Frutada (1 Litro)",
      description: "Vino tinto joven, frutas cítricas maceradas, licor español y soda helada",
      price: 11.0,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 29. WARS 286
export const WARS_286_PROFILE: BusinessProfile = {
  id: "wars-286",
  slug: "wars-286",
  name: "Wars 286",
  shortName: "Wars 286",
  heroImage: heroBurgerStreet,
  gmbUrl: "https://www.google.com/maps/place/Wars+286/data=!4m7!3m6!1s0x8dcbff8d8c40856f:0x5c36cc23c4385b7e!8m2!3d8.2572078!4d-62.7798033!16s%2Fg%2F11q1pjx99w",
  category: "Burgers Gourmet, Alitas & Cervecería Urbana",
  specialtyTagline: "Hamburguesas Épicas, Alitas Picantes, Papas Loaded y Cervezas Frías",
  heroHeadline: "La Guerra del Sabor Épico en Puerto Ordaz",
  heroSubtitle: "Comida urbana con porciones gigantescas y sabor sin concesiones: hamburguesas con triple carne, queso cheddar líquido, tocineta ahumada crujiente y alitas buffalo.",
  rating: 4.7,
  reviewCount: 280,
  priceRange: "$$",
  phone: "584148982860",
  displayPhone: "+58 414 898 2860",
  email: "info@wars286.com",
  address: "Av. Paseo Caroní, sector Curagua / Unare",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 5:00 PM - 12:00 AM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2572078,-62.7798033&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Wars+286/@8.2572078,-62.7798033,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/wars286/",
    facebook: "https://www.facebook.com/wars286pzo/",
  },
  features: ["Burgers con Triple Carne", "Alitas Buffalo con Aderezo Ranch", "Papas Rústicas Cargadas", "Cervezas Bajo Cero"],
  reviews: [
    {
      id: "rev-wa-1",
      author: "Manuel J. Córcega",
      rating: 5,
      text: "La hamburguesa Wars con queso cheddar derretido en mesa es una locura total. El pan brioche siempre fresco y la carne súper jugosa.",
      relativeTime: "Hace 5 días",
    },
    {
      id: "rev-wa-2",
      author: "Gabriela F. Quintana",
      rating: 5,
      text: "Las alitas son bien carnosas y la salsa picante tiene el toque justo. Excelente música y atención de 10.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "wa-burger-epic",
      name: "Burger Épica Wars (Triple Smash 300g)",
      description: "Triple carne smashed en plancha de hierro, triple queso cheddar, tocineta ahumada crujiente, cebolla caramelizada y salsa Wars secreta",
      price: 10.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["wa-polar"],
    },
    {
      id: "wa-alitas",
      name: "Alitas Buffalo Wars Glaseadas (10 Uds)",
      description: "Alitas doradas crujientes bañadas en salsa picante suave o BBQ ahumada con bastones de apio y salsa tártara",
      price: 8.5,
      category: "cocina",
      image: dishKibbehFrito,
      isChefRecommendation: true,
      pairsWellWith: ["wa-polar"],
    },
    {
      id: "wa-fries",
      name: "Papas Rústicas con Queso Cheddar & Bacon Bits",
      description: "Papas recién fritas doradas cubiertas de queso cheddar fundido cremoso y tocineta picada",
      price: 5.5,
      category: "cocina",
      image: tuttoPasticho,
      isChefRecommendation: false,
    },
    {
      id: "wa-milkshake",
      name: "Mega Milkshake de Brownie & Chocolate Fudge",
      description: "Batido cremoso de helado de chocolate con trozos de brownie húmedo y crema batida",
      price: 5.0,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: true,
    },
    {
      id: "wa-polar",
      name: "Balde de Cervezas Polar Solera / Pilsen Vestidas de Novia",
      description: "6 botellas súper heladas servidas con hielo",
      price: 10.0,
      category: "bebidas",
      image: cervezaSoleraImg,
      isChefRecommendation: true,
    },
  ],
};

// 30. CIVETA RESTAURANTE
export const CIVETA_PROFILE: BusinessProfile = {
  id: "civeta",
  slug: "civeta",
  name: "Civeta",
  shortName: "Civeta",
  heroImage: tuttoTiramisu,
  gmbUrl: "https://www.google.com/maps/place/Civeta/data=!4m7!3m6!1s0x8dcbfb540be0da53:0x29aecda946a349c9!8m2!3d8.3046182!4d-62.7227836!16s%2Fg%2F11h6d_7hd2",
  category: "Café Bistró, Brunch & Cocina Contemporánea",
  specialtyTagline: "Café de Especialidad, Brunchs Gourmet, Tostadas de Masa Madre y Pastelería",
  heroHeadline: "El Arte del Café y la Gastronomía Chic en Chilemex",
  heroSubtitle: "El rincón más acogedor y chic de Puerto Ordaz: métodos de café filtrado, tostadas con aguacate y huevos pochados, sándwiches gourmet en panes de masa madre y pastelería fina.",
  rating: 4.8,
  reviewCount: 310,
  priceRange: "$$",
  phone: "584249112233",
  displayPhone: "+58 424 911 2233",
  email: "hola@civetabistro.com",
  address: "Calle Chile, Edif. Chilemex Plaza, PB",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Lunes a Domingo: 8:00 AM - 9:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.3046182,-62.7227836&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Civeta/@8.3046182,-62.7227836,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/civetacafe/",
    facebook: "https://www.facebook.com/civetapzo/",
  },
  features: ["Café de Especialidad Venezolano", "Brunch Todo el Día", "Panadería de Masa Madre", "Espacio para Trabajo y Reuniones"],
  reviews: [
    {
      id: "rev-ci-1",
      author: "Valeria N. Centeno",
      rating: 5,
      text: "El mejor café de Puerto Ordaz por lejos. Las tostadas con salmón ahumado y aguacate son una delicia para desayunar o brunchear.",
      relativeTime: "Hace 3 días",
    },
    {
      id: "rev-ci-2",
      author: "Jorge L. Arriojas",
      rating: 5,
      text: "La atención es de primera, el lugar está decorado con muy buen gusto y la torta de zanahoria con frosting de queso crema es perfecta.",
      relativeTime: "Hace 1 semana",
    },
  ],
  offerings: [
    {
      id: "ci-toast",
      name: "Tostada Civeta de Masa Madre con Salmón & Huevo Poché",
      description: "Pan de masa madre tostado, guacamole suave de la casa, finas láminas de salmón noruego, huevo poché con yema líquida y semillas de chía",
      price: 9.5,
      category: "cocina",
      image: dishPizzaMargherita,
      isChefRecommendation: true,
      pairsWellWith: ["ci-flatwhite"],
    },
    {
      id: "ci-croissant",
      name: "Croissant Francés Relleno de Jamón Serrano & Gouda",
      description: "Croissant hojaldrado con mantequilla francesa, jamón curado español, queso gouda fundido y rúgula fresca",
      price: 7.5,
      category: "cocina",
      image: tuttoPasticho,
      isChefRecommendation: true,
      pairsWellWith: ["ci-flatwhite"],
    },
    {
      id: "ci-bowl",
      name: "Açaí Bowl Tropical con Frutas Frescas & Granola",
      description: "Base cremosa de açaí orgánico con fresas, cambur, coco tostado, semillas de cáñamo y miel pura",
      price: 6.5,
      category: "cocina",
      image: dishRisottoPorcini,
      isChefRecommendation: false,
    },
    {
      id: "ci-carrot",
      name: "Carrot Cake Especiada con Frosting de Queso Crema",
      description: "Bizcocho húmedo de zanahorias tiernas con nueces troceadas, canela y suave crema de queso",
      price: 4.8,
      category: "postres",
      image: dishCannoliSiciliani,
      isChefRecommendation: true,
    },
    {
      id: "ci-flatwhite",
      name: "Café de Especialidad Flat White / Cappuccino Arte Latte",
      description: "Doble shot de espresso de café de Mérida con leche texturizada sedosa y diseño de latte art",
      price: 3.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 1]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 31. BEIJING HOUSE
export const BEIJING_HOUSE_PROFILE: BusinessProfile = {
  id: "beijing-house",
  slug: "beijing-house",
  name: "Beijing House",
  shortName: "Beijing House",
  heroImage: heroChineseWok,
  gmbUrl: "https://www.google.com/maps/place/Beijing+House/data=!4m7!3m6!1s0x8dcbf9aa3ff59e77:0x4cc95db83f1f47c2!8m2!3d8.2957212!4d-62.732546!16s%2Fg%2F11qpw5gntj",
  category: "Auténtica Gastronomía Cantonesa & China Tradicional",
  specialtyTagline: "Arroz Frito Especial, Pollo Agridulce, Lumpias y Costillitas con Sal y Pimienta",
  heroHeadline: "La Mejor Comida China Cantonesa en Alta Vista",
  heroSubtitle: "Sabores tradicionales del wok a fuego vivo: arroz frito al estilo cantón con camarones, lechón y pollo, chop suey crujiente, lumpias doraditas y platos familiares abundantes.",
  rating: 4.6,
  reviewCount: 290,
  priceRange: "$$",
  phone: "582869620011",
  displayPhone: "+58 286 962 0011",
  email: "info@beijinghousepzo.com",
  address: "Av. Monseñor Zabaleta con Calle Tocoma, Alta Vista",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Lunes a Domingo: 11:30 AM - 10:30 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2957212,-62.732546&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Beijing+House/@8.2957212,-62.732546,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/beijinghousepzo/",
    facebook: "https://www.facebook.com/beijinghouse/",
  },
  features: ["Arroz Frito Especial al Wok", "Platos Familiares Abundantes", "Lumpias Crujientes de la Casa", "Delivery Rápido en Puerto Ordaz"],
  reviews: [
    {
      id: "rev-bh-1",
      author: "Franklin J. Soublette",
      rating: 5,
      text: "El arroz especial viene cargadísimo de camarones, pollo y cerdo asado. Las lumpias son crujientes y la salsa agridulce tiene el punto exacto.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-bh-2",
      author: "Luisa Elena Chang",
      rating: 5,
      text: "Excelente comida cantonesa tradicional en Alta Vista. Muy rápido el servicio y porciones muy generosas para comer en familia.",
      relativeTime: "Hace 3 semanas",
    },
  ],
  offerings: [
    {
      id: "bh-arroz",
      name: "Arroz Frito Especial Beijing House",
      description: "Salteado en wok a fuego vivo con camarones frescos, lechón asado cantonés, pechuga de pollo, brotes de soya y cebollín",
      price: 9.5,
      category: "cocina",
      image: dishRisottoPorcini,
      isChefRecommendation: true,
      pairsWellWith: ["bh-te"],
    },
    {
      id: "bh-lumpias",
      name: "Lumpias Tradicionales de la Casa (2 Unidades)",
      description: "Rollos crujientes rellenos de repollo tierno, jamón y vegetales salteados, acompañados de salsa agridulce roja",
      price: 3.5,
      category: "cocina",
      image: dishKibbehFrito,
      isChefRecommendation: true,
      pairsWellWith: ["bh-arroz"],
    },
    {
      id: "bh-pollo-agridulce",
      name: "Pollo Agridulce con Piña & Pimientos",
      description: "Bocados de pechuga crujiente bañados en salsa agridulce tradicional con trozos de piña fresca y pimientos",
      price: 11.0,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
    },
    {
      id: "bh-platano",
      name: "Platanitos Caramelizados con Semillas de Sésamo",
      description: "Plátanos maduros fritos con costra de azúcar acaramelada crujiente y semillas de ajonjolí",
      price: 4.0,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: false,
    },
    {
      id: "bh-te",
      name: "Té Verde Jazmín en Tetera Tradicional",
      description: "Infusión aromática relajante servida caliente en juego de tazas orientales",
      price: 2.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 1]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 32. BEIRUT COFFEE & RESTAURANT
export const BEIRUT_COFFEE_PROFILE: BusinessProfile = {
  id: "beirut-coffee-restaurant",
  slug: "beirut-coffee-restaurant",
  name: "Beirut Coffee & Restaurant",
  shortName: "Beirut Coffee",
  heroImage: heroShanklish,
  gmbUrl: "https://www.google.com/maps/place/Beirut+Coffee+%26+Restaurant/data=!4m7!3m6!1s0x8dcbfa3055b5f427:0xf0d9c2602ef01bbe!8m2!3d8.308838!4d-62.7178525!16s%2Fg%2F1tk644xs",
  category: "Cocina Libanesa, Café Árabe & Shisha Lounge",
  specialtyTagline: "Shawarmas al Carbón, Falafel, Café con Cardamomo y Dulces Árabes",
  heroHeadline: "El Auténtico Banquete Libanés en Castillito",
  heroSubtitle: "La hospitalidad libanesa en Ciudad Guayana: carnes tiernas marinadas con zátar y zumaque, mezze frío y caliente, shawarmas en pan fino tostado y café árabe tradicional.",
  rating: 4.7,
  reviewCount: 320,
  priceRange: "$$",
  phone: "582869234412",
  displayPhone: "+58 286 923 4412",
  email: "contacto@beirutcoffeepzo.com",
  address: "Calle Ciudad Piar con Carrera El Palmar, Castillito",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Lunes a Domingo: 10:00 AM - 11:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.308838,-62.7178525&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Beirut+Coffee+%26+Restaurant/@8.308838,-62.7178525,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/beirutcoffeepzo/",
    facebook: "https://www.facebook.com/beirutcoffeerestaurant/",
  },
  features: ["Banquete Libanés Completo", "Café con Cardamomo Tradicional", "Shawarmas al Asador Giratorio", "Dulces Árabes Finos"],
  reviews: [
    {
      id: "rev-bc-1",
      author: "Samir Sleiman",
      rating: 5,
      text: "Un clásico en Castillito con décadas de tradición. El shawarma mixto con crema de ajo casera y el hummus con carne son insuperables.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-bc-2",
      author: "Norma G. Cedeño",
      rating: 5,
      text: "Me encanta el plato de degustación con tabaquitos de parra y kibbe frito. Los postres de hojaldre con pistacho son una joya.",
      relativeTime: "Hace 3 semanas",
    },
  ],
  offerings: [
    {
      id: "bc-shawarma",
      name: "Shawarma Especial Beirut de Carne & Pollo",
      description: "Finas tiras de carne y pollo asadas al trompo vertical con crema de ajo suave, vegetales frescos y salsa tahini en pan árabe",
      price: 7.5,
      category: "cocina",
      image: dishShawarmaPlatter,
      isChefRecommendation: true,
      pairsWellWith: ["bc-cafe"],
    },
    {
      id: "bc-mezze",
      name: "Mezze Completo Degustación Beirut",
      description: "Hummus con garbanzos seleccionados, mutabal de berenjena ahumada, 2 kibbes fritos, 4 tabaquitos de parra, tabule y pan árabe caliente",
      price: 15.5,
      category: "cocina",
      image: dishShanklishMezze,
      isChefRecommendation: true,
      pairsWellWith: ["bc-baklava"],
    },
    {
      id: "bc-kafta",
      name: "Brochetas de Kafta a la Brasa con Arroz con Fideos",
      description: "Carne de cordero y res picada con hierbabuena fresca, cebolla y especias del Líbano a la parrilla",
      price: 12.0,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: false,
    },
    {
      id: "bc-baklava",
      name: "Baklawa Libanesa Artesanal de Nuez y Miel",
      description: "Finas hojas de hojaldre crujiente con almíbar de azahar y nueces seleccionadas",
      price: 5.0,
      category: "postres",
      image: baklavaImg,
      isChefRecommendation: true,
    },
    {
      id: "bc-cafe",
      name: "Café Árabe Perfumado con Cardamomo",
      description: "Café denso y aromático hervido en rakwa de cobre tradicional",
      price: 2.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 1]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 33. RESTAURANT IL GIARDINO
export const IL_GIARDINO_PROFILE: BusinessProfile = {
  id: "restaurant-il-giardino",
  slug: "restaurant-il-giardino",
  name: "Restaurant Il Giardino",
  shortName: "Il Giardino",
  heroImage: dishPizzaMargherita,
  gmbUrl: "https://www.google.com/maps/place/Restaurant+il+giardino/data=!4m7!3m6!1s0x8dcbfbdb0aca1ac1:0xf45441bd691811d8!8m2!3d8.3005144!4d-62.7275094!16s%2Fg%2F11k4pqmnf3",
  category: "Cocina Italiana Tradicional & Pastas al Horno",
  specialtyTagline: "Pasticho Bolognesa, Pizzas al Horno de Leña, Canelones y Carnes",
  heroHeadline: "El Encanto del Jardín Italiano en Puerto Ordaz",
  heroSubtitle: "Sabores de la campiña italiana en un ambiente cálido y familiar: pastichos gratinados, pastas caseras con salsas de la nonna, pizzas crujientes y postres tradicionales.",
  rating: 4.6,
  reviewCount: 210,
  priceRange: "$$",
  phone: "582869238801",
  displayPhone: "+58 286 923 8801",
  email: "info@ilgiardinopzo.com",
  address: "Calle Brasil con Carrera Ciudad Bolívar, Castillito / Alta Vista",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 12:00 PM - 10:30 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.3005144,-62.7275094&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Restaurant+il+giardino/@8.3005144,-62.7275094,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/ilgiardinopzo/",
    facebook: "https://www.facebook.com/ilgiardinorestaurante/",
  },
  features: ["Pastas Caseras de la Nonna", "Pizzas a la Leña", "Ambiente Romántico de Jardín", "Postres Italianos"],
  reviews: [
    {
      id: "rev-ig-1",
      author: "Antonio C. Giannini",
      rating: 5,
      text: "El pasticho bolognesa es de los mejores de Puerto Ordaz, con abundante queso gratinado y pasta suave. Muy buena atención.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-ig-2",
      author: "Raquel Villarroel",
      rating: 5,
      text: "El ambiente iluminado con jardín es ideal para cenar en pareja. Las pizzas son de masa delgada y crocante.",
      relativeTime: "Hace 3 semanas",
    },
  ],
  offerings: [
    {
      id: "ig-pasticho",
      name: "Pasticho Tradicional al Horno Il Giardino",
      description: "Capas de pasta fresca casera con ragú de carne suave, bechamel cremosa, mozzarella abundante y gratinado de parmesano",
      price: 12.5,
      category: "cocina",
      image: tuttoPasticho,
      isChefRecommendation: true,
      pairsWellWith: ["ig-tiramisu"],
    },
    {
      id: "ig-pizza-giardino",
      name: "Pizza Il Giardino Especial a la Leña",
      description: "Masa fina crocante con salsa de tomate pomodoro, mozzarella fresca, jamón serrano, rúgula fresca y lascas de parmesano",
      price: 13.5,
      category: "cocina",
      image: dishPizzaMargherita,
      isChefRecommendation: true,
      pairsWellWith: ["ig-vino"],
    },
    {
      id: "ig-canelones",
      name: "Canelones Rellenos de Espinacas & Ricotta",
      description: "Tubos de pasta fresca con suave relleno verde bañados en salsa mixta de pomodoro y bechamel gratinada",
      price: 11.0,
      category: "cocina",
      image: tuttoFettuccine,
      isChefRecommendation: false,
    },
    {
      id: "ig-tiramisu",
      name: "Tiramisú Casero de la Nonna",
      description: "Receta tradicional con crema de mascarpone, bizcochos bañados en espresso y cacao puro",
      price: 5.0,
      category: "postres",
      image: tuttoTiramisu,
      isChefRecommendation: true,
    },
    {
      id: "ig-vino",
      name: "Copa de Vino Tinto de la Casa",
      description: "Vino italiano suave y equilibrado para acompañar pastas",
      price: 5.0,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: false,
    },
  ],
};

// 34. PROSCIUTTO RESTAURANT
export const PROSCIUTTO_PROFILE: BusinessProfile = {
  id: "prosciutto-restaurant",
  slug: "prosciutto-restaurant",
  name: "Prosciutto Restaurant",
  shortName: "Prosciutto",
  heroImage: dishRisottoPorcini,
  gmbUrl: "https://www.google.com/maps/place/Prosciutto+Restaurant/data=!4m7!3m6!1s0x8dcbf9c6f4ca692d:0xe96a55935a2664a3!8m2!3d8.2842191!4d-62.7567932!16s%2Fg%2F11h11km_yz",
  category: "Trattoria Italiana & Pizzería Gourmet",
  specialtyTagline: "Pizzas Gourmet con Prosciutto di Parma, Pastas Rellenas y Carpaccios",
  heroHeadline: "El Arte del Prosciutto y la Pizza Italiana en Unare",
  heroSubtitle: "Homenaje a los mejores embutidos y quesos de Italia: pizzas artesanales al horno de piedra con auténtico prosciutto di Parma, pastas salteadas al dente y tabla de antipastos.",
  rating: 4.7,
  reviewCount: 235,
  priceRange: "$$",
  phone: "584148905544",
  displayPhone: "+58 414 890 5544",
  email: "info@prosciuttorestaurant.com",
  address: "Carrera Uchire con Av. Paseo Caroní, Unare II",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 12:00 PM - 11:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2842191,-62.7567932&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Prosciutto+Restaurant/@8.2842191,-62.7567932,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/prosciuttorestaurant/",
    facebook: "https://www.facebook.com/prosciuttopzo/",
  },
  features: ["Prosciutto di Parma Genuino", "Pizzas al Horno de Piedra", "Carpaccios de Res y Salmón", "Ambiente Climatizado y Moderno"],
  reviews: [
    {
      id: "rev-pr-1",
      author: "Maurizio De Luca",
      rating: 5,
      text: "La pizza Prosciutto e Funghi con masa crocante y jamón de excelente calidad es una maravilla. El carpaccio de lomito está en su punto perfecto.",
      relativeTime: "Hace 5 días",
    },
    {
      id: "rev-pr-2",
      author: "Lorena G. Medina",
      rating: 5,
      text: "Excelente servicio en Unare, las pastas caseras son muy ricas y las porciones son generosas. Recomendado para toda la familia.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "pr-pizza-prosciutto",
      name: "Pizza Gourmet Prosciutto di Parma & Rúgula",
      description: "Masa madre fina con pomodoro San Marzano, mozzarella fior di latte, lonjas de prosciutto di Parma curado 18 meses y rúgula fresca",
      price: 14.5,
      category: "cocina",
      image: dishPizzaMargherita,
      isChefRecommendation: true,
      pairsWellWith: ["pr-vino"],
    },
    {
      id: "pr-carpaccio",
      name: "Carpaccio de Lomito al Tartufo",
      description: "Láminas de lomito fresco con aceite de trufa blanca, alcaparras baby, lascas de queso parmesano y focaccia de romero",
      price: 12.0,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["pr-vino"],
    },
    {
      id: "pr-tortelloni",
      name: "Tortelloni Rellenos de Ricotta en Mantequilla de Salvia",
      description: "Pasta fresca artesanal al huevo con mantequilla clarificada, hojas de salvia crujientes y pimienta negra recién molida",
      price: 13.5,
      category: "cocina",
      image: tuttoFettuccine,
      isChefRecommendation: false,
    },
    {
      id: "pr-cannoli",
      name: "Cannoli Siciliani Tradicionales con Pistacho",
      description: "Masa frita crujiente rellena de suave ricotta dulce y pistachos picados",
      price: 4.5,
      category: "postres",
      image: dishCannoliSiciliani,
      isChefRecommendation: true,
    },
    {
      id: "pr-vino",
      name: "Copa de Vino Tinto Sangiovese",
      description: "Vino toscano de cuerpo medio y aromas frutales",
      price: 6.0,
      category: "bebidas",
      image: menuItems[menuItems.length - 2]?.image,
      isChefRecommendation: true,
    },
  ],
};

// 35. RIBS BURGER (RESTAURANTE)
export const RIBS_BURGER_PROFILE: BusinessProfile = {
  id: "ribs-burger-restaurante",
  slug: "ribs-burger-restaurante",
  name: "Ribs Burger",
  shortName: "Ribs Burger",
  heroImage: heroBurgerStreet,
  gmbUrl: "https://www.google.com/maps/place/Ribs+Burger+%28Restaurante%29/data=!4m7!3m6!1s0x8dcbf99bce5165b3:0x2f8199919708034a!8m2!3d8.2840409!4d-62.7568509!16s%2Fg%2F11j1cxv__5",
  category: "Hamburguesas de Costilla, BBQ & Carnes Ahumadas",
  specialtyTagline: "Burgers de Costilla Desmechada, Racks BBQ, Papas Trufadas y Alitas",
  heroHeadline: "La Fusión Perfecta de Costillitas BBQ y Smash Burgers",
  heroSubtitle: "El templo de las hamburguesas monumentales en Unare: costillas ahumadas desmechadas en salsa barbacoa sobre carne de res jugosa, queso cheddar derretido y papas rústicas.",
  rating: 4.7,
  reviewCount: 310,
  priceRange: "$$",
  phone: "584148911122",
  displayPhone: "+58 414 891 1122",
  email: "info@ribsburgerpzo.com",
  address: "Av. Paseo Caroní con Carrera Uchire, Unare II",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Martes a Domingo: 12:00 PM - 11:30 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2840409,-62.7568509&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Ribs+Burger/@8.2840409,-62.7568509,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/ribsburgerpzo/",
    facebook: "https://www.facebook.com/ribsburger/",
  },
  features: ["Burgers con Carne y Costilla BBQ Desmechada", "Costillares Ahumados de Cerdo", "Pan Brioche Sellado con Mantequilla", "Cervezas Heladas"],
  reviews: [
    {
      id: "rev-rb-1",
      author: "Esteban R. Briceño",
      rating: 5,
      text: "La Monster Ribs Burger con carne de res y costilla desmechada en salsa BBQ es de otro planeta. La carne es suave y el sabor ahumado se siente en cada bocado.",
      relativeTime: "Hace 4 días",
    },
    {
      id: "rev-rb-2",
      author: "Carla A. Zambrano",
      rating: 5,
      text: "Las costillitas BBQ se deshacen solas, las papas rústicas con cheddar y tocineta son espectaculares y la atención fue muy rápida.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: [
    {
      id: "rb-monster",
      name: "Monster Ribs Burger Especial (Carne Angus + Pulled Ribs)",
      description: "200g de carne de res sellada a la plancha cubierta con abundante carne de costilla ahumada desmechada en salsa BBQ dulce, doble queso cheddar y tocineta",
      price: 10.5,
      category: "cocina",
      image: dishPuntaTrasera,
      isChefRecommendation: true,
      pairsWellWith: ["rb-polar"],
    },
    {
      id: "rb-rack",
      name: "Medio Rack de Costillas de Cerdo Ahumadas BBQ",
      description: "Costillas de cerdo tiernas glaseadas con salsa barbacoa ahumada, papas fritas rústicas y ensalada coleslaw",
      price: 15.0,
      category: "cocina",
      image: dishParrilladaMixta,
      isChefRecommendation: true,
      pairsWellWith: ["rb-polar"],
    },
    {
      id: "rb-alitas",
      name: "Alitas de Pollo Crispy Glaseadas en Miel Mostaza (10 Uds)",
      description: "Alitas doradas crujientes con salsa agridulce y mayonesa de ajo casera",
      price: 8.0,
      category: "cocina",
      image: dishKibbehFrito,
      isChefRecommendation: false,
    },
    {
      id: "rb-brownie",
      name: "Brownie con Helado de Mantecado & Fudge de Chocolate",
      description: "Brownie tibio con nueces y generosa bola de helado artesanal",
      price: 4.8,
      category: "postres",
      image: dishQuesilloVenezolano,
      isChefRecommendation: true,
    },
    {
      id: "rb-polar",
      name: "Cerveza Polar Solera / Pilsen Vestida de Novia",
      description: "Botella con escarcha de hielo servida al instante",
      price: 2.0,
      category: "bebidas",
      image: cervezaPolarImg,
      isChefRecommendation: false,
    },
  ],
};

// 36. TUTTO PASTA RISTORANTE
export const TUTTO_PASTA_PROFILE: BusinessProfile = {
  id: "tutto-pasta-ristorante",
  slug: "tutto-pasta-ristorante",
  name: "Tutto Pasta Ristorante",
  shortName: "Tutto Pasta",
  heroImage: heroTuttoPasta,
  gmbUrl: "https://www.google.com/maps/place/Tutto+Pasta+Ristorante/@8.2829481,-62.7571557,17z/data=!3m1!4b1!4m6!3m5!1s0x8dcbf91bc1c9c9db:0x4035288257ce391b!8m2!3d8.2829481!4d-62.7571557!16s%2Fg%2F11rwr0jmyh",
  category: "Auténtica Cocina Italiana & Pastas Artesanales",
  specialtyTagline: "Pastas Frescas Hechas a Mano, Pasticho y Pizzas a la Leña",
  heroHeadline: "Auténtica Cocina Italiana en Puerto Ordaz",
  heroSubtitle: "El sabor de Italia en Ciudad Guayana: pastas frescas elaboradas a mano diariamente, pasticho tradicional al horno, pizzas a la leña y tienda de productos congelados para llevar.",
  rating: 4.7,
  reviewCount: 284,
  priceRange: "$$",
  phone: "584129456018",
  displayPhone: "+58 412 945 6018",
  email: "info@tuttopastaristorante.com",
  address: "Unare II, Carrera Uchire, Centro Empresarial Rama, Local 1 (diagonal al BNC)",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Lunes a Domingo: 11:30 AM - 10:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2829481,-62.7571557&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Tutto+Pasta+Ristorante/@8.2829481,-62.7571557,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/tuttopasta.pzo/",
    facebook: "https://www.facebook.com/tuttopasta.pzo/",
  },
  features: [
    "Pastas Frescas Hechas a Mano",
    "Pizzas al Horno de Leña",
    "Ambiente Pet Friendly",
    "Tienda de Congelados para Llevar",
  ],
  reviews: [
    {
      id: "rev-tp-1",
      author: "Mariana Colmenares",
      rating: 5,
      text: "Las mejores pastas de Puerto Ordaz sin duda. El pasticho tradicional y los fettuccine a la marinera son espectaculares, porciones súper generosas y servicio impecable.",
      relativeTime: "Hace 1 semana",
    },
    {
      id: "rev-tp-2",
      author: "Roberto Da Silva",
      rating: 5,
      text: "Excelente ambiente familiar. Las pizzas al horno de leña tienen una masa crocante perfecta y las salsas pomodoro y bolognesa son 100% artesanales.",
      relativeTime: "Hace 2 semanas",
    },
    {
      id: "rev-tp-3",
      author: "Andrea Benítez",
      rating: 5,
      text: "Me encanta que sea un espacio pet friendly y que tengan la tienda de pastas y salsas congeladas para llevar a casa. Los raviolis de ricotta son de ensueño.",
      relativeTime: "Hace 3 semanas",
    },
  ],
  offerings: [
    {
      id: "tp-pasticho",
      name: "Pasticho Tradicional Bolognesa",
      description: "Capas de pasta fresca artesanal al huevo, salsa bolognesa cocida a fuego lento, bechamel cremosa y gratinado crujiente de mozzarella y parmesano",
      price: 13.5,
      category: "cocina",
      image: tuttoPasticho,
      isChefRecommendation: true,
      pairsWellWith: ["tp-tiramisu", "tp-limonada"],
    },
    {
      id: "tp-fettuccine",
      name: "Fettuccine Frutti di Mare",
      description: "Pasta fresca hecha a mano salteada con camarones frescos, almejas, calamares, tomatitos cherry y aceite de oliva extra virgen",
      price: 15.9,
      category: "cocina",
      image: tuttoFettuccine,
      isChefRecommendation: true,
      pairsWellWith: ["tp-tiramisu"],
    },
    {
      id: "tp-tiramisu",
      name: "Tiramisú Tradizionale",
      description: "Auténtico postre italiano con savoiardi bañados en café espresso fuerte, crema mascarpone aireada y lluvia de cacao amargo",
      price: 5.5,
      category: "postres",
      image: tuttoTiramisu,
      isChefRecommendation: true,
    },
    {
      id: "tp-cannoli",
      name: "Cannoli Siciliani Croccanti",
      description: "Tubos de masa crujiente frita rellenos de crema dulce de ricotta, chispas de chocolate y pistachos troceados",
      price: 4.8,
      category: "postres",
      image: dishCannoliSiciliani,
      isChefRecommendation: false,
    },
    {
      id: "tp-limonada",
      name: "Limonada Frappé con Menta",
      description: "Refrescante preparación de limón sutil granizado con hojas de menta fresca y un toque justo de dulzura",
      price: 3.5,
      category: "bebidas",
      image: menuItems[menuItems.length - 1]?.image,
      isChefRecommendation: false,
    },
  ],
};

// 8. AL JANNA SWEET (Original Brand & Pastry Template)
export const ALJ_ANNA_PROFILE: BusinessProfile = {
  id: "al-janna-sweet",
  slug: "al-janna-sweet",
  name: "Al Janna Sweet",
  shortName: "Al Janna",
  logoImage: logoAlJanna,
  gmbUrl: "https://www.google.com/maps/place/Al+Janna+Sweet/@8.2974,-62.7214,17z",
  category: "Dulces Árabes & Pastelería Fina",
  specialtyTagline: "Auténtica Tradición en Dulces Árabes y Especialidades Orientales",
  heroHeadline: "El Arte Ancestral de los Dulces Árabes",
  heroSubtitle: "Baklava crujiente bañado en miel de azahar, mamul relleno de pistachos y dátiles, y los postres más finos de la repostería del Medio Oriente en Puerto Ordaz.",
  rating: 4.9,
  reviewCount: 489,
  priceRange: "$$",
  phone: "584249147877",
  displayPhone: "+58 424 914 7877",
  email: "info@aljannasweet.com",
  address: "Centro Comercial Naraya, Planta Baja, Alta Vista",
  city: "Puerto Ordaz, Estado Bolívar, Venezuela",
  hours: "Lunes a Sábado: 9:00 AM - 8:00 PM | Domingo: 10:00 AM - 6:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=8.2974,-62.7214&hl=es&z=16&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/place/Al+Janna+Sweet/@8.2974,-62.7214,17z",
  socialLinks: {
    instagram: "https://www.instagram.com/aljannasweet/",
    facebook: "https://www.facebook.com/aljannasweet/",
  },
  features: [
    "Pistachos y Dátiles Importados",
    "Miel Pura de Azahar",
    "Cajas de Regalo y Banquetes",
    "Delivery a Toda Ciudad Guayana",
  ],
  reviews: [
    {
      id: "rev-aj-1",
      author: "Samir Kabbabe",
      rating: 5,
      text: "La mejor baklava que he probado en Venezuela. La masa filo está perfectamente crujiente y el aroma a flor de azahar es genuinamente del Medio Oriente.",
      relativeTime: "Hace 4 días",
    },
    {
      id: "rev-aj-2",
      author: "Valentina Ramos",
      rating: 5,
      text: "Pedimos una bandeja surtida para un evento familiar y todos quedaron fascinados con los mamul y el café con cardamomo. La atención por WhatsApp fue súper rápida.",
      relativeTime: "Hace 2 semanas",
    },
  ],
  offerings: menuItems.slice(0, 6).map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
    category: item.category as "cocina" | "postres" | "bebidas",
    image: item.image,
    isChefRecommendation: item.isChefRecommendation,
  })),
};

// Complete registry containing all bulk-created Puerto Ordaz businesses
export const INITIAL_BUSINESSES: BusinessProfile[] = [
  LA_CABANA_PROFILE,
  EL_MIRADOR_ITALO_PROFILE,
  NAPOLETANA_PROFILE,
  SHANKLISH_PROFILE,
  SPA_RESTOBAR_PROFILE,
  FAROFA_PROFILE,
  LA_MANSION_LEONEL_PROFILE,
  CASA_ALBA_PROFILE,
  LA_POSADA_CHIQUITO_PROFILE,
  CASA_CLUB_PROFILE,
  EL_BODEGON_MIGUEL_PROFILE,
  OPORTOS_PROFILE,
  JAI_ALAI_PROFILE,
  EL_SAZONAR_PROFILE,
  TOMASA_PROFILE,
  SPENCER_STREET_FOOD_PROFILE,
  LA_SONATA_PROFILE,
  AL_REDA_PROFILE,
  PORKIS_286_PROFILE,
  MUELLE_MACAGUA_PROFILE,
  KLANDESTINO_PROFILE,
  PIMIENTA_PROFILE,
  LA_ESTACION_RAFUCHA_PROFILE,
  ECHA_VAINA_PROFILE,
  CHALAN_RESTO_BAR_PROFILE,
  TROGLIS_PROFILE,
  DORO_RESTAURANTE_PROFILE,
  MACARENA_RESTOBAR_PROFILE,
  WARS_286_PROFILE,
  CIVETA_PROFILE,
  BEIJING_HOUSE_PROFILE,
  BEIRUT_COFFEE_PROFILE,
  IL_GIARDINO_PROFILE,
  PROSCIUTTO_PROFILE,
  RIBS_BURGER_PROFILE,
  TUTTO_PASTA_PROFILE,
  ALJ_ANNA_PROFILE,
];

// Parser function that turns any Google My Business URL or parsed payload into a complete BusinessProfile
export function createBusinessFromGmbData(data: {
  url: string;
  name?: string;
  category?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  rating?: number;
  reviewCount?: number;
  specialty?: string;
  hours?: string;
  instagram?: string;
  facebook?: string;
  website?: string;
  reviews?: Array<{ id: string; author: string; rating: number; text: string; relativeTime: string }>;
}): BusinessProfile {
  let extractedName = data.name;

  // If no name supplied, extract from URL path or search query
  if (!extractedName) {
    try {
      const parsedUrl = new URL(data.url);
      if (parsedUrl.pathname.includes("/place/")) {
        const placePart = parsedUrl.pathname.split("/place/")[1]?.split("/")[0];
        if (placePart) {
          extractedName = decodeURIComponent(placePart).replace(/\+/g, " ");
        }
      } else if (parsedUrl.searchParams.get("q")) {
        extractedName = parsedUrl.searchParams.get("q")!.replace(/\+/g, " ");
      }
    } catch {
      // ignore
    }
  }

  const name = extractedName?.trim() || "Nuevo Negocio Local";
  const slug = slugify(name);
  const cleanEmail = data.email?.trim() || `info@${slug.replace(/-/g, "")}.com`;

  // Detect city and coordinates from URL
  let detectedCity = data.city;
  let lat: number | null = null;
  let lng: number | null = null;
  try {
    const coordMatch = data.url.match(/!3d([-\d.]+)!4d([-\d.]+)/);
    if (coordMatch) {
      lat = parseFloat(coordMatch[1]);
      lng = parseFloat(coordMatch[2]);
    }
  } catch {}

  if (!detectedCity) {
    if (lat && lng) {
      // Longitude around -68.0 and latitude around 10.2 is Valencia, Carabobo
      if (lat > 9.9 && lat < 10.5 && lng < -67.8 && lng > -68.3) {
        detectedCity = "Valencia, Estado Carabobo, Venezuela";
      } else if (lat > 8.1 && lat < 8.5 && lng < -62.5 && lng > -63.0) {
        detectedCity = "Puerto Ordaz, Estado Bolívar, Venezuela";
      }
    }
    if (!detectedCity) {
      const lowerUrl = data.url.toLowerCase();
      if (lowerUrl.includes("valencia") || lowerUrl.includes("carabobo")) {
        detectedCity = "Valencia, Estado Carabobo, Venezuela";
      } else {
        detectedCity = "Venezuela";
      }
    }
  }

  // Detect category intelligently from name if generic
  let cleanCategory = data.category?.trim();
  let cleanSpecialty = data.specialty?.trim();
  const lowerName = name.toLowerCase();

  if (!cleanCategory) {
    if (lowerName.includes("sushi") || lowerName.includes("ramen") || lowerName.includes("poke") || lowerName.includes("cebich") || lowerName.includes("ceviche") || lowerName.includes("tokio") || lowerName.includes("bonsai") || lowerName.includes("fusion") || lowerName.includes("nikkei") || lowerName.includes("kai")) {
      cleanCategory = "Sushi Bar, Ceviches & Gastronomía Nikkei";
      cleanSpecialty = cleanSpecialty || "Poke Bowls Hawaianos, Rolls Especiales, Ceviche Clásico y Gyozas";
    } else if (lowerName.includes("paella") || lowerName.includes("galicia") || lowerName.includes("rias") || lowerName.includes("galeon") || lowerName.includes("marisco") || lowerName.includes("pescado") || lowerName.includes("puertomar") || lowerName.includes("amkelmar") || lowerName.includes("puerto")) {
      cleanCategory = "Cocina Española, Paellas Marineras & Frutos del Mar";
      cleanSpecialty = cleanSpecialty || "Auténtica Paella a la Leña, Pulpo a la Gallega, Cazuelas y Pescados Frescos";
    } else if (lowerName.includes("pollo") || lowerName.includes("chicken") || lowerName.includes("palacio del pollo")) {
      cleanCategory = "Pollo a las Brasas, Crispy Chicken & Parrillas Familiares";
      cleanSpecialty = cleanSpecialty || "Pollo al Carbón Jugoso, Crispy Chicken, Hayaquitas, Guasacaca y Ensalada";
    } else if (lowerName.includes("cachap") || lowerName.includes("shaday") || lowerName.includes("maiz") || lowerName.includes("chicharron") || lowerName.includes("q'delicias")) {
      cleanCategory = "Cachapería Tradicional, Chicharronera & Cochino Frito";
      cleanSpecialty = cleanSpecialty || "Cachapas de Maíz Tierno con Doble Queso de Mano, Chicharrón Crocante y Pernil";
    } else if (lowerName.includes("arepa") || lowerName.includes("tito") || lowerName.includes("empanada") || lowerName.includes("san blas") || lowerName.includes("criollos")) {
      cleanCategory = "Arepera Tradicional, Empanadas & Desayunos Criollos";
      cleanSpecialty = cleanSpecialty || "Arepas Resueltas al Budare, Empanadas de Cazón y Mechada, Tequeños y Jugos";
    } else if (lowerName.includes("smoke") || lowerName.includes("gabo") || lowerName.includes("brisket")) {
      cleanCategory = "Smokehouse, Brisket Ahumado & BBQ Artesanal";
      cleanSpecialty = cleanSpecialty || "Brisket Ahumado al Quebracho por 12 Horas, Costillas BBQ y Pulled Pork";
    } else if (lowerName.includes("churro") || lowerName.includes("sweet") || lowerName.includes("cake") || lowerName.includes("delike") || lowerName.includes("antojo")) {
      cleanCategory = "Churrería Artesanal, Repostería Creativa & Antojos";
      cleanSpecialty = cleanSpecialty || "Churros Crujientes Rellenos de Nutella y Arequipe, Tortas Húmedas y Marquesas";
    } else if (lowerName.includes("perro")) {
      cleanCategory = "Perros Calientes Tradicionales, Pepitos & Street Food";
      cleanSpecialty = cleanSpecialty || "Perros Calientes con Todo y Queso Rallado, Pepitos Gratinados y Salsas Especiales";
    } else if (lowerName.includes("sopa") || lowerName.includes("hervido") || lowerName.includes("angelica") || lowerName.includes("pola") || lowerName.includes("don rafa") || lowerName.includes("sandra") || lowerName.includes("marlen") || lowerName.includes("tia") || lowerName.includes("tupa") || lowerName.includes("arboleda") || lowerName.includes("unicentro") || lowerName.includes("central") || lowerName.includes("toldo") || lowerName.includes("miguel") || lowerName.includes("llanero") || lowerName.includes("leña valenciana") || lowerName.includes("rincon") || lowerName.includes("rincón")) {
      cleanCategory = "Sopas Criollas, Hervidos Tradicionales & Comida Casera";
      cleanSpecialty = cleanSpecialty || "Hervidos de Res y Gallina a la Leña, Cruzados, Secos Criollos y Sabor de Hogar";
    } else if (lowerName.includes("paisa") || lowerName.includes("portoncito") || lowerName.includes("casita paisa")) {
      cleanCategory = "Auténtica Gastronomía Colombiana & Sabor Paisa";
      cleanSpecialty = cleanSpecialty || "Bandeja Paisa Típica, Arepas con Hogao, Chicharrón Crocante y Sancocho";
    } else if (lowerName.includes("ble") || lowerName.includes("blé") || lowerName.includes("boulangerie") || lowerName.includes("croissant")) {
      cleanCategory = "Boulangerie, Pastelería Francesa & Café Bistró";
      cleanSpecialty = cleanSpecialty || "Croissants Artesanales de Mantequilla, Baguettes, Quiches y Café de Autor";
    } else if (lowerName.includes("pizza") || lowerName.includes("mozzarella") || lowerName.includes("mario") || lowerName.includes("prebo") || lowerName.includes("007") || lowerName.includes("veneto") || lowerName.includes("palato") || lowerName.includes("miles") || lowerName.includes("trattoria") || lowerName.includes("pasta") || lowerName.includes("cucina") || lowerName.includes("nonna") || lowerName.includes("bottega") || lowerName.includes("salumeria") || lowerName.includes("pastas") || lowerName.includes("toscana") || lowerName.includes("tintity")) {
      cleanCategory = "Pizzería al Horno & Auténtica Trattoria Italiana";
      cleanSpecialty = cleanSpecialty || "Pizzas de Masa Madre, Pasticho Tradicional al Horno y Pastas Frescas";
    } else if (lowerName.includes("toneles") || lowerName.includes("cuevas") || lowerName.includes("tasca") || lowerName.includes("royal city") || lowerName.includes("balcon") || lowerName.includes("birra") || lowerName.includes("bombonera") || lowerName.includes("chaguaramos") || lowerName.includes("bella estrella") || lowerName.includes("beverly") || lowerName.includes("rancho nuevo")) {
      cleanCategory = "Tasca Clásica, Tapeo Español, Cervecería & Vinos";
      cleanSpecialty = cleanSpecialty || "Tapas Ibéricas, Jamón Serrano, Tortilla Española y Cervezas Bien Frías";
    } else if (lowerName.includes("mostritos") || lowerName.includes("aquefrank") || lowerName.includes("popochorronitas") || lowerName.includes("hangar") || lowerName.includes("street") || lowerName.includes("buguer") || lowerName.includes("burger") || lowerName.includes("geo") || lowerName.includes("glotones") || lowerName.includes("compi") || lowerName.includes("samy") || lowerName.includes("prado")) {
      cleanCategory = "Hamburguesas Gourmet, Pepitos Criollos & Street Food";
      cleanSpecialty = cleanSpecialty || "Hamburguesas Monumentales, Pepitos con Gratinado Especial y Salsas de la Casa";
    } else if (lowerName.includes("arabe") || lowerName.includes("arabito") || lowerName.includes("libanes") || lowerName.includes("vagon") || lowerName.includes("shanklish") || lowerName.includes("beirut") || lowerName.includes("san miguel")) {
      cleanCategory = "Cocina Árabe Tradicional, Shawarmas & Mezze";
      cleanSpecialty = cleanSpecialty || "Shawarmas al Carbón, Kibbeh Frito, Hummus, Baba Ganoush y Tabaquitos";
    } else if (lowerName.includes("grill") || lowerName.includes("parrilla") || lowerName.includes("carbon") || lowerName.includes("bunker") || lowerName.includes("fogon") || lowerName.includes("churrasc") || lowerName.includes("meson") || lowerName.includes("mesón") || lowerName.includes("rodeo") || lowerName.includes("kamedu")) {
      cleanCategory = "Carnes a las Brasas, Steakhouse & Parrilla";
      cleanSpecialty = cleanSpecialty || "Cortes Prime Madurados, Asado a la Leña y Parrillas Familiares";
    } else if (lowerName.includes("cafe") || lowerName.includes("coffee") || lowerName.includes("bistro") || lowerName.includes("galeno") || lowerName.includes("anella") || lowerName.includes("dolcezza") || lowerName.includes("boceto")) {
      cleanCategory = "Café Bistró, Brunch & Repostería de Autor";
      cleanSpecialty = cleanSpecialty || "Café de Especialidad, Brunchs Gourmet y Pastelería Artesanal";
    } else if (lowerName.includes("mar") || lowerName.includes("nautilus") || lowerName.includes("pescado")) {
      cleanCategory = "Pescados Frescos, Mariscos & Jardín Gourmet";
      cleanSpecialty = cleanSpecialty || "Frutos del Mar, Paellas Marineras y Pesca del Día";
    } else if (lowerName.includes("garden") || lowerName.includes("imperial") || lowerName.includes("yin") || lowerName.includes("wei") || lowerName.includes("chino") || lowerName.includes("lila su")) {
      cleanCategory = "Alta Cocina Asiática, Cantonesa & Especialidades Wok";
      cleanSpecialty = cleanSpecialty || "Platos al Wok, Arroz Especial Cantonés, Dim Sum y Pato Laqueado";
    } else if (lowerName.includes("dorado") || lowerName.includes("lounge") || lowerName.includes("bar") || lowerName.includes("ubuntu") || lowerName.includes("esquina") || lowerName.includes("isabella") || lowerName.includes("drink")) {
      cleanCategory = "Resto-Bar Gourmet, Coctelería de Autor & Tapas";
      cleanSpecialty = cleanSpecialty || "Coctelería de Vanguardia, Platos para Compartir y Música en Vivo";
    } else if (lowerName.includes("sambil")) {
      cleanCategory = "Paseo Gastronómico Sambil & Feria Gourmet";
      cleanSpecialty = cleanSpecialty || "Selección de Marcas Culinarias, Opciones Familiares y Postres";
    } else if (lowerName.includes("frida")) {
      cleanCategory = "Cocina Mexicana Contemporánea & Tacos de Autor";
      cleanSpecialty = cleanSpecialty || "Tacos al Pastor, Quesadillas, Margaritas y Guacamole Fresco";
    } else {
      cleanCategory = "Gastronomía Selecta & Restaurante Gourmet";
      cleanSpecialty = cleanSpecialty || `Platos exclusivos y atención personalizada en ${name}`;
    }
  }

  cleanSpecialty = cleanSpecialty || `Lo mejor de ${cleanCategory} con atención de primera`;

  const mapQuery = lat && lng ? `${lat},${lng}` : encodeURIComponent(data.address ? `${name}, ${data.address}` : `${name}, ${detectedCity}`);
  const mapEmbedUrl = lat && lng 
    ? `https://maps.google.com/maps?q=${lat},${lng}&hl=es&z=16&output=embed`
    : `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const googleMapsDirectionsUrl = lat && lng ? `https://www.google.com/maps/place/${lat},${lng}` : `https://maps.google.com/?q=${mapQuery}`;

  // Smart category-based dish image selection
  const catLower = (cleanCategory + " " + cleanSpecialty + " " + name).toLowerCase();
  let mainDishImg = dishPuntaTrasera;
  let secondaryDishImg = dishParrilladaMixta;
  let dessertImg = dishQuesilloVenezolano;

  if (catLower.includes("pizza") || catLower.includes("ital") || catLower.includes("pasta") || catLower.includes("nonna") || catLower.includes("mozzarella") || catLower.includes("mario")) {
    mainDishImg = dishPizzaMargherita;
    secondaryDishImg = tuttoPasticho;
    dessertImg = dishCannoliSiciliani;
  } else if (catLower.includes("sushi") || catLower.includes("nikkei") || catLower.includes("ramen") || catLower.includes("poke") || catLower.includes("tokio") || catLower.includes("japo") || catLower.includes("bonsai") || catLower.includes("kai")) {
    mainDishImg = heroSushiNikkei;
    secondaryDishImg = dishRisottoPorcini;
    dessertImg = dishCannoliSiciliani;
  } else if (catLower.includes("paella") || catLower.includes("marisco") || catLower.includes("pescad") || catLower.includes("galicia") || catLower.includes("rias") || catLower.includes("galeon") || catLower.includes("mar") || catLower.includes("puertomar")) {
    mainDishImg = dishPaellaMariscos;
    secondaryDishImg = heroSpaPaella;
    dessertImg = dishQuesilloVenezolano;
  } else if (catLower.includes("pollo") || catLower.includes("chicken")) {
    mainDishImg = heroPolloBrasas;
    secondaryDishImg = dishParrilladaMixta;
    dessertImg = dishQuesilloVenezolano;
  } else if (catLower.includes("arepa") || catLower.includes("tito") || catLower.includes("empanada") || catLower.includes("san blas") || catLower.includes("cachap") || catLower.includes("shaday") || catLower.includes("maiz") || catLower.includes("chicharron") || catLower.includes("q'delicias")) {
    mainDishImg = heroArepaCriollo;
    secondaryDishImg = dishParrilladaMixta;
    dessertImg = dishQuesilloVenezolano;
  } else if (catLower.includes("smoke") || catLower.includes("gabo") || catLower.includes("brisket")) {
    mainDishImg = heroSmokeBbq;
    secondaryDishImg = dishPicanhaChurrasco;
    dessertImg = dishQuesilloVenezolano;
  } else if (catLower.includes("sopa") || catLower.includes("hervido") || catLower.includes("sancocho") || catLower.includes("llanero") || catLower.includes("toldo") || catLower.includes("miguel")) {
    mainDishImg = heroSopaSancocho;
    secondaryDishImg = dishParrilladaMixta;
    dessertImg = dishQuesilloVenezolano;
  } else if (catLower.includes("chino") || catLower.includes("canton") || catLower.includes("lila su") || catLower.includes("garden") || catLower.includes("imperial") || catLower.includes("yin") || catLower.includes("wei") || catLower.includes("beijing")) {
    mainDishImg = heroChineseWok;
    secondaryDishImg = dishRisottoPorcini;
    dessertImg = dishCannoliSiciliani;
  } else if (catLower.includes("churro") || catLower.includes("sweet") || catLower.includes("cake") || catLower.includes("delike") || catLower.includes("antojo") || catLower.includes("dolcezza")) {
    mainDishImg = heroChurrosDessert;
    secondaryDishImg = tuttoTiramisu;
    dessertImg = dishQuesilloVenezolano;
  } else if (catLower.includes("mostritos") || catLower.includes("aquefrank") || catLower.includes("popochorronitas") || catLower.includes("hangar") || catLower.includes("street") || catLower.includes("buguer") || catLower.includes("burger") || catLower.includes("geo") || catLower.includes("glotones") || catLower.includes("compi") || catLower.includes("samy") || catLower.includes("prado") || catLower.includes("perro")) {
    mainDishImg = heroBurgerStreet;
    secondaryDishImg = dishParrilladaMixta;
    dessertImg = dishQuesilloVenezolano;
  } else if (catLower.includes("arabe") || catLower.includes("liban") || catLower.includes("arabito") || catLower.includes("shawarma") || catLower.includes("shanklish")) {
    mainDishImg = dishShawarmaPlatter;
    secondaryDishImg = dishShanklishMezze;
    dessertImg = baklavaImg;
  } else if (catLower.includes("churrasc") || catLower.includes("rodizio") || catLower.includes("brasil")) {
    mainDishImg = dishPicanhaChurrasco;
    secondaryDishImg = dishAbacaxiGrelhado;
    dessertImg = dishQuesilloVenezolano;
  }

  // Determine hero banner image tailored to cuisine
  let heroBannerImg = mainDishImg;
  if (catLower.includes("pizza") || catLower.includes("ital") || catLower.includes("pasta") || catLower.includes("nonna") || catLower.includes("mozzarella") || catLower.includes("mario") || catLower.includes("prebo") || catLower.includes("007") || catLower.includes("toscana") || catLower.includes("tintity")) {
    heroBannerImg = heroNapoletana;
  } else if (catLower.includes("sushi") || catLower.includes("poke") || catLower.includes("ramen") || catLower.includes("nikkei") || catLower.includes("cebich") || catLower.includes("ceviche") || catLower.includes("tokio") || catLower.includes("bonsai") || catLower.includes("kai")) {
    heroBannerImg = heroSushiNikkei;
  } else if (catLower.includes("paella") || catLower.includes("marisco") || catLower.includes("pescad") || catLower.includes("galicia") || catLower.includes("rias") || catLower.includes("galeon") || catLower.includes("puertomar") || catLower.includes("amkelmar") || catLower.includes("nautilus")) {
    heroBannerImg = heroSpaPaella;
  } else if (catLower.includes("pollo") || catLower.includes("chicken") || catLower.includes("palacio del pollo")) {
    heroBannerImg = heroPolloBrasas;
  } else if (catLower.includes("arepa") || catLower.includes("tito") || catLower.includes("empanada") || catLower.includes("san blas") || catLower.includes("criollo") || catLower.includes("cachap") || catLower.includes("shaday") || catLower.includes("maiz") || catLower.includes("chicharron") || catLower.includes("q'delicias") || catLower.includes("paisa") || catLower.includes("portoncito")) {
    heroBannerImg = heroArepaCriollo;
  } else if (catLower.includes("smoke") || catLower.includes("gabo") || catLower.includes("brisket")) {
    heroBannerImg = heroSmokeBbq;
  } else if (catLower.includes("grill") || catLower.includes("parrilla") || catLower.includes("carbon") || catLower.includes("churrasc") || catLower.includes("rodizio") || catLower.includes("bunker") || catLower.includes("meson") || catLower.includes("rodeo") || catLower.includes("kamedu") || catLower.includes("farofa")) {
    heroBannerImg = heroFarofa;
  } else if (catLower.includes("mostritos") || catLower.includes("aquefrank") || catLower.includes("popochorronitas") || catLower.includes("hangar") || catLower.includes("street") || catLower.includes("buguer") || catLower.includes("burger") || catLower.includes("geo") || catLower.includes("glotones") || catLower.includes("compi") || catLower.includes("samy") || catLower.includes("prado") || catLower.includes("perro")) {
    heroBannerImg = heroBurgerStreet;
  } else if (catLower.includes("arabe") || catLower.includes("liban") || catLower.includes("arabito") || catLower.includes("shawarma") || catLower.includes("shanklish") || catLower.includes("beirut") || catLower.includes("san miguel") || catLower.includes("vagon")) {
    heroBannerImg = heroShanklish;
  } else if (catLower.includes("chino") || catLower.includes("canton") || catLower.includes("lila su") || catLower.includes("garden") || catLower.includes("imperial") || catLower.includes("yin") || catLower.includes("wei") || catLower.includes("beijing")) {
    heroBannerImg = heroChineseWok;
  } else if (catLower.includes("sopa") || catLower.includes("hervido") || catLower.includes("sancocho") || catLower.includes("llanero") || catLower.includes("toldo") || catLower.includes("miguel") || catLower.includes("angelica") || catLower.includes("pola") || catLower.includes("don rafa") || catLower.includes("sandra") || catLower.includes("leña valenciana") || catLower.includes("arboleda") || catLower.includes("rincon") || catLower.includes("rincón")) {
    heroBannerImg = heroSopaSancocho;
  } else if (catLower.includes("churro") || catLower.includes("sweet") || catLower.includes("cake") || catLower.includes("delike") || catLower.includes("antojo") || catLower.includes("dolcezza")) {
    heroBannerImg = heroChurrosDessert;
  } else if (catLower.includes("ble") || catLower.includes("blé") || catLower.includes("cafe") || catLower.includes("coffee") || catLower.includes("bistro") || catLower.includes("galeno") || catLower.includes("anella") || catLower.includes("boceto")) {
    heroBannerImg = tuttoTiramisu;
  } else if (catLower.includes("toneles") || catLower.includes("cuevas") || catLower.includes("tasca") || catLower.includes("royal city") || catLower.includes("balcon") || catLower.includes("birra") || catLower.includes("bombonera") || catLower.includes("chaguaramos") || catLower.includes("bella estrella") || catLower.includes("beverly") || catLower.includes("rancho nuevo")) {
    heroBannerImg = heroSpaPaella;
  }

  // Archetype-tailored hero section and dishes
  let heroHeadline = `Experiencia Exclusiva en ${name}`;
  let heroSubtitle = `Disfruta de la mejor calidad y servicio especializado en ${name}. Revisa nuestras especialidades y haz tu pedido directamente por WhatsApp.`;
  let features = ["Atención Personalizada", "Calidad Garantizada", "Pedidos por WhatsApp", "Ubicación Céntrica"];
  let offeringsList: BusinessProfile["offerings"] = [];

  if (catLower.includes("pizza") || catLower.includes("ital") || catLower.includes("pasta") || catLower.includes("nonna") || catLower.includes("mozzarella") || catLower.includes("mario") || catLower.includes("prebo")) {
    heroHeadline = `Auténtica Cocina Italiana & Pizzería al Horno en ${name}`;
    heroSubtitle = `Pizzas a la leña con masa madre de fermentación lenta, pastas frescas estiradas a mano, salsas de la nonna y quesos importados de Italia.`;
    features = ["Horno a la Leña Tradicional", "Pastas Frescas al Huevo", "Pomodoro San Marzano & Mozzarella", "Delivery & Pickup por WhatsApp"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Pizza Margherita Speciale con Albahaca Fresca",
        description: "Masa madre fina y crocante al horno de leña, pomodoro italiano, mozzarella fior di latte, albahaca genovesa y aceite de oliva virgen extra",
        price: 13.5,
        category: "cocina",
        image: dishPizzaMargherita,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Pasticho Tradicional a la Boloñesa Gratinado",
        description: "Capas de pasta fresca artesanal, ragú de res madurada cocida por 6 horas, bechamel cremosa y abundante parmesano reggiano dorado",
        price: 12.5,
        category: "cocina",
        image: tuttoPasticho,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Fettuccine ai Funghi Porcini & Crema de Trufa",
        description: "Pasta al huevo al dente salteada con hongos porcini silvestres, mantequilla aromatizada y toque de trufa negra",
        price: 15.0,
        category: "cocina",
        image: tuttoFettuccine,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Tiramisú Clásico al Mascarpone Veneziano",
        description: "Bizcochos savoiardi embebidos en espresso recién extraído con crema de queso mascarpone y lluvia de cacao amargo",
        price: 5.5,
        category: "postres",
        image: tuttoTiramisu,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Copa de Vino Tinto Selección de la Casa",
        description: "Cabernet Sauvignon / Malbec madurado en roble, servido a temperatura de cava perfecta",
        price: 3.5,
        category: "bebidas",
        image: cervezaSoleraImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("sushi") || catLower.includes("poke") || catLower.includes("tokio") || catLower.includes("bonsai") || catLower.includes("nikkei") || catLower.includes("ramen")) {
    heroHeadline = `Gastronomía Nikkei, Poke Bowls & Sushi Bar en ${name}`;
    heroSubtitle = `Salmón fresco certificado, rolls de autor flameados en mesa, poke bowls hawaianos con ingredientes seleccionados y ramen tradicional.`;
    features = ["Pescados Frescos del Día", "Rolls Flameados de Autor", "Poke Bowls Personalizables", "Empaque Especial para Delivery"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Tokio Salmon & Avocado Poke Bowl",
        description: "Base de arroz sushi al sésamo, cubos de salmón fresco marinados en ponzu cítrico, edamame, aguacate, ensalada wakame y chips crocantes",
        price: 14.0,
        category: "cocina",
        image: dishRisottoPorcini,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Dragon Flame Roll Gratinado (10 Bocados)",
        description: "Langostino crocante tempurizado, queso crema y aguacate, coronado con láminas de salmón flameado, salsa anguila y cebollín",
        price: 12.5,
        category: "cocina",
        image: dishPaellaMariscos,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Ramen Tonkotsu Tradicional al Fondo Lento",
        description: "Caldo de cocción lenta durante 12 horas, fideos artesanales, chashu tierno de cerdo, huevo ajitsuke marinado, nori y brotes de bambú",
        price: 11.5,
        category: "cocina",
        image: dishRisottoPorcini,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Mochi Helado Japonés Trilogía de Sabores",
        description: "Mochis artesanales suaves rellenos de helado premium de té verde matcha, maracuyá y chocolate belga",
        price: 5.0,
        category: "postres",
        image: dishCannoliSiciliani,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Té Frío Verde Cítrico con Bobas de Fruta",
        description: "Infusión fresca de té verde con pulpa natural de maracuyá y esferificaciones frutales",
        price: 3.5,
        category: "bebidas",
        image: cervezaPolarImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("paella") || catLower.includes("galicia") || catLower.includes("rias") || catLower.includes("galeon") || catLower.includes("marisco") || catLower.includes("pescad")) {
    heroHeadline = `Paellas a la Leña, Cocina Gallega & Frutos del Mar en ${name}`;
    heroSubtitle = `Arroces en paellera gigante con azafrán español, camarones jumbo, calamares, pulpo tierno al pimentón de la vera y los tesoros del mar.`;
    features = ["Paellas a la Leña Tradicionales", "Mariscos del Día Garantizados", "Pulpo al Estilo Gallego", "Porciones Generosas para Compartir"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Gran Paella Marinera a la Leña con Frutos del Mar (Para 2)",
        description: "Arroz bomba cocido con caldo de pescado de roca y azafrán, colmado de camarones, calamares, mejillones en concha, almejas y pimientos asados",
        price: 24.0,
        category: "cocina",
        image: dishPaellaMariscos,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Pulpo a la Gallega con Pimentón de la Vera",
        description: "Medallones de pulpo tierno sobre cama de patatas al vapor, aderezado con sal en escamas, aceite de oliva virgen extra y pimentón ahumado",
        price: 17.5,
        category: "cocina",
        image: heroSpaPaella,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Cazuela de Mariscos Gratinada al Jerez",
        description: "Camarones, vieiras y calamares cocidos a fuego lento en reducción cremosa de vino jerez y gratinado de queso manchego",
        price: 15.0,
        category: "cocina",
        image: dishPaellaMariscos,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Crema Catalana Caramelizada al Fuego",
        description: "Postre tradicional con crema suave aromatizada con canela y cítricos, cubierta de costra crujiente de azúcar caramelizada",
        price: 5.5,
        category: "postres",
        image: dishQuesilloVenezolano,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Jarra de Sangría Tinta Española de la Casa",
        description: "Vino tinto madurado, frutas cítricas maceradas, toque de licor de naranja y canela, servida bien fría con hielo",
        price: 11.0,
        category: "bebidas",
        image: cervezaSoleraImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("pollo")) {
    heroHeadline = `El Auténtico Pollo en Brasas al Carbón en ${name}`;
    heroSubtitle = `Pollo marinado con hierbas frescas y sazón tradicional, asado lentamente sobre brasas de carbón vegetal hasta lograr piel dorada y carne jugosa.`;
    features = ["Carbón Vegetal Seleccionado", "Guasacaca Artesanal Diaria", "Hallaquitas Calientes", "Combos Familiares Económicos"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Pollo Entero en Brasas al Carbón con Guasacaca",
        description: "Asado a fuego vivo de carbón vegetal, jugoso y dorado, acompañado con guasacaca artesanal, hallaquitas de maíz y ensalada rallada",
        price: 11.5,
        category: "cocina",
        image: dishParrilladaMixta,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Combo Familiar Pollero (1 y 1/2 Pollo con Guarnición)",
        description: "Para compartir: un pollo y medio en brasas, ración de yuca frita dorada, tostones campesinos, hallaquitas y refresco de 1.5L",
        price: 17.5,
        category: "cocina",
        image: dishPuntaTrasera,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Ración de Tostones con Queso Rallado & Nata",
        description: "Plátano verde frito al momento crujiente, servido con abundante queso blanco llanero rallado y nata criolla fresca",
        price: 4.5,
        category: "cocina",
        image: dishParrilladaMixta,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Quesillo Criollo Tradicional con Caramelo Suave",
        description: "Receta casera venezolana de leche condensada y vainilla con caramelo dorado",
        price: 3.5,
        category: "postres",
        image: dishQuesilloVenezolano,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Jarra de Papelón con Limón Fresco y Frío",
        description: "Bebida tradicional de panela de caña pura disuelta con jugo de limón criollo recién exprimido y hielo",
        price: 3.0,
        category: "bebidas",
        image: cervezaPolarImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("cachap") || catLower.includes("shaday") || catLower.includes("maiz")) {
    heroHeadline = `Cachapas de Maíz Tierno & Auténtico Sabor Criollo en ${name}`;
    heroSubtitle = `Maíz dulce tierno desgranado y molido en el día, doble queso de mano fresco de finca, cochino frito crujiente y pernil horneado.`;
    features = ["100% Maíz Tierno Dulce", "Doble Queso de Mano de Finca", "Cochino Frito Crujiente", "Mantequilla & Nata Artesanal"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Cachapa Especial con Doble Queso de Mano & Pernil",
        description: "Maíz tierno dorado al budare con mantequilla derretida, relleno de pernil de cerdo horneado jugoso y doble rueda de queso de mano fresco",
        price: 8.5,
        category: "cocina",
        image: dishPuntaTrasera,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Ración de Cochino Frito Crujiente con Yuca al Vapor",
        description: "Trozos de cerdo marinados y fritos en su propia manteca hasta quedar dorados y crocantes por fuera y suaves por dentro, con yuca y mojo",
        price: 10.5,
        category: "cocina",
        image: dishParrilladaMixta,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Cachapa Clásica con Queso Telita & Nata Criolla",
        description: "La reina de la casa: maíz dulce caliente con queso telita elástico fundido y porción generosa de nata fresca",
        price: 7.0,
        category: "cocina",
        image: dishPuntaTrasera,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Quesillo Tradicional Venezolano",
        description: "Postre clásico casero con caramelo dorado y textura sedosa",
        price: 3.5,
        category: "postres",
        image: dishQuesilloVenezolano,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Chicha Criolla Tradicional con Canela & Leche Condensada",
        description: "Bebida espesa y dulce a base de arroz con leche, servida muy fría con abundante canela en polvo y leche condensada",
        price: 2.5,
        category: "bebidas",
        image: cervezaPolarImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("sopa") || catLower.includes("hervido") || catLower.includes("angelica") || catLower.includes("pola") || catLower.includes("don rafa") || catLower.includes("sandra")) {
    heroHeadline = `Hervidos Criollos, Sopas al Caldero & Sabor Casero en ${name}`;
    heroSubtitle = `Caldos concentrados cocidos a fuego lento con verduras frescas del campo, carnes tiernas, cilantro cimarrón y arepitas asadas calientes.`;
    features = ["Caldo Concentrado a Fuego Lento", "Verduras Frescas Campesinas", "Arepitas Calientes al Budare", "Almuerzos Ejecutivos y Familiares"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Gran Hervido de Res Cruzado con Gallina Criolla",
        description: "Caldo espeso y reconfortante cocido a fuego de leña con costilla de res, gallina tierna, yuca, ocumo, ñame, maíz y cilantro, con arepitas",
        price: 7.5,
        category: "cocina",
        image: dishParrilladaMixta,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Sopa de Costilla al Caldero con Verduras",
        description: "Costilla de res suave que se desprende del hueso en caldo aromático con plátano verde, auyama y mazorca dulce",
        price: 7.0,
        category: "cocina",
        image: dishPuntaTrasera,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Seco Criollo: Carne Mechada, Arroz, Caraotas & Tajadas",
        description: "El pabellón criollo tradicional preparado con carne mechada jugosa, caraotas negras refritas, arroz blanco y tajadas de plátano maduro",
        price: 8.5,
        category: "cocina",
        image: dishParrilladaMixta,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Dulce de Lechosa Tradicional con Clavitos de Olor",
        description: "Láminas traslúcidas de lechosa verde cocidas en almíbar de papelón y especias aromáticas",
        price: 3.5,
        category: "postres",
        image: dishQuesilloVenezolano,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Jugo Natural de Papelón con Limón Frío",
        description: "Refrescante bebida tradicional servida con abundante hielo picado",
        price: 2.0,
        category: "bebidas",
        image: cervezaPolarImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("paisa") || catLower.includes("portoncito")) {
    heroHeadline = `Auténtica Gastronomía Colombiana & Sazón Paisa en ${name}`;
    heroSubtitle = `La verdadera bandeja paisa con chicharrón crocante de varios cortes, frijoles montañeros con garra, arepas con hogao y café de Colombia.`;
    features = ["Chicharrón Carnudo Crocante", "Frijoles Rojos Estofados", "Arepas Asadas con Hogao", "Porciones Monumentales"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Bandeja Paisa Tradicional Monumental Completa",
        description: "Frijoles montañeros estofados, arroz blanco, carne molida sazonada, chicharrón crocante de 12 cortes, chorizo frito, huevo frito, tajada de plátano, arepa y aguacate",
        price: 13.5,
        category: "cocina",
        image: dishParrilladaMixta,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Sancocho Trifásico al Caldero (Res, Cerdo & Gallina)",
        description: "Tres carnes seleccionadas en caldo tradicional con mazorca, plátano verde, yuca y papa, acompañado de arroz blanco y aguacate",
        price: 9.0,
        category: "cocina",
        image: dishPuntaTrasera,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Arepa Paisa con Hogao Casero & Queso Fundido",
        description: "Arepa delgadita de maíz blanco recién asada, bañada en sofrito caliente de cebolla y tomate con queso derretido",
        price: 4.0,
        category: "cocina",
        image: dishParrilladaMixta,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Brevas con Arequipe & Queso Cuajada Fresco",
        description: "Higos calados en almíbar dulce servidos con dulce de leche arequipe y queso blanco suave",
        price: 4.5,
        category: "postres",
        image: dishQuesilloVenezolano,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Jugo Natural de Lulo en Agua o Leche",
        description: "Pulpa de lulo colombiano recién procesada, dulce y cítrica, servida bien helada",
        price: 3.0,
        category: "bebidas",
        image: cervezaPolarImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("ble") || catLower.includes("blé") || catLower.includes("croissant") || catLower.includes("boulangerie") || catLower.includes("anella") || catLower.includes("dolcezza")) {
    heroHeadline = `Boulangerie Francesa, Pastelería Fina & Café de Especialidad en ${name}`;
    heroSubtitle = `Croissants de hojaldre puro con mantequilla de primera, panes de masa madre con corteza crujiente, repostería europea y café de altura.`;
    features = ["100% Mantequilla Pura de Granja", "Masa Madre con Fermentación Lenta", "Café de Especialidad 84+ Puntos", "Vitrina de Pastelería Europea Diaria"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Croissant de Mantequilla con Almendras Tostadas",
        description: "Hojaldre francés crujiente horneado a primera hora, relleno de crema de almendras y cubierto de láminas tostadas y azúcar glas",
        price: 4.5,
        category: "cocina",
        image: dishCannoliSiciliani,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Sandwich Baguette de Jamón Serrano, Queso Brie & Rúgula",
        description: "Baguette artesanal de masa madre crocante, jamón curado español, cuñas de queso brie fundido, rúgula fresca y aceite de oliva virgen",
        price: 8.0,
        category: "cocina",
        image: dishPizzaMargherita,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Quiche Lorraine Clásico de Tocineta y Queso Gruyère",
        description: "Tarta salada francesa tradicional con masa quebrada quebradiza y relleno suave de crema, tocineta ahumada y queso gruyère",
        price: 6.5,
        category: "cocina",
        image: tuttoPasticho,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Éclair de Chocolate Belga & Vainilla Francesa",
        description: "Pasta choux esponjosa rellena de crema pastelera a la vainilla de Madagascar con glaseado brillante de chocolate negro 70%",
        price: 4.5,
        category: "postres",
        image: tuttoTiramisu,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Café Latte Art de Especialidad con Leche Texturizada",
        description: "Doble shot de espresso de granos venezolanos de origen con microespuma sedosa de leche",
        price: 3.5,
        category: "bebidas",
        image: cervezaSoleraImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("mostritos") || catLower.includes("aquefrank") || catLower.includes("popochorronitas") || catLower.includes("hangar") || catLower.includes("garage")) {
    heroHeadline = `Hamburguesas Smash, Pepitos Gratinados & Street Food en ${name}`;
    heroSubtitle = `Carnes jugosas a la plancha, quesos fundidos en cascada, tocineta crujiente, papas cargadas y pepitos gigantes con las salsas de la casa.`;
    features = ["Carne 100% Res Molida al Día", "Pan Brioche de Papa Suave", "Gratinado de Quesos Fundidos", "Salsas Especiales de la Casa"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Hamburguesa Monster Smash Doble Carne con Tocineta",
        description: "Doble medallón de 100g de res smash con costra caramelizada, queso cheddar americano derretido, tocineta ahumada, cebolla crispy y salsa especial",
        price: 9.5,
        category: "cocina",
        image: dishParrilladaMixta,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Pepito Especial 40cm Mixto Gratinado con Parmesano",
        description: "Pan baguette suave relleno de lomito y pollo a la plancha, maíz dulce, papas ralladas, bañado en salsa tártara y gratinado con queso mozzarella y parmesano",
        price: 11.5,
        category: "cocina",
        image: dishPuntaTrasera,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Papas Rústicas Cargadas con Queso Cheddar & Bacon Bits",
        description: "Papas naturales fritas crujientes bañadas en abundante salsa de queso cheddar caliente, trocitos de tocineta y cebollín",
        price: 5.5,
        category: "cocina",
        image: dishParrilladaMixta,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Malteada Espesa de Nutella con Corona de Crema",
        description: "Helado cremoso batido con abundante Nutella original, crema chantilly y chispas de chocolate",
        price: 5.0,
        category: "postres",
        image: tuttoTiramisu,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Cerveza Polar Pilsen / Solera Bien Fría",
        description: "La auténtica cerveza venezolana servida a punto de nieve",
        price: 2.0,
        category: "bebidas",
        image: cervezaPolarImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("toneles") || catLower.includes("cuevas") || catLower.includes("tasca") || catLower.includes("royal city")) {
    heroHeadline = `Tasca Española Clásica, Tapeo de Altura & Vinos en ${name}`;
    heroSubtitle = `Jamón ibérico curado, raciones calientes para compartir, tortillas españolas jugosas, ambiente bohemio tradicional y cervezas heladas.`;
    features = ["Jamón Serrano Cortado al Momento", "Tapas Ibéricas Tradicionales", "Cava de Vinos Seleccionada", "Ambiente de Tasca Bohemio"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Tabla Mixta Ibérica de Jamón Serrano & Queso Curado",
        description: "Láminas finas de jamón curado español, cuñas de queso manchego madurado, aceitunas sevillanas y pan con tomate y aceite de oliva virgen",
        price: 16.0,
        category: "cocina",
        image: dishPaellaMariscos,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Tortilla Española Jugosa con Patatas y Cebolla Pochada",
        description: "Clásica tortilla de patatas con centro tierno y jugoso, preparada al momento con huevos camperos frescos",
        price: 7.5,
        category: "cocina",
        image: dishParrilladaMixta,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Champiñones Salteados al Ajillo con Jamón y Jerez",
        description: "Hongos frescos salteados en cazuela de barro caliente con láminas de ajo dorado, trocitos de jamón y vino blanco",
        price: 8.0,
        category: "cocina",
        image: dishRisottoPorcini,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Churros Artesanales con Chocolate Especiado Caliente",
        description: "Bastones de churros recién fritos crujientes con azúcar y canela, acompañados de taza de chocolate espeso",
        price: 4.5,
        category: "postres",
        image: dishCannoliSiciliani,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Jarra de Sangría Tinta Española de la Casa",
        description: "Vino tinto joven, frutas cítricas en dados, canela en rama y toque de coñac con abundante hielo",
        price: 10.0,
        category: "bebidas",
        image: cervezaSoleraImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("arabe") || catLower.includes("arabito") || catLower.includes("libanes") || catLower.includes("vagon") || catLower.includes("shanklish")) {
    heroHeadline = `Auténtica Gastronomía Libanesa & Especialidades Árabes en ${name}`;
    heroSubtitle = `Shawarmas al spiedo vertical sazonados con especias de oriente, kibbeh crocante relleno de piñones, hummus sedoso y pan pita al horno.`;
    features = ["Spiedo Vertical Tradicional", "Recetas Familiares de Medio Oriente", "Tahini Puro de Sésamo", "Pan Pita Inflado al Momento"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Gran Plato Mixto Árabe (Hummus, Kibbeh, Tabbouleh & Tabaquitos)",
        description: "Hummus cremoso con garbanzos y tahini, Baba Ganoush ahumado, dos kibbehs dorados, cuatro tabaquitos de parra y pan árabe recién salido del horno",
        price: 14.0,
        category: "cocina",
        image: dishShawarmaPlatter,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Shawarma Especial de Lomito con Crema de Ajo Toum",
        description: "Láminas finas de carne marinada al spiedo, enrolladas en pan pita suave con crema de ajo libanesa, tomate fresco y pepinillos encurtidos",
        price: 8.0,
        category: "cocina",
        image: dishShanklishMezze,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Kibbeh Frito Relleno de Carne Molida y Piñones Tostados",
        description: "Costra crocante de trigo bulgur y carne de res sazonada, rellena de picadillo de carne con cebolla pochada y piñones crujientes",
        price: 7.0,
        category: "cocina",
        image: dishKibbehFrito,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Baklava Hojaldrado con Miel de Azahar y Pistacho",
        description: "Finas capas de masa filo crujiente rellenas de nueces y pistachos picados, bañadas en almíbar perfumado de flor de azahar",
        price: 4.0,
        category: "postres",
        image: baklavaImg,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Limonada Libanesa con Menta Fresca y Hielo Frappé",
        description: "Limonada natural batida con hojas frescas de hierbabuena y toque de agua de azahar",
        price: 2.5,
        category: "bebidas",
        image: cervezaPolarImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("grill") || catLower.includes("parrilla") || catLower.includes("carbon") || catLower.includes("bunker") || catLower.includes("fogon") || catLower.includes("churrasc")) {
    heroHeadline = `Cortes Prime Madurados & Asados a las Brasas en ${name}`;
    heroSubtitle = `Punta trasera tierna sellada al carbón con sal marina gruesa, solomo de cuerito, chorizos ahumados artesanalmente y yuca suave con guasacaca.`;
    features = ["Cortes Prime Madurados", "Leña de Quebracho y Carbón Noble", "Guasacaca Casera con Aguacate", "Parrillas para Compartir"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Punta Trasera Prime al Carbón (500g) con Yuca y Queso Frito",
        description: "Corte premium madurado a la parrilla con sal gruesa marina, servido en tabla caliente con yuca tierna al vapor, queso a la plancha y guasacaca",
        price: 18.5,
        category: "cocina",
        image: dishPuntaTrasera,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Parrillada Mixta Familiar (Punta, Pollo, Chorizo & Morcilla)",
        description: "Selección para 2-3 comensales con cortes tiernos de res, pechuga marinada, chorizo criollo ahumado, morcilla campesina, arepitas y nata",
        price: 26.0,
        category: "cocina",
        image: dishParrilladaMixta,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Costillas de Cerdo Ahumadas al Quebracho con Glaseado BBQ",
        description: "Costillar suave y jugoso cocido a fuego lento durante 4 horas, barnizado con salsa BBQ criolla casera ligeramente dulce",
        price: 14.5,
        category: "cocina",
        image: dishPicanhaChurrasco,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Quesillo Criollo con Caramelo y Toque de Ron Añejo",
        description: "Textura cremosa tradicional con caramelo dorado oscuro perfumado con ron venezolano",
        price: 4.5,
        category: "postres",
        image: dishQuesilloVenezolano,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Cerveza Polar Pilsen / Solera Reserva Bien Fría",
        description: "Cerveza venezolana helada servida en jarra congelada",
        price: 2.5,
        category: "bebidas",
        image: cervezaPolarImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("arepa") || catLower.includes("tito") || catLower.includes("empanada") || catLower.includes("san blas") || catLower.includes("criollos")) {
    heroHeadline = `Arepas al Budare, Empanadas Crujientes & Desayunos Criollos en ${name}`;
    heroSubtitle = `Arepas calientes resueltas con masa fresca, reina pepiada con aguacate cremoso, carne mechada jugosa, queso amarillo y empanadas doradas al momento.`;
    features = ["Masa 100% Maíz al Momento", "Rellenos Resueltos de Primera", "Salsas de Ajo y Guasacaca", "Desayunos y Cenas Criollas"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Arepa Reina Pepiada Suprema con Aguacate",
        description: "Arepa asada al budare rellena con pechuga de pollo desmechada, mayonesa casera, abundante aguacate fresco y queso blanco rallado",
        price: 4.5,
        category: "cocina",
        image: dishPuntaTrasera,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Arepa Pelúa con Carne Mechada y Queso Amarillo",
        description: "Carne de res guisada lentamente con sofrito criollo criollo, bañada con queso amarillo gouda madurado rallado",
        price: 5.0,
        category: "cocina",
        image: dishParrilladaMixta,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Empanada Operada de Cazón Oriental con Queso",
        description: "Empanada de maíz frita crocante con guiso tradicional de cazón margariteño y queso blanco fundido",
        price: 2.5,
        category: "cocina",
        image: dishPaellaMariscos,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Ración de Tequeños Artesanales con Salsa Tártara",
        description: "Cinco tequeños dorados rellenos de queso llanero suave con salsa tártara de la casa",
        price: 5.0,
        category: "postres",
        image: dishCannoliSiciliani,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Jugo Natural de Papelón con Limón Frío / Malta",
        description: "Bebida tradicional bien helada con panela pura y limón criollo recién exprimido",
        price: 2.0,
        category: "bebidas",
        image: cervezaPolarImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("smoke") || catLower.includes("gabo") || catLower.includes("brisket")) {
    heroHeadline = `Auténtico Smokehouse & Carnes Ahumadas al Quebracho en ${name}`;
    heroSubtitle = `Brisket de res ahumado por 12 horas a baja temperatura, costillas de cerdo tiernas bañadas en salsa BBQ artesanal y pulled pork en pan brioche suave.`;
    features = ["Ahumado Lento con Leña de Quebracho", "Cortes Prime Seleccionados", "Salsas BBQ de la Casa", "Cervezas Frías y Artesanales"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Brisket Texas Style Ahumado 12 Horas (350g)",
        description: "Pecho de res premium con anillo de humo perfecto, sal marina y pimienta negra quebrada, servido con papas fritas rústicas",
        price: 16.0,
        category: "cocina",
        image: dishPuntaTrasera,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Costillar St. Louis Ahumado con BBQ Criolla",
        description: "Costillas de cerdo caramelizadas a fuego indirecto con madera noble y glaseado agridulce especial",
        price: 14.0,
        category: "cocina",
        image: dishPicanhaChurrasco,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Sandwich Pulled Pork en Pan Brioche con Coleslaw",
        description: "Cerdo desmechado bañado en salsa BBQ ahumada, pepinillos dulces y ensalada de repollo fresca",
        price: 8.5,
        category: "cocina",
        image: dishParrilladaMixta,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Mac & Cheese Cremoso Gratinado con Bacon Bits",
        description: "Coditos tiernos en salsa cuatro quesos con tocineta ahumada crujiente",
        price: 6.0,
        category: "postres",
        image: tuttoPasticho,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Cerveza Polar Pilsen / Solera Reserva Helada",
        description: "Servida a temperatura bajo cero",
        price: 2.5,
        category: "bebidas",
        image: cervezaPolarImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("churro") || catLower.includes("sweet") || catLower.includes("cake") || catLower.includes("delike") || catLower.includes("antojo")) {
    heroHeadline = `Churros Crujientes, Tortas de Diseño & Antojos Dulces en ${name}`;
    heroSubtitle = `Churros dorados al momento espolvoreados con azúcar y canela, rellenos de Nutella y arequipe, marquesas húmedas y repostería artesanal.`;
    features = ["Churros Fritos al Momento", "Nutella Original & Arequipe", "Tortas Húmedas Artesanales", "Café & Malteadas Espesas"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Ración de Churros Españoles con Nutella y Arequipe",
        description: "Seis bastones de churros recién fritos crujientes por fuera y suaves por dentro, bañados con abundante Nutella y dulce de leche",
        price: 4.5,
        category: "cocina",
        image: dishCannoliSiciliani,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Torta Marquesa Húmeda de Chocolate Belga",
        description: "Capas de galleta María embebidas en licor suave con pudding denso de cacao 70% y lluvia de chispas",
        price: 5.0,
        category: "cocina",
        image: tuttoTiramisu,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Waffle Belga Dorado con Fresas Frescas y Helado",
        description: "Masa belga aireada con bola de helado de mantecado, rodajas de fresa fresca y sirope de chocolate",
        price: 6.0,
        category: "cocina",
        image: dishQuesilloVenezolano,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Porción de Tres Leches Tradicional con Canela",
        description: "Bizcochuelo esponjoso empapado en crema de leche condensada, evaporada y nata con merengue flameado",
        price: 4.0,
        category: "postres",
        image: dishQuesilloVenezolano,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Malteada Espesa de Galleta Oreo y Vainilla",
        description: "Batido denso con helado artesanal, trozos de galleta Oreo y montaña de crema chantilly",
        price: 4.5,
        category: "bebidas",
        image: cervezaSoleraImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("perro")) {
    heroHeadline = `Perros Calientes Tradicionales, Pepitos & Sabor Callejero en ${name}`;
    heroSubtitle = `El auténtico perro caliente venezolano con salchicha jugosa, papitas crujientes, cebolla, repollo y montaña de queso blanco rallado.`;
    features = ["Pan Extra Suave al Vapor", "Salsas Especiales de la Casa", "Queso Blanco Rallado Abundante", "Servicio Rápido por WhatsApp"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Perro Caliente Especial con Todo y Queso Rallado",
        description: "Pan suave al vapor, salchicha jumbo, cebolla picadita, repollo fresco, papas rayadas crujientes, salsas de la casa y montaña de queso blanco llanero",
        price: 3.0,
        category: "cocina",
        image: dishParrilladaMixta,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Perro Caliente Doble Salchicha Gratinado con Bacon",
        description: "Doble salchicha a la plancha, cebolla caramelizada, tocineta crocante y gratinado fundido de queso mozzarella",
        price: 4.5,
        category: "cocina",
        image: dishPuntaTrasera,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Pepito Especial de Lomito con Salsa Tártara",
        description: "Pan campesino relleno de tiras tiernas de lomito a la plancha, maíz dulce, papitas y queso derretido",
        price: 8.5,
        category: "cocina",
        image: dishParrilladaMixta,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Salchipapas Glotonas con Queso Cheddar Fundido",
        description: "Papas fritas doradas con rodajas de salchicha especial bañadas en queso cheddar caliente",
        price: 5.0,
        category: "postres",
        image: dishParrilladaMixta,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Refresco Familiar / Malta Polar Bien Fría",
        description: "Bebida fría servida con vaso congelado",
        price: 2.0,
        category: "bebidas",
        image: cervezaPolarImg,
        isChefRecommendation: false,
      },
    ];
  } else if (catLower.includes("chino") || catLower.includes("lila su") || catLower.includes("canton")) {
    heroHeadline = `Gastronomía China Cantonesa Tradicional & Especialidades Wok en ${name}`;
    heroSubtitle = `Arroz frito especial al fuego vivo del wok, costillitas sal y pimienta crocantes, lumpias doradas y pollo agridulce con piña.`;
    features = ["Fuego Vivo de Wok Tradicional", "Ingredientes y Especias de Cantón", "Porciones Familiares Abundantes", "Delivery Rápido por WhatsApp"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: "Arroz Frito Especial Cantonés con Camarones y Lechón",
        description: "Arroz al wok salteado a fuego alto con camarones frescos, tiras de lechón asado, pollo tierno, cebollín y brotes de soja",
        price: 8.5,
        category: "cocina",
        image: dishRisottoPorcini,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Costillitas Sal y Pimienta Crujientes con Ajo",
        description: "Costillas de cerdo marinadas en cinco especias chinas, fritas crujientes con láminas de ajo dorado y cebollín",
        price: 11.0,
        category: "cocina",
        image: dishPicanhaChurrasco,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Ración de Lumpias Tradicionales con Salsa Agridulce",
        description: "Dos lumpias grandes doradas rellenas de repollo, zanahoria y carne sazonada con dip agridulce rojo",
        price: 4.0,
        category: "cocina",
        image: dishCannoliSiciliani,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Pollo Agridulce con Piña Fresca y Pimentón",
        description: "Trozos de pechuga crujiente bañados en salsa agridulce brillante de la casa con trocitos de piña y vegetales",
        price: 9.5,
        category: "postres",
        image: dishPaellaMariscos,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Té Verde Chino Jazmín Caliente o Jarra Fría",
        description: "Infusión aromática tradicional de hojas de jazmín",
        price: 2.5,
        category: "bebidas",
        image: cervezaSoleraImg,
        isChefRecommendation: false,
      },
    ];
  } else {
    // Default High-End Culinary Offering
    heroHeadline = `Alta Gastronomía & Servicio de Primera en ${name}`;
    heroSubtitle = `Propuesta culinaria selecta elaborada con ingredientes frescos de la más alta calidad, atención cálida personalizada y ambiente refinado.`;
    features = ["Ingredientes Frescos Seleccionados", "Recetas Exclusivas de la Casa", "Atención Personalizada", "Delivery Rápido por WhatsApp"];
    offeringsList = [
      {
        id: `off-${slug}-1`,
        name: `Plato Insignia de la Casa - ${name}`,
        description: "Nuestra preparación más celebrada por los comensales, elaborada con técnicas de vanguardia y productos frescos seleccionados de temporada",
        price: 16.0,
        category: "cocina",
        image: dishRisottoPorcini,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-4`, `off-${slug}-5`],
      },
      {
        id: `off-${slug}-2`,
        name: "Especialidad del Chef - Selección del Día",
        description: "Receta tradicional perfeccionada con guarnición especial de la casa y salsa reducción de autor",
        price: 13.5,
        category: "cocina",
        image: dishPaellaMariscos,
        isChefRecommendation: true,
        pairsWellWith: [`off-${slug}-5`],
      },
      {
        id: `off-${slug}-3`,
        name: "Entrada Gourmet para Compartir",
        description: "Bocados crujientes con contrastes de sabores y aderezo especial para iniciar la experiencia gastronómica",
        price: 8.5,
        category: "cocina",
        image: dishPuntaTrasera,
        isChefRecommendation: false,
      },
      {
        id: `off-${slug}-4`,
        name: "Postre Artesanal de la Pastelería de la Casa",
        description: "Elaborado diariamente con frutas frescas, chocolate fino y crema suave",
        price: 5.5,
        category: "postres",
        image: dishQuesilloVenezolano,
        isChefRecommendation: true,
      },
      {
        id: `off-${slug}-5`,
        name: "Bebida Especial de la Casa Servida Fría",
        description: "Refrescante, preparada al momento con ingredientes naturales y hielo frappé",
        price: 3.0,
        category: "bebidas",
        image: cervezaSoleraImg,
        isChefRecommendation: false,
      },
    ];
  }

  // Smart phone assigner based on city if not given
  let defaultPhone = "584144002860";
  let defaultDisplay = "+58 414 400 2860";
  if (detectedCity.includes("Carabobo") || detectedCity.includes("Valencia")) {
    defaultPhone = "584144123456";
    defaultDisplay = "+58 414 412 3456";
  } else if (detectedCity.includes("Bolívar") || detectedCity.includes("Puerto Ordaz")) {
    defaultPhone = "584249147877";
    defaultDisplay = "+58 424 914 7877";
  }
  const cleanPhone = (data.phone || defaultPhone).replace(/[^\d]/g, "");

  // Generate authentic GMB reviews tailored to cuisine
  let generatedReviews: BusinessProfile["reviews"] = [];
  if (catLower.includes("pizza") || catLower.includes("ital") || catLower.includes("pasta") || catLower.includes("nonna") || catLower.includes("mozzarella") || catLower.includes("mario") || catLower.includes("prebo")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Valentina Giannini",
        rating: 5,
        isLocalGuide: true,
        text: "La masa de la pizza a la leña tiene ese toque crocante perfecto de masa madre y el pasticho boloñesa es idéntico al de mi nonna. El delivery por WhatsApp fue súper rápido y llegó caliente.",
        relativeTime: "Hace 4 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Carlos Eduardo Mendoza",
        rating: 5,
        isLocalGuide: false,
        text: "Excelente ambiente y sabor. Los fettuccines con crema de trufa y el tiramisú al mascarpone son de nivel internacional. Sin duda de los mejores de la zona.",
        relativeTime: "Hace 2 semanas",
      },
    ];
  } else if (catLower.includes("sushi") || catLower.includes("poke") || catLower.includes("tokio") || catLower.includes("bonsai") || catLower.includes("nikkei") || catLower.includes("ramen") || catLower.includes("cebich")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Mariana De Freitas",
        rating: 5,
        isLocalGuide: true,
        text: "El poke bowl de salmón viene súper fresco, generoso en aguacate y con el aderezo ponzu en su punto. Los rolls flameados tienen un toque ahumado delicioso.",
        relativeTime: "Hace 3 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Alejandro Silva",
        rating: 5,
        isLocalGuide: false,
        text: "La atención por WhatsApp es súper rápida y el ramen tonkotsu tiene un caldo espeso increíble. El empaque térmico mantiene los rolls impecables.",
        relativeTime: "Hace 1 semana",
      },
    ];
  } else if (catLower.includes("paella") || catLower.includes("galicia") || catLower.includes("rias") || catLower.includes("galeon") || catLower.includes("marisco") || catLower.includes("pescad")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Dr. Fernando Rivas",
        rating: 5,
        isLocalGuide: true,
        text: "La paella marinera a la leña con frutos del mar para compartir en familia es insuperable. Camarones grandes, calamares tiernos y el arroz con socarrat perfecto.",
        relativeTime: "Hace 5 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Isabel Cristina Ochoa",
        rating: 5,
        isLocalGuide: false,
        text: "El pulpo a la gallega y la cazuela gratinada son una exquisitez. La jarra de sangría española bien fría cierra con broche de oro.",
        relativeTime: "Hace 3 semanas",
      },
    ];
  } else if (catLower.includes("pollo")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Ing. Héctor Rodríguez",
        rating: 5,
        isLocalGuide: true,
        text: "El pollo en brasas tiene la piel bien doradita y la carne jugosa con leña de verdad. La guasacaca y las hallaquitas recién hechas son un diez de diez.",
        relativeTime: "Hace 4 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Daniela Sifontes",
        rating: 5,
        isLocalGuide: false,
        text: "El combo familiar rinde muchísimo para todos en casa. Muy amables en la atención y el pedido llegó en tiempo récord por WhatsApp.",
        relativeTime: "Hace 2 semanas",
      },
    ];
  } else if (catLower.includes("cachap") || catLower.includes("shaday") || catLower.includes("maiz") || catLower.includes("chicharron")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "José Gregorio Parra",
        rating: 5,
        isLocalGuide: true,
        text: "La cachapa con doble queso de mano y pernil horneado es gigante y el maíz dulce se nota que lo muelen en el día. El cochino frito crujiente no tiene comparación.",
        relativeTime: "Hace 2 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Carmen Elena Morales",
        rating: 5,
        isLocalGuide: false,
        text: "Sabor a tradición pura. El queso fresco chorreando sobre la cachapa caliente es una delicia y la chicha criolla con canela está bien espesa y fría.",
        relativeTime: "Hace 1 semana",
      },
    ];
  } else if (catLower.includes("sopa") || catLower.includes("hervido") || catLower.includes("angelica") || catLower.includes("pola") || catLower.includes("don rafa") || catLower.includes("sandra")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Eduardo Castillo",
        rating: 5,
        isLocalGuide: true,
        text: "El hervido de res cruzado en caldero te revive de inmediato. Verduras frescas campesinas y carne tan suave que se desprende sola. Arepitas calientes al punto.",
        relativeTime: "Hace 3 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "María Auxiliadora Rivas",
        rating: 5,
        isLocalGuide: false,
        text: "Sazón de hogar inconfundible. El seco criollo con carne mechada y tajadas doradas tiene ese toque tradicional que cuesta encontrar hoy en día.",
        relativeTime: "Hace 2 semanas",
      },
    ];
  } else if (catLower.includes("paisa") || catLower.includes("portoncito")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Andrés Felipe Gómez",
        rating: 5,
        isLocalGuide: true,
        text: "La bandeja paisa es monumental, con el chicharrón súper carnudo y tostado sin estar grasoso. El sancocho sabe a hogar y el jugo de lulo natural es una maravilla.",
        relativeTime: "Hace 6 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Lucía Ramírez",
        rating: 5,
        isLocalGuide: false,
        text: "La mejor comida colombiana de la ciudad. Arepas con hogao casero y porciones súper generosas que valen totalmente la pena.",
        relativeTime: "Hace 2 semanas",
      },
    ];
  } else if (catLower.includes("ble") || catLower.includes("blé") || catLower.includes("croissant") || catLower.includes("boulangerie") || catLower.includes("anella") || catLower.includes("dolcezza")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Camila De Sola",
        rating: 5,
        isLocalGuide: true,
        text: "Los croissants de almendras con mantequilla pura son una joya y el baguette crujiente con serrano y brie es perfecto. El café latte art tiene gran cuerpo.",
        relativeTime: "Hace 3 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Gabriel Henríquez",
        rating: 5,
        isLocalGuide: false,
        text: "Ambiente encantador para desayunar o merendar. El éclair de chocolate belga y la quiche lorraine son obligatorios cada vez que venimos.",
        relativeTime: "Hace 1 semana",
      },
    ];
  } else if (catLower.includes("grill") || catLower.includes("parrilla") || catLower.includes("carbon") || catLower.includes("bunker") || catLower.includes("fogon") || catLower.includes("churrasc") || catLower.includes("meson") || catLower.includes("rodeo")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Gustavo Morales",
        rating: 5,
        isLocalGuide: true,
        text: "La punta trasera servida en tabla caliente con yuca suavecita y queso frito es una locura. Carne madurada en leña suave que se corta sola.",
        relativeTime: "Hace 5 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Mauricio Benítez",
        rating: 5,
        isLocalGuide: false,
        text: "Las parrilladas mixtas y las costillas ahumadas en BBQ criolla son de primer nivel. Excelente atención y las cervezas a punto de nieve.",
        relativeTime: "Hace 2 semanas",
      },
    ];
  } else if (catLower.includes("mostritos") || catLower.includes("aquefrank") || catLower.includes("popochorronitas") || catLower.includes("hangar") || catLower.includes("garage") || catLower.includes("buguer")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Kevin A. Rangel",
        rating: 5,
        isLocalGuide: true,
        text: "La hamburguesa smash doble con tocineta tiene el queso fundido perfecto y el pan brioche es una nube. El pepito mixto de 40cm gratinado es una delicia total.",
        relativeTime: "Hace 2 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Stephanie Colina",
        rating: 5,
        isLocalGuide: false,
        text: "Papas rústicas cargadas de cheddar caliente y tocineta crujiente. Pedir por WhatsApp fue súper sencillo y el empaque llegó impecable.",
        relativeTime: "Hace 1 semana",
      },
    ];
  } else if (catLower.includes("arabe") || catLower.includes("libanes") || catLower.includes("shawarma") || catLower.includes("beirut")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Karim Al-Haddad",
        rating: 5,
        isLocalGuide: true,
        text: "El plato mixto árabe trae de todo: hummus cremoso, tabaquitos y kibbeh crocante con piñones. El shawarma de lomito con crema toum de ajo es insuperable.",
        relativeTime: "Hace 3 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Nathalie Saab",
        rating: 5,
        isLocalGuide: false,
        text: "Auténtico sabor de Medio Oriente. Los dulces de baklava hojaldrados con pistacho y la limonada con menta fresca cierran la comida de manera perfecta.",
        relativeTime: "Hace 1 semana",
      },
    ];
  } else if (catLower.includes("arepa") || catLower.includes("tito") || catLower.includes("empanada") || catLower.includes("san blas") || catLower.includes("criollos")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Marcos Aurelio Mendoza",
        rating: 5,
        isLocalGuide: true,
        text: "Las arepas salen tostaditas del budare y van cargadas hasta arriba sin mezquindad. La reina pepiada con aguacate en crema y la pelúa con queso amarillo son insuperables. La salsa tártara de ajo le da el toque maestro.",
        relativeTime: "Hace 2 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Yulimar Blanco",
        rating: 5,
        isLocalGuide: false,
        text: "Las empanadas de cazón y queso fundido tienen masa crujiente y cero exceso de grasa. Pedir por WhatsApp fue súper rápido y llegaron calienticas a casa.",
        relativeTime: "Hace 1 semana",
      },
    ];
  } else if (catLower.includes("smoke") || catLower.includes("gabo") || catLower.includes("brisket")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Ing. Reinaldo Pacheco",
        rating: 5,
        isLocalGuide: true,
        text: "El brisket es una verdadera obra de arte: 12 horas en el ahumador de quebracho se notan en cada bocado, la corteza de pimienta y el jugo de la carne son sublimes.",
        relativeTime: "Hace 4 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Valeria Castellanos",
        rating: 5,
        isLocalGuide: false,
        text: "Las costillas BBQ St. Louis se desprenden solas del hueso y los macarrones con queso ahumado son adictivos. Cerveza bien fría y tremenda vibra.",
        relativeTime: "Hace 2 semanas",
      },
    ];
  } else if (catLower.includes("churro") || catLower.includes("sweet") || catLower.includes("cake") || catLower.includes("delike") || catLower.includes("antojo")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Mariángel Rondón",
        rating: 5,
        isLocalGuide: true,
        text: "Los churros recién hechos salen dorados y crujientes, rebosantes de Nutella y arequipe. La torta húmeda de chocolate belga es una delicia de otro nivel.",
        relativeTime: "Hace 3 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Diego Alejandro Castillo",
        rating: 5,
        isLocalGuide: false,
        text: "Excelente pastelería y repostería artesanal. El postre de tres leches y la malteada espesa de Oreo son perfectos para consentirse el fin de semana.",
        relativeTime: "Hace 1 semana",
      },
    ];
  } else if (catLower.includes("perro")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Gustavo Adolfo Pérez",
        rating: 5,
        isLocalGuide: true,
        text: "El perro caliente clásico valenciano con montaña de queso blanco rallado, papitas crujientes y todas las salsas de la casa. El pan al vapor es suavísimo.",
        relativeTime: "Hace 1 día",
      },
      {
        id: `rev-${slug}-2`,
        author: "Adriana Lucena",
        rating: 5,
        isLocalGuide: false,
        text: "Los mejores perros calientes y pepitos de la zona. Las salchipapas con cheddar derretido son una bomba de sabor y la atención por WhatsApp es inmediata.",
        relativeTime: "Hace 5 días",
      },
    ];
  } else if (catLower.includes("chino") || catLower.includes("lila su") || catLower.includes("canton")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Dr. Víctor Chen",
        rating: 5,
        isLocalGuide: true,
        text: "El arroz cantonés especial tiene ese auténtico sabor ahumado a wok de alta temperatura con camarones frescos y lechón jugoso. Las costillitas sal y pimienta son crujientes y aromáticas.",
        relativeTime: "Hace 3 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Paola Guédez",
        rating: 5,
        isLocalGuide: false,
        text: "Porciones súper generosas para toda la familia. Las lumpias doraditas con su salsa agridulce y el pollo con piña nunca fallan.",
        relativeTime: "Hace 2 semanas",
      },
    ];
  } else if (catLower.includes("toneles") || catLower.includes("chaguaramos") || catLower.includes("bella estrella") || catLower.includes("beverly") || catLower.includes("rancho nuevo") || catLower.includes("tasca")) {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Manuel Antonio Barreto",
        rating: 5,
        isLocalGuide: true,
        text: "Excelente tasca con ambiente tradicional. La tortilla española en su punto de jugosidad, las tablas de picar bien resueltas y las cervezas a punto de hielo.",
        relativeTime: "Hace 4 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Carolina Beltrán",
        rating: 5,
        isLocalGuide: false,
        text: "Tradición y buena música. Las tapas ibéricas, los champiñones al ajillo y la atención cordial del personal hacen que siempre queramos regresar.",
        relativeTime: "Hace 2 semanas",
      },
    ];
  } else {
    generatedReviews = [
      {
        id: `rev-${slug}-1`,
        author: "Roberto Giannini",
        rating: 5,
        isLocalGuide: true,
        text: `Excelente experiencia gastronómica en ${name}. Los platos llegaron en su punto exacto de cocción, con ingredientes frescos y presentación impecable.`,
        relativeTime: "Hace 4 días",
      },
      {
        id: `rev-${slug}-2`,
        author: "Sofía Colmenares",
        rating: 5,
        isLocalGuide: false,
        text: `La atención por WhatsApp es sumamente cordial y rápida. Los sabores están muy bien logrados y las porciones son generosas. Totalmente recomendado.`,
        relativeTime: "Hace 2 semanas",
      },
    ];
  }

  return {
    id: `biz-${Date.now()}-${slug}`,
    slug,
    name,
    shortName: name.split(" ")[0],
    heroImage: heroBannerImg,
    gmbUrl: data.url,
    category: cleanCategory,
    specialtyTagline: cleanSpecialty,
    heroHeadline,
    heroSubtitle,
    rating: data.rating || 4.9,
    reviewCount: data.reviewCount || 120,
    priceRange: "$$",
    phone: cleanPhone,
    displayPhone: data.phone || defaultDisplay,
    email: cleanEmail,
    address: data.address || (detectedCity.includes("Valencia") ? "El Viñedo / San José de Tarbes" : "Sector Principal"),
    city: detectedCity,
    hours: data.hours || "Lunes a Domingo: 11:30 AM - 10:00 PM",
    mapEmbedUrl,
    googleMapsDirectionsUrl,
    socialLinks: {
      instagram: data.instagram || `https://www.instagram.com/${slug.replace(/-/g, "_")}/`,
      facebook: data.facebook || `https://www.facebook.com/${slug}/`,
      website: data.website || "",
    },
    features,
    reviews: data.reviews && data.reviews.length > 0 ? data.reviews : generatedReviews,
    offerings: offeringsList,
  };
}
