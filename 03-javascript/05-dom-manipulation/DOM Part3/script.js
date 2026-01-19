// ==========================================
// 107. CREANDO ELEMENTOS
// ==========================================
// Pasos: Crear -> Configurar -> Insertar
function crearNuevoHijo() {
    // 1. Crear el elemento (etiqueta div)
    const nuevoElemento = document.createElement('DIV');

    // 2. Configurar (clases, texto, id)
    nuevoElemento.classList.add('hijo', 'resaltado');
    nuevoElemento.textContent = "Hijo (Creado dinámicamente)";

    // 3. Seleccionar al padre e insertar
    const padre = document.querySelector('#padre-principal');
    padre.appendChild(nuevoElemento);
}


// ==========================================
// 108. DOM TRAVERSING (Navegación)
// 109. ELEMENTOS PADRES
// 110. ELEMENTOS HIJOS
// ==========================================
function analizarRelaciones() {
    const contenedorPadre = document.querySelector('#padre-principal');

    console.log("--- 110. Elementos Hijos ---");
    // .children devuelve una lista de los elementos hijos (sin contar texto/espacios)
    console.log("Todos los hijos:", contenedorPadre.children);

    // Acceder al primer y último hijo
    console.log("Primer hijo:", contenedorPadre.firstElementChild.textContent);
    console.log("Último hijo:", contenedorPadre.lastElementChild.textContent);


    console.log("--- 109. Elementos Padres ---");
    const primerHijo = document.querySelector('.hijo');

    // .parentElement sube un nivel en el árbol
    const quienEsMiPadre = primerHijo.parentElement;
    console.log("El padre de 'Hijo 1' es:", quienEsMiPadre.id);

    // .closest() busca el padre más cercano que cumpla con un selector CSS
    // Muy útil cuando tienes estructuras anidadas profundas
    console.log("Ancestro 'contenedor' más cercano:", primerHijo.closest('.contenedor'));


    console.log("--- 108. DOM Traversing (Hermanos) ---");
    // Navegar de lado (entre elementos del mismo nivel)
    console.log("Siguiente hermano del primer hijo:", primerHijo.nextElementSibling.textContent);

}