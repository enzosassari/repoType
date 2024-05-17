/* Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
 El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario*/


import * as rls from "readline-sync";

let arregloA : number [] = new Array (6);
let arregloB : number [] = new Array (6);
let arregloSuma : number[] = new Array (6);

for (let i = 0; i < arregloA.length; i++){        //INGRESO DE NUMEROS EN EL ARREGLO A 
    arregloA[i] = rls.questionInt ("Ingrese numero de la posicion: "+ i +" del arreglo A: ");
}

for (let i = 0; i < arregloB.length; i++){           //INGRESO DE NUMEROS EN EL ARREGLO B
    arregloB[i] = rls.questionInt ("Ingrese numero de la posicion: "+ i +" del arreglo B: ");
}

for (let i = 0; i < arregloA.length; i++) {                      //SUMO Y ASIGNO A LA POSICION DEL ARREGLO SUMA
    arregloSuma[i] = (arregloA[i] + arregloB[i]);
}

for (let i = 0; i < arregloSuma.length ; i++){                  // MUESTRO LOS RESULTADOS
    console.log ("La suma de los indices de los arreglos A y B: " , i, "es : ", arregloSuma[i]);
}
