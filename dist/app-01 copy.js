"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
escuela.agregarCurso("TypeScript");
console.log("escuela", escuela);
console.log("Nombre Escuela: ", escuela.nombre);
escuela.agregarCurso("JavaScript");
console.log("Cursos Escuela: ", escuela.cursos);
