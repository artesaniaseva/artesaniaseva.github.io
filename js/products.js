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
    price: 30000,
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
      dimensions: "Alto 39 cm x Ancho 35 cm",
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
      dimensions: "Alto 30 cm x Ancho 30 cm",
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
      dimensions: "Alto 30 cm x Ancho 30 cm",
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
      dimensions: "Alto 30 cm x Ancho 30 cm",
      origin: "Bolivia",
      stockStatus: "Disponible 1 ejemplar",
      craftsman: "Miguel Galindo"
    }
  },
  {
    id: "AE-006",
    title: "Catedral de San Marcos de Arica (Chile)",
    category: "cuadro",
    categoryLabel: "Cuadros y Espejos",
    price: 12000,
    badge: "Pieza de Colección",
    featured: true,
    image: "assets/images/cua_09.jpg",
    images: [
      "assets/images/cua_09.jpg"
    ],
    description: "¡Una pieza con historia! Este hermoso cuadro en relieve de cobre repujado representa la majestuosa Catedral de San Marcos de Arica, Chile.",
    details: {
      material: "Lámina de cobre repujado",
      dimensions: "Alto 30 cm x Ancho 30 cm",
      origin: "Arica, Chile",
      stockStatus: "Disponible",
      craftsman: "-"
    }
  },
  {
    id: "AE-007",
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
      dimensions: "Alto 37 cm x Ancho 18 cm",
      origin: "Pisac, Perú",
      stockStatus: "Disponible 1 ejemplar",
      craftsman: "Luciano P.H."
    }
  },
  {
    id: "AE-008",
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
      stockStatus: "Disponible 1 ejemplar",
      craftsman: "Luciano P.H."
    }
  },
  {
    id: "AE-009",
    title: "Par de Cuadro Tallado Pareja Indígena (chico)",
    category: "madera",
    categoryLabel: "Esculturas en Madera",
    price: 25000,
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
      dimensions: "Alto: 24 cm | Ancho: 15 cm",
      origin: "Bolivia",
      stockStatus: "Disponible 1 par",
      craftsman: "-"
    }
  },
  {
    id: "AE-010",
    title: "Par de Cuadro Tallado Pareja Indígena (mediano)",
    category: "madera",
    categoryLabel: "Esculturas en Madera",
    price: 28000,
    badge: "Pieza de Colección",
    featured: false,
    image: "assets/images/tall_04.jpg",
    images: [
      "assets/images/tall_04.jpg",
      "assets/images/tall_05.jpg",
      "assets/images/tall_06.jpg"
    ],
    description: "Par de piezas decorativas de madera Mara tallada. Son rostros de perfil con tocados tradicionales.",
    details: {
      material: "Madera Mara",
      dimensions: "Alto: 36 cm | Ancho: 21 cm",
      origin: "Bolivia",
      stockStatus: "Disponible 1 par",
      craftsman: "-"
    }
  },
  {
    id: "AE-011",
    title: "Tallado en Madera - Músico Andino",
    category: "madera",
    categoryLabel: "Esculturas en Madera",
    price: 25000,
    badge: "Pieza de Colección",
    featured: false,
    image: "assets/images/tall_07.jpg",
    images: [
      "assets/images/tall_07.jpg",
      "assets/images/tall_08.jpg",
      "assets/images/tall_09.jpg"
    ],
    description: "Una pieza vertical con mucha presencia y carácter. Este relieve tallado en madera Mara representa un personaje ceremonial con rasgos marcados, sosteniendo una zampoña.",
    details: {
      material: "Madera Mara",
      dimensions: "Alto: 58 cm | Ancho: 8 cm",
      origin: "Bolivia",
      stockStatus: "Disponible 1 ejemplar",
      craftsman: "-"
    }
  },
  {
    id: "AE-012",
    title: "Tallado en Madera - Ajedrez (Grande)",
    category: "madera",
    categoryLabel: "Esculturas en Madera",
    price: 90000,
    badge: "Pieza de Colección",
    featured: false,
    image: "assets/images/aje_gr_01.jpeg",
    images: [
      "assets/images/aje_gr_01.jpeg",
      "assets/images/aje_gr_02.jpeg",
      "assets/images/aje_gr_03.jpeg",
      "assets/images/aje_gr_04.jpeg",
      "assets/images/aje_gr_05.jpeg",
      "assets/images/aje_gr_06.jpeg"
    ],
    description: "Pieza única tallada a mano en noble madera mara. Este juego de ajedrez combina la estrategia clásica con el arte andino, presentando figuras antropomorfas precolombinas y un elegante tablero octogonal con relieves decorativos. Ideal para coleccionistas, amantes del ajedrez o como un regalo con identidad cultural. ¡Una obra de arte funcional que durará generaciones!",
    details: {
      material: "Madera Mara",
      dimensions: "Alto: 55 cm | Ancho: 60 cm",
      origin: "Bolivia",
      stockStatus: "Disponible 1 ejemplar",
      craftsman: "-"
    }
  },
  {
    id: "AE-013",
    title: "Tallado en Madera - Ajedrez (Mediano)",
    category: "madera",
    categoryLabel: "Esculturas en Madera",
    price: 80000,
    badge: "Pieza de Colección",
    featured: false,
    image: "assets/images/aje_me_01.jpeg",
    images: [
      "assets/images/aje_me_01.jpeg",
      "assets/images/aje_me_02.jpg",
      "assets/images/aje_me_03.jpg",
      "assets/images/aje_me_04.jpg"
    ],
    description: "Pieza única tallada a mano en noble madera mara. Este juego de ajedrez combina la estrategia clásica con el arte andino, presentando figuras antropomorfas precolombinas y un elegante tablero octogonal con relieves decorativos. Ideal para coleccionistas, amantes del ajedrez o como un regalo con identidad cultural. ¡Una obra de arte funcional que durará generaciones!",
    details: {
      material: "Madera Mara",
      dimensions: "Alto: 53 cm | Ancho: 46 cm",
      origin: "Bolivia",
      stockStatus: "Disponible 1 ejemplar",
      craftsman: "-"
    }
  },
  {
    id: "AE-014",
    title: "Espejo Artesanal Pintado a Mano (Verde)",
    category: "cuadro",
    categoryLabel: "Cuadros y Espejos",
    price: 45000,
    badge: "Pieza de Colección",
    featured: false,
    image: "assets/images/esp_01.jpg",
    images: [
      "assets/images/esp_01.jpg",
      "assets/images/esp_02.jpg"
    ],
    description: "Hermoso espejo decorativo artesanal con marco de madera ortogonal estilo Talavera pintado a mano.",
    details: {
      material: "Madera/Vidrio",
      dimensions: "Alto: 63 cm | Ancho: 53 cm",
      origin: "Perú",
      stockStatus: "Disponible (Exclusivo)",
      craftsman: "-"
    }
  },
  {
    id: "AE-015",
    title: "Espejo Artesanal Pintado a Mano (Mixto)",
    category: "cuadro",
    categoryLabel: "Cuadros y Espejos",
    price: 35000,
    badge: "Pieza de Colección",
    featured: false,
    image: "assets/images/esp_03.jpg",
    images: [
      "assets/images/esp_03.jpg",
      "assets/images/esp_04.jpg"
    ],
    description: "Hermoso espejo decorativo artesanal con marco de madera ortogonal estilo Talavera pintado a mano.",
    details: {
      material: "Madera/Vidrio",
      dimensions: "Alto: 55 cm | Ancho: 49 cm",
      origin: "Perú",
      stockStatus: "Disponible (Exclusivo)",
      craftsman: "-"
    }
  }
];
