// ==========================================
// 1. CREACIÓN DE UN OBJETO LITERAL
// ==========================================
// Un objeto agrupa datos relacionados bajo un mismo nombre.
console.log("--- Creación de Objeto ---");

const usuario = {
    nombre: "Alan",
    apellido: "Turing",
    edad: 20,
    esEstudiante: true,
    hobbies: ["Running", "Retro Games", "Coding"]
};

console.log(usuario);

const equipo = {
    marca: "ROG Strix",
    modelo: "G16",
    año: 2024,
    especificaciones: {
        procesador: "Intel Core i9",
        RAM: "32GB",
        almacenamiento: "1TB SSD"
    }
};

console.log(equipo);

console.log("Mi laptop lleva un:", equipo.especificaciones.procesador);
equipo.pantalla = "16 pulgadas"; // Agregar nueva propiedad
equipo.especificaciones.grafica = "NVIDIA RTX 4060"; // Agregar dentro de objeto anidado
equipo.especificaciones.RAM = "64GB"; // Modificar propiedad existente
console.log("Actualizado", equipo);

// ==========================================
// 2. ACCEDER A LAS PROPIEDADES
// ==========================================
// Puedes usar el punto (.) o los corchetes ([])
console.log("--- Acceso a Propiedades ---");

console.log("Nombre:", usuario.nombre);          // Forma más común (punto)
console.log("Primer hobby:", usuario.hobbies[0]); // Acceso a array dentro de objeto
console.log("Edad (corchetes):", usuario['edad']); // Útil si el nombre tiene espacios o es dinámico


// ==========================================
// 3. MODIFICAR Y AGREGAR PROPIEDADES
// ==========================================
// Aunque el objeto sea 'const', sus propiedades SÍ pueden cambiar.
console.log("--- Modificación ---");

usuario.edad = 21;              // Modificar valor existente
usuario.especialidad = "UX/UI"; // Agregar nueva propiedad
delete usuario.esEstudiante;    // Eliminar una propiedad

console.log("Objeto actualizado:", usuario);


// ==========================================
// 4. MÉTODOS (Funciones dentro de objetos)
// ==========================================
// Un objeto también puede "hacer" cosas.
console.log("--- Métodos del Objeto ---");

const laptop = {
    marca: "ROG Strix",
    modelo: "G16",
    encender: function() {
        return "La laptop " + this.marca + " se está encendiendo...";
    },
    // Forma moderna (flecha no funciona igual aquí por el 'this', usa esta):
    apagar() {
        return "Cerrando sistema...";
    }
};



console.log(laptop.encender());