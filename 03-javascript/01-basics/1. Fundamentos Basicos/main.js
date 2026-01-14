// ==========================================
// 1. SALIDAS (Para ver qué está pasando)
// ==========================================

console.log("Hola desde la consola"); // El mejor amigo del programador
// alert("¡Cuidado! Soy una alerta"); // Bloquea la pantalla (úsalos poco)


// ==========================================
// 2. VARIABLES Y CONSTANTES
// ==========================================

// 'const' para valores que NO cambian
const PI = 3.1416;

// 'let' para valores que sí van a cambiar (el viejo 'var' ya no se usa)
let puntaje = 0;
puntaje = 10; // Cambiando el valor


// ==========================================
// 3. TIPOS DE DATOS BÁSICOS
// ==========================================

let nombre = "Alan";      // String (Texto)
let edad = 20;             // Number (Número)
let esEstudiante = true;   // Boolean (Verdadero/Falso)
let materias = null;       // Null (Vacío intencional)


// ==========================================
// 4. OPERACIONES MATEMÁTICAS
// ==========================================

let suma = 5 + 5;
let nombreCompleto = nombre + " Turing"; // Concatenación (unir textos)


// ==========================================
// 5. UNA FUNCIÓN BÁSICA (Acción)
// ==========================================

function saludar(usuario) {
    console.log("Bienvenido al sistema, " + usuario);
}

// Llamamos a la función
saludar(nombre);