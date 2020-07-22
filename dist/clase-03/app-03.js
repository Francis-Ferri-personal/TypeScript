"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ASERCIIONES DE TIPO EN TYPESCRIPT | Type Assertions
var codigoCurso;
codigoCurso = 100;
var numeroCurso = codigoCurso;
console.log("Numero curso", numeroCurso);
var estudiante = {};
estudiante.nombre = "Jorge";
estudiante.curso = "TypeScript";
console.log("Estudianrte ", estudiante);
var estudiante3 = "{\"nombre\": \"Juan\", \"curso\": \"JavaScript\"}";
var objetoEstudiante = JSON.parse(estudiante3);
console.log("Objeto Estudiante", estudiante3);
console.log("Objeto Estudiante", objetoEstudiante);
var calificacionFerri = JSON.parse('{"materia": "Matematica", "nota": 10}');
console.log(calificacionFerri);
calificacionFerri.nota += 10; // Las aaserciones no realizan transformaciones de los tipos de datos
console.log(calificacionFerri);
