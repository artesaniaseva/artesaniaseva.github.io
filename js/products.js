/**
 * Configuración de la tienda y Catálogo de Productos - Artesanías Eva
 * Puedes agregar, editar o eliminar productos fácilmente en este archivo.
 */

const STORE_CONFIG = {
  storeName: "Artesanías Eva",
  location: "Arica, Chile",
  // Sustituye este número por tu número de WhatsApp real (con código de país sin el signo +)
  // Ejemplo para Chile: "56912345678"
  whatsappNumber: "56954945733",
  email: "seintecarica@gmail.com",
  currencySymbol: "$",
  currencyCode: "CLP"
};

const CATEGORIES = [
  { id: "all", name: "Todas las Piezas", icon: "bi-grid-fill" },
  { id: "ceramica", name: "Cerámica y Alfarería", icon: "bi-cup-hot-fill" },
  { id: "joyeria", name: "Orfebrería y Joyas", icon: "bi-gem" },
  { id: "textil", name: "Tejidos y Textiles", icon: "bi-scissors" },
  { id: "madera", name: "Esculturas en Madera", icon: "bi-tree-fill" },
  { id: "cobre", name: "Decoración y Cobre", icon: "bi-palette-fill" }
];

const PRODUCTS = [
  {
    id: "AE-001",
    title: "Vasija Cerámica de Inspiración Diaguita",
    category: "ceramica",
    categoryLabel: "Cerámica y Alfarería",
    price: 48000,
    badge: "Pieza Única",
    featured: true,
    image: "assets/images/eva_ceramica_diaguita.jpg",
    description: "Hermosa vasija elaborada y pintada a mano con pigmentos minerales naturales. Recrea los patrones geométricos tradicionales diaguitas y andinos. Ideal para amantes del arte ancestral y la decoración de colección.",
    details: {
      material: "Arcilla natural moldeada a mano y barniz ecológico",
      dimensions: "Alto: 28 cm | Diámetro máx: 22 cm",
      origin: "Valle de Azapa, Arica",
      stockStatus: "Disponible (1 unidad en stock)",
      craftsman: "Taller Artesanal El Morro"
    }
  },
  {
    id: "AE-002",
    title: "Colgante de Plata y Lapislázuli Natural",
    category: "joyeria",
    categoryLabel: "Orfebrería y Joyas",
    price: 62000,
    badge: "Exclusivo",
    featured: true,
    image: "assets/images/eva_joyeria_lapis.jpg",
    description: "Exquisita joya de autor labrada en plata 950 con una gema pulida de Lapislázuli chileno de intenso tono azul ultramar con destellos dorados de pirita. Incluye cadena fina de plata.",
    details: {
      material: "Plata fina 950 y Lapislázuli natural chileno",
      dimensions: "Dije: 3.5 x 2.5 cm | Cadena: 50 cm",
      origin: "Taller de Orfebrería Arica",
      stockStatus: "Disponible (Edición Limitada)",
      craftsman: "Maestro Orfebre E. Vargas"
    }
  },
  {
    id: "AE-003",
    title: "Manta Poncho de Lana de Alpaca Fina",
    category: "textil",
    categoryLabel: "Tejidos y Textiles",
    price: 85000,
    badge: "Colección Arica",
    featured: true,
    image: "assets/images/eva_tejido_alpaca.jpg",
    description: "Tejido artesanal confeccionado a telar tradicional con fibra de 100% lana de alpaca altiplánica. Posee una suavidad incomparable, calidez única y guarda los diseños geométricos característicos del norte de Chile.",
    details: {
      material: "100% Lana de Alpaca pura teñida naturalmente",
      dimensions: "180 cm x 135 cm (Talla Única)",
      origin: "Altiplano de Parinacota",
      stockStatus: "Disponible (2 unidades)",
      craftsman: "Colectivo de Tejedoras Andinas"
    }
  },
  {
    id: "AE-004",
    title: "Fuente Escultórica en Madera de Guayacán",
    category: "madera",
    categoryLabel: "Esculturas en Madera",
    price: 54000,
    badge: "Pieza Única",
    featured: true,
    image: "assets/images/eva_tallado_madera.jpg",
    description: "Cuenco esculpido a mano aprovechando la veta natural y curvas orgánicas de madera noble recuperada. Su acabado pulido con ceras orgánicas resalta los matices oscuros y cálidos de la pieza.",
    details: {
      material: "Madera tallada a mano y cera de abejas",
      dimensions: "Largo: 35 cm | Ancho: 24 cm | Alto: 14 cm",
      origin: "Arica",
      stockStatus: "Disponible (Pieza única numerada)",
      craftsman: "Escultor L. Morales"
    }
  },
  {
    id: "AE-005",
    title: "Copa Ritual de Bronce y Cobre Repujado",
    category: "cobre",
    categoryLabel: "Decoración y Cobre",
    price: 39000,
    badge: "Edición Especial",
    featured: false,
    image: "assets/images/eva_ceramica_diaguita.jpg", // placeholder o reutilizable
    description: "Copa decorativa trabajada en latón y cobre rojo con finos relieves repujados a mano con simbología solar del norte grande.",
    details: {
      material: "Cobre chileno pulido y pátina protectora",
      dimensions: "Alto: 20 cm | Diámetro: 12 cm",
      origin: "Norte Grande, Chile",
      stockStatus: "Disponible",
      craftsman: "Artesanos del Cobre"
    }
  },
  {
    id: "AE-006",
    title: "Aros de Plata con Incrustación de Concha Spondylus",
    category: "joyeria",
    categoryLabel: "Orfebrería y Joyas",
    price: 34000,
    badge: "Populares",
    featured: false,
    image: "assets/images/eva_joyeria_lapis.jpg",
    description: "Aros colgantes en plata 925 combinados con tonos rojizos de concha marina Spondylus pulida. Diseño inspirados en las culturas costeras del Pacífico sur.",
    details: {
      material: "Plata 925 y Concha Spondylus natural",
      dimensions: "Largo total: 4 cm",
      origin: "Arica Costa",
      stockStatus: "Disponible",
      craftsman: "Taller Artesanal Eva"
    }
  },
  {
    id: "AE-007",
    title: "Camino de Mesa Andino Tejido a Mano",
    category: "textil",
    categoryLabel: "Tejidos y Textiles",
    price: 29000,
    badge: "Tradicional",
    featured: false,
    image: "assets/images/eva_tejido_alpaca.jpg",
    description: "Camino de mesa decorativo multicolor confeccionado con hilos de ovillo natural y guarda altiplánica tradicional.",
    details: {
      material: "Lana sintética y algodón natural",
      dimensions: "160 cm x 35 cm",
      origin: "Putre",
      stockStatus: "Disponible",
      craftsman: "Artesanías Putre"
    }
  },
  {
    id: "AE-008",
    title: "Escultura de Máscara de Salar en Madera Noble",
    category: "madera",
    categoryLabel: "Esculturas en Madera",
    price: 72000,
    badge: "Pieza de Colección",
    featured: false,
    image: "assets/images/eva_tallado_madera.jpg",
    description: "Escultura decorativa de pared que representa las festividades del norte de Chile, tallada en bloque sólido de alerce recuperado.",
    details: {
      material: "Madera de alerce recuperada",
      dimensions: "Alto: 45 cm | Ancho: 20 cm",
      origin: "Arica",
      stockStatus: "Disponible (Pieza única)",
      craftsman: "Taller Eva Arica"
    }
  }
];
