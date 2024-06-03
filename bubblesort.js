"use strict";
/**Implemente un algoritmo de ordenamiento con el metodo BubbleSort, para que ordene un arreglo
 * de longitud N en orden descendente */
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var dimension = rls.questionInt("Ingrese dimension del arreglo : ");
var arregloN = new Array(dimension);
var i;
function cargaArreglo(arreglo) {
    var i;
    for (i = 0; i < arreglo.length; i++) {
        arreglo[i] = Math.floor(Math.random() * 100);
    }
}
function arregloDescendente(arreglo) {
    var numActual = 0;
    var numSiguiente = 0;
    var i;
    var j;
    for (var i_1 = 0; i_1 < arreglo.length; i_1++) {
        for (var j_1 = 0; j_1 < arreglo.length - 1; j_1++) {
            numActual = arreglo[j_1];
            numSiguiente = arreglo[j_1 + 1];
            if (numActual < numSiguiente) {
                arreglo[j_1] = numSiguiente;
                arreglo[j_1 + 1] = numActual;
            }
        }
    }
    console.log(" ------------------------------------------- ");
    console.log("Arreglo ordenado: " + arreglo);
    return arreglo;
}
cargaArreglo(arregloN);
for (i = 0; i < arregloN.length; i++) {
    console.log(" ------------------------------------------- ");
    console.log("El numero de la posicion : ", i, "es : ", arregloN[i]);
}
arregloDescendente(arregloN);
