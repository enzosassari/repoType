"use strict";
/* Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
 El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var arregloA = new Array(6);
var arregloB = new Array(6);
var arregloSuma = new Array(6);
for (var i = 0; i < arregloA.length; i++) { //INGRESO ELEMENTOS EN EL ARREGLO A y B, y los sumo
    arregloA[i] = rls.questionInt("Ingrese numero de la posicion: " + i + " del arreglo A: ");
    arregloB[i] = rls.questionInt("Ingrese numero de la posicion: " + i + " del arreglo B: ");
    arregloSuma[i] = (arregloA[i] + arregloB[i]);
}
for (var i = 0; i < arregloSuma.length; i++) { // MUESTRO LOS RESULTADOS
    console.log("La suma de los indices de los arreglos A y B: ", i, "es : ", arregloSuma[i]);
}
