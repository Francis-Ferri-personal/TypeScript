export {}; // Para evitar problemas de reuso
// MIEMBRSO PRIVADO

// <<< EN EXTREMOP UTIL
class Curso {
    constructor(private id: number, private nombre: string){}
}

// >>>

class EscuelaDigital{
    // Atributos

    // Funciones
    constructor(private nombre: string, private cursos: Curso[] = []){}

    agregarCurso(curso: Curso){
        this.cursos.push(curso);
    }
} 

const escuela = new EscuelaDigital("EDteam");
let cursoJS = new Curso(1, "JavaScript");
let cursoTS = new Curso(2, "TypeSript");
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
// Acceder a los atributos publicos
//cursoJS.nombre = "JavaScript desde cero";
//cursoJS.id = 20;


console.log("escuela", escuela);
// console.log("Nombre Escuela: ",escuela.nombre);

