// ============================================
// PROYECTO SEMANA 03 - SISTEMA DE GESTIÓN CON POO
// Cocina Colombiana Eileen's
// ============================================

// ============================================
// CLASE BASE - MenuItem (Plato del Menú)
// ============================================

class MenuItem {
  // Campos privados
  #id;
  #name;
  #active;
  #location;
  #dateCreated;
  #price;
  #preparationTime;

  constructor(name, location, price, preparationTime) {
    this.#id = crypto.randomUUID();
    this.#name = name;
    this.#location = location;
    this.#price = price;
    this.#preparationTime = preparationTime;
    this.#active = true;
    this.#dateCreated = new Date().toISOString();
  }

  // Getters
  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get isActive() {
    return this.#active;
  }

  get location() {
    return this.#location;
  }

  get dateCreated() {
    return this.#dateCreated;
  }

  get price() {
    return this.#price;
  }

  get preparationTime() {
    return this.#preparationTime;
  }

  // Setter con validación
  set location(value) {
    if (!value || value.trim() === '') {
      throw new Error('La ubicación no puede estar vacía');
    }
    this.#location = value.trim();
  }

  // Métodos de estado
  activate() {
    if (this.#active) {
      return { success: false, message: 'El plato ya está disponible' };
    }
    this.#active = true;
    return { success: true, message: 'Plato marcado como disponible' };
  }

  deactivate() {
    if (!this.#active) {
      return { success: false, message: 'El plato ya está no disponible' };
    }
    this.#active = false;
    return { success: true, message: 'Plato marcado como no disponible' };
  }

  // Método abstracto - debe ser sobrescrito
  getInfo() {
    throw new Error('El método getInfo() debe ser implementado en la clase hija');
  }

  // Retorna el tipo de clase
  getType() {
    return this.constructor.name;
  }
}

// ============================================
// CLASES DERIVADAS - Tipos de Platos
// ============================================

// Clase MainDish - Platos Fuertes
class MainDish extends MenuItem {
  #proteinType;

  constructor(name, location, price, preparationTime, proteinType) {
    super(name, location, price, preparationTime);
    this.#proteinType = proteinType;
  }

  get proteinType() {
    return this.#proteinType;
  }

  getInfo() {
    return {
      id: this.id,
      name: this.name,
      type: this.getType(),
      location: this.location,
      price: this.price,
      preparationTime: this.preparationTime,
      proteinType: this.#proteinType,
      active: this.isActive,
      dateCreated: this.dateCreated
    };
  }
}

// Clase Soup - Sopas
class Soup extends MenuItem {
  #soupType;

  constructor(name, location, price, preparationTime, soupType) {
    super(name, location, price, preparationTime);
    this.#soupType = soupType;
  }

  get soupType() {
    return this.#soupType;
  }

  getInfo() {
    return {
      id: this.id,
      name: this.name,
      type: this.getType(),
      location: this.location,
      price: this.price,
      preparationTime: this.preparationTime,
      soupType: this.#soupType,
      active: this.isActive,
      dateCreated: this.dateCreated
    };
  }
}

// Clase Appetizer - Entradas
class Appetizer extends MenuItem {
  #portionSize;

  constructor(name, location, price, preparationTime, portionSize) {
    super(name, location, price, preparationTime);
    this.#portionSize = portionSize;
  }

  get portionSize() {
    return this.#portionSize;
  }

  getInfo() {
    return {
      id: this.id,
      name: this.name,
      type: this.getType(),
      location: this.location,
      price: this.price,
      preparationTime: this.preparationTime,
      portionSize: this.#portionSize,
      active: this.isActive,
      dateCreated: this.dateCreated
    };
  }
}

// ============================================
// CLASE PERSON - Base para usuarios
// ============================================

class Person {
  #id;
  #name;
  #email;
  #registrationDate;

  constructor(name, email) {
    this.#id = crypto.randomUUID();
    this.#name = name;
    this.#email = email;
    this.#registrationDate = new Date().toISOString();
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  get registrationDate() {
    return this.#registrationDate;
  }

  set email(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      throw new Error('Formato de email inválido');
    }
    this.#email = value;
  }

  getInfo() {
    return {
      id: this.#id,
      name: this.#name,
      email: this.#email,
      registrationDate: this.#registrationDate
    };
  }
}

// ============================================
// CLASES DE ROLES - Usuarios especializados
// ============================================

// Clase Customer - Cliente
class Customer extends Person {
  #orderCount;
  #favoriteType;

  constructor(name, email, favoriteType) {
    super(name, email);
    this.#orderCount = 0;
    this.#favoriteType = favoriteType;
  }

  get orderCount() {
    return this.#orderCount;
  }

  get favoriteType() {
    return this.#favoriteType;
  }

  recordOrder() {
    this.#orderCount++;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      role: 'Cliente',
      orderCount: this.#orderCount,
      favoriteType: this.#favoriteType
    };
  }
}

// Clase Chef - Chef del restaurante
class Chef extends Person {
  #specialty;
  #dishesCreated;

  constructor(name, email, specialty) {
    super(name, email);
    this.#specialty = specialty;
    this.#dishesCreated = 0;
  }

  get specialty() {
    return this.#specialty;
  }

  get dishesCreated() {
    return this.#dishesCreated;
  }

  createDish() {
    this.#dishesCreated++;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      role: 'Chef',
      specialty: this.#specialty,
      dishesCreated: this.#dishesCreated
    };
  }
}

// ============================================
// CLASE PRINCIPAL - Restaurant
// ============================================

class Restaurant {
  #items = [];
  #users = [];

  // Static block para configuración
  static {
    this.VERSION = '1.0.0';
    this.MAX_ITEMS = 100;
    this.SYSTEM_NAME = 'Cocina Colombiana Eileen\'s';
    console.log(`Sistema ${this.SYSTEM_NAME} v${this.VERSION} cargado`);
  }

  // Métodos estáticos
  static isValidId(id) {
    return typeof id === 'string' && id.length > 0;
  }

  static generateId() {
    return crypto.randomUUID();
  }

  // CRUD para items
  addItem(item) {
    if (!(item instanceof MenuItem)) {
      return { success: false, message: 'El item debe ser instancia de MenuItem' };
    }
    if (this.#items.length >= Restaurant.MAX_ITEMS) {
      return { success: false, message: 'Límite de platos alcanzado' };
    }
    this.#items.push(item);
    return { success: true, message: 'Plato agregado correctamente', item };
  }

  removeItem(id) {
    const index = this.#items.findIndex(item => item.id === id);
    if (index === -1) {
      return { success: false, message: 'Plato no encontrado' };
    }
    const removed = this.#items.splice(index, 1)[0];
    return { success: true, message: 'Plato eliminado', item: removed };
  }

  findItem(id) {
    return this.#items.find(item => item.id === id) ?? null;
  }

  getAllItems() {
    return [...this.#items];
  }

  // Búsqueda y filtrado
  searchByName(query) {
    const searchTerm = query.toLowerCase();
    return this.#items.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
  }

  filterByType(type) {
    if (type === 'all') return this.getAllItems();
    return this.#items.filter(item => item.getType() === type);
  }

  filterByStatus(active) {
    if (active === 'all') return this.getAllItems();
    const isActive = active === 'active';
    return this.#items.filter(item => item.isActive === isActive);
  }

  // Estadísticas
  getStats() {
    const total = this.#items.length;
    const active = this.#items.filter(item => item.isActive).length;
    const inactive = total - active;

    const byType = this.#items.reduce((acc, item) => {
      const type = item.getType();
      acc[type] = (acc[type] ?? 0) + 1;
      return acc;
    }, {});

    return {
      total,
      active,
      inactive,
      byType,
      users: this.#users.length
    };
  }

  // Gestión de usuarios
  addUser(user) {
    if (!(user instanceof Person)) {
      return { success: false, message: 'Debe ser instancia de Person' };
    }
    this.#users.push(user);
    return { success: true, message: 'Usuario registrado' };
  }

  findUserByEmail(email) {
    return this.#users.find(user => user.email === email) ?? null;
  }

  getAllUsers() {
    return [...this.#users];
  }
}

// ============================================
// INSTANCIA DEL SISTEMA
// ============================================

const restaurant = new Restaurant();

// Crear algunos datos de prueba
const bandejaP = new MainDish('Bandeja Paisa', 'Cocina Principal', 35000, 30, 'Mixta');
const ajiaco = new Soup('Ajiaco Santafereño', 'Cocina Principal', 28000, 25, 'caliente');
const empanadas = new Appetizer('Empanadas Colombianas', 'Cocina Fría', 8000, 15, 'individual');

restaurant.addItem(bandejaP);
restaurant.addItem(ajiaco);
restaurant.addItem(empanadas);

// Crear usuarios de prueba
const cliente1 = new Customer('María García', 'maria@example.com', 'MainDish');
const chef1 = new Chef('Carlos Rodríguez', 'carlos@restaurant.com', 'Comida Colombiana');

restaurant.addUser(cliente1);
restaurant.addUser(chef1);

// ============================================
// REFERENCIAS AL DOM
// ============================================

const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const emptyState = document.getElementById('empty-state');
const filterType = document.getElementById('filter-type');
const filterStatus = document.getElementById('filter-status');
const searchInput = document.getElementById('search-input');
const itemTypeSelect = document.getElementById('item-type');
const themeToggle = document.getElementById('themeToggle');

// ============================================
// FUNCIONES DE RENDERIZADO
// ============================================

const TYPE_ICONS = {
  'MainDish': '🍖',
  'Soup': '🍲',
  'Appetizer': '🥟'
};

const TYPE_NAMES = {
  'MainDish': 'Plato Fuerte',
  'Soup': 'Sopa',
  'Appetizer': 'Entrada'
};

const formatDate = dateString => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

const renderItem = item => {
  const info = item.getInfo();
  const icon = TYPE_ICONS[info.type] || '📌';
  const typeName = TYPE_NAMES[info.type] || info.type;

  return `
    <div class="item ${item.isActive ? '' : 'inactive'}" data-id="${item.id}">
      <div class="item-header">
        <h3>${icon} ${item.name}</h3>
        <span class="badge badge-type">${typeName}</span>
      </div>
      <div class="item-details">
        <p><strong>Ubicación:</strong> ${item.location}</p>
        <p><strong>Precio:</strong> $${item.price.toLocaleString()}</p>
        <p><strong>Tiempo:</strong> ${item.preparationTime} min</p>
        <p><strong>Estado:</strong> ${item.isActive ? '✅ Disponible' : '❌ No Disponible'}</p>
        <p class="item-date">📅 Creado: ${formatDate(item.dateCreated)}</p>
      </div>
      <div class="item-actions">
        <button class="btn-toggle" data-id="${item.id}">
          ${item.isActive ? 'Marcar No Disponible' : 'Marcar Disponible'}
        </button>
        <button class="btn-delete" data-id="${item.id}">🗑️ Eliminar</button>
      </div>
    </div>
  `;
};

const renderItems = (items = []) => {
  if (items.length === 0) {
    itemList.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';
  itemList.innerHTML = items.map(renderItem).join('');
};

const renderStats = stats => {
  document.getElementById('stat-total').textContent = stats.total;
  document.getElementById('stat-active').textContent = stats.active;
  document.getElementById('stat-inactive').textContent = stats.inactive;
  document.getElementById('stat-users').textContent = stats.users;

  const statsDetails = document.getElementById('stats-details');
  const byTypeHTML = Object.entries(stats.byType)
    .map(([type, count]) => `
      <div class="stat-card">
        <span class="stat-value">${count}</span>
        <span class="stat-label">${TYPE_ICONS[type]} ${TYPE_NAMES[type]}</span>
      </div>
    `)
    .join('');

  statsDetails.innerHTML = byTypeHTML || '<p style="grid-column: 1/-1; text-align: center;">No hay datos</p>';
};

// ============================================
// EVENT HANDLERS
// ============================================

const showToast = message => {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
};

const handleFormSubmit = e => {
  e.preventDefault();

  const name = document.getElementById('item-name').value.trim();
  const type = document.getElementById('item-type').value;
  const location = document.getElementById('item-location').value.trim();
  const price = parseInt(document.getElementById('item-price').value);
  const time = parseInt(document.getElementById('item-time').value);

  if (!name || !location || !price || !time) {
    showToast('❌ Por favor completa todos los campos');
    return;
  }

  let newItem;

  if (type === 'MainDish') {
    const protein = document.getElementById('protein-type').value || 'No especificado';
    newItem = new MainDish(name, location, price, time, protein);
  } else if (type === 'Soup') {
    const soupType = document.getElementById('soup-type').value;
    newItem = new Soup(name, location, price, time, soupType);
  } else if (type === 'Appetizer') {
    const portionSize = document.getElementById('portion-size').value;
    newItem = new Appetizer(name, location, price, time, portionSize);
  }

  const result = restaurant.addItem(newItem);

  if (result.success) {
    showToast('✅ Plato agregado correctamente');
    itemForm.reset();
    applyFilters();
    renderStats(restaurant.getStats());
  } else {
    showToast(`❌ ${result.message}`);
  }
};

const applyFilters = () => {
  const type = filterType.value;
  const status = filterStatus.value;
  const search = searchInput.value.trim();

  let filtered = restaurant.getAllItems();

  if (type !== 'all') {
    filtered = filtered.filter(item => item.getType() === type);
  }

  if (status !== 'all') {
    const isActive = status === 'active';
    filtered = filtered.filter(item => item.isActive === isActive);
  }

  if (search) {
    const searchTerm = search.toLowerCase();
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
  }

  renderItems(filtered);
};

const handleItemAction = e => {
  const target = e.target;
  const itemId = target.dataset.id;
  if (!itemId) return;

  const item = restaurant.findItem(itemId);
  if (!item) return;

  if (target.classList.contains('btn-toggle')) {
    if (item.isActive) {
      item.deactivate();
      showToast('✅ Plato marcado como no disponible');
    } else {
      item.activate();
      showToast('✅ Plato marcado como disponible');
    }
    applyFilters();
    renderStats(restaurant.getStats());
  }

  if (target.classList.contains('btn-delete')) {
    if (confirm('¿Estás seguro de eliminar este plato del menú?')) {
      const result = restaurant.removeItem(itemId);
      if (result.success) {
        showToast('✅ Plato eliminado');
        applyFilters();
        renderStats(restaurant.getStats());
      }
    }
  }
};

const toggleTheme = () => {
  const body = document.body;
  const themeIcon = document.querySelector('.theme-icon');

  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
    themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme') ?? 'light';
  const body = document.body;
  const themeIcon = document.querySelector('.theme-icon');

  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.textContent = '☀️';
  } else {
    themeIcon.textContent = '🌙';
  }
};

// Mostrar/ocultar campos específicos según el tipo
const handleTypeChange = () => {
  const type = itemTypeSelect.value;
  document.querySelectorAll('.type-fields').forEach(field => {
    field.style.display = 'none';
  });
  const specificFields = document.getElementById(`${type}-fields`);
  if (specificFields) {
    specificFields.style.display = 'block';
  }
};

// ============================================
// EVENT LISTENERS
// ============================================

itemForm.addEventListener('submit', handleFormSubmit);
filterType.addEventListener('change', applyFilters);
filterStatus.addEventListener('change', applyFilters);
searchInput.addEventListener('input', applyFilters);
itemList.addEventListener('click', handleItemAction);
themeToggle.addEventListener('click', toggleTheme);
itemTypeSelect.addEventListener('change', handleTypeChange);

// ============================================
// INICIALIZACIÓN
// ============================================

const init = () => {
  loadTheme();
  renderItems(restaurant.getAllItems());
  renderStats(restaurant.getStats());
  console.log('✅ Sistema POO Semana 3 inicializado');
  console.log(`📊 ${restaurant.getAllItems().length} platos en el menú`);
  console.log(`👥 ${restaurant.getAllUsers().length} usuarios registrados`);
};

document.addEventListener('DOMContentLoaded', init);