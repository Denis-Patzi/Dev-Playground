// ==========================================
// SECCIÓN 18: EVENTOS Y ATRIBUTOS
// ==========================================
const zona = document.querySelector('#miZona');
const input = document.querySelector('#inputTeclado');

// Eventos de Ratón (Mouse Events)
zona.addEventListener('mouseenter', () => zona.style.borderColor = '#2ecc71');
zona.addEventListener('mouseleave', () => zona.style.borderColor = '#3498db');

// Eventos de Teclado y Event Object (e)
input.addEventListener('keydown', (e) => {
    // El objeto 'e' nos dice qué tecla se presionó
    console.log(`Tecla: ${e.key} | Código: ${e.code}`);
    if(e.key === 'Enter') {
        alert("¡Presionaste Enter!");
    }
});


// ==========================================
// SECCIÓN 19: CREANDO ELEMENTOS Y TRAVERSING
// ==========================================
const btnAgregar = document.querySelector('#btnAgregar');
const lista = document.querySelector('#listaTareas');

btnAgregar.addEventListener('click', () => {
    // 1. Crea un nodo tipo "li" en memoria (aún no se ve en la página)
    const nuevoItem = document.createElement('li');
    // 2. Le asigna una clase CSS para darle estilo
    nuevoItem.className = 'item-lista';
    // 3. Define el contenido interno usando Template Literals (``)
    // Incluye el texto y un botón de borrar
    nuevoItem.innerHTML = `Nueva Tarea de Ingeniería <button class="btn-borrar">X</button>`;
    // 4. "Hijo al padre": Inserta el <li> dentro del <ul>
    lista.appendChild(nuevoItem);
});

// DOM Traversing: Borrar un elemento usando su "Padre"
lista.addEventListener('click', (e) => {
    // Detectamos si lo que el usuario tocó fue el botón de borrar
    if(e.target.classList.contains('btn-borrar')) {
        // DOM TRAVERSING:
        // e.target es el botón <button>
        // .parentElement sube un nivel en la jerarquía y selecciona al <li>
        const elementoAEliminar = e.target.parentElement;
        // Elimina el <li> completo del documento
        elementoAEliminar.remove();
    }
});


// ==========================================
// SECCIÓN 20: BOM (WINDOW, LOCATION, STORAGE)
// ==========================================
const info = document.querySelector('#infoNavegador');

// Uso del objeto Window y Location
info.textContent = `Estás en: ${window.location.hostname} | Historial: ${window.history.length} páginas.`;

// LocalStorage: Guardar y Llamar datos
function guardarProgreso() {
    // setItem(clave, valor)
    localStorage.setItem('ultimoAcceso', new Date().toLocaleString());
    localStorage.setItem('usuario', 'Alan Turing');
    alert("Datos guardados en el navegador");
}

function borrarProgreso() {
    localStorage.clear();
    alert("LocalStorage limpio");
}

// Llamar datos al cargar la página
window.onload = () => {
    const usuario = localStorage.getItem('usuario');
    if(usuario) {
        console.log(`Bienvenido de nuevo, ${usuario}`);
        console.log(`Ultimo acceso fue: ${localStorage.getItem('ultimoAcceso')}`);
    }
};