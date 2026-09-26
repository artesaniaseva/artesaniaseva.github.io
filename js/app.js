/**
 * ARTESANÍAS EVA - LÓGICA DE APLICACIÓN Y CATÁLOGO
 * Controla filtrado, búsquedas, ordenamiento, modal interactivo con galería multi-imagen,
 * y opciones de compartir productos y sitio web en redes sociales.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  const state = {
    selectedCategory: "all",
    searchQuery: "",
    sortBy: "default",
    currentProduct: null,
    currentImageIndex: 0
  };

  // DOM Elements
  const categoryNav = document.getElementById("categoryNav");
  const productsGrid = document.getElementById("productsGrid");
  const productCounter = document.getElementById("productCounter");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");

  // Modal Elements
  const productModal = document.getElementById("productModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalImage = document.getElementById("modalImage");
  const modalPrevImg = document.getElementById("modalPrevImg");
  const modalNextImg = document.getElementById("modalNextImg");
  const modalImgCounter = document.getElementById("modalImgCounter");
  const modalThumbnails = document.getElementById("modalThumbnails");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");
  const modalSku = document.getElementById("modalSku");
  const modalDescription = document.getElementById("modalDescription");
  const modalSpecsList = document.getElementById("modalSpecsList");
  const btnWhatsapp = document.getElementById("btnWhatsapp");
  const btnEmail = document.getElementById("btnEmail");

  // Toast Element
  const toastNotification = document.getElementById("toastNotification");

  // Format Price in Chilean Pesos CLP
  function formatPrice(amount) {
    return `${STORE_CONFIG.currencySymbol}${amount.toLocaleString("es-CL")}`;
  }

  // Toast Helper
  function showToast(message) {
    if (!toastNotification) return;
    toastNotification.querySelector("span").textContent = message;
    toastNotification.classList.add("show");
    setTimeout(() => {
      toastNotification.classList.remove("show");
    }, 3200);
  }

  // Helper: Get array of images for a product
  function getProductImages(product) {
    if (product.images && Array.isArray(product.images) && product.images.length > 0) {
      return product.images;
    }
    return [product.image];
  }

  // Render Category Navigation Pills
  function renderCategoryPills() {
    if (!categoryNav) return;
    categoryNav.innerHTML = CATEGORIES.map(cat => `
      <button 
        class="category-btn ${cat.id === state.selectedCategory ? "active" : ""}"
        data-category="${cat.id}"
        aria-label="Filtrar por ${cat.name}"
      >
        <i class="bi ${cat.icon}"></i>
        <span>${cat.name}</span>
      </button>
    `).join("");

    categoryNav.querySelectorAll(".category-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        state.selectedCategory = btn.getAttribute("data-category");
        renderCategoryPills();
        filterAndRenderProducts();
      });
    });
  }

  // Filter and Sort Products
  function getFilteredProducts() {
    return PRODUCTS.filter(prod => {
      const matchesCategory = state.selectedCategory === "all" || prod.category === state.selectedCategory;

      const query = state.searchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
        prod.title.toLowerCase().includes(query) ||
        prod.description.toLowerCase().includes(query) ||
        prod.categoryLabel.toLowerCase().includes(query) ||
        (prod.details && prod.details.origin && prod.details.origin.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (state.sortBy === "price-asc") return a.price - b.price;
      if (state.sortBy === "price-desc") return b.price - a.price;
      if (state.sortBy === "name") return a.title.localeCompare(b.title);
      return 0;
    });
  }

  // Render Product Grid
  function filterAndRenderProducts() {
    const filtered = getFilteredProducts();

    if (productCounter) {
      productCounter.innerHTML = `Mostrando <strong>${filtered.length}</strong> ${filtered.length === 1 ? "pieza artesanal" : "piezas artesanales"}`;
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div class="no-results">
          <i class="bi bi-search"></i>
          <h3>No encontramos piezas en esta búsqueda</h3>
          <p class="text-muted">Prueba seleccionando otra categoría o borrando los términos de búsqueda.</p>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(prod => `
      <article class="product-card" data-id="${prod.id}">
        <div class="card-image-box">
          <img src="${prod.image}" alt="${prod.title}" class="card-image" loading="lazy" />
          ${prod.badge ? `<span class="card-badge">${prod.badge}</span>` : ""}
        </div>
        <div class="card-body">
          <span class="card-category">${prod.categoryLabel}</span>
          <h3 class="card-title">${prod.title}</h3>
          <div class="card-price-row">
            <span class="card-price">${formatPrice(prod.price)}</span>
            <button class="btn-quick-view" aria-label="Ver detalle de ${prod.title}">
              <i class="bi bi-eye"></i> Detalle
            </button>
          </div>
        </div>
      </article>
    `).join("");

    productsGrid.querySelectorAll(".product-card").forEach(card => {
      card.addEventListener("click", () => {
        const prodId = card.getAttribute("data-id");
        openProductModal(prodId);
      });
    });
  }

  // Modal Gallery Renderer
  function updateModalGallery() {
    if (!state.currentProduct) return;
    const images = getProductImages(state.currentProduct);
    const index = state.currentImageIndex;

    // Fade effect on image change
    modalImage.style.opacity = "0.3";
    setTimeout(() => {
      modalImage.src = images[index];
      modalImage.alt = `${state.currentProduct.title} (Foto ${index + 1})`;
      modalImage.style.opacity = "1";
    }, 150);

    // Update Counter & Controls Visibility
    if (images.length > 1) {
      if (modalPrevImg) modalPrevImg.classList.remove("hidden");
      if (modalNextImg) modalNextImg.classList.remove("hidden");
      if (modalImgCounter) {
        modalImgCounter.classList.remove("hidden");
        modalImgCounter.textContent = `${index + 1} / ${images.length}`;
      }
      if (modalThumbnails) {
        modalThumbnails.classList.remove("hidden");
        modalThumbnails.innerHTML = images.map((imgUrl, i) => `
          <button 
            class="modal-thumb-btn ${i === index ? "active" : ""}" 
            data-index="${i}"
            aria-label="Ver foto ${i + 1}"
          >
            <img src="${imgUrl}" alt="Thumbnail ${i + 1}" />
          </button>
        `).join("");

        // Attach thumb click handlers
        modalThumbnails.querySelectorAll(".modal-thumb-btn").forEach(thumb => {
          thumb.addEventListener("click", (e) => {
            e.stopPropagation();
            const newIdx = parseInt(thumb.getAttribute("data-index"), 10);
            state.currentImageIndex = newIdx;
            updateModalGallery();
          });
        });
      }
    } else {
      if (modalPrevImg) modalPrevImg.classList.add("hidden");
      if (modalNextImg) modalNextImg.classList.add("hidden");
      if (modalImgCounter) modalImgCounter.classList.add("hidden");
      if (modalThumbnails) modalThumbnails.classList.add("hidden");
    }
  }

  // Open Product Modal
  function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    state.currentProduct = product;
    state.currentImageIndex = 0;

    // Update URL hash without scroll shift
    history.replaceState(null, null, `#producto=${product.id}`);

    // Populate Modal Content
    modalCategory.textContent = product.categoryLabel;
    modalTitle.textContent = product.title;
    modalPrice.textContent = formatPrice(product.price);
    modalSku.textContent = `Ref: ${product.id}`;
    modalDescription.textContent = product.description;

    // Populate Specifications 
    if (product.details) {
      modalSpecsList.innerHTML = `
        <div class="spec-item"><span class="spec-key">Material:</span><span class="spec-val">${product.details.material}</span></div>
        <div class="spec-item"><span class="spec-key">Dimensiones:</span><span class="spec-val">${product.details.dimensions}</span></div>
        <div class="spec-item"><span class="spec-key">Origen:</span><span class="spec-val">${product.details.origin}</span></div>
        <div class="spec-item"><span class="spec-key">Estado:</span><span class="spec-val">${product.details.stockStatus}</span></div>
        <div class="spec-item"><span class="spec-key">Artesano:</span><span class="spec-val">${product.details.craftsman}</span></div>
      `;
    }

    // Configure WhatsApp Action Button
    const waMessage = encodeURIComponent(
      `¡Hola Artesanías Eva! Estoy interesado/a en la pieza artesanal: ${product.title} (Ref: ${product.id}) por ${formatPrice(product.price)}. ¿Sigue disponible para envío?`
    );
    btnWhatsapp.href = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${waMessage}`;

    // Configure Email Action Button
    const mailSubject = encodeURIComponent(`Consulta de Compra: ${product.title} (Ref: ${product.id})`);
    const mailBody = encodeURIComponent(
      `Hola Artesanías Eva,\n\nQuisiera realizar una consulta sobre el producto:\n- Título: ${product.title}\n- Referencia: ${product.id}\n- Precio: ${formatPrice(product.price)}\n\nPor favor contáctenme para acordar el pago y envío.\nGracias.`
    );
    btnEmail.href = `mailto:${STORE_CONFIG.email}?subject=${mailSubject}&body=${mailBody}`;

    // Update Gallery
    updateModalGallery();

    // Show Modal
    productModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Close Product Modal
  function closeProductModal() {
    productModal.classList.remove("active");
    document.body.style.overflow = "";
    state.currentProduct = null;
    state.currentImageIndex = 0;
    history.replaceState(null, null, window.location.pathname);
  }

  // Gallery Navigation Controls
  if (modalPrevImg) {
    modalPrevImg.addEventListener("click", () => {
      if (!state.currentProduct) return;
      const images = getProductImages(state.currentProduct);
      state.currentImageIndex = (state.currentImageIndex - 1 + images.length) % images.length;
      updateModalGallery();
    });
  }

  if (modalNextImg) {
    modalNextImg.addEventListener("click", () => {
      if (!state.currentProduct) return;
      const images = getProductImages(state.currentProduct);
      state.currentImageIndex = (state.currentImageIndex + 1) % images.length;
      updateModalGallery();
    });
  }

  // ==========================================
  // PRODUCT SOCIAL SHARE HANDLERS (MODAL)
  // ==========================================
  function getProductShareUrl() {
    if (!state.currentProduct) return window.location.href;
    return `${window.location.origin}${window.location.pathname}#producto=${state.currentProduct.id}`;
  }

  function shareProductOn(network) {
    if (!state.currentProduct) return;
    const prod = state.currentProduct;
    const shareUrl = getProductShareUrl();
    const fullImageUrl = new URL(prod.image, window.location.href).href;

    switch (network) {
      case "whatsapp": {
        const text = encodeURIComponent(`¡Mira esta hermosa pieza artesanal en Artesanías Eva!\n\n*${prod.title}*\n${shareUrl}`);
        window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank", "noopener,noreferrer");
        break;
      }
      case "facebook": {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank", "noopener,noreferrer");
        break;
      }
      case "twitter": {
        const text = encodeURIComponent(`Descubre "${prod.title}" de Arica en Artesanías Eva:`);
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${text}`, "_blank", "noopener,noreferrer");
        break;
      }
      case "pinterest": {
        window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(fullImageUrl)}&description=${encodeURIComponent(prod.title)}`, "_blank", "noopener,noreferrer");
        break;
      }
      case "telegram": {
        const text = encodeURIComponent(`Descubre "${prod.title}" en Artesanías Eva`);
        window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${text}`, "_blank", "noopener,noreferrer");
        break;
      }
      case "copy": {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(shareUrl).then(() => {
            showToast("¡Enlace del producto copiado al portapapeles!");
          }).catch(() => {
            showToast("Enlace del producto listo.");
          });
        }
        break;
      }
      case "native": {
        if (navigator.share) {
          navigator.share({
            title: prod.title,
            text: prod.description,
            url: shareUrl
          }).catch(() => {});
        } else {
          shareProductOn("copy");
        }
        break;
      }
    }
  }

  // Attach listeners to product share buttons
  const btnShareWa = document.getElementById("btnShareProductWa");
  const btnShareFb = document.getElementById("btnShareProductFb");
  const btnShareTw = document.getElementById("btnShareProductTw");
  const btnSharePin = document.getElementById("btnShareProductPin");
  const btnShareTg = document.getElementById("btnShareProductTg");
  const btnShareCopy = document.getElementById("btnShareProductCopy");
  const btnShareNative = document.getElementById("btnShareProductNative");

  if (btnShareWa) btnShareWa.addEventListener("click", () => shareProductOn("whatsapp"));
  if (btnShareFb) btnShareFb.addEventListener("click", () => shareProductOn("facebook"));
  if (btnShareTw) btnShareTw.addEventListener("click", () => shareProductOn("twitter"));
  if (btnSharePin) btnSharePin.addEventListener("click", () => shareProductOn("pinterest"));
  if (btnShareTg) btnShareTg.addEventListener("click", () => shareProductOn("telegram"));
  if (btnShareCopy) btnShareCopy.addEventListener("click", () => shareProductOn("copy"));
  if (btnShareNative) btnShareNative.addEventListener("click", () => shareProductOn("native"));


  // ==========================================
  // WEBSITE SOCIAL SHARE HANDLERS (SITE-WIDE)
  // ==========================================
  function getSiteShareUrl() {
    return `${window.location.origin}${window.location.pathname}`;
  }

  function shareWebsiteOn(network) {
    const siteUrl = getSiteShareUrl();

    switch (network) {
      case "whatsapp": {
        const text = encodeURIComponent(`¡Conoce Artesanías Eva! Catálogo exclusivo de piezas artesanales hechas a mano en Arica, Chile:\n${siteUrl}`);
        window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank", "noopener,noreferrer");
        break;
      }
      case "facebook": {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`, "_blank", "noopener,noreferrer");
        break;
      }
      case "twitter": {
        const text = encodeURIComponent(`Conoce Artesanías Eva - Piezas artesanales exclusivas con historia y alma desde Arica, Chile:`);
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(siteUrl)}&text=${text}`, "_blank", "noopener,noreferrer");
        break;
      }
      case "pinterest": {
        window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(siteUrl)}&description=${encodeURIComponent("Artesanías Eva - Catálogo exclusivo de artesanías de Arica, Chile")}`, "_blank", "noopener,noreferrer");
        break;
      }
      case "telegram": {
        const text = encodeURIComponent(`Descubre el catálogo de Artesanías Eva en Arica, Chile`);
        window.open(`https://t.me/share/url?url=${encodeURIComponent(siteUrl)}&text=${text}`, "_blank", "noopener,noreferrer");
        break;
      }
      case "copy": {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(siteUrl).then(() => {
            showToast("¡Enlace de la tienda copiado al portapapeles!");
          }).catch(() => {
            showToast("Enlace de la tienda listo.");
          });
        }
        break;
      }
      case "native": {
        if (navigator.share) {
          navigator.share({
            title: "Artesanías Eva",
            text: "Piezas únicas y exclusivas con historia y alma en Arica, Chile.",
            url: siteUrl
          }).catch(() => {});
        } else {
          shareWebsiteOn("copy");
        }
        break;
      }
    }
  }

  // Attach listeners to website share buttons
  const btnSiteWa = document.getElementById("btnSiteShareWa");
  const btnSiteFb = document.getElementById("btnSiteShareFb");
  const btnSiteTw = document.getElementById("btnSiteShareTw");
  const btnSitePin = document.getElementById("btnSiteSharePin");
  const btnSiteTg = document.getElementById("btnSiteShareTg");
  const btnSiteCopy = document.getElementById("btnSiteShareCopy");
  const btnSiteNative = document.getElementById("btnSiteShareNative");

  if (btnSiteWa) btnSiteWa.addEventListener("click", () => shareWebsiteOn("whatsapp"));
  if (btnSiteFb) btnSiteFb.addEventListener("click", () => shareWebsiteOn("facebook"));
  if (btnSiteTw) btnSiteTw.addEventListener("click", () => shareWebsiteOn("twitter"));
  if (btnSitePin) btnSitePin.addEventListener("click", () => shareWebsiteOn("pinterest"));
  if (btnSiteTg) btnSiteTg.addEventListener("click", () => shareWebsiteOn("telegram"));
  if (btnSiteCopy) btnSiteCopy.addEventListener("click", () => shareWebsiteOn("copy"));
  if (btnSiteNative) btnSiteNative.addEventListener("click", () => shareWebsiteOn("native"));

  // Search Listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      filterAndRenderProducts();
    });
  }

  // Sort Selector Listener
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      filterAndRenderProducts();
    });
  }

  // Close Modal Listeners
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProductModal);
  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  // Keyboard navigation inside modal (Escape to close, Left/Right for gallery)
  document.addEventListener("keydown", (e) => {
    if (!productModal.classList.contains("active")) return;

    if (e.key === "Escape") {
      closeProductModal();
    } else if (e.key === "ArrowLeft") {
      if (modalPrevImg && !modalPrevImg.classList.contains("hidden")) {
        modalPrevImg.click();
      }
    } else if (e.key === "ArrowRight") {
      if (modalNextImg && !modalNextImg.classList.contains("hidden")) {
        modalNextImg.click();
      }
    }
  });

  // Check URL Hash for Deep Linking on Page Load
  function checkUrlHash() {
    const hash = window.location.hash;
    if (hash && hash.includes("#producto=")) {
      const prodId = hash.replace("#producto=", "");
      openProductModal(prodId);
    }
  }

  // Initialize App
  renderCategoryPills();
  filterAndRenderProducts();
  checkUrlHash();
});
