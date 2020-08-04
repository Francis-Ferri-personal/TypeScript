export{Entidad, enumerable, readonly};

function Entidad(config: any) {
    console.log("Entidad", config);
    return function(target: any){
        // Dinamicamente asignamos la propiedad clave a la clase
        target.clave = config.clave;
        console.log('Target', target);
    }
}
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}