# Sistema de Gestion con POO - Cocina Colombiana Eileen'S
## Proyecto Semana 3

---

## Informacion del Estudiante 
- **Nombre**: Eileen Stefany Sanchez Galindo
- **Fecha**: 21/02/2026
- **Semana**: 3 - Programación Orientada a Objetos (POO)
- **Dominio**: Sistema de Gestión de Restaurantes
- **Entidad**: Cocina Colombiana Eileen's

---

## Descripción del Proyecto

Sistema completo de gestión de menú usando **Programación Orientada a Objetos** con clases, herencia, campos privados y encapsulación. Permite gestionar diferentes tipos de platos del restaurante con una jerarquía de clases bien definida.

### Funcionalidades Principales

1. **Gestión de Platos** - Crear y administrar platos del menú
2. **Jerarquía de Clases** - Diferentes tipos de platos con herencia
3. **Encapsulación** - Campos privados con acceso controlado
4. **Sistema de Usuarios** - Clientes y chefs con roles diferentes
5. **Filtros Avanzados** - Por tipo, estado y búsqueda
6. **Estadísticas** - Por tipo de plato en tiempo real

---

## Arquitectura de Clases

### Diagrama de Clases

```
MenuItem (clase base abstracta)
├── MainDish (Platos Fuertes)
├── Soup (Sopas)
└── Appetizer (Entradas)

Person (clase base)
├── Customer (Cliente)
└── Chef (Chef)

Restaurant (clase principal)
```

---

## Conceptos ES2023 Aplicados

### Semanas Anteriores (Mantenidos):
-  const/let
-  Template literals
-  Arrow functions
-  Destructuring
-  Spread operator
-  Array methods (map, filter, reduce)

### Semana 3 (Nuevos):

#### 1. Clases con Constructor
```javascript
class MenuItem {
  constructor(name, location, price, preparationTime) {
    this.#name = name;
    this.#location = location;
    // ...
  }
}
```

#### 2. Campos Privados (#)
```javascript
class MenuItem {
  #id;
  #name;
  #active;
  #location;
  
  // Solo accesibles dentro de la clase
}
```

#### 3. Getters y Setters
```javascript
get name() {
  return this.#name;
}

set location(value) {
  if (!value || value.trim() === '') {
    throw new Error('La ubicación no puede estar vacía');
  }
  this.#location = value.trim();
}
```

#### 4. Herencia (extends, super)
```javascript
class MainDish extends MenuItem {
  constructor(name, location, price, time, proteinType) {
    super(name, location, price, time); // Llamar al padre
    this.#proteinType = proteinType;
  }
}
```

#### 5. Métodos Estáticos
```javascript
static isValidId(id) {
  return typeof id === 'string' && id.length > 0;
}

static generateId() {
  return crypto.randomUUID();
}
```

#### 6. Static Blocks
```javascript
class Restaurant {
  static {
    this.VERSION = '1.0.0';
    this.MAX_ITEMS = 100;
    this.SYSTEM_NAME = 'Cocina Colombiana Eileen\'s';
    console.log(`Sistema ${this.SYSTEM_NAME} v${this.VERSION} cargado`);
  }
}
```

#### 7. Métodos Abstractos
```javascript
// En clase base
getInfo() {
  throw new Error('El método getInfo() debe ser implementado en la clase hija');
}

// Sobrescrito en clase hija
getInfo() {
  return {
    id: this.id,
    name: this.name,
    type: this.getType(),
    // ...
  };
}
```

---

## Modelo de Datos

### Clase Base: MenuItem

```javascript
class MenuItem {
  // Campos privados
  #id              // UUID único
  #name            // Nombre del plato
  #active          // Disponible/No disponible
  #location        // Ubicación en cocina
  #dateCreated     // Fecha de creación
  #price           // Precio en COP
  #preparationTime // Tiempo de preparación
  
  // Métodos
  activate()       // Marcar como disponible
  deactivate()     // Marcar como no disponible
  getInfo()        // Información completa (abstracto)
  getType()        // Retorna nombre de la clase
}
```

### Clases Derivadas

**1. MainDish (Platos Fuertes):**
```javascript
class MainDish extends MenuItem {
  #proteinType  // Tipo de proteína (Carne, Pollo, Mixta)
}
```

**2. Soup (Sopas):**
```javascript
class Soup extends MenuItem {
  #soupType  // Tipo de sopa (caliente, fría)
}
```

**3. Appetizer (Entradas):**
```javascript
class Appetizer extends MenuItem {
  #portionSize  // Tamaño (individual, compartir)
}
```

### Clase Person y Roles

**Person (Base):**
```javascript
class Person {
  #id
  #name
  #email
  #registrationDate
}
```

**Customer (Cliente):**
```javascript
class Customer extends Person {
  #orderCount     // Número de pedidos
  #favoriteType   // Tipo de plato favorito
}
```

**Chef:**
```javascript
class Chef extends Person {
  #specialty      // Especialidad
  #dishesCreated  // Platos creados
}
```

---

## Encapsulación

### Campos Privados
Todos los campos internos son privados (#) y solo se accede mediante getters/setters:

```javascript
// ❌ MAL - Acceso directo
item.name = 'Nuevo nombre'; // Error

// ✅ BIEN - Usar getter
console.log(item.name); // Funciona

// ✅ BIEN - Usar setter con validación
item.location = 'Nueva ubicación'; // Valida primero
```

### Validación en Setters
```javascript
set location(value) {
  if (!value || value.trim() === '') {
    throw new Error('La ubicación no puede estar vacía');
  }
  this.#location = value.trim();
}

set email(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    throw new Error('Formato de email inválido');
  }
  this.#email = value;
}
```

---

## Interfaz de Usuario

### Secciones

1. **Header** - Título y botón de tema
2. **Estadísticas Resumen** - Total, disponibles, no disponibles, usuarios
3. **Formulario** - Crear platos con campos específicos por tipo
4. **Filtros** - Por tipo, estado y búsqueda
5. **Lista de Platos** - Con información detallada
6. **Estadísticas Detalladas** - Por tipo de plato

### Estados Visuales

- **Disponible**: Borde morado, opacidad normal
- **No Disponible**: Opacidad reducida, borde gris
- **Badges**: Colores según tipo de plato
- **Iconos**: 🍖 Plato Fuerte, 🍲 Sopa, 🥟 Entrada


##  Funcionalidades Implementadas

### CRUD de Platos
```javascript
restaurant.addItem(item)      // Agregar plato
restaurant.removeItem(id)     // Eliminar plato
restaurant.findItem(id)       // Buscar por ID
restaurant.getAllItems()      // Obtener todos
```

### Búsqueda y Filtros
```javascript
restaurant.searchByName(query)     // Buscar por nombre
restaurant.filterByType(type)      // Filtrar por tipo
restaurant.filterByStatus(active)  // Filtrar por estado
```

### Estadísticas
```javascript
restaurant.getStats()  // Obtener estadísticas completas
// Retorna: { total, active, inactive, byType, users }
```

### Gestión de Usuarios
```javascript
restaurant.addUser(user)           // Registrar usuario
restaurant.findUserByEmail(email)  // Buscar por email
restaurant.getAllUsers()           // Obtener todos
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
semana-3/
├── starter/
│   ├── index.html
│   ├── script.js
│   ├── styles.css
│   └── README.md
```

---

## 🎓 Diferencias con Semanas Anteriores

| Aspecto | Semana 1 | Semana 2 | Semana 3 |
|---------|----------|----------|----------|
| **Paradigma** | Funcional | Funcional | Orientado a Objetos |
| **Datos** | Objeto simple | Arrays + LocalStorage | Clases con encapsulación |
| **Organización** | Funciones sueltas | Funciones + CRUD | Clases con jerarquía |
| **Campos** | Públicos | Públicos | Privados (#) |
| **Herencia** | No | No | Sí (extends, super) |
| **Validación** | Básica | Media | Avanzada (setters) |

---

##  Ejemplos de Uso

### Crear un Plato Fuerte
```javascript
const bandeja = new MainDish(
  'Bandeja Paisa',
  'Cocina Principal',
  35000,
  30,
  'Mixta'
);

restaurant.addItem(bandeja);
```

### Crear una Sopa
```javascript
const ajiaco = new Soup(
  'Ajiaco Santafereño',
  'Cocina Principal',
  28000,
  25,
  'caliente'
);

restaurant.addItem(ajiaco);
```

### Registrar un Cliente
```javascript
const cliente = new Customer(
  'María García',
  'maria@example.com',
  'MainDish'
);

restaurant.addUser(cliente);
cliente.recordOrder(); // Incrementa contador de pedidos
```

### Cambiar Estado de Plato
```javascript
const plato = restaurant.findItem(id);
plato.deactivate(); // Marcar como no disponible
plato.activate();   // Marcar como disponible
```

--- 

##  Datos de Prueba Incluidos

El sistema viene con 3 platos de prueba:
- **Bandeja Paisa** (MainDish) - $35,000
- **Ajiaco Santafereño** (Soup) - $28,000
- **Empanadas Colombianas** (Appetizer) - $8,000

Y 2 usuarios:
- **María García** (Customer)
- **Carlos Rodríguez** (Chef)

---

##  Validaciones Implementadas

1. **Ubicación** - No puede estar vacía
2. **Email** - Debe tener formato válido
3. **Límite de platos** - Máximo 100 platos
4. **Instancias** - Solo acepta instancias correctas de clases
5. **Campos requeridos** - Validación en formulario

##  Autor

**Eileen Stefany Sanchez Galindo**

Proyecto Semana 3 - Bootcamp JavaScript ES2023  
Dominio: Sistema de Gestión de Restaurantes  
Hotelería y Turismo

---
