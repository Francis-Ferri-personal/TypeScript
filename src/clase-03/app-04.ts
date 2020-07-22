export {};

// ENUMERADPS EN TYPESCRIPT

enum Curso  {
    JavaScript,
    TypeSCript,
    Angular
}

let curso: Curso = Curso.TypeSCript;
console.log("curso", curso); // 1
console.log("curso", Curso[curso]); // TypeScipt

// Otro ejemplo
enum Dia {
    Lunes, // i = 0
    Martes, 
    Miercoles, 
    Jueves, 
    Viernes// i = 4 
} 

console.log("Viernes", Dia.Viernes);

enum FinSemana {
    Sabado = 5,
    Domingo // Este se vuelve 6
}

console.log("Sabado", FinSemana.Sabado);
console.log("Domingo", FinSemana.Domingo);
// COntrol sobrte los valores para Enumerados
enum Mes {
    Enero = "Ene",
    Febrero = "Feb",
    Marzo = "Mar",
    Abril = "Abril"
}

console.log("Marzo", Mes.Marzo);


