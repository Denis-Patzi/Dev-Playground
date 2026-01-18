// ==========================================
// 102. ATRIBUTOS Y CLASES
// ==========================================
const card = document.querySelector('#producto');
const imagen = document.querySelector('#imagen-prod');

// Modificar atributos directamente
imagen.setAttribute('alt', 'Nueva descripción de la Laptop');

function toggleTema() {
    // .classList es la mejor forma de manejar clases
    card.classList.toggle('dark-mode');

    // Acceder a atributos personalizados (data-attributes)
    console.log("ID del producto:", card.getAttribute('data-id'));
}


// ==========================================
// 103, 104 y 106. EVENTOS DE RATÓN Y EVENT OBJECT
// ==========================================
const zonaRaton = document.querySelector('#zona-raton');

// 'mouseenter' es un evento de ratón común
zonaRaton.addEventListener('mouseenter', (e) => {
    // 106. El objeto 'e' (Event Object) contiene información del evento
    console.log("Tipo de evento:", e.type);
    zonaRaton.style.backgroundColor = '#a0e7e5';
    zonaRaton.textContent = "¡Entraste!";
});

zonaRaton.addEventListener('mouseleave', () => {
    zonaRaton.style.backgroundColor = '#ef6363';
    zonaRaton.textContent = "Pasa el ratón por aquí";
});

// Evento de click
zonaRaton.addEventListener('click', (e) => {
    // e.target nos dice exactamente qué elemento recibió el click
    alert(`Hiciste click en: ${e.target.tagName}`);
});


// ==========================================
// 105. EVENTOS CON TECLADO
// ==========================================
const inputTexto = document.querySelector('#campo-texto');
const mensaje = document.querySelector('#mensaje-teclado');

// 'input' es el evento más moderno para formularios (detecta cualquier cambio)
inputTexto.addEventListener('input', (e) => {
    // e.target.value nos da lo que el usuario está escribiendo
    mensaje.textContent = `Escribiendo: ${e.target.value}`;

    // Validación simple de atributos en tiempo real
    if (e.target.value.length < 3) {
        inputTexto.classList.add('input-error');
    } else {
        inputTexto.classList.remove('input-error');
    }
});

// 'keydown' detecta teclas específicas (como Enter o Escape)
inputTexto.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        console.log("Presionaste Enter. Enviando datos...");
    }
});