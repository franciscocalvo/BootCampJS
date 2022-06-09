function SumaTres(a,b,c){
    return a+b+c;
}

function MostrarNombre(){
    let nombre = "Francisco Javier ";
    let apellido1 = "Calvo ";
    let apellido2 = "Serrano";

    return nombre+apellido1+apellido2;
}

function EsMayor(a,b){
    if(a<b){
        return b + " es el mayor";
    }else if(b<a){
        return a +" es el mayor";
    }else{
        return "Son iguales"
    }
}

console.log(SumaTres(2,3,4));
console.log(MostrarNombre());
console.log(EsMayor(6,7));