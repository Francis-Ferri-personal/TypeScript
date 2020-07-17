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
