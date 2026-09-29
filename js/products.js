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
    title: "Cerámica Andina de Pisac (Supay)",
    category: "ceramica",
    categoryLabel: "Cerámica y Alfarería",
    price: 20000,
    badge: "Pieza única",
    featured: false,
    image: "assets/images/arc_02.jpg",
    images: [
      "assets/images/arc_02.jpg",
      "assets/images/arc_01.jpg"
    ],
    description: "Adquiere un pedazo de historia y folklore a tu hogar. Esta increíble vasija escultórica fue elaborada a mano en Pisac, Cusco (Perú). Representa una figura mitológica con detalles pintados a mano que recuerdan a las culturas precolombinas..",
    details: {
      material: "Cerámica",
      dimensions: "37 cm x 18 cm",
      origin: "Pisac, Perú",
      stockStatus: "Disponible",
      craftsman: "Luciano P.H."
    }
  },
  {
    id: "AE-007",
    title: "Cerámica Andina de Pisac (Ave Sagrada)",
    category: "ceramica",
    categoryLabel: "Cerámica y Alfarería",
    price: 20000,
    badge: "Pieza única",
    featured: false,
    image: "assets/images/arc_03.jpg",
    images: [
      "assets/images/arc_03.jpg",
      "assets/images/arc_04.jpg",
      "assets/images/arc_05.jpg",
      "assets/images/arc_06.jpg"
    ],
    description: "Adquiere un pedazo de historia y folklore a tu hogar. Esta increíble vasija escultórica fue elaborada a mano en Pisac, Cusco (Perú). Representa una figura mitológica con detalles pintados a mano que recuerdan a las culturas precolombinas..",
    details: {
      material: "Cerámica",
      dimensions: "Alto 37 cm x Ancho 18 cm",
      origin: "Pisac, Perú",
      stockStatus: "Disponible",
      craftsman: "Luciano P.H."
    }
  },
  {
    id: "AE-008",
    title: "Par de Cuadro Tallado PAreja Indígena",
    category: "madera",
    categoryLabel: "Esculturas en Madera",
    price: 28000,
    badge: "Pieza de Colección",
    featured: false,
    image: "assets/images/tall_01.jpg",
    images: [
      "assets/images/tall_01.jpg",
      "assets/images/tall_02.jpg",
      "assets/images/tall_03.jpg"
    ],
    description: "Par de piezas decorativas de madera Mara tallada. Son rostros de perfil con tocados tradicionales.",
    details: {
      material: "Madera Mara",
      dimensions: "Alto: 36 cm | Ancho: 12 cm",
      origin: "Bolivia",
      stockStatus: "Disponible (Pieza única)",
      craftsman: "-"
    }
  }
];
