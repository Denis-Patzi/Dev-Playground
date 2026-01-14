// ==========================================
// 1. FUNCIÓN DECLARATIVA (La forma clásica)
// ==========================================
// Se puede llamar incluso antes de ser definida (Hoisting)
console.log("--- Función Declarativa ---");

function saludar(nombre) {
    return "Hola " + nombre + ", bienvenido al curso.";
}

let mensaje = saludar("Alan");
console.log(mensaje);


// ==========================================
// 2. FUNCIÓN DE FLECHA (Arrow Functions)
// ==========================================
// Es la forma moderna (ES6). Si es una sola línea, el return es automático.
console.log("--- Arrow Functions ---");

const sumar = (a, b) => a + b;

console.log("Resultado de la suma: " + sumar(10, 5));


// ==========================================
// 3. PARÁMETROS POR DEFECTO
// ==========================================
// Si no enviamos el segundo valor, JS usará el que definimos aquí.
console.log("--- Parámetros por Defecto ---");

function potencia(base, exponente = 2) {
    return base ** exponente;
}

console.log("Al cuadrado (usa default): " + potencia(5)); // 25
console.log("Al cubo (sobrescribe): " + potencia(2, 3));  // 8


// ==========================================
// 4. EL VALOR DE RETORNO (RETURN)
// ==========================================
// El return corta la ejecución de la función y devuelve un valor.
console.log("--- Uso del Return ---");

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return "Es mayor de edad";
    }
    return "Es menor de edad"; // Si entra al IF, esta línea nunca se ejecuta
}

console.log("Resultado de validación: " + esMayorDeEdad(20));