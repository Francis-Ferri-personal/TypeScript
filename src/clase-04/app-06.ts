export {}; // Para evitar problemas de reuso
// HERENCIA DE CLASES
// Modificadores de acceso protected

// <<< EN EXTREMOP UTIL
class Curso {
    constructor(private readonly _id: number, private readonly _nombre: string){}

    get id(){
        // Permite obtener el estado de "id"
        return this._id;
    }

    get nombre(){
        return this._nombre
    }

}

// >>>

class Escuela{
    protected cursos: Curso[] = [];
    constructor(protected _id: number, protected _nombre: string){}
    get id(){
        return this._id;
    }
    set id(id: number){
        this._id = id;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre: string){
        this._nombre = nombre;
    }
    agregarCurso(curso: Curso){
        this.cursos.push(curso);
    }
}


class EscuelaDigital extends Escuela{
    // Funciones
    constructor(_id: number,  _nombre: string, private _paginaWeb: string){
        super(_id, _nombre); // Reusar el constructor de la superclase
    }
    get paginaWeb(){
        return this._paginaWeb;
    }
    set paginaWeb(paginaWeb: string){
        this._paginaWeb = paginaWeb;
    }
} 

const miEscuela = new Escuela(1, "EDteam");
const escuela = new EscuelaDigital(1, "EDteam", "ed.team");
let cursoJS = new Curso(1, "JavaScript");
let cursoTS = new Curso(2, "TypeSript");
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
// Acceder a los atributos publicos
// MODO LECTURA
//cursoJS.nombre = "JavaScript desde cero"; // Esto funciona como el SET
console.log("nombre cursoJS", cursoJS.nombre);// Leyendo estado Get


//cursoJS.id = 20; // Aisgnacion SET
console.log("escuela", escuela);
console.log("Nombre Escuela: ",escuela.nombre);
console.log("Escuela pagina Web", escuela.paginaWeb);


