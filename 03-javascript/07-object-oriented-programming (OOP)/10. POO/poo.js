// ==========================================
// 117 y 118. ¿QUÉ ES POO Y DIFERENCIAS?
// ==========================================

// Objeto Literal: Útil para datos rápidos, pero no se puede "reutilizar" fácilmente.
const laptopLiteral = {
    marca: "Dell",
    encender: function() { console.log("Encendiendo..."); }
};

// Clase (POO): Es el "molde" para crear muchos objetos iguales.
// La diferencia es que la Clase permite crear "instancias" con comportamientos heredados.


// ==========================================
// 119. UTILIZACIÓN DE CLASES
// ==========================================
class Dispositivo {
    constructor(nombre, marca) {
        this.nombre = nombre;
        this.marca = marca;
        this.encendido = false;
    }

    // Metodo de la clase
    describir() {
        return `Este es un ${this.nombre} marca ${this.marca}.`;
    }

    cambiarEstado() {
        this.encendido = !this.encendido;
        return this.encendido ? "Encendido 🟢" : "Apagado 🔴";
    }
}


// ==========================================
// 120. HERENCIA
// ==========================================
// La herencia permite crear una clase especializada a partir de una general.

class RaspberryPi extends Dispositivo {
    constructor(nombre, marca, modelo, sistemaOS) {
        // 'super' llama al constructor del padre (Dispositivo)
        super(nombre, marca);
        this.modelo = modelo;
        this.sistemaOS = sistemaOS;
    }

    // Podemos agregar métodos únicos para esta clase
    ejecutarComando(comando) {
        return `[${this.sistemaOS}]: Ejecutando "${comando}" en la ${this.modelo}...`;
    }
}


// FUNCIÓN PARA PROBAR TOD0
function ejecutarPOO() {
    const log = document.querySelector('#log');

    // Instanciando la clase padre
    const miLaptop = new Dispositivo("Laptop", "Apple");

    // Instanciando la clase hija (Herencia)
    const miPi = new RaspberryPi("Microcomputadora", "Raspberry", "Pi 5", "Kali Linux");

    // Mostrando resultados
    log.innerHTML = `
        ${miLaptop.describir()} <br>
        Estado: ${miLaptop.cambiarEstado()} <hr>
        ${miPi.describir()} <br>
        Modelo: ${miPi.modelo} <br>
        ${miPi.ejecutarComando('sudo apt update')}
    `;

    console.log(miLaptop);
    console.log(miPi);
}