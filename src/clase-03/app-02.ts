export {} // Module en TS
// ALias para tipos de datos en TypeScript PARTE ||
let curso: string = "TypeScript";

// CUrsos codigo: JavaScript = 1, TypeScript = 2
//curso = 1; // javaScript
type Curso = string | number;

let cursoNuevo: Curso;
cursoNuevo = "JavaScript";
cursoNuevo = 2;

function getCurso(): Curso{
    //return "JavaScript";
    return 1;
};

let cursos: string[] = ["JavaScript", "TypeScript"];
let cursos2: Curso[] = ["JavaScript", "TypeScript", 1];

console.log("cursos", cursos);
console.log("cursos2", cursos2);
