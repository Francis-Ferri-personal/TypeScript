"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
var decoradores_1 = require("../decoradores");
var Curso = /** @class */ (function () {
    function Curso(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
        this.prueba = ";";
    }
    //@enumerable(true)
    Curso.prototype.getPrueba = function () {
        return this.prueba;
    };
    Curso.prototype.lectura = function () {
        // algun algoritmo
    };
    Object.defineProperty(Curso.prototype, "id", {
        get: function () {
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
    __decorate([
        decoradores_1.enumerable(false) // no aparece como propiedad
    ], Curso.prototype, "getPrueba", null);
    __decorate([
        decoradores_1.readonly
    ], Curso.prototype, "lectura", null);
    Curso = __decorate([
        decoradores_1.Entidad({
            clave: "CURSO"
        })
    ], Curso);
    return Curso;
}());
exports.Curso = Curso;
