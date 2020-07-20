export {} // Module en TS
// ALias para tipos de datos en TypeScript
let curso: string = "TypeScript";

// CUrsos codigo: JavaScript = 1, TypeScript = 2
//curso = 1; // javaScript
let cursoNuevo: string | number;
cursoNuevo = "JavaScript";
cursoNuevo = 2;

function getCurso(): string | number{
    //return "JavaScript";
    return 1;
};

let cursos: string[] = ["JavaScript", "TypeScript"];
let cursos2: (string | number)[] = ["JavaScript", "TypeScript", 1];
console.log("cursos", cursos);
console.log("cursos2", cursos2);
