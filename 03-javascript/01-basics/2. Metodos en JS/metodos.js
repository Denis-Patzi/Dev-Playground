// ==========================================
// 1. MÉTODOS PARA STRINGS (TEXTO)
// ==========================================
let mensaje = "  Aprendiendo JavaScript es Genial  ";

// .length -> No es un método (es propiedad) pero te dice el tamaño
console.log(mensaje.length); // Resultado: 36

// .trim() -> Quita los espacios vacíos al inicio y al final
let limpio = mensaje.trim();
console.log(limpio); // "Aprendiendo JavaScript es Genial"

// .toUpperCase() / .toLowerCase() -> Cambia a mayúsculas o minúsculas
console.log(limpio.toUpperCase()); // "APRENDIENDO JAVASCRIPT ES GENIAL"

// .toLowerCase() / .toUpperCase() -> Cambia a mayúsculas o minúsculas
console.log(limpio.toLowerCase()); // "aprendiendo javascript es genial"

// .slice() -> Corta el texto desde el índice que le indiques
console.log(limpio.slice(0, 12)); // "Aprendiendo" 

// .includes() -> Busca si una palabra existe dentro (devuelve true/false)
console.log(limpio.includes("JavaScript")); // true

// ==========================================
// 2. MÉTODOS PARA ARRAYS (LISTAS)
// ==========================================
let tecnologias = ["HTML", "CSS", "JS"];

// .push() -> Agrega un elemento al FINAL
tecnologias.push("React"); 
// ["HTML", "CSS", "JS", "React"]

// .pop() -> Elimina el ÚLTIMO elemento
tecnologias.pop(); 
// ["HTML", "CSS", "JS"]

// .unshift() -> Agrega al INICIO
tecnologias.unshift("Git");
// ["Git", "HTML", "CSS", "JS"]

// .join() -> Une los elementos en un solo texto
console.log(tecnologias.join(" - ")); // "Git - HTML - CSS - JS"


// ==========================================
// 3. MÉTODOS PARA NÚMEROS
// ==========================================
let precio = 1500.5567;

// .toFixed() -> Corta los decimales
console.log(precio.toFixed(2)); // "1500.56" (redondea)

