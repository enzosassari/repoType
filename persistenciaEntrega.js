"use strict";
/**Guarda la información de los siguientes arrays:
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
en un archivo “precios.txt” y “productos.txt” respectivamente.
Luego recupera la información en forma de array nuevamente y mostrala por consola.*/
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
var precios = [525, 3500, 400, 1999];
var productos = ["Leche", "Galletitas", "Harina", "Queso", "Verduras"];
//-----------FUNCION PARA CARGAR LOS TXT---------------------//
function cargarTxt(arrayCarga) {
    var i;
    var contenidoArray = "";
    for (i = 0; i < arrayCarga.length; i++) {
        contenidoArray += arrayCarga[i] + " "; //guardo los valores del arreglo en una variable string 
    }
    return contenidoArray; //retorno la variable string con los valores del arreglo
}
fs.writeFileSync('./precios.txt', cargarTxt(precios)); // guardo precios en txt usando la funcion 
fs.writeFileSync('./productos.txt', cargarTxt(productos)); //guardo productos en txt usando la funcion 
//---------------FUNCION PARA LEER LOS TXT----------------//
function leerTxt(blocNotas) {
    var datos = fs.readFileSync(blocNotas, 'utf8'); //leo .txt y lo asigno a datos
    var datos2 = datos.trim(); //saca los espacios de adelante y de atras
    var arrayNuevo = datos2.split(" "); //creo un arreglo y cada item de la cadena se corta con los "espacios" " "  
    return arrayNuevo; //retorno arreglo
}
console.log("El arreglo Precios es : ", leerTxt('./precios.txt')); //muestro el txt
console.log("El arreglo Productos es : ", leerTxt('./productos.txt')); //muestro el txt
//----------------- Leer informacion de txt sin modularizacion -------------------//
/**const datosPrecios : string = fs.readFileSync ('./precios.txt' , 'utf8');
const datosPrecios2 : string = datosPrecios.trim(); //saca los espacios de adelante y de atras
const arrayPrecios : string[] = datosPrecios2.split(" "); //creo un arreglo y cada item de la cadena se corta con los "espacios" " "
console.log(arrayPrecios); //muestro el arreglo

const datosProductos : string = fs.readFileSync ('./productos.txt' , 'utf8');
const datosProductos2 : string = datosProductos.trim(); //saca los espacios de adelante y de atras
const arrayProductos : string[] = datosProductos2.split(" "); //creo un arreglo y cada item de la cadena se corta con los "espacios" " "
console.log(arrayProductos); //muestro el arreglo */
