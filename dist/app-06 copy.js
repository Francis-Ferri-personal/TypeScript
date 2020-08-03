"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// HERENCIA DE CLASES
// Modificadores de acceso protected
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Curso;
}());
// >>>
var Escuela = /** @class */ (function () {
    function Escuela(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
        this.cursos = [];
    }
    Object.defineProperty(Escuela.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Escuela.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Escuela.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return Escuela;
}());
var EscuelaDigital = /** @class */ (function (_super) {
    __extends(EscuelaDigital, _super);
    // Funciones
    function EscuelaDigital(_id, _nombre, _paginaWeb) {
        var _this = _super.call(this, _id, _nombre) || this;
        _this._paginaWeb = _paginaWeb;
        return _this;
    }
    Object.defineProperty(EscuelaDigital.prototype, "paginaWeb", {
        get: function () {
            return this._paginaWeb;
        },
        set: function (paginaWeb) {
            this._paginaWeb = paginaWeb;
        },
        enumerable: false,
        configurable: true
    });
    return EscuelaDigital;
}(Escuela));
var miEscuela = new Escuela(1, "EDteam");
var escuela = new EscuelaDigital(1, "EDteam", "ed.team");
var cursoJS = new Curso(1, "JavaScript");
var cursoTS = new Curso(2, "TypeSript");
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
// Acceder a los atributos publicos
// MODO LECTURA
//cursoJS.nombre = "JavaScript desde cero"; // Esto funciona como el SET
console.log("nombre cursoJS", cursoJS.nombre); // Leyendo estado Get
//cursoJS.id = 20; // Aisgnacion SET
console.log("escuela", escuela);
console.log("Nombre Escuela: ", escuela.nombre);
console.log("Escuela pagina Web", escuela.paginaWeb);
