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

// EXTNDIENDO INTERFACES | HERENCIA DE INTERFACES
interface CursoEDteam extends ICurso {
    costo: number;
}

const primerCurso: CursoEDteam = {
    nombre: "TypeXript desde Cero",
    identificador: 200,
    costo: 100
}

console.log("Curso EdTeam", primerCurso);
