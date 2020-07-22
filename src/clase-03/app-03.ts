export {};

// ASERCIIONES DE TIPO EN TYPESCRIPT | Type Assertions
let codigoCurso: any;
codigoCurso = 100;

let numeroCurso: number = <number>codigoCurso;

console.log("Numero curso", numeroCurso);


//type estudiante =  {nombre: string, curso: string};
type Estudiante = {nombre: string, curso: string};
let estudiante = <Estudiante>{};
estudiante.nombre = "Jorge";
estudiante.curso = "TypeScript";

console.log("Estudianrte ", estudiante);

let estudiante3 = `{"nombre": "Juan", "curso": "JavaScript"}`;
let objetoEstudiante: Estudiante = <Estudiante>JSON.parse(estudiante3);
console.log("Objeto Estudiante", estudiante3);
console.log("Objeto Estudiante", objetoEstudiante);

type Calificacion = {materia: string, nota: number};

let calificacionFerri: Calificacion = <Calificacion>JSON.parse('{"materia": "Matematica", "nota": 10}'); 
console.log(calificacionFerri);
calificacionFerri.nota += 10; // Las aaserciones no realizan transformaciones de los tipos de datos
console.log(calificacionFerri);
