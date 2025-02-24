"use strict" ;

let msg = "hello world"; //var is similar to let but the declaration has hoisting, so the declaration will be moved up in the file
//it's clearer to just use let and const
//variables are just pure references, const variables doesn't prevent the value from being changed, it just prevents the reference from being changed
//const is a constant reference, not a constant value
console.log(msg); 

//ex
//I can do:
const list = [1,2];
//I cannot modify the reference, but I can perform operations on the reference
//for ex I can add elements to the list
list.push(3);
console.log(list);

//strings
let s = "hello";
//strings are immutable, so I cannot change the value of a string
//s[0] = "H"; //this will throw an error if in strict mode, otherwise it will just ignore the operation
//I can however reassign the value of the string
s = "Hello";
console.log(s);
let s_upper = s.toUpperCase();
console.log(s_upper);
let s_lower = s.toLowerCase();
console.log(s_lower);