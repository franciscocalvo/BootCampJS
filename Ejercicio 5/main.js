function coinFlip(){
    flip = Math.round(Math.random());

    if(flip == 0){
        return "Cara";
    }else{
        return "Cruz";
    }
}

console.log(coinFlip());

