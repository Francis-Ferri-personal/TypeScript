export {}; // Para evitar problemas de reuso

class EscuelaDigital{
    // Atributos
    nombre: string;
    cursos: string[] = [];

    // Funciones
    constructor(nombre: string){
        this.nombre = nombre;
    }

    agregarCurso(curso: string){
        this.cursos.push(curso);
    }
} 

const escuela = new EscuelaDigital("EDteam");
escuela.agregarCurso("TypeScript");
console.log("escuela", escuela);
console.log("Nombre Escuela: ",escuela.nombre);
escuela.agregarCurso("JavaScript");
console.log("Cursos Escuela: ",escuela.cursos);

