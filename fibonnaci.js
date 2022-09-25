const prompt = require('prompt-sync')({sigint: true});

let number = Number(prompt("Enter a number: "));

let d = 0;
let e = 1;
let f;
let i = 0;
  
  for(let i = 2; i <= d; i++) {
    d = d + e;
    d = e;
    e = f;
  }