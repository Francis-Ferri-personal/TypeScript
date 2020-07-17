"use strict";
// Tipos primitivos o tipos basicos
// Boolena
var estadoConectado = true;
var estaInscrito;
estaInscrito = false;
estaInscrito = true;
//estaInscrito = 2; No es valido
function tieneDescuento(curso) {
    if (curso === "typescript")
        return true;
    return false;
}
console.log("tieneDescuento", tieneDescuento("angular"));
// Number
var estudiantes = 100;
// estudiantes = "100"; // Invalido
var cantidadEstudiantes;
cantidadEstudiantes = 120;
function getCantidadEstudiantes(curso) {
    if (curso === "typescript")
        return 100;
    return 0;
}
var inscritosCursoTypeXcript = 100;
// Type: Number, hexadecimales, binarios, octal
var decimal = 10;
var hexadecimal = 0xf00d;
var binario = 10;
var octal = 493; // Solo numeros comprendidos entre 0 y 7
console.log("hexadecimal: ", hexadecimal);
console.log("decimal: ", decimal);
console.log("binario: ", binario);
console.log("octal: ", octal);
// String
var nombre = "Francis";
var apellido = "Ferri";
var nombtreCompleto = nombre + " " + apellido;
console.log("Nombre completo: ", nombtreCompleto);
// STring + ES6 = Tempalte literal
var nombtreCompleto2 = nombre + " " + apellido;
console.log("Nombre completo 2: ", nombtreCompleto2);
var arregloCursos = ["TypeScript", "Angular"];
var mensaje = "\nMi niombre completo es " + nombtreCompleto + " y tengo " + arregloCursos.length + " cursos.\n\u00A1Gracias por asistir!\n";
var mensaje2 = "\n Mi nombre completo es " + nombtreCompleto + ' y tengo ' + arregloCursos.length + ' cursos.\n¡Gracias por asistir!';
console.log("Mensaje", mensaje);
console.log("Mensaje2", mensaje2);
// Tipos especiales de TypeScript
// Tipo: Any
var desconocido; // Seria como: var desconocido
desconocido = 2;
desconocido = "2";
var desconociddo2 = 2; // Cualdquier tipod e contenido JSON, funciones, etc
// Tipo Void
var vacio;
function mostrarContenido(curso) {
    var mensaje = curso ? "Bienvenido al " + curso : "Suscribete al curso";
    console.log("mensaje: ", mensaje);
}
console.log("Mostrar contenido: ", mostrarContenido("typescript")); // undefined
