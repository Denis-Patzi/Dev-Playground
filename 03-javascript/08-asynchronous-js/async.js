// ==========================================
// 121. PETICIONES HTTP TEORÍA
// ==========================================
/* Conceptos clave:
   - GET: Solicitar datos al servidor.
   - POST: Enviar datos nuevos.
   - Status 200: Tod0 OK.
   - Status 404: No encontrado.
*/

// ==========================================
// 124. CALLBACKS
// ==========================================
// Un callback es una función que se pasa a otra como argumento.
function procesarUsuario(nombre, callback) {
    const mensaje = `Usuario: ${nombre}`;
    // Simulamos que tarda un poco
    setTimeout(() => {
        callback(mensaje);
    }, 1000);
}

function ejecutarCallback() {
    console.log("Iniciando Callback...");
    procesarUsuario("Admin_User", (resultado) => {
        console.log(resultado);
        alert(resultado);
    });
}


// ==========================================
// 125. PROMESAS
// ==========================================
// Un objeto que representa el éxito o fracaso de una operación asíncrona.
const chequearConexion = new Promise((resolve, reject) => {
    const conectado = true; // Simulación

    setTimeout(() => {
        if (conectado) {
            resolve("Conexión establecida correctamente 🌐");
        } else {
            reject("Error de conexión ❌");
        }
    }, 1500);
});

function ejecutarPromesa() {
    console.log("Consultando estado...");
    chequearConexion
        .then(respuesta => {
            console.log(respuesta);
        })
        .catch(error => {
            console.error(error);
        });
}


// ==========================================
// 122-123. PETICIÓN HTTP (AJAX / FETCH)
// ==========================================
// Ajax tradicional usaba XMLHttpRequest, pero hoy usamos Fetch API.
function obtenerDatosAjax() {
    const display = document.querySelector('#resultado');
    display.innerHTML = "<p>Cargando datos del servidor...</p>";

    // Usamos una API de prueba gratuita
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) throw new Error("Error en la petición");
            return response.json(); // Convertimos la respuesta a JSON
        })
        .then(usuario => {
            // Mostramos los datos en el HTML
            display.innerHTML = `
                <div class="data-card">
                    <strong>Nombre:</strong> ${usuario.name}<br>
                    <strong>Email:</strong> ${usuario.email}<br>
                    <strong>Ciudad:</strong> ${usuario.address.city}
                </div>
            `;
            console.log("Datos recibidos:", usuario);
        })
        .catch(error => {
            display.innerHTML = `<p style="color:red">${error.message}</p>`;
        });
}