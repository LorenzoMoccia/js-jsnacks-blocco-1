"use strict";

 
let numberArray = [1, 10, 15, 90, 73, 92];
let oddNumberArray = [];
let i = 0;

while(i < numberArray.length){
    if(i % 2 !== 0){
        const oddNumber = numberArray[i];
        oddNumberArray.push(oddNumber);
    }
    
    i++;
}

let sum = 0;

for(let i = 0; i < oddNumberArray.length; i++){
    sum += oddNumberArray[i];
}

console.log(sum);