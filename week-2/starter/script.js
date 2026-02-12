// PROYECTO WEEK 02 - GESTOR DE MENÚ
// Cocina Colombiana Eileen's
// CATEGORÍAS Y PRIORIDADES

const CATEGORIES = {
    platoFuerte: { name:'Plato Fuerte' , emoji: '🍖'},
    sopas: { name:'Sopas' , emoji: '🍲'},
    entrada: { name:'Entrada' , emoji: '🥟'},
    bebidas: { name:'Bebidas' , emoji: '🥤'},
    postres: { name:'Postres' , emoji: '🍰'}
    
};

const PRIORITIES = {
    high: { name:'Alta' , color: '#ef4444'},
    sopas: { name:'Media' , color: 'f59e0b'},
    postres: { name:'Baja' , color: '22c55e'}
};

//ESTADO GLOBAL

let dishes = [];
let editingDishId = null;

//PERSISTENCIA (LocalStorage)

const loasDishes = () => {
    const stored = localStorage.getItem('restaurantDishes');
    return stored ? JSON.parse(stored) : [];
};

const saveDishes = dishesToSave => {
    localStorage.setItem('restaurantDishes' , JSON.stringify(dishesToSave));
};

//CRUD - CREAR PLATO

const createDish = (dishData = {}) => {
  // Crear nuevo plato con valores por defecto
  const newDish = {
    id: Date.now(),
    name: dishData.name ?? '',
    description: dishData.description ?? '',
    category: dishData.category ?? 'platoFuerte',
    priority: dishData.priority ?? 'medium',
    price: dishData.price ?? 0,
    preparationTime: dishData.preparationTime ?? 20,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: null
  };

  // Usar spread para crear nuevo array (inmutabilidad)
  const newDishes = [...dishes, newDish];
  saveDishes(newDishes);
  return newDishes;
};

// ============================================
// CRUD - ACTUALIZAR PLATO
// ============================================

const updateDish = (id, updates) => {
  // Usar map para actualizar sin mutar
  const updatedDishes = dishes.map(dish =>
    dish.id === id
      ? { ...dish, ...updates, updatedAt: new Date().toISOString() }
      : dish
  );
  saveDishes(updatedDishes);
  return updatedDishes;
};

// ============================================
// CRUD - ELIMINAR PLATO
// ============================================

const deleteDish = id => {
  // Usar filter para eliminar sin mutar
  const filteredDishes = dishes.filter(dish => dish.id !== id);
  saveDishes(filteredDishes);
  return filteredDishes;
};

// ============================================
// CRUD - TOGGLE DISPONIBLE/NO DISPONIBLE
// ============================================

const toggleDishActive = id => {
  const updatedDishes = dishes.map(dish =>
    dish.id === id
      ? { ...dish, active: !dish.active, updatedAt: new Date().toISOString() }
      : dish
  );
  saveDishes(updatedDishes);
  return updatedDishes;
};

const clearInactive = () => {
  const activeDishes = dishes.filter(dish => dish.active);
  saveDishes(activeDishes);
  return activeDishes;
};

// ============================================
// FILTROS Y BÚSQUEDA
// ============================================

const filterByStatus = (dishesToFilter, status = 'all') => {
  if (status === 'all') return dishesToFilter;
  if (status === 'active') return dishesToFilter.filter(dish => dish.active);
  if (status === 'inactive') return dishesToFilter.filter(dish => !dish.active);
  return dishesToFilter;
};

const filterByCategory = (dishesToFilter, category = 'all') => {
  if (category === 'all') return dishesToFilter;
  return dishesToFilter.filter(dish => dish.category === category);
};

const filterByPriority = (dishesToFilter, priority = 'all') => {
  if (priority === 'all') return dishesToFilter;
  return dishesToFilter.filter(dish => dish.priority === priority);
};

const searchDishes = (dishesToFilter, query) => {
  if (!query || query.trim() === '') return dishesToFilter;
  const searchTerm = query.toLowerCase();
  return dishesToFilter.filter(dish =>
    dish.name.toLowerCase().includes(searchTerm) ||
    (dish.description ?? '').toLowerCase().includes(searchTerm)
  );
};

const applyFilters = (dishesToFilter, filters = {}) => {
  const {
    status = 'all',
    category = 'all',
    priority = 'all',
    search = ''
  } = filters;

  // Encadenar filtros
  let result = filterByStatus(dishesToFilter, status);
  result = filterByCategory(result, category);
  result = filterByPriority(result, priority);
  result = searchDishes(result, search);
  return result;
};

// ============================================
// ESTADÍSTICAS
// ============================================

const getStats = (dishesToAnalyze = []) => {
  const total = dishesToAnalyze.length;
  const active = dishesToAnalyze.filter(dish => dish.active).length;
  const inactive = total - active;

  // Usar reduce para agrupar por categoría
  const byCategory = dishesToAnalyze.reduce((acc, dish) => {
    acc[dish.category] = (acc[dish.category] ?? 0) + 1;
    return acc;
  }, {});

  return { total, active, inactive, byCategory };
};

// ============================================
// RENDERIZADO - ELEMENTO INDIVIDUAL
// ============================================

const getCategoryEmoji = category => {
  return CATEGORIES[category]?.emoji ?? '📌';
};

const formatDate = dateString => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

const renderDish = dish => {
  const { id, name, description, category, priority, price, preparationTime, active, createdAt } = dish;

  return `
    <div class="dish-item ${active ? '' : 'inactive'} priority-${priority}" data-dish-id="${id}">
      <input type="checkbox" class="dish-checkbox" ${active ? 'checked' : ''}>
      <div class="dish-content">
        <h3 class="dish-name">${name}</h3>
        ${description ? `<p class="dish-description">${description}</p>` : ''}
        <div class="dish-meta">
          <span class="badge badge-category">${getCategoryEmoji(category)} ${CATEGORIES[category]?.name ?? category}</span>
          <span class="badge badge-priority priority-${priority}">${PRIORITIES[priority]?.name ?? priority}</span>
          <span class="dish-price">💰 $${price.toLocaleString()}</span>
          <span class="dish-time">⏱️ ${preparationTime} min</span>
        </div>
        <span class="dish-date">📅 ${formatDate(createdAt)}</span>
      </div>
      <div class="dish-actions">
        <button class="btn-edit" title="Editar">✏️</button>
        <button class="btn-delete" title="Eliminar">🗑️</button>
      </div>
    </div>
  `;
};

// ============================================
// RENDERIZADO - LISTA COMPLETA
// ============================================

const renderDishes = dishesToRender => {
  const dishList = document.getElementById('dish-list');
  const emptyState = document.getElementById('empty-state');

  if (dishesToRender.length === 0) {
    dishList.innerHTML = '';
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
    dishList.innerHTML = dishesToRender.map(renderDish).join('');
  }
};

const renderStats = stats => {
  document.getElementById('stat-total').textContent = stats.total;
  document.getElementById('stat-active').textContent = stats.active;
  document.getElementById('stat-inactive').textContent = stats.inactive;

  // Renderizar estadísticas por categoría
  const statsDetails = document.getElementById('stats-details');
  const categoryStatsHTML = Object.entries(stats.byCategory)
    .map(([cat, count]) => `
      <div class="stat-card">
        <span class="stat-value">${count}</span>
        <span class="stat-label">${getCategoryEmoji(cat)} ${CATEGORIES[cat]?.name ?? cat}</span>
      </div>
    `)
    .join('');
  
  statsDetails.innerHTML = categoryStatsHTML || '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No hay datos para mostrar</p>';
};

// ============================================
// EVENT HANDLERS
// ============================================

const handleFormSubmit = e => {
  e.preventDefault();

  const name = document.getElementById('dish-name').value.trim();
  const description = document.getElementById('dish-description').value.trim();
  const category = document.getElementById('dish-category').value;
  const priority = document.getElementById('dish-priority').value;
  const price = parseInt(document.getElementById('dish-price').value) || 0;
  const preparationTime = parseInt(document.getElementById('dish-time').value) || 20;

  if (!name) {
    showToast('❌ El nombre es obligatorio');
    return;
  }

  const dishData = { name, description, category, priority, price, preparationTime };

  if (editingDishId) {
    dishes = updateDish(editingDishId, dishData);
    showToast('✅ Plato actualizado');
  } else {
    dishes = createDish(dishData);
    showToast('✅ Plato creado');
  }

  resetForm();
  renderDishes(applyCurrentFilters());
  renderStats(getStats(dishes));
};

const handleDishToggle = dishId => {
  dishes = toggleDishActive(dishId);
  renderDishes(applyCurrentFilters());
  renderStats(getStats(dishes));
};

const handleDishEdit = dishId => {
  const dishToEdit = dishes.find(dish => dish.id === dishId);
  if (!dishToEdit) return;

  document.getElementById('dish-name').value = dishToEdit.name;
  document.getElementById('dish-description').value = dishToEdit.description ?? '';
  document.getElementById('dish-category').value = dishToEdit.category;
  document.getElementById('dish-priority').value = dishToEdit.priority;
  document.getElementById('dish-price').value = dishToEdit.price;
  document.getElementById('dish-time').value = dishToEdit.preparationTime;

  document.getElementById('form-title').textContent = '✏️ Editar Plato';
  document.getElementById('submit-btn').textContent = 'Actualizar';
  document.getElementById('cancel-btn').style.display = 'inline-block';

  editingDishId = dishId;
};

const handleDishDelete = dishId => {
  if (!confirm('¿Estás seguro de que deseas eliminar este plato?')) return;
  dishes = deleteDish(dishId);
  showToast('✅ Plato eliminado');
  renderDishes(applyCurrentFilters());
  renderStats(getStats(dishes));
};

const getCurrentFilters = () => {
  return {
    status: document.getElementById('filter-status').value,
    category: document.getElementById('filter-category').value,
    priority: document.getElementById('filter-priority').value,
    search: document.getElementById('search-input').value
  };
};

const applyCurrentFilters = () => {
  const filters = getCurrentFilters();
  return applyFilters(dishes, filters);
};

const handleFilterChange = () => {
  const filteredDishes = applyCurrentFilters();
  renderDishes(filteredDishes);
};

const resetForm = () => {
  document.getElementById('dish-form').reset();
  document.getElementById('form-title').textContent = '➕ Nuevo Plato';
  document.getElementById('submit-btn').textContent = 'Crear Plato';
  document.getElementById('cancel-btn').style.display = 'none';
  editingDishId = null;
};

// ============================================
// TEMA
// ============================================

const toggleTheme = () => {
  const body = document.body;
  const themeIcon = document.querySelector('.theme-icon');
  
  body.classList.toggle('dark-theme');
  
  if (body.classList.contains('dark-theme')) {
    themeIcon.textContent = '☀️';
  } else {
    themeIcon.textContent = '🌙';
  }
};

// ============================================
// TOAST
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

// ============================================
// EVENT LISTENERS
// ============================================

const attachEventListeners = () => {
  // Form submit
  document.getElementById('dish-form').addEventListener('submit', handleFormSubmit);

  // Cancel button
  document.getElementById('cancel-btn').addEventListener('click', resetForm);

  // Filtros
  document.getElementById('filter-status').addEventListener('change', handleFilterChange);
  document.getElementById('filter-category').addEventListener('change', handleFilterChange);
  document.getElementById('filter-priority').addEventListener('change', handleFilterChange);
  document.getElementById('search-input').addEventListener('input', handleFilterChange);

  // Clear inactive
  document.getElementById('clear-inactive').addEventListener('click', () => {
    if (confirm('¿Eliminar todos los platos no disponibles?')) {
      dishes = clearInactive();
      showToast('✅ Platos eliminados');
      renderDishes(applyCurrentFilters());
      renderStats(getStats(dishes));
    }
  });

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Event delegation para la lista
  document.getElementById('dish-list').addEventListener('click', e => {
    const dishElement = e.target.closest('.dish-item');
    if (!dishElement) return;

    const dishId = parseInt(dishElement.dataset.dishId);

    if (e.target.classList.contains('dish-checkbox')) {
      handleDishToggle(dishId);
    } else if (e.target.classList.contains('btn-edit')) {
      handleDishEdit(dishId);
    } else if (e.target.classList.contains('btn-delete')) {
      handleDishDelete(dishId);
    }
  });
};

// ============================================
// INICIALIZACIÓN
// ============================================

const init = () => {
  dishes = loadDishes();
  renderDishes(dishes);
  renderStats(getStats(dishes));
  attachEventListeners();
  console.log('✅ Aplicación Semana 2 inicializada');
};

document.addEventListener('DOMContentLoaded', init);