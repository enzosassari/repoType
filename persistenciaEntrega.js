"use strict";
/**Guarda la información de los siguientes arrays:
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
en un archivo “precios.txt” y “productos.txt” respectivamente.
Luego recupera la información en forma de array nuevamente y mostrala por consola.*/
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
//import fs from 'node:fs' ;
var precios = [525, 3500, 400, 1999];
var productos = ["Leche", "Galletitas", "Harina", "Queso"];
var i;
var contenidoPrecios = "";
var contenidoProductos = "";
for (i = 0; i < precios.length; i++) { //guardo los precios en una variable string 
    contenidoPrecios += precios[i] + " ";
}
for (i = 0; i < productos.length; i++) { //guardo los productos en una variable string 
    contenidoProductos += productos[i] + " ";
}
fs.writeFileSync('./precios.txt', contenidoPrecios); // guardo precios 
fs.writeFileSync('./productos.txt', contenidoProductos); //guardo productos
//Leer informacion de txt
var datosPrecios = fs.readFileSync('./precios.txt', 'utf8');
var datosPrecios2 = datosPrecios.trim(); //saca los espacios de adelante y de atras
var arrayPrecios = datosPrecios2.split(" "); //creo un arreglo y cada item de la cadena se corta con los "espacios" " "  
console.log(arrayPrecios); //muestro el arreglo
var datosProductos = fs.readFileSync('./productos.txt', 'utf8');
var datosProductos2 = datosProductos.trim(); //saca los espacios de adelante y de atras
var arrayProductos = datosProductos2.split(" "); //creo un arreglo y cada item de la cadena se corta con los "espacios" " "  
console.log(arrayProductos); //muestro el arreglo
