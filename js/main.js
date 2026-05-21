const productGrid = document.getElementById('product-grid');
const newProductsGrid = document.getElementById('new-products');
const testimonialGrid = document.getElementById('testimonial-grid');
const whatsappFab = document.getElementById('whatsapp-fab');
const categoryFilter = document.getElementById('category-filter');
const searchInput = document.getElementById('search-input');
const filterCount = document.getElementById('filter-count');
const contactForm = document.getElementById('contact-form');
const contactNameInput = document.getElementById('contact-name');
const contactEmailInput = document.getElementById('contact-email');
const contactPhoneInput = document.getElementById('contact-phone');
const contactSubjectInput = document.getElementById('contact-subject');
const contactMessageInput = document.getElementById('contact-message');
const contactFeedback = document.getElementById('contact-feedback');
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.site-nav a');
const revealElements = document.querySelectorAll('.reveal');

const products = getStoredProducts();
const categoryLabels = {
  photochromique: 'Photochromique',
  'anti-lumiere': 'Anti lumière bleue',
  'anti-reflet': 'Anti reflet',
  solaire: 'Solaire',
};

const buildWhatsAppLink = (productName) => {
  const message = `${SITE_CONFIG.whatsappGreeting}\nJe suis intéressé par cette paire de lunettes : ${productName}`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const getFilteredProducts = () => {
  let result = products;
  const selectedCategory = categoryFilter?.value || 'all';
  const query = searchInput?.value.trim().toLowerCase() || '';

  if (selectedCategory !== 'all') {
    result = result.filter((product) => product.category === selectedCategory);
  }

  if (query) {
    result = result.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    });
  }

  return result;
};

const renderProducts = () => {
  if (!productGrid) return;
  const visibleProducts = getFilteredProducts();
  if (filterCount) {
    filterCount.textContent = `${visibleProducts.length} produit${visibleProducts.length > 1 ? 's' : ''}`;
  }

  productGrid.innerHTML = visibleProducts.length
    ? visibleProducts
        .map((product) => `
      <article class="product-card">
        <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" />
        <div class="meta">
          <span class="badge">${product.badge || categoryLabels[product.category] || product.category}</span>
          <span>${product.availability}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">${product.price.toLocaleString('fr-FR')} FCFA</div>
        <div class="actions">
          <a class="btn btn-primary" href="${buildWhatsAppLink(product.name)}" target="_blank" rel="noreferrer">Commander sur WhatsApp</a>
          <a class="btn btn-secondary" href="product.html?id=${product.id}">Voir les détails</a>
          <a class="btn btn-secondary" href="paiement/index.html?product=${encodeURIComponent(product.name)}">Paiement</a>
        </div>
      </article>
    `)
        .join('')
    : '<p class="empty-state">Aucun produit correspondant. Essayez un autre filtre ou une autre recherche.</p>';
  setupLazyImages();
};

const renderNewProducts = () => {
  if (!newProductsGrid) return;
  const featured = products.filter((product) => product.featured).slice(0, 6);
  newProductsGrid.innerHTML = featured
    .map((product) => `
      <article class="product-card">
        <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" />
        <div class="meta">
          <span class="badge">${categoryLabels[product.category] || product.category}</span>
          <span>${product.availability}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">${product.price.toLocaleString('fr-FR')} FCFA</div>
        <div class="actions">
          <a class="btn btn-primary" href="${buildWhatsAppLink(product.name)}" target="_blank" rel="noreferrer">Commander</a>
          <a class="btn btn-secondary" href="product.html?id=${product.id}">Voir les détails</a>
        </div>
      </article>
    `)
    .join('');
  setupLazyImages();
};

const renderTestimonials = () => {
  if (!testimonialGrid) return;
  testimonialGrid.innerHTML = TESTIMONIALS.map((item) => `
    <article class="testimonial-card">
      <h4>${item.name}</h4>
      <span>${item.role}</span>
      <p>"${item.text}"</p>
    </article>
  `).join('');
};

const setupWhatsAppFab = () => {
  if (!whatsappFab) return;
  whatsappFab.href = buildWhatsAppLink('une paire de lunettes');
};

const setupLazyImages = () => {
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.classList.add('lazy-image');
    if (img.complete) {
      img.classList.add('loaded');
      return;
    }
    img.addEventListener('load', () => img.classList.add('loaded'));
    img.addEventListener('error', () => img.classList.add('loaded'));
  });
};

const setupContactForm = () => {
  if (!contactForm || !contactNameInput || !contactEmailInput || !contactSubjectInput || !contactMessageInput || !contactFeedback) return;

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const contactData = {
      id: `contact-${Date.now()}`,
      name: contactNameInput.value.trim(),
      email: contactEmailInput.value.trim(),
      phone: contactPhoneInput.value.trim(),
      subject: contactSubjectInput.value.trim(),
      message: contactMessageInput.value.trim(),
      date: new Date().toLocaleString('fr-FR'),
    };

    if (!contactData.name || !contactData.email || !contactData.phone || !contactData.subject || !contactData.message) {
      contactFeedback.textContent = "Veuillez remplir tous les champs avant d'envoyer.";
      contactFeedback.style.color = '#f8b4b4';
      return;
    }

    if (typeof window.saveContact === 'function') {
      window.saveContact(contactData);
      contactFeedback.textContent = 'Merci ! Votre demande a bien été enregistrée.';
      contactFeedback.style.color = '#c8e6c9';
      contactForm.reset();
    } else {
      contactFeedback.textContent = "Impossible d'enregistrer votre message pour le moment. Réessayez plus tard.";
      contactFeedback.style.color = '#f8b4b4';
    }
  });
};

const setupFilters = () => {
  if (!categoryFilter || !searchInput) return;
  categoryFilter.addEventListener('input', renderProducts);
  searchInput.addEventListener('input', renderProducts);
};

const setupMobileMenu = () => {
  if (!menuToggle || !header) return;

  menuToggle.addEventListener('click', () => {
    header.classList.toggle('menu-open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('menu-open');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      header.classList.remove('menu-open');
    }
  });
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
    revealElements.forEach((element) => element.classList.add('visible'));
    setTimeout(() => {
      revealElements.forEach((element) => element.classList.add('visible'));
    }, 500);
  });
};

setupFilters();
renderProducts();
renderNewProducts();
renderTestimonials();
setupWhatsAppFab();
setupLazyImages();
setupContactForm();
setupMobileMenu();
initPageEffects();
