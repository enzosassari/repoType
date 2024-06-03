/**Implemente un algoritmo de ordenamiento con el metodo BubbleSort, para que ordene un arreglo 
 * de longitud N en orden descendente */

import * as rls from "readline-sync" ;

let dimension : number = rls.questionInt ("Ingrese dimension del arreglo : "); 
let arregloN : number [] = new Array (dimension) ;
let i : number; 

function cargaArreglo (arreglo : number []){
    let i : number ; 
    for (i = 0; i<arreglo.length ; i++){
        arreglo[i] = Math.floor(Math.random()*100); 
    }
}

function arregloDescendente(arreglo : number[]) : number[]{
    let numActual = 0;
    let numSiguiente = 0;
    let i : number;
    let j : number; 

    for(let i = 0; i < arreglo.length; i++){
        for(let j = 0; j < arreglo.length - 1; j++){            
        numActual = arreglo[j];
        numSiguiente = arreglo[j + 1];
            if(numActual < numSiguiente){
                    arreglo[j] = numSiguiente;
                    arreglo[j+1] = numActual;
            }
        }
    }
    console.log (" ------------------------------------------- ") ;
    console.log("Arreglo ordenado: " + arreglo);
    return arreglo;
}

cargaArreglo (arregloN); 

for (i = 0; i< arregloN.length ; i++){
    console.log (" ------------------------------------------- ") ;
    console.log ("El numero de la posicion : ", i , "es : ",arregloN[i]); 
}

arregloDescendente (arregloN);