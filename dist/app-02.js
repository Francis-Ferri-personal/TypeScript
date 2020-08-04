"use strict";
// Usar unalibreria externa JavaScript
// package.json
// npm init -y
// npm install lodash --save 
Object.defineProperty(exports, "__esModule", { value: true });
// npm i @types/lodash --save-dev
var lodash_1 = require("lodash");
function numeroAleatorio(a, b) {
    return lodash_1.random(a, b);
}
console.log("Numero aleatorio 1 - 10", numeroAleatorio(1, 10));
// ya no se necesita envolverla dentro de una funcion
console.log("random", lodash_1.random(1, 10));
console.log("random", lodash_1.random(50, 80));
