

//Declaración de variables

let nombre = 'Juan'; // Variable que puede cambiar (usar este)
const PI = 3.1416; // Constante que no cambia
var edad = 30; // Variable con alcance global

//Impresión en consola

console.log('Nombre: ' + nombre);
console.log('Edad: ' + edad);
console.log('PI: ' + PI);

//Tipos de datos
let esEstudiante = true;
let calificaciones = [90, 85, 88];
let persona = { nombre: 'Ana', edad: 25 };

//Funciones
function saludar(nombre) {
    return 'Hola, ' + nombre + '!';
}
console.log(saludar('María'));

function suma(a, b) {
    return a + b;
}
console.log('Suma: ' + suma(5, 10));

//Estructuras de control
if (edad > 18) {
    console.log(nombre + ' es mayor de edad.');
}   else {
    console.log(nombre + ' es menor de edad.');
}


for (let i = 0; i < calificaciones.length; i++) {
    console.log('Calificación ' + (i + 1) + ': ' + calificaciones[i]);
}

calificaciones.forEach(function(calificacion) {
    console.log('Calificación: ' + calificacion);
});



