"use strict";

 
const peopleParty = ["Lorenzo", "Marco", "Alice", "Alessia"];
const username = prompt("Qual'è il tuo nome?");

let auth = false;


for(let i; i < peopleParty.length; i++){
    if(username === peopleParty[i]){
        auth = true;
    }
}

if(auth){
    console.log("Benvenuto alla festa!");

}
else{
    console.log("Fuori dalle palle!");
}