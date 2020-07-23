"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MIEMBRSO PUBLICOS
var Curso = /** @class */ (function () {
    function Curso(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return Curso;
}());
var EscuelaDigital = /** @class */ (function () {
    // Funciones
    function EscuelaDigital(nombre) {
        this.cursos = [];
        this.nombre = nombre;
    }
    EscuelaDigital.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return EscuelaDigital;
}());
var escuela = new EscuelaDigital("EDteam");
var cursoJS = new Curso(1, "JavaScript");
var cursoTS = new Curso(2, "TypeSript");
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
// Acceder a los atributos publicos
cursoJS.nombre = "JavaScript desde cero";
cursoJS.id = 20;
console.log("escuela", escuela);
console.log("Nombre Escuela: ", escuela.nombre);
