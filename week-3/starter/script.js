// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Dominio: Sistema de Gestión de Restaurantes
// Categoría: Hotelería y Hospitalidad
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Precio base de los platos del menú en pesos colombianos
const DISH_PRICE        = 35_000;
const DRINK_PRICE       = 8_000;
const DESSERT_PRICE     = 12_000;

// Capacidad máxima de mesas del restaurante
const MAX_TABLES        = 20;

// Porcentaje de descuento para clientes frecuentes
const LOYALTY_DISCOUNT  = 0.15;

// Porcentaje de propina sugerida
const TIP_RATE          = 0.10;

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// Calculamos el total de una orden de 3 platos, 2 bebidas y 1 postre
const dishesTotal   = DISH_PRICE * 3;
const drinksTotal   = DRINK_PRICE * 2;
const dessertTotal  = DESSERT_PRICE * 1;

// Subtotal de la orden antes de propina
const orderSubtotal = dishesTotal + drinksTotal + dessertTotal;
console.log("Platos (x3):          $" + dishesTotal);
console.log("Bebidas (x2):         $" + drinksTotal);
console.log("Postre (x1):          $" + dessertTotal);
console.log("Subtotal orden:       $" + orderSubtotal);

// Propina sugerida del 10%
const tipAmount = orderSubtotal * TIP_RATE;
console.log("Propina (10%):        $" + tipAmount);

// Total final con propina
const totalWithTip = orderSubtotal + tipAmount;
console.log("Total con propina:    $" + totalWithTip);

// Módulo: verificamos si la mesa es par o impar (ejemplo de %)
const tableNumber = 7;
const isEvenTable = tableNumber % 2;
console.log("Mesa #" + tableNumber + " — resto al dividir entre 2: " + isEvenTable);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// Acumulamos el total de ventas del día con cada orden registrada
let dailySales = 0;
console.log("Ventas iniciales:     $" + dailySales);

// Primer turno — almuerzo
dailySales += 280_000;
console.log("Tras turno almuerzo:  $" + dailySales);

// Segundo turno — cena
dailySales += 420_000;
console.log("Tras turno cena:      $" + dailySales);

// Restamos el costo de insumos del día
dailySales -= 150_000;
console.log("Tras costos insumos:  $" + dailySales);

// Aplicamos un bono de rendimiento del 5% al total neto
dailySales *= 1.05;
console.log("Con bono rendimiento: $" + dailySales);

// Dividimos entre 2 socios del restaurante
dailySales /= 2;
console.log("Ganancia por socio:   $" + dailySales);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// Verificamos si una mesa está exactamente llena
const seatedGuests  = 4;
const tableCapacity = 4;
const isTableFull   = seatedGuests === tableCapacity;
console.log("¿Mesa completa?       " + isTableFull);

// Verificamos si el pedido tiene un plato especial del día
const orderedDish   = "Bandeja Paisa Tradicional";
const dishOfTheDay  = "Bandeja Paisa Tradicional";
const isSpecialDish = orderedDish === dishOfTheDay;
console.log("¿Es plato del día?    " + isSpecialDish);

// Verificamos si hay mesas disponibles
const occupiedTables    = 18;
const hasAvailableTables = occupiedTables < MAX_TABLES;
console.log("¿Hay mesas libres?    " + hasAvailableTables);

// Verificamos si el pedido supera el mínimo para domicilio
const deliveryMinimum   = 30_000;
const orderAmount       = 45_000;
const meetsMinimum      = orderAmount >= deliveryMinimum;
console.log("¿Cumple mínimo dom.:  " + meetsMinimum);

// Verificamos que el pago NO sea en efectivo
const paymentMethod     = "tarjeta";
const isNotCash         = paymentMethod !== "efectivo";
console.log("¿Pago no es efectivo? " + isNotCash);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// Descuento solo si es cliente frecuente Y su orden supera $80.000
const isLoyalCustomer       = true;
const customerOrderTotal    = 95_000;
const qualifiesForDiscount  = isLoyalCustomer && customerOrderTotal >= 80_000;
console.log("¿Aplica descuento?    " + qualifiesForDiscount);

// Calculamos el descuento si aplica
const discountAmount = qualifiesForDiscount ? customerOrderTotal * LOYALTY_DISCOUNT : 0;
console.log("Valor descuento:      $" + discountAmount);
console.log("Total con descuento:  $" + (customerOrderTotal - discountAmount));

// Envío gratis si es cliente frecuente O si la orden supera $60.000
const freeDelivery = isLoyalCustomer || customerOrderTotal >= 60_000;
console.log("¿Domicilio gratis?    " + freeDelivery);

// El restaurante NO acepta reservas si no hay mesas disponibles
const acceptsReservations = !(occupiedTables >= MAX_TABLES);
console.log("¿Acepta reservas?     " + acceptsReservations);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen del día ===");
console.log("----------------------------");
console.log("Mesas ocupadas:       " + occupiedTables + " / " + MAX_TABLES);
console.log("¿Mesas disponibles?   " + hasAvailableTables);
console.log("Ventas brutas:        $550.000");
console.log("Ganancia neta/socio:  $" + dailySales.toFixed(0));
console.log("Descuento aplicado:   $" + discountAmount);
console.log("¿Acepta reservas?:    " + acceptsReservations);
console.log("----------------------------");
console.log("");
console.log("===========================");
console.log("FIN DE CALCULADORA");
console.log("===========================");