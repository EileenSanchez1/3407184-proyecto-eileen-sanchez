# Sistema de Gestión de Restaurantes
## Cocina Colombiana Eileen's

---

## Información del Estudiante
- **Nombre**: Eileen Stefany Sanchez Galindo
- **Fecha**: 09/02/2026
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

### 2. Categorias y Menú Destacado 
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
- Platos en menu
- Años de operacion
- Copiar informacion 


### 5. Interactividad 
- **Cambio de tema**: Botón para alternar entre claro/oscuro
- **Copiar información**: Copia datos al portapapeles
- **Toggle servicios**: Muestra/oculta la lista completa
- **Notificaciones toast**: Feedback visual de acciones


---

## Características de Diseño
- Responsive design 
- Variables CSS para temas personalizables
- Animaciones suaves
- Colores temáticos 
- Grid layout moderno

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
