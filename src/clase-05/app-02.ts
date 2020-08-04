// Usar unalibreria externa JavaScript
// package.json
// npm init -y
// npm install lodash --save 
import {random} from "lodash";

function numeroAleatorio(a: number, b: number){
    return random(a,b);
}
console.log("Numero aleatorio 1 - 10", numeroAleatorio(1,10));

// ya no se necesita envolverla dentro de una funcion
console.log("random", random(1,10));