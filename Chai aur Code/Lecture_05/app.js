"use strict"; //  it execute js code in strict environment and treat all js code as modern js code.

let name = "Ashutosh"; 
console.log(name , typeof(name)); 

let age = 22;
console.log(age , typeof(age));

let isMarried = false;
console.log(isMarried , typeof(isMarried));

let address = null;
console.log(address , typeof(address));

let phoneNumber;
console.log(phoneNumber , typeof(phoneNumber));

let mySymbol = Symbol("mySymbol");
console.log(mySymbol , typeof(mySymbol));   

let myBigInt = 1234567890123456789012345678901234567890n;
console.log(myBigInt , typeof(myBigInt));

// null is a standalone value  
// number range is -2^53 to 2^53
// always appen n in bigint value to tell js that this is a big int value.