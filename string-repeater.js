const prompt = require('prompt-sync')({sigint: true});

//strng that stays the same
let basestring = "abc";

//string that I want to add to
let repeatString = "";

while(repeatString.length <= 10){
   repeatString = repeatString + basestring;
   console.log(repeatString);
}
// or console.log(repestString += baseString); 