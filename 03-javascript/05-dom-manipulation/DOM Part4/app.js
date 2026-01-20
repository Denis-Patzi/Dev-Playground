// ==========================================
// 111. OBJETO WINDOW
// ==========================================
// Es el objeto global de JS en el navegador. Todo lo demás vive dentro de él.
console.log("--- Objeto Window ---");

// Ejemplo: Ver el tamaño de la ventana del navegador
console.log(`Ancho de ventana: ${window.innerWidth}px`);
console.log(`Alto de ventana: ${window.innerHeight}px`);

// Aunque podemos usar alert(), pertenece a window:
// window.alert("¡Hola desde el objeto Window!");


// ==========================================
// 112. OBJETO CONSOLE
// ==========================================
// Sirve para depurar y mostrar información de forma organizada.
console.log("--- Objeto Console ---");

const productos = [
    { id: 1, nombre: "Monitor 4K", precio: 300 },
    { id: 2, nombre: "Teclado Mecánico", precio: 80 },
    { id: 3, nombre: "Mouse Gamer", precio: 50 }
];

// .table() es genial para ver arreglos de objetos
console.table(productos);

console.warn("Esto es una advertencia");
console.error("Esto es un error simulado");


// ==========================================
// 113. OBJETO LOCATION
// ==========================================
// Contiene información sobre la URL actual y permite redireccionar.
function verUbicacion() {
    console.log("--- Objeto Location ---");
    console.log(`Host: ${location.host}`);
    console.log(`Ruta: ${location.pathname}`);

    // Para redireccionar (comentado para no interrumpir):
    // location.href = "https://www.google.com";
}


// ==========================================
// 114. OBJETO HISTORY
// ==========================================
// Permite navegar por el historial de la pestaña actual.
function irAtras() {
    console.log("Intentando volver atrás...");
    window.history.back();
}


// ==========================================
// 115. AÑADIENDO DATOS EN LOCALSTORAGE
// ==========================================
// Permite guardar datos que no se borran al cerrar el navegador.
// NOTA: Solo guarda texto (Strings).
function guardarPreferencia() {
    const configuracion = {
        tema: "oscuro",
        idioma: "español",
        ultimaSesion: new Date().toLocaleDateString()
    };

    // Convertimos el objeto a String con JSON.stringify
    localStorage.setItem("user_settings", JSON.stringify(configuracion));
    console.log("Datos guardados en localStorage.");
}


// ==========================================
// 116. LLAMANDO DATOS DE LOCALSTORAGE
// ==========================================
function leerPreferencia() {
    const datos = localStorage.getItem("user_settings");

    if (datos) {
        // Convertimos el String de vuelta a un objeto JS
        const configParseada = JSON.parse(datos);
        console.log("Datos recuperados:", configParseada);
        alert(`Tu tema preferido es: ${configParseada.tema}`);
    } else {
        console.log("No hay datos guardados.");
    }
}