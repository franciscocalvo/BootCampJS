function noMoreA(frase) {
    for (let i = 0; i < frase.length; i++) {
        frase = frase.replace("a", "o");
        frase = frase.replace("A", "O");
    }
    console.log(frase);
}

function itsAca(frase) {
    if(frase.startsWith('aca')){
        console.log("Empieza por aca")
    }else{
        console.log("No empieza por aca")
    }
}
function sayHello(saludo){
    console.log(saludo.slice(0));
    console.log(saludo.repeat(3));
    console.log(saludo.toUpperCase());
}


noMoreA("Hasta Mañana");
itsAca("academia");
itsAca("escuela");
sayHello("Hola");
