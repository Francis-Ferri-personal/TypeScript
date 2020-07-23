export {}; // Para evitar problemas de reuso
// MIEMBRSO PUBLICOS

class Curso {
    id: number; // public
    nombre: string; // public
    constructor(id: number, nombre: string){
        this.id = id;
        this.nombre = nombre; 
    }
}

class EscuelaDigital{
    // Atributos
    public nombre: string;
    public cursos: Curso[] = [];

    // Funciones
    constructor(nombre: string){
        this.nombre = nombre;
    }

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
cursoJS.nombre = "JavaScript desde cero";
cursoJS.id = 20;


console.log("escuela", escuela);
console.log("Nombre Escuela: ",escuela.nombre);

