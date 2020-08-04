"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = exports.mostarPropiedades = exports.analizarClase = void 0;
function analizarClase(clase) {
    console.log("Clave", clase.clave);
}
exports.analizarClase = analizarClase;
function mostarPropiedades(clase) {
    for (var prop in clase.prototype) {
        console.log("Propiedad", prop);
    }
}
exports.mostarPropiedades = mostarPropiedades;
var PI = 3.14;
exports.PI = PI;
