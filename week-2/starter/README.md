# Semana 2 - Proyecto en desarrollo
# Gestor de Menu - Cocina Colombiana Eileen's

---

## Informacion Del Estudiante 
- **Nombre**: Eileen Stefany Sanchez Galindo
- **Fecha**: 12/02/2026
- **Semana**: 2 - Operadores y Metodos Modernos de Arrays
- **Dominio**: Sistema de Gestion de Restaurantes 
- **Entidad**: Cocina Colombiana Eileen's

---

## Descripción del Proyecto

Gestor completo de menú de restaurante que permite crear, editar, eliminar y filtrar platos del menú. Aplica todos los conceptos aprendidos en la Semana 2 del bootcamp.

### Funcionalidades Principales

1. **✅ Crear platos** - Formulario para agregar nuevos platos al menú
2. **✏️ Editar platos** - Modificar platos existentes
3. **🗑️ Eliminar platos** - Remover platos del menú
4. **✓ Marcar disponible/no disponible** - Toggle de disponibilidad
5. **🔍 Filtros** - Por estado, categoría y popularidad
6. **🔎 Búsqueda** - En tiempo real por nombre y descripción
7. **📊 Estadísticas** - Calculadas con reduce()
8. **💾 Persistencia** - LocalStorage para guardar datos

---

## Conceptos ES2023 Aplicados

### Semana 1 (Se mantiene):
- ✅ const/let
- ✅ Template literals
- ✅ Arrow functions
- ✅ Destructuring básico

### Semana 2 (Nuevos):

#### 1. Spread Operator (...)
Usado para inmutabilidad - nunca mutar el estado:

```javascript
// Crear nuevo array con spread
const newDishes = [...dishes, newDish];

// Actualizar objeto con spread
const updatedDish = { ...dish, ...updates, updatedAt: new Date() };
```

#### 2. Rest Parameters
Usado en funciones con argumentos variables:

```javascript
const applyFilters = (dishesToFilter, filters = {}) => {
  const { status = 'all', category = 'all' } = filters;
  // ...
};
```

#### 3. Default Parameters
Valores por defecto en funciones:

```javascript
const filterByStatus = (dishesToFilter, status = 'all') => {
  // ...
};
```

#### 4. Array Methods

**map()** - Transformar arrays:
```javascript
const dishesHTML = dishes.map(renderDish).join('');
```

**filter()** - Filtrar elementos:
```javascript
const activeDishes = dishes.filter(dish => dish.active);
```

**reduce()** - Agrupar y calcular:
```javascript
const byCategory = dishes.reduce((acc, dish) => {
  acc[dish.category] = (acc[dish.category] ?? 0) + 1;
  return acc;
}, {});
```

**find()** - Encontrar elemento:
```javascript
const dish = dishes.find(d => d.id === dishId);
```

#### 5. Nullish Coalescing (??)
```javascript
const name = dishData.name ?? '';
const count = acc[category] ?? 0;
```

---

## Modelo de Datos

### Estructura del Plato

```javascript
{
  id: 1707599432123,                // Timestamp único
  name: "Bandeja Paisa",            // Nombre del plato
  description: "Plato típico...",   // Descripción
  category: "platoFuerte",          // Categoría
  priority: "high",                 // Popularidad: low|medium|high
  price: 35000,                     // Precio en COP
  preparationTime: 25,              // Minutos de preparación
  active: true,                     // Disponible/No disponible
  createdAt: "2024-02-10T...",      // Fecha creación
  updatedAt: null                   // Fecha última actualización
}
```

### Categorías

```javascript
const CATEGORIES = {
  platoFuerte: { name: 'Plato Fuerte', emoji: '🍖' },
  sopas: { name: 'Sopas', emoji: '🍲' },
  entrada: { name: 'Entrada', emoji: '🥟' },
  bebidas: { name: 'Bebidas', emoji: '🥤' },
  postres: { name: 'Postres', emoji: '🍰' }
};
```

---

## Funciones Implementadas

### CRUD Básico

| Función | Descripción | Concepto Aplicado |
|---------|-------------|-------------------|
| `createDish()` | Crear nuevo plato | Spread operator, default parameters |
| `updateDish()` | Actualizar plato | map(), spread operator |
| `deleteDish()` | Eliminar plato | filter() |
| `toggleDishActive()` | Cambiar disponibilidad | map() |

### Filtros y Búsqueda

| Función | Descripción | Concepto Aplicado |
|---------|-------------|-------------------|
| `filterByStatus()` | Filtrar por estado | filter(), default parameters |
| `filterByCategory()` | Filtrar por categoría | filter() |
| `filterByPriority()` | Filtrar por popularidad | filter() |
| `searchDishes()` | Buscar por texto | filter(), includes() |
| `applyFilters()` | Aplicar todos los filtros | Encadenamiento, destructuring |

### Estadísticas

| Función | Descripción | Concepto Aplicado |
|---------|-------------|-------------------|
| `getStats()` | Calcular estadísticas | reduce(), filter() |

### Renderizado

| Función | Descripción | Concepto Aplicado |
|---------|-------------|-------------------|
| `renderDish()` | Renderizar plato individual | Template literals, destructuring |
| `renderDishes()` | Renderizar lista completa | map(), join() |
| `renderStats()` | Renderizar estadísticas | Object.entries(), map() |

---

## Inmutabilidad

**NUNCA se muta el estado directamente:**

```javascript
// MAL - Mutar directamente
dishes.push(newDish);
dish.active = !dish.active;

//BIEN - Crear nuevo array/objeto
const newDishes = [...dishes, newDish];
const updatedDish = { ...dish, active: !dish.active };
```

---

## Cómo Ejecutar

### Opción 1: Abrir directamente
1. Doble click en `index.html`

### Opción 2: Con servidor local
```bash
python -m http.server 8000
```

### Opción 3: Live Server (VS Code)
Click derecho en `index.html` → "Open with Live Server"

---

## Estructura de Archivos

```
semana-2/
├── starter/
│   ├── index.html          # HTML con formulario y filtros
│   ├── script.js           # JavaScript con todos los conceptos
│   ├── styles.css          # CSS con estilos adicionales
│   └── README.md           # Este archivo
```

---

## Diferencias con Semana 1

| Aspecto | Semana 1 | Semana 2 |
|---------|----------|----------|
| **Datos** | Hardcoded en el código | Dinámicos con LocalStorage |
| **Interacción** | Solo visualización | CRUD completo |
| **Filtros** | Solo categorías estáticas | Filtros dinámicos múltiples |
| **Búsqueda** | No | Búsqueda en tiempo real |
| **Inmutabilidad** | No aplicada | Spread operator en todo |
| **Array methods** | Solo map() básico | map, filter, reduce, find |
| **Formularios** | No | Formulario completo |

---

## Autor

**Eileen Stefany Sanchez Galindo**

Proyecto Week 2 - Bootcamp JavaScript ES2023  
Dominio: Sistema de Gestión de Restaurantes  
Categoria: Hotelería y Turismo

