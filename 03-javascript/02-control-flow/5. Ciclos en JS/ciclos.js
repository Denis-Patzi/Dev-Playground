// ==========================================
// 1. CICLO FOR (El más usado cuando sabes cuántas veces repetir)
// ==========================================
// Estructura: (inicio; condición; incremento)
console.log("--- Inicio del Ciclo FOR ---");
for (let i = 1; i <= 5; i++) {
    console.log("Vuelta número: " + i);
}


// ==========================================
// 2. CICLO WHILE (Mientras se cumpla una condición)
// ==========================================
console.log("--- Inicio del Ciclo WHILE ---");
let energia = 3;
while (energia > 0) {
    console.log("Corriendo... energía restante: " + energia);
    energia--; // ¡Importante! Si no restas, el ciclo es infinito y traba la PC
}


// ==========================================
// 3. CICLO FOR...OF (Ideal para recorrer Arrays/Listas)
// ==========================================
console.log("--- Recorriendo un Array ---");
const frutas = ["Manzana", "Pera", "Plátano"];

for (let fruta of frutas) {
    console.log("Fruta del día: " + fruta);
}


// ==========================================
// 4. BREAK Y CONTINUE (Control de flujo)
// ==========================================
for (let j = 0; j < 10; j++) {
    if (j === 3) continue; // Se salta el 3 y sigue con el 4
    if (j === 6) break;    // Se detiene por completo en el 6
    console.log("Contando: " + j);
}