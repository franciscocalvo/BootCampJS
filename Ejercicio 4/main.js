let nombre = "Francisco Javier";
let apellidos = " Calvo Serrano";

const nombreCompleto= () => nombre+apellidos;

function imprimir(valor){
    console.log(valor)
}

function infinityNumber(...values){
    values.forEach(element => {
        console.log(element)
    })
}

console.log(nombreCompleto())
imprimir(true)

infinityNumber(1,2,3,4,5)