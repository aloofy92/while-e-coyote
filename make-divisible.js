const prompt = require('prompt-sync')({sigint: true});

let x = Number(prompt("Enter a number for x: "));
let y = Number(prompt("Enter a number for y: "));



while(x % y != 0 ){
   console.log(x + " ");
   x = x + 1;
}
console.log("X is divisible" + "by y");
