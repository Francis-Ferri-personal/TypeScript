"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ENUMERADPS EN TYPESCRIPT
var Curso;
(function (Curso) {
    Curso[Curso["JavaScript"] = 0] = "JavaScript";
    Curso[Curso["TypeSCript"] = 1] = "TypeSCript";
    Curso[Curso["Angular"] = 2] = "Angular";
})(Curso || (Curso = {}));
var curso = Curso.TypeSCript;
console.log("curso", curso); // 1
console.log("curso", Curso[curso]); // TypeScipt
// Otro ejemplo
var Dia;
(function (Dia) {
    Dia[Dia["Lunes"] = 0] = "Lunes";
    Dia[Dia["Martes"] = 1] = "Martes";
    Dia[Dia["Miercoles"] = 2] = "Miercoles";
    Dia[Dia["Jueves"] = 3] = "Jueves";
    Dia[Dia["Viernes"] = 4] = "Viernes"; // i = 4 
})(Dia || (Dia = {}));
console.log("Viernes", Dia.Viernes);
var FinSemana;
(function (FinSemana) {
    FinSemana[FinSemana["Sabado"] = 5] = "Sabado";
    FinSemana[FinSemana["Domingo"] = 6] = "Domingo"; // Este se vuelve 6
})(FinSemana || (FinSemana = {}));
console.log("Sabado", FinSemana.Sabado);
console.log("Domingo", FinSemana.Domingo);
// COntrol sobrte los valores para Enumerados
var Mes;
(function (Mes) {
    Mes["Enero"] = "Ene";
    Mes["Febrero"] = "Feb";
    Mes["Marzo"] = "Mar";
    Mes["Abril"] = "Abril";
})(Mes || (Mes = {}));
console.log("Marzo", Mes.Marzo);
