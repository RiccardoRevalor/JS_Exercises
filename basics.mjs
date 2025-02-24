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