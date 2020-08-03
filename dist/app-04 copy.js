"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// METODOS SET Y GET
// <<< EN EXTREMOP UTIL
var Curso = /** @class */ (function () {
    function Curso(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
    }
    Object.defineProperty(Curso.prototype, "id", {
        get: function () {
            // Permite obtener el estado de "id"
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Curso;
}());
// >>>
var EscuelaDigital = /** @class */ (function () {
    // Atributos
    // Funciones
    function EscuelaDigital(_nombre, cursos) {
        if (cursos === void 0) { cursos = []; }
        this._nombre = _nombre;
        this.cursos = cursos;
    }
    Object.defineProperty(EscuelaDigital.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
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
cursoJS.nombre = "JavaScript desde cero"; // Esto funciona como el SET
console.log("nombre cursoJS", cursoJS.nombre); // Leyendo estado Get
cursoJS.id = 20; // Aisgnacion SET
console.log("escuela", escuela);
console.log("Nombre Escuela: ", escuela.nombre);
