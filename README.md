# Sistema de Gestión de Restaurantes
## Cocina Colombiana Eileen's

---

## Información del Estudiante
- **Nombre**: Eileen Stefany Sanchez Galindo
- **Fecha**: 07/02/2026
- **Dominio Asignado**: Sistema de Gestión de Restaurantes
- **Categoría**: Hotelería y Turismo
- **Entidad Principal**: Cocina Colombiana Eileen's

---

## Descripción del Proyecto
Aplicación web interactiva que muestra la ficha completa de información del restaurante "Cocina Colombiana Eileen's".

### Características:
- Información general del restaurante (ubicación, horarios, capacidad)
- Menú destacado con 6 platos típicos colombianos
- 8 servicios ofrecidos
- Estadísticas calculadas dinámicamente
- Tema claro/oscuro
- Copiar información al portapapeles
- Toggle para mostrar/ocultar servicios

---

## Conceptos ES2023 Aplicados

### Variables con const/let
- **const**: Usado para todos los datos que no cambian
- **let**: Solo donde es necesario reasignar valores
- **NO se usa var** en ninguna parte

```javascript
const restaurantData = {
  name: "Cocina Colombiana Eileen's",
  code: 'REST-001',
  // ...
};
```

### Template Literals
Usados para crear HTML dinámico y strings formateados:

```javascript
const infoHTML = `
  <div class="info-value">${address}, ${zone}</div>
`;
```

### Arrow Functions
Todas las funciones usan sintaxis de arrow function:

```javascript
const toggleTheme = () => {
  body.classList.toggle('dark-theme');
};
```

### Destructuring
Extracción de propiedades de objetos:

```javascript
const { 
  name, 
  location: { address, city, zone },
  capacity: { tables, seats }
} = restaurantData;
```

### Array Methods
- **map()**: Transforma arrays en HTML
- **reduce()**: Calcula promedios y encuentra valores máximos
- **join()**: Concatena arrays de HTML

```javascript
const averagePrice = menu.reduce((sum, item) => sum + item.price, 0) / menu.length;

const mostPopular = menu.reduce((prev, current) => 
  current.popularity > prev.popularity ? current : prev
);
```

---

## Cómo Ejecutar

### Opción 1: Abrir directamente
1. Doble click en `index.html`

### Opción 2: Con servidor local (recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Luego abre en navegador:
# http://localhost:8000
```

### Opción 3: Con Live Server (VS Code)
1. Instala la extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"

---

## Estructura de Archivos
```
proyecto-restaurante/
├── index.html          # Estructura HTML completa
├── styles.css          # Estilos CSS con temas
├── script.js           # JavaScript ES2023
└── README.md           # Este archivo
```

---

## Funcionalidades Implementadas

### 1. Información del Restaurante 
- Dirección completa
- Teléfono de contacto
- Horarios de atención
- Capacidad (mesas, sillas, salones privados)
- Código de identificación

### 2. Menú Destacado 
- 6 platos típicos colombianos
- Precios formateados
- Categorías (Plato Fuerte, Sopas, Entrada)
- Barra de popularidad visual para cada plato

### 3. Servicios 
- 8 servicios con iconos
- Toggle para mostrar más/menos
- Efectos hover interactivos

### 4. Estadísticas Dinámicas 
- Clientes diarios
- Calificación promedio (4.7/5.0)
- Ingresos diarios estimados
- Número de platos en menú
- **Precio promedio** (calculado con reduce())
- **Popularidad promedio** (calculada con reduce())
- **Plato más popular** (encontrado con reduce())
- Años de operación
- Número de empleados

### 5. Interactividad 
- **Cambio de tema**: Botón para alternar entre claro/oscuro
- **Copiar información**: Copia datos al portapapeles
- **Toggle servicios**: Muestra/oculta la lista completa
- **Notificaciones toast**: Feedback visual de acciones

---

## Características de Diseño
- Responsive design (móvil, tablet, desktop)
- Variables CSS para temas personalizables
- Animaciones suaves
- Colores temáticos (naranja para comida colombiana)
- Sombras y efectos hover profesionales
- Grid layout moderno

---

## Autoevaluación

| Criterio | Porcentaje | Estado |
|----------|-----------|--------|
| **Funcionalidad** | 100% | Todo funciona correctamente |
| **Código ES2023** | 100% | Solo sintaxis moderna |
| **Código Limpio** | 100% | Bien organizado y comentado |
| **Adaptación al Dominio** | 100% | Completamente coherente |
| **TOTAL ESTIMADO** | **100%** | **APROBADO** |

---

## Detalles Técnicos

### Cálculos con Array Methods:
```javascript
// Precio promedio del menú
const averagePrice = menu.reduce((sum, item) => sum + item.price, 0) / menu.length;

// Popularidad promedio
const averagePopularity = menu.reduce((sum, item) => sum + item.popularity, 0) / menu.length;

// Plato más popular
const mostPopular = menu.reduce((prev, current) => 
  current.popularity > prev.popularity ? current : prev
);
```

### Template Literals Complejos:
```javascript
const menuHTML = `
  <div class="menu-grid">
    ${menu.map(item => `
      <div class="menu-item">
        <div class="menu-item-name">${item.name}</div>
        <div class="menu-item-price">$${item.price.toLocaleString()}</div>
      </div>
    `).join('')}
  </div>
`;
```

### Destructuring Anidado:
```javascript
const { 
  location: { address, city, zone, phone },
  capacity: { tables, seats, privateRooms },
  schedule: { weekdays, weekends }
} = restaurantData;
```

---

## Screenshots

Para completar la entrega, toma capturas de pantalla:

1. **Tema Claro**: Captura de la aplicación con tema claro
2. **Tema Oscuro**: Captura después de hacer click en el botón de tema

### Cómo tomar screenshots:
- **Windows**: `Windows + Shift + S`
- **Mac**: `Command + Shift + 4`
- **Linux**: `Print Screen`

Guarda las capturas como:
- `screenshot-light.png`
- `screenshot-dark.png`

---

## Subir a GitHub

### Opción 1: GitHub Desktop (Más Fácil)
1. Descarga [GitHub Desktop](https://desktop.github.com/)
2. Click en "File" → "New Repository"
3. Nombre: `proyecto-restaurante-semana1`
4. Crea el repositorio
5. Copia todos los archivos a esa carpeta
6. Commit con mensaje: "Proyecto Semana 1 completo"
7. Click en "Publish repository"

### Opción 2: Git en Terminal
```bash
# Inicializa Git en la carpeta del proyecto
git init

# Agrega todos los archivos
git add .

# Haz el commit
git commit -m "Proyecto Semana 1: Sistema de Gestión de Restaurantes"

# Conecta con GitHub (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/proyecto-restaurante-semana1.git

# Sube el proyecto
git branch -M main
git push -u origin main
```

---

##  Checklist de Entrega

Antes de entregar, verifica:

- [ ] Tu nombre está en el README.md
- [ ] El proyecto abre correctamente en el navegador
- [ ] Todos los botones funcionan
- [ ] El cambio de tema funciona
- [ ] Las estadísticas se muestran correctamente
- [ ] No hay errores en la consola (F12)
- [ ] Las capturas de pantalla están incluidas
- [ ] El proyecto está subido a GitHub
- [ ] El link de GitHub funciona

---

##  Características Destacadas

1. **Platos típicos colombianos auténticos**: Bandeja Paisa, Ajiaco, Lechona, etc.
2. **Cálculos avanzados**: Uso de reduce() para múltiples estadísticas
3. **Destructuring anidado**: Extracción de propiedades a varios niveles
4. **Template literals complejos**: HTML multilínea con interpolación
5. **UX profesional**: Notificaciones, transiciones, feedback visual

---

##  Autor
**Eileen Stefany Sanchez Galindo**

Proyecto de la Semana 1 - Bootcamp JavaScript ES2023  
Dominio: Sistema de Gestión de Restaurantes  
Hotelería y Turismo
