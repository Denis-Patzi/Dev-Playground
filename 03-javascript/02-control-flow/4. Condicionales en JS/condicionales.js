// ==========================================
// 1. ESTRUCTURA IF / ELSE (Si / Si no)
// ==========================================
let edad = 18;

if (edad >= 18) {
    console.log("Puedes pasar al club.");
} else {
    console.log("No puedes pasar, eres menor.");
}

// ==========================================
// 2. ELSE IF (Múltiples opciones)
// ==========================================
let hora = 14;

if (hora < 12) {
    console.log("Buenos días");
} else if (hora >= 12 && hora <= 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

// ==========================================
// 3. OPERADORES DE COMPARACIÓN (Los que deciden)
// ==========================================
/*
   ==    Igual a (valor)
   ===   Estrictamente igual (valor y tipo de dato) -> ¡USA ESTE!
   !=    Diferente de
   >     Mayor que
   <     Menor que
   >=    Mayor o igual
   <=    Menor o igual
*/

// ==========================================
// 4. SWITCH (Para muchos casos específicos)
// ==========================================
let metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'efectivo':
        console.log("Pagaste con billetes.");
        break;
    case 'tarjeta':
        console.log("Pagaste con plástico.");
        break;
    default:
        console.log("Método no reconocido.");
}