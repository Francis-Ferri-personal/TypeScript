export {};
import {Curso} from "./models/curso";
import {EscuelaDigital} from "./models/escuela-digital";
import {analizarClase, mostarPropiedades, PI} from "./util"

let typeScript = new Curso(1, "TypeScript");
analizarClase(Curso);
let esciela = new EscuelaDigital();
analizarClase(EscuelaDigital);
mostarPropiedades(Curso);
console.log("Valor de PI", PI);

