"use strict";
/* Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
 El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rls = __importStar(require("readline-sync"));
let arregloA = new Array(6);
let arregloB = new Array(6);
let arregloSuma = new Array(6);
for (let i = 0; i < arregloA.length; i++) { //INGRESO ELEMENTOS EN EL ARREGLO A y B, y los sumo
    arregloA[i] = rls.questionInt("Ingrese numero de la posicion: " + i + " del arreglo A: ");
    arregloB[i] = rls.questionInt("Ingrese numero de la posicion: " + i + " del arreglo B: ");
    arregloSuma[i] = (arregloA[i] + arregloB[i]);
}
for (let i = 0; i < arregloSuma.length; i++) { // MUESTRO LOS RESULTADOS
    console.log("La suma de los indices de los arreglos A y B: ", i, "es : ", arregloSuma[i]);
}
