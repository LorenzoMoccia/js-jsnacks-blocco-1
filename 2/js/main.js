"use strict";

 
let numberArray = [];
let sum = 0;


for(let i = 0; i < 10; i++){
    let numberArray = Number(prompt("Inserisci un numero!"));
    numberArray.push(numberArray);

    console.log(numberArray);
}

for(let i = 0; i < numberArray.length; i++){
    sum += numberArray[i];
}

console.log(sum);