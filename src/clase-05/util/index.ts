
export {analizarClase, mostarPropiedades, PI};

function analizarClase(clase: any){
    console.log("Clave", clase.clave);
}

function mostarPropiedades(clase: any){
    for(let prop in clase.prototype){
        console.log("Propiedad", prop);
    }
}

const PI = 3.14;