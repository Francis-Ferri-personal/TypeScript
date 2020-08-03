export {}; // Para evitar problemas de reuso
// METODOS SET Y GET


// <<< EN EXTREMOP UTIL
class Curso {
    constructor(private _id: number, private _nombre: string){}

    get id(){
        // Permite obtener el estado de "id"
        return this._id;
    }

    set id(id: number){
        this._id = id;
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre: string){
        this._nombre = nombre;
    }
}

// >>>

class EscuelaDigital{
    // Atributos

    // Funciones
    constructor(private _nombre: string, private cursos: Curso[] = []){}

    set nombre(nombre: string){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
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
cursoJS.nombre = "JavaScript desde cero"; // Esto funciona como el SET
console.log("nombre cursoJS", cursoJS.nombre);// Leyendo estado Get


cursoJS.id = 20; // Aisgnacion SET
console.log("escuela", escuela);
console.log("Nombre Escuela: ",escuela.nombre);

