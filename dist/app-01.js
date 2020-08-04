"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curso_1 = require("./models/curso");
var escuela_digital_1 = require("./models/escuela-digital");
var util_1 = require("./util");
var typeScript = new curso_1.Curso(1, "TypeScript");
util_1.analizarClase(curso_1.Curso);
var esciela = new escuela_digital_1.EscuelaDigital();
util_1.analizarClase(escuela_digital_1.EscuelaDigital);
util_1.mostarPropiedades(curso_1.Curso);
console.log("Valor de PI", util_1.PI);
