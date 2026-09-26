/**
 * ARTESANÍAS EVA - LÓGICA DE APLICACIÓN Y CATÁLOGO
 * Controla filtrado, búsquedas, ordenamiento, modal interactivo y links de WhatsApp / Email
 */

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  const state = {
    selectedCategory: "all",
    searchQuery: "",
    sortBy: "default",
    currentProduct: null
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
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");
  const modalSku = document.getElementById("modalSku");
  const modalDescription = document.getElementById("modalDescription");
  const modalSpecsList = document.getElementById("modalSpecsList");
  const btnWhatsapp = document.getElementById("btnWhatsapp");
  const btnEmail = document.getElementById("btnEmail");
  const btnShare = document.getElementById("btnShare");

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

    // Attach click handlers to category pills
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
      // Filter by category
      const matchesCategory = state.selectedCategory === "all" || prod.category === state.selectedCategory;
      
      // Filter by search query
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
      return 0; // default order in array
    });
  }

  // Render Product Grid
  function filterAndRenderProducts() {
    const filtered = getFilteredProducts();

    // Update Counter
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

    // Attach click listeners to cards
    productsGrid.querySelectorAll(".product-card").forEach(card => {
      card.addEventListener("click", () => {
        const prodId = card.getAttribute("data-id");
        openProductModal(prodId);
      });
    });
  }

  // Open Product Modal
  function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    state.currentProduct = product;

    // Update URL hash without scroll shift
    history.replaceState(null, null, `#producto=${product.id}`);

    // Populate Modal Content
    modalImage.src = product.image;
    modalImage.alt = product.title;
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
      `Hola Artesanías Eva,\n\nQuisiera realizar una consulta sobre el producto:\n- Titulo: ${product.title}\n- Referencia: ${product.id}\n- Precio: ${formatPrice(product.price)}\n\nPor favor contáctenme para acordar el pago y envío.\nGracias.`
    );
    btnEmail.href = `mailto:${STORE_CONFIG.email}?subject=${mailSubject}&body=${mailBody}`;

    // Show Modal
    productModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Close Product Modal
  function closeProductModal() {
    productModal.classList.remove("active");
    document.body.style.overflow = "";
    state.currentProduct = null;
    history.replaceState(null, null, window.location.pathname);
  }

  // Share / Copy Link Event
  if (btnShare) {
    btnShare.addEventListener("click", () => {
      if (!state.currentProduct) return;
      const shareUrl = `${window.location.origin}${window.location.pathname}#producto=${state.currentProduct.id}`;
      
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast("¡Enlace del producto copiado al portapapeles!");
        });
      } else {
        showToast("Enlace de producto listo en tu navegador.");
      }
    });
  }

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

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && productModal.classList.contains("active")) {
      closeProductModal();
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
