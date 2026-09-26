# 🏺 Guía de Administración - Artesanías Eva

¡Bienvenido a la guía rápida de gestión de la página web de **Artesanías Eva**!

Esta web ha sido diseñada para publicarse de forma totalmente gratuita y veloz en **GitHub Pages** (`artesaniaseva.github.io`), sin necesidad de pagar servidores backend ni bases de datos complicadas.

---

## 📱 1. Cómo cambiar tu número de WhatsApp y Correo de Contacto

Abre el archivo `js/products.js` en tu editor de código o en la misma web de GitHub. Al inicio del archivo encontrarás el bloque `STORE_CONFIG`:

```javascript
const STORE_CONFIG = {
  storeName: "Artesanías Eva",
  location: "Arica, Chile",
  // Escribe aquí tu número real con código de país (sin el signo +). Ejemplo para Chile: 56912345678
  whatsappNumber: "56912345678", 
  email: "contacto@artesaniaseva.cl",
  currencySymbol: "$",
  currencyCode: "CLP"
};
```

Simplemente cambia `"56912345678"` por tu número telefónico real de WhatsApp.

---

## 🛍️ 2. Cómo agregar un nuevo producto al catálogo

En el mismo archivo `js/products.js`, desplázate hasta la lista `PRODUCTS`. Para agregar una nueva pieza artesanal, solo copia y pega esta plantilla al final del listado (antes del corchete final `]`):

```javascript
{
  id: "AE-009", // Código único de referencia
  title: "Nombre del Producto o Pieza",
  category: "ceramica", // Opciones: "ceramica", "joyeria", "textil", "madera", "cobre"
  categoryLabel: "Cerámica y Alfarería",
  price: 35000, // Precio numérico en pesos chilenos CLP
  badge: "Pieza Única", // Etiqueta opcional (ej: "Exclusivo", "Colección Arica", "Última Unidad")
  image: "assets/images/tu_imagen.jpg", // Ruta de la foto del producto
  description: "Descripción detallada del producto, su historia y características...",
  details: {
    material: "Plata y Lapislázuli",
    dimensions: "20 cm x 15 cm",
    origin: "Arica, Chile",
    stockStatus: "Disponible (1 unidad)",
    craftsman: "Taller Artesanal Eva"
  }
},
```

---

## 📸 3. Dónde guardar las fotos de los productos

1. Guarda la fotografía del nuevo producto dentro de la carpeta `assets/images/`.
2. Procura que la foto esté optimizada (formato `.jpg` o `.webp`).
3. En la propiedad `image` del producto pon la ruta correspondiente: `"assets/images/nombre_de_foto.jpg"`.

---

## 🚀 4. Cómo publicar los cambios en GitHub Pages

1. Si utilizas Git o GitHub Desktop, simplemente haz un **Commit** de los cambios.
2. Realiza un **Push** a la rama principal (`main` o `master`).
3. En 1-2 minutos, tu sitio web en `artesaniaseva.github.io` se actualizará automáticamente con los nuevos productos.

---

¡Disfruta de tu nuevo catálogo en línea para **Artesanías Eva**!
