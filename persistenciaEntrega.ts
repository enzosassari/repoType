/**Guarda la información de los siguientes arrays:
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
en un archivo “precios.txt” y “productos.txt” respectivamente.
Luego recupera la información en forma de array nuevamente y mostrala por consola.*/

import * as fs from 'node:fs';
//import fs from 'node:fs' ;

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];

let i : number ;
let contenidoPrecios : string = ""; 
let contenidoProductos : string = ""; 

for (i=0; i<precios.length; i++){ //guardo los precios en una variable string 
    contenidoPrecios += precios[i]+" "; 
}

for(i=0; i<productos.length;i++){  //guardo los productos en una variable string 
   contenidoProductos += productos[i]+" "; 
}

fs.writeFileSync ('./precios.txt', contenidoPrecios); // guardo precios 
fs.writeFileSync ('./productos.txt', contenidoProductos); //guardo productos

//Leer informacion de txt
const datosPrecios : string = fs.readFileSync ('./precios.txt' , 'utf8');
const datosPrecios2 : string = datosPrecios.trim(); //saca los espacios de adelante y de atras
const arrayPrecios : string[] = datosPrecios2.split(" "); //creo un arreglo y cada item de la cadena se corta con los "espacios" " "  
console.log(arrayPrecios); //muestro el arreglo

const datosProductos : string = fs.readFileSync ('./productos.txt' , 'utf8');
const datosProductos2 : string = datosProductos.trim(); //saca los espacios de adelante y de atras
const arrayProductos : string[] = datosProductos2.split(" "); //creo un arreglo y cada item de la cadena se corta con los "espacios" " "  
console.log(arrayProductos); //muestro el arreglo


