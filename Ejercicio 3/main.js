//String
var cadena = "Hola";
//Number
var numero=32;
//Boolean
var veracidad = true;
//Nulo
var nulo = null;
//Undefined
var sinValor;
//Symbol
const simbolo = Symbol("Hola")

//Array
var myArray = [cadena,numero,veracidad,nulo,sinValor,simbolo]

//Funcion

var impresora = function(array){
    for(i=0;i<myArray.length;i++){
        console.log(typeof myArray[i])
    }
}

impresora(myArray)