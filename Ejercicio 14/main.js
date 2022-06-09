//1-----------
let myLunch =  ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];
let pizza = myLunch.indexOf("🍕");
myLunch.fill("🍺",pizza+1,myLunch.length);
console.log(myLunch);

//2-----------3
let myFood = ["🍕","🍕","🍍","🍕","🍕"]

for (let index = 0; index < myFood.length; index++) {
    if(myFood[index] === "🍍"){
        myFood.splice(index,index);
    }   
}
console.log(myFood);

//4-----------
let myFruit = ["🍓","🍋","🍓","🍋","🍓"];
myFruit.forEach(fruit => {
    if(fruit === "🍓"){
        myFruit[myFruit.indexOf(fruit)] = "🍄";
    }
});
console.log(myFruit)

//5-----------
let mySpicy = ["🌶️","🥛","🌶️","🥛","🌶️","🥛"];

for (let index = 0; index < mySpicy.length; index++) {
    if(mySpicy[index] === "🌶️"){
        mySpicy.splice(index+1,0,"🥵");
    };
}
console.log(mySpicy);

//6----------
let myJack = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];

for (let index = 0; index < myJack.length-1; index++) {
    if(myJack[index] === "🎴" && myJack[index+1] === "🎴"){
        myJack.splice(index+1,0,"🃏");
    };
};
console.log(myJack);