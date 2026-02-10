// // ========================================
// DATOS DEL RESTAURANTE
// ======================================== 

// Objeto con todos los datos del restaurante
const restaurantData = {
  name: "Cocina Colombiana Eileen's",
  code: 'REST-001',
  description: 'Auténtica comida colombiana con un toque casero y tradicional',
  location: {
    address: 'Calle 45 #23-15',
    city: 'Bogotá', 
    zone: 'Chapinero',
    phone: '+57 310 123 4567'
  },
  capacity: {
    tables: 20,
    seats: 80,
    privateRooms: 2
  },
  schedule: {
    weekdays: '11:00 AM - 10:00 PM',
    weekends: '10:00 AM - 11:00 PM'
  },
  // Array de platos del menú
  menu: [
    { 
      name: 'Bandeja Paisa', 
      price: 35000, 
      category: 'Plato Fuerte',
      popularity: 95
    },
    { 
      name: 'Ajiaco Santafereño', 
      price: 28000, 
      category: 'Sopas',
      popularity: 88
    },
    { 
      name: 'Sancocho de Gallina', 
      price: 30000, 
      category: 'Sopas',
      popularity: 82
    },
    { 
      name: 'Lechona Tolimense', 
      price: 32000, 
      category: 'Plato Fuerte',
      popularity: 90
    },
    { 
      name: 'Arroz con Pollo', 
      price: 25000, 
      category: 'Plato Fuerte',
      popularity: 75
    },
    { 
      name: 'Empanadas Colombianas', 
      price: 8000, 
      category: 'Entrada',
      popularity: 92
    }
  ],
  // Array de servicios
  services: [
    { name: 'WiFi Gratis', icon: '📶' },
    { name: 'Reservaciones', icon: '📅' },
    { name: 'Domicilios', icon: '🛵' },
    { name: 'Eventos Privados', icon: '🎉' },
    { name: 'Parqueadero', icon: '🅿️' },
    { name: 'Música en Vivo', icon: '🎵' },
    { name: 'Terraza', icon: '🌿' },
    { name: 'Pago con Tarjeta', icon: '💳' }
  ],
  // Estadísticas
  stats: {
    dailyCustomers: 120,
    rating: 4.7,
    menuItems: 6,
    yearsOperation: 8
  }
};

// =============================
// FUNCIONES PARA RENDERIZAR
// =============================

// Función para mostrar información básica del restaurante
const renderRestaurantInfo = () => {
  // Extraer datos usando destructuring
  const { name, code, description, location, capacity, schedule } = restaurantData;
  const { address, city, zone, phone } = location;
  const { tables, seats, privateRooms } = capacity;
  const { weekdays, weekends } = schedule;

  // Crear HTML con template literals
  const infoHTML = `
    <div class="info-grid">
      <div class="info-item">
        <div class="info-label">📍 Dirección</div>
        <div class="info-value">${address}, ${zone}</div>
      </div>
      <div class="info-item">
        <div class="info-label">🏙️ Ciudad</div>
        <div class="info-value">${city}</div>
      </div>
      <div class="info-item">
        <div class="info-label">📞 Teléfono</div>
        <div class="info-value">${phone}</div>
      </div>
      <div class="info-item">
        <div class="info-label">🪑 Capacidad</div>
        <div class="info-value">${seats} personas (${tables} mesas)</div>
      </div>
      <div class="info-item">
        <div class="info-label">🚪 Salones Privados</div>
        <div class="info-value">${privateRooms} disponibles</div>
      </div>
      <div class="info-item">
        <div class="info-label">🕐 Horario L-V</div>
        <div class="info-value">${weekdays}</div>
      </div>
      <div class="info-item">
        <div class="info-label">🕐 Horario S-D</div>
        <div class="info-value">${weekends}</div>
      </div>
      <div class="info-item">
        <div class="info-label">🆔 Código</div>
        <div class="info-value">${code}</div>
      </div>
    </div>
    <p style="margin-top: 1.5rem; font-style: italic; color: var(--text-secondary);">
      ${description}
    </p>
    <div style="margin-top: 1.5rem;">
      <h3 style="margin-bottom: 1rem; color: var(--text-primary);">🍽️ Categorías del Menú</h3>
      <div class="categories-list">
        ${renderCategories()}
      </div>
    </div>
  `;

  document.getElementById('restaurantInfo').innerHTML = infoHTML;
};

// Función para mostrar el menú
const renderMenu = () => {
  const { menu } = restaurantData;

  // Usar map para crear HTML de cada plato
  const menuHTML = menu.map(item => {
    return `
      <div class="menu-item">
        <div class="menu-item-header">
          <div class="menu-item-name">${item.name}</div>
          <div class="menu-item-price">$${item.price.toLocaleString()}</div>
        </div>
        <div class="menu-item-category">${item.category}</div>
        <div class="popularity-bar">
          <div class="popularity-label">Popularidad: ${item.popularity}%</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${item.popularity}%"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const menuContainer = `<div class="menu-grid">${menuHTML}</div>`;
  document.getElementById('menuItems').innerHTML = menuContainer;
};

// Función para mostrar servicios
const renderServices = () => {
  const { services } = restaurantData;

  // Usar map para crear HTML de cada servicio
  const servicesHTML = services.map(service => {
    return `
      <div class="service-item">
        <span class="service-icon">${service.icon}</span>
        <span class="service-name">${service.name}</span>
      </div>
    `;
  }).join('');

  const servicesContainer = `<div class="services-list" id="servicesContainer">${servicesHTML}</div>`;
  document.getElementById('servicesList').innerHTML = servicesContainer;
};

// Función para mostrar categorías del menú
const renderCategories = () => {
  const { menu } = restaurantData;

  // Obtener categorías únicas del menú
  const categories = [];
  menu.map(item => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });

  // Contar cuántos platos hay por categoría
  const categoriesHTML = categories.map(category => {
    let count = 0;
    menu.map(item => {
      if (item.category === category) {
        count = count + 1;
      }
    });

    return `
      <div class="category-item">
        <span class="category-name">${category}</span>
        <span class="category-count">${count} platos</span>
      </div>
    `;
  }).join('');

  return categoriesHTML;
};

// Función para mostrar estadísticas
const renderStats = () => {
  const { stats } = restaurantData;

  // Crear HTML con template literals
  const statsHTML = `
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-value">${stats.dailyCustomers}</div>
        <div class="stat-label">Clientes Diarios</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">${stats.rating} ⭐</div>
        <div class="stat-label">Calificación</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">${stats.menuItems}</div>
        <div class="stat-label">Platos en Menú</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">${stats.yearsOperation}</div>
        <div class="stat-label">Años de Operación</div>
      </div>
    </div>
  `;

  document.getElementById('statistics').innerHTML = statsHTML;
};

// ========================================
// FUNCIONES INTERACTIVAS
// ========================================

// Función para cambiar el tema
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

// Función para mostrar/ocultar servicios
const toggleServices = () => {
  const servicesContainer = document.getElementById('servicesContainer');
  const toggleButton = document.getElementById('toggleServices');
  
  servicesContainer.classList.toggle('expanded');
  
  if (servicesContainer.classList.contains('expanded')) {
    toggleButton.textContent = 'Mostrar menos';
  } else {
    toggleButton.textContent = 'Mostrar más';
  }
};

// Función para copiar información
const copyToClipboard = () => {
  const { name, location, stats } = restaurantData;
  const { address, city, phone } = location;
  const { rating } = stats;

  // Crear texto con template literal
  const textToCopy = `
🍽️ ${name}
📍 ${address}, ${city}
📞 ${phone}
⭐ Calificación: ${rating}/5.0
  `.trim();

  // Copiar al portapapeles
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      showToast('✅ Información copiada');
    })
    .catch(() => {
      showToast('❌ Error al copiar');
    });
};

// Función para mostrar notificación
const showToast = (message) => {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  
  toastMessage.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
};

// ========================================
// EVENT LISTENERS
// ========================================

const initEventListeners = () => {
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  document.getElementById('copyInfo').addEventListener('click', copyToClipboard);
  document.getElementById('toggleServices').addEventListener('click', toggleServices);
};

// ========================================
// INICIALIZACIÓN
// ========================================

const init = () => {
  renderRestaurantInfo();
  renderMenu();
  renderServices();
  renderStats();
  initEventListeners();
  
  console.log('✅ Aplicación inicializada correctamente');
};

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);