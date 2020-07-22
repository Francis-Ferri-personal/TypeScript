// INTERFACES EN TYPESCRIPT
interface ICurso {
    nombre: string;
    identificador?: number;

}

let cursoTypeScript: ICurso = {
    nombre: "TypeScript",
    identificador: 1
}

cursoTypeScript = {
    nombre: "JavaScript",
    identificador: 2
}

let curso2: ICurso;
curso2 = {
    nombre: "Angular"
}

curso2 = {
    nombre: "TyypeScript",
    identificador: 100
}

console.log("Curso TyppeScript", cursoTypeScript);
