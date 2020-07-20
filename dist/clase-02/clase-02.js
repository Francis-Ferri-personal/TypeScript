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
// Tipo: Never
var never;
function retornaError(error) {
    throw new Error("Erro TypeXcript " + error);
    // Nunca retorna un valor
}
;
// retornaError("valor inesperado");
function cicloInfinito() {
    while (true) {
    }
}
;
// Tipo: Null y Undefined
var variableUndefined = undefined;
var variableNull = null;
function retornarNull() {
    return null;
}
;
function retornarUndefined() {
    return undefined;
}
;
var variableSinValor;
console.log("variableSinValor", variableSinValor);
// Funciones en TypeScript
function saludar(nombre) {
    if (nombre)
        return "Hola " + nombre;
    return "Hola";
}
console.log(saludar(nombtreCompleto));
console.log(saludar());
// Arreglos en TypeScript
var cursosArreglo;
cursosArreglo = ["TypeScript", "Angular"];
// Arreglos con Generics
// Interfaz que soportab un tipo generico
var nombres;
nombres = ["Luis", "Alvaro", "Pepe"];
var arreglo = [2, "cadena", true];
var arregloUnTipo;
arregloUnTipo = [1, 2, 3, 4];
arregloUnTipo = ["1", "2", "3", "4"];
arregloUnTipo = [true, false, false, true];
var arregloVariosTipos;
arregloVariosTipos = [1, "2", true, 4];
var arrayCualquierValor = [1, true, "2"];
// Tuplas
var infoCursos = ["TypeScript", 100];
infoCursos = ["Anular", 200];
var TuplaCurso = ["TypeScript", 150, "08/2019"];
console.log("TuplaCurso", TuplaCurso);
var nuevosInscritos = 10;
console.log("Fecha de inicio", TuplaCurso[2]);
console.log("Total Inscritos", TuplaCurso[1] + nuevosInscritos);
var TuplaTest = ["a", "b"];
var TuplaTemp = ["c", "d"];
TuplaTemp = TuplaTest;
console.log("Tupla Temp: ", TuplaTemp);
TuplaTest[0] = "gato";
console.log("Tupla Temp: ", TuplaTemp);
