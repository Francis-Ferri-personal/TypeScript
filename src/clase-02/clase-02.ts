// Tipos primitivos o tipos basicos
// Boolena
let estadoConectado = true;
let estaInscrito: boolean;

estaInscrito = false;
estaInscrito = true;
//estaInscrito = 2; No es valido

function tieneDescuento(curso: string): boolean {
    if(curso === "typescript")
        return true;
    return false;
} 
console.log("tieneDescuento", tieneDescuento("angular"));


// Number
let estudiantes = 100;
// estudiantes = "100"; // Invalido
let cantidadEstudiantes: number
cantidadEstudiantes = 120;


function getCantidadEstudiantes(curso: string): number{
    if(curso === "typescript")
        return 100;
    return 0;
}

let inscritosCursoTypeXcript: number = 100;


// Type: Number, hexadecimales, binarios, octal
let decimal: number = 10;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o755// Solo numeros comprendidos entre 0 y 7
console.log("hexadecimal: ", hexadecimal);
console.log("decimal: ", decimal);
console.log("binario: ", binario);
console.log("octal: ", octal);

// String
let nombre = "Francis";
let apellido: string = "Ferri";
let nombtreCompleto = nombre + " " + apellido;
console.log("Nombre completo: ", nombtreCompleto);


// STring + ES6 = Tempalte literal
let nombtreCompleto2: string = `${nombre} ${apellido}`;
console.log("Nombre completo 2: ", nombtreCompleto2);
let arregloCursos = ["TypeScript", "Angular"];
let mensaje: string = `
Mi niombre completo es ${nombtreCompleto} y tengo ${arregloCursos.length} cursos.
¡Gracias por asistir!
`;

let mensaje2: string = "\n Mi nombre completo es "+ nombtreCompleto + ' y tengo ' + arregloCursos.length + ' cursos.\n¡Gracias por asistir!'
console.log("Mensaje", mensaje);
console.log("Mensaje2", mensaje2);


// Tipos especiales de TypeScript
// Tipo: Any

let desconocido; // Seria como: var desconocido
desconocido = 2; 
desconocido = "2";
let desconociddo2: any = 2; // Cualdquier tipod e contenido JSON, funciones, etc


// Tipo Void
let vacio: void;

function mostrarContenido(curso: string): void{
    const mensaje = curso? `Bienvenido al ${curso}` : "Suscribete al curso";
    console.log("mensaje: ",mensaje);
}

console.log("Mostrar contenido: ", mostrarContenido("typescript"));  // undefined

// Tipo: Never
let never: never;
function retornaError(error: string): never{
    throw new Error("Erro TypeXcript " + error);
    // Nunca retorna un valor
};

// retornaError("valor inesperado");

function cicloInfinito(): never {
    while(true){

    }
};


// Tipo: Null y Undefined
let variableUndefined: undefined = undefined; 
let variableNull: null = null;

function retornarNull(): null {
    return null;
};

function retornarUndefined(): undefined{
    return undefined;
};

let variableSinValor;
console.log("variableSinValor", variableSinValor);

// Funciones en TypeScript
function saludar(nombre?: string): string{
    if(nombre)
        return "Hola " + nombre;
    return "Hola";
}

console.log(saludar(nombtreCompleto));
console.log(saludar());

// Arreglos en TypeScript
let cursosArreglo: string[];
cursosArreglo = ["TypeScript", "Angular"];

// Arreglos con Generics
// Interfaz que soportab un tipo generico
let nombres: Array<string>
nombres = ["Luis", "Alvaro", "Pepe"];

let arreglo = [2,"cadena",true];

let arregloUnTipo: string[] | number[] | boolean[];
arregloUnTipo = [1,2,3,4];
arregloUnTipo = ["1","2","3","4"];
arregloUnTipo = [true, false, false, true];

let arregloVariosTipos: (string | number | boolean)[];
arregloVariosTipos = [1, "2", true, 4];

let arrayCualquierValor: any[] = [1, true, "2"];

// Tuplas
let infoCursos: [string, number] = ["TypeScript", 100];
infoCursos = ["Anular", 200];

let TuplaCurso: [string, number, string] = ["TypeScript", 150, "08/2019"];
console.log("TuplaCurso", TuplaCurso);
let nuevosInscritos = 10;


console.log("Fecha de inicio", TuplaCurso[2]);
console.log("Total Inscritos", TuplaCurso[1] + nuevosInscritos);


let TuplaTest: [string, string] = ["a", "b"];
let TuplaTemp: [string, string] = ["c", "d"];

TuplaTemp = TuplaTest;
console.log("Tupla Temp: ", TuplaTemp);
TuplaTest[0] = "gato";
console.log("Tupla Temp: ", TuplaTemp);

