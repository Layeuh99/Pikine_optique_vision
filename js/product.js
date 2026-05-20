const productTitle = document.getElementById('product-title');
const productCategory = document.getElementById('product-category');
const productTagline = document.getElementById('product-tagline');
const productPrice = document.getElementById('product-price');
const productAvailability = document.getElementById('product-availability');
const productDescription = document.getElementById('product-description');
const productFeatures = document.getElementById('product-features');
const productGallery = document.getElementById('product-gallery');
const mainProductImage = document.getElementById('main-product-image');
const productWhatsApp = document.getElementById('product-whatsapp');
const productPayment = document.getElementById('product-payment');
const whatsappFab = document.getElementById('whatsapp-fab');
const header = document.querySelector('.site-header');
const revealElements = document.querySelectorAll('.reveal');

const productId = new URLSearchParams(window.location.search).get('id');
const product = getStoredProducts().find((item) => item.id === productId);

const buildWhatsAppLink = (productName) => {
  const message = `${SITE_CONFIG.whatsappGreeting}\nJe suis intéressé par cette paire de lunettes : ${productName}`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const showNotFound = () => {
  if (productTitle) productTitle.textContent = 'Produit introuvable';
  if (productDescription) productDescription.textContent = 'Ce produit n’existe pas ou a été retiré. Retournez à la boutique pour découvrir nos offres premium.';
  if (productCategory) productCategory.style.display = 'none';
  if (productWhatsApp) productWhatsApp.style.display = 'none';
  if (productPayment) productPayment.style.display = 'none';
};

const renderProduct = () => {
  if (!product) {
    showNotFound();
    return;
  }

  if (productTitle) productTitle.textContent = product.name;
  if (productCategory) productCategory.textContent = product.category.toUpperCase();
  if (productTagline) productTagline.textContent = product.longDescription;
  if (productPrice) productPrice.textContent = `${product.price.toLocaleString('fr-FR')} FCFA`;
  if (productAvailability) productAvailability.textContent = product.availability;
  if (productDescription) productDescription.textContent = product.description;
  if (productWhatsApp) productWhatsApp.href = buildWhatsAppLink(product.name);
  if (productPayment) productPayment.href = `paiement/index.html?product=${encodeURIComponent(product.name)}`;

  const galleryImages = product.images || [product.image];
  if (mainProductImage) {
    mainProductImage.src = galleryImages[0];
    mainProductImage.alt = product.name;
  }

  if (productGallery) {
    productGallery.innerHTML = galleryImages
      .map((src, index) => `
        <button class="gallery-thumb" type="button" data-src="${src}">
          <img src="${src}" alt="${product.name} image ${index + 1}" loading="lazy" />
        </button>
      `)
      .join('');

    productGallery.querySelectorAll('.gallery-thumb').forEach((button) => {
      button.addEventListener('click', () => {
        const src = button.dataset.src;
        if (mainProductImage) mainProductImage.src = src;
      });
    });
  }

  if (productFeatures) {
    productFeatures.innerHTML = product.features
      .map((feature) => `<li>${feature}</li>`)
      .join('');
  }
};

const initPageEffects = () => {
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  if (revealElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealElements.forEach((element) => observer.observe(element));
  }

  window.addEventListener('load', () => {
    document.documentElement.classList.remove('is-loading');
    document.documentElement.classList.add('page-ready');
  });
};

if (whatsappFab) {
  whatsappFab.href = buildWhatsAppLink(product ? product.name : 'une paire de lunettes');
}

renderProduct();
initPageEffects();
