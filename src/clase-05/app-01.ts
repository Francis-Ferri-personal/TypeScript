export {};
// DECORADORES

/* function Entidad(target: any) {
    console.log("Entidad", target);
} */

function Entidad(config: any) {
    console.log("Entidad", config);
    return function(target: any){
        // Dinamicamente asignamos la propiedad clave a la clase
        target.clave = config.clave;
        console.log('Target', target);
    }
}

function enumerable(value: boolean){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        descriptor.enumerable = value;
    }
}

function readonly(target: any, name: any, descriptor: PropertyDescriptor){
    descriptor.writable = false;
    return descriptor;
}

//@Entidad()
@Entidad({
    clave: "CURSO"
})
class Curso{
    prueba: string;
    constructor(private _id: number, private _nombre: string){
        this.prueba = "";
    }

    //@enumerable(true)
    @enumerable(false)// no aparece como propiedad
    getPrueba(){
        return this.prueba
    }

    @readonly
    lectura(){
        // algun algoritmo
    }

    get id(){
        return this._id
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
}

@Entidad({
    clave: "ESCUELA DIGITAL"
})
class EscuelaDigital{

}

function analizarClase(clase: any){
    console.log("Clave", clase.clave);   
}

function mostarPropiedades(clase: any){
    for(let prop in clase.prototype){
        console.log("Propiedad", prop);
        
    }
}

let typeScript = new Curso(1, "TypeScript");
analizarClase(Curso);
// Sobreescritura de la funcion
// Se vuelve una propiedad de solo lectura
//typeScript.lectura = function() {};
let esciela = new EscuelaDigital();
analizarClase(EscuelaDigital);
mostarPropiedades(Curso);