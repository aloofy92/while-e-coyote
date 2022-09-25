const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter a number: "));

let l = 1;


while(l <= 100){
   console.log(l);
   l = l * 2;
}
console.log(l);

// or

while(l <= 100){
   console.log(l);
   l *= 2;
}
console.log(l);
