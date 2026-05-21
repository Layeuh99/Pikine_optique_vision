const authOverlay = document.getElementById('admin-auth-overlay');
const adminLoginForm = document.getElementById('admin-login-form');
const adminPasswordInput = document.getElementById('admin-password');
const adminLoginError = document.getElementById('admin-login-error');
const adminPanel = document.querySelector('.admin-panel');

const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const ordersList = document.getElementById('orders-list');
const contactRequestsList = document.getElementById('contact-requests-list');
const adminProductsCount = document.getElementById('admin-products-count');
const adminOrdersCount = document.getElementById('admin-orders-count');
const adminContactsCount = document.getElementById('admin-contacts-count');
const clearFormButton = document.getElementById('clear-form');

const nameInput = document.getElementById('product-name');
const priceInput = document.getElementById('product-price');
const stockInput = document.getElementById('product-stock');
const categoryInput = document.getElementById('product-category');
const imageInput = document.getElementById('product-image');
const descriptionInput = document.getElementById('product-description');

const ADMIN_AUTH_KEY = 'pikine-optique-vision-admin-auth';
const ADMIN_PASSWORD = SITE_CONFIG.adminPassword || 'admin2026';

let editProductId = null;
let productsList = getStoredProducts();

const isAuthenticated = () => sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true';

const showAdminPanel = () => {
  adminPanel?.classList.remove('hidden');
  authOverlay?.classList.add('hidden');
};

const hideAdminPanel = () => {
  adminPanel?.classList.add('hidden');
  authOverlay?.classList.remove('hidden');
};

const authenticateAdmin = () => {
  if (isAuthenticated()) {
    showAdminPanel();
    renderDashboard();
    renderProductsAdmin();
    renderOrdersAdmin();
    renderContactRequestsAdmin();
  } else {
    hideAdminPanel();
  }
};

const renderDashboard = () => {
  const orders = getStoredOrders();
  const contacts = getStoredContacts();
  if (adminProductsCount) adminProductsCount.textContent = productsList.length;
  if (adminOrdersCount) adminOrdersCount.textContent = orders.length;
  if (adminContactsCount) adminContactsCount.textContent = contacts.length;
};

const renderProductsAdmin = () => {
  productList.innerHTML = productsList.length
    ? productsList.map((product) => `
      <div class="product-row">
        <div class="product-meta">
          <strong>${product.name}</strong>
          <span>${product.description}</span>
        </div>
        <div>${product.price.toLocaleString('fr-FR')} FCFA</div>
        <div>${product.availability}</div>
        <div>
          <button class="btn btn-secondary" onclick="editProduct('${product.id}')">Modifier</button>
          <button class="btn btn-primary" onclick="deleteProduct('${product.id}')">Supprimer</button>
        </div>
      </div>
    `).join('')
    : '<p>Aucun produit disponible. Ajoutez un produit pour démarrer.</p>';
};

const renderOrdersAdmin = () => {
  const orders = getStoredOrders();
  ordersList.innerHTML = orders.length
    ? orders.map((order) => `
      <div class="order-row">
        <div>
          <strong>${order.productName}</strong>
          <span>${order.message}</span>
        </div>
        <div>${order.date}</div>
        <div>${order.contact}</div>
      </div>
    `).join('')
    : '<p>Aucune commande enregistrée pour le moment.</p>';
};

const renderContactRequestsAdmin = () => {
  const contacts = getStoredContacts();
  contactRequestsList.innerHTML = contacts.length
    ? contacts.map((request) => `
      <div class="order-row">
        <div>
          <strong>${request.subject}</strong>
          <span>${request.message}</span>
        </div>
        <div>${request.date}</div>
        <div>${request.name} · ${request.email} · ${request.phone}</div>
      </div>
    `).join('')
    : '<p>Aucune demande de contact enregistrée pour le moment.</p>';
};

const resetForm = () => {
  editProductId = null;
  productForm.reset();
};

window.editProduct = (id) => {
  const product = productsList.find((item) => item.id === id);
  if (!product) return;
  editProductId = id;
  nameInput.value = product.name;
  priceInput.value = product.price;
  stockInput.value = product.availability;
  categoryInput.value = product.category;
  imageInput.value = product.image;
  descriptionInput.value = product.description;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.deleteProduct = (id) => {
  productsList = productsList.filter((item) => item.id !== id);
  saveProducts(productsList);
  renderDashboard();
  renderProductsAdmin();
  alert('Produit supprimé.');
};

productForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const productData = {
    id: editProductId || `product-${Date.now()}`,
    name: nameInput.value.trim(),
    price: Number(priceInput.value),
    availability: stockInput.value,
    category: categoryInput.value,
    image: imageInput.value.trim(),
    description: descriptionInput.value.trim(),
    badge: 'Nouveauté',
    featured: true,
    promo: false,
  };
  if (editProductId) {
    productsList = productsList.map((item) => (item.id === editProductId ? productData : item));
  } else {
    productsList.unshift(productData);
  }
  saveProducts(productsList);
  renderDashboard();
  renderProductsAdmin();
  resetForm();
});

clearFormButton.addEventListener('click', resetForm);

if (adminLoginForm) {
  adminLoginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const password = adminPasswordInput.value.trim();

    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
      adminPasswordInput.value = '';
      adminLoginError.textContent = '';
      authenticateAdmin();
    } else {
      adminLoginError.textContent = "Code d'accès incorrect. Réessayez.";
    }
  });
}

const logoutAdmin = () => {
  sessionStorage.removeItem(ADMIN_AUTH_KEY);
  authenticateAdmin();
};

const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
  logoutButton.addEventListener('click', logoutAdmin);
}

window.addEventListener('beforeunload', () => {
  sessionStorage.removeItem(ADMIN_AUTH_KEY);
});

authenticateAdmin();
