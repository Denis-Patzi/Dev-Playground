// ==========================================
// 1. CREACIÓN DE UN ARREGLO
// ==========================================
// Un arreglo puede guardar cualquier tipo de dato (números, textos, objetos).
console.log("--- Creación de Arreglos ---");

const tecnologias = ["HTML", "CSS", "JS", "React"];
const numeros = [10, 20, 30, 40];

console.log(tecnologias);


// ==========================================
// 2. ACCESO Y POSICIONES (ÍNDICES)
// ==========================================
// ¡IMPORTANTE! En programación se empieza a contar desde 0.
console.log("--- Acceso por Índice ---");

console.log("Primer elemento:", tecnologias[0]); // HTML
console.log("Tercer elemento:", tecnologias[2]); // JS
console.log("Total de elementos:", tecnologias.length); // 4


// ==========================================
// 3. MÉTODOS BÁSICOS DE MODIFICACIÓN
// ==========================================
// Los arreglos tienen "superpoderes" para cambiar su contenido.
console.log("--- Métodos de Modificación ---");

tecnologias.push("Node.js");      // .push() -> Agrega al FINAL
tecnologias.unshift("Git");      // .unshift() -> Agrega al INICIO

tecnologias.pop();               // .pop() -> Elimina el ÚLTIMO
tecnologias.shift();             // .shift() -> Elimina el PRIMERO

console.log("Lista actualizada:", tecnologias);


// ==========================================
// 4. MÉTODOS MODERNOS (Los más usados en IA)
// ==========================================
// Estos métodos no solo mueven datos, sino que los transforman.
console.log("--- Métodos Modernos ---");

const precios = [100, 200, 300, 400];

// .map() -> Crea una nueva lista aplicando un cambio a cada elemento
const preciosConIVA = precios.map(precio => precio * 1.21);
console.log("Precios con IVA:", preciosConIVA);

// .filter() -> Crea una lista solo con los que cumplen una condición
const preciosCaros = precios.filter(precio => precio > 250);
console.log("Solo los caros:", preciosCaros);


// ==========================================
// 5. OBJETO DENTRO DE UN ARREGLO
// ==========================================
// Los arreglos pueden contener objetos para estructurar mejor los datos.
console.log("--- Arreglo de Objetos ---");
const laptops = [
    { marca: "Dell", modelo: "XPS 13", precio: 1200 },
    { marca: "Apple", modelo: "MacBook Air", precio: 1500 },
    { marca: "HP", modelo: "Spectre x360", precio: 1300 }
];
console.log("Laptops disponibles:", laptops);

// Accediendo a propiedades de objetos dentro del arreglo
console.log("Modelo de la primera laptop:", laptops[0].modelo); // XPS 13|
console.log("Precio de la segunda laptop:", laptops[1].precio); // 1500
