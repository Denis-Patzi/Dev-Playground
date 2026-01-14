// ==========================================
// 1. SELECCIÓN DE ELEMENTOS (Capturar)
// ==========================================
// Es como "apuntar" al elemento que queremos controlar.
console.log("--- Seleccionando Elementos ---");

const titulo = document.getElementById('titulo-principal'); // Por ID
const parrafo = document.querySelector('.descripcion');    // Por Clase (tipo CSS)
const boton = document.querySelector('#btn-cambiar');      // Por ID (tipo CSS)

console.log(titulo.textContent);


// ==========================================
// 2. MANIPULACIÓN DE CONTENIDO Y ATRIBUTOS
// ==========================================
// Cambiamos lo que el usuario ve en la pantalla.
console.log("--- Modificando Contenido ---");

titulo.textContent = "¡DOM Manipulado con ÉXITO!";
parrafo.innerHTML = "Este párrafo ahora tiene <strong>negritas</strong>.";


// ==========================================
// 3. MANIPULACIÓN DE ESTILOS Y CLASES
// ==========================================
// Cambiamos el CSS desde JavaScript.
console.log("--- Cambiando Estilos ---");

// Forma 1: Estilo directo (inline)
titulo.style.color = "darkcyan";

// Forma 2: Agregar o quitar clases (Recomendado)
parrafo.classList.add('resaltado');


// ==========================================
// 4. EVENTOS (Escuchar al usuario)
// ==========================================
// Hacemos que la página "reaccione" a clics o teclas.
console.log("--- Configurando Eventos ---");

boton.addEventListener('click', () => {
    // Esta función se ejecuta cuando haces clic en el botón
    document.body.style.backgroundColor = "#f0f0f0";
    titulo.style.fontSize = "3rem";
    console.log("¡El usuario hizo clic!");
});


// ==========================================
// 5. CREACIÓN DE ELEMENTOS
// ==========================================
// Podemos crear etiquetas nuevas que no existían en el HTML original.
const contenedor = document.getElementById('contenedor');
const nuevoElemento = document.createElement('p');

nuevoElemento.textContent = "Soy un párrafo creado desde cero por JS.";
contenedor.appendChild(nuevoElemento); // Insertarlo en el contenedor