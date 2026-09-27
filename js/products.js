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
  { id: "bronce", name: "Decoración y Bronce", icon: "bi-palette-fill" },
  { id: "cuadro", name: "Cuadros y Espejos", icon: "bi-image" }
];

const PRODUCTS = [
  {
    id: "AE-001",
    title: "Pareja de Quijote y Sancho",
    category: "bronce",
    categoryLabel: "Decoración y Bronce",
    price: 20000,
    badge: "Pieza Única",
    featured: true,
    image: "assets/images/qui_02.jpeg",
    images: [
      "assets/images/qui_02.jpeg",
      "assets/images/qui_03.jpeg",
      "assets/images/qui_04.jpeg"
    ],
    description: "Set de dos figuras artesanales de bronce envejecido, representando a Don Quijote y Sancho Panza montados sobre sus respectivos animales. Presentan un acabado metálico envejecido en tonos dorados y oscuros, con detalles ornamentales y gran nivel de relieve. Ideales para decoración del hogar, vitrinas o coleccionistas.",
    details: {
      material: "Bronce envejecido",
      dimensions: "Alto: 20 cm | Ancho: 22 cm",
      origin: "Arequipa, Perú",
      stockStatus: "Disponible (1 pareja en stock)",
      craftsman: "-"
    }
  },
  {
    id: "AE-002",
    title: "Cuadro Decorativo Tiwanaku (Dios Viracocha)",
    category: "cuadro",
    categoryLabel: "Cuadros y Espejos",
    price: 30000,
    badge: "Pieza Única",
    featured: true,
    image: "assets/images/cua_03.jpeg",
    images: [
      "assets/images/cua_03.jpeg",
      "assets/images/cua_04.jpeg"
    ],
    description: "Hermoso cuadro decorativo de inspiración Tiwanaku, adquirido en Bolivia, con diseño de temática andina y acabado metálico que aparenta ser lámina de cobre.",
    details: {
      material: "Lámina de cobre repujado",
      dimensions: "35 cm x 39 cm",
      origin: "Bolivia",
      stockStatus: "Disponible 1 ejemplar",
      craftsman: "Miguel Galindo"
    }
  },
  {
    id: "AE-003",
    title: "Cuadro Decorativo Tiwanaku (Dios de los Báculos)",
    category: "cuadro",
    categoryLabel: "Cuadros y Espejos",
    price: 20000,
    badge: "Pieza Única",
    featured: true,
    image: "assets/images/cua_01.jpeg",
    images: [
      "assets/images/cua_01.jpeg",
      "assets/images/cua_02.jpeg"
    ],
    description: "Hermoso cuadro decorativo de inspiración Tiwanaku, adquirido en Bolivia, con diseño de temática andina y acabado metálico que aparenta ser lámina de cobre.",
    details: {
      material: "Lámina de cobre repujado",
      dimensions: "30 cm x 30 cm",
      origin: "Bolivia",
      stockStatus: "Disponible 1 ejemplar",
      craftsman: "Miguel Galindo"
    }
  },
  {
    id: "AE-004",
    title: "Cuadro Decorativo Tiwanaku (Dios Tunupa)",
    category: "cuadro",
    categoryLabel: "Cuadros y Espejos",
    price: 20000,
    badge: "Pieza Única",
    featured: true,
    image: "assets/images/cua_05.jpeg",
    images: [
      "assets/images/cua_05.jpeg",
      "assets/images/cua_06.jpeg"
    ],
    description: "Hermoso cuadro decorativo de inspiración Tiwanaku, adquirido en Bolivia, con diseño de temática andina y acabado metálico que aparenta ser lámina de cobre.",
    details: {
      material: "Lámina de cobre repujado",
      dimensions: "30 cm x 30 cm",
      origin: "Bolivia",
      stockStatus: "Disponible 1 ejemplar",
      craftsman: "Miguel Galindo"
    }
  },
  {
    id: "AE-005",
    title: "Cuadro Decorativo Tiwanaku (Reunión comunitaria)",
    category: "cuadro",
    categoryLabel: "Cuadros y Espejos",
    price: 20000,
    badge: "Pieza Única",
    featured: true,
    image: "assets/images/cua_07.jpeg",
    images: [
      "assets/images/cua_07.jpeg",
      "assets/images/cua_08.jpeg"
    ],
    description: "Hermoso cuadro decorativo de inspiración Costumbrista/Colonial, adquirido en Bolivia, con diseño de temática andina y acabado metálico que aparenta ser lámina de cobre.",
    details: {
      material: "Lámina de cobre repujado",
      dimensions: "30 cm x 30 cm",
      origin: "Bolivia",
      stockStatus: "Disponible 1 ejemplar",
      craftsman: "Miguel Galindo"
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
    images: [
      "assets/images/eva_joyeria_lapis.jpg",
      "assets/images/eva_tejido_alpaca.jpg"
    ],
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
    images: [
      "assets/images/eva_tejido_alpaca.jpg",
      "assets/images/eva_tallado_madera.jpg"
    ],
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
    images: [
      "assets/images/eva_tallado_madera.jpg",
      "assets/images/eva_ceramica_diaguita.jpg"
    ],
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
