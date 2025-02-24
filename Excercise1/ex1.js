"use strict";

const name_ = "Luigi De Russis";

//identify initials of the name

const parts = name_.split(" "); //you can al,so use regexes here

console.log(parts);
let initials = "";

for (const part of parts){     //it's normal to declare the loop variable as const if it's not modifiewd inside the loop, this is because at each iteration the var is destroyed and re-initialized
    if (part){ //emopty string is false, so if partg is true it's not an empty string
        initials += part[0].toUpperCase() + ".";
    }
}

//yiu can also do for the loop: for (let i = 0; i < parts.length; i++) {const part = parts[i];}

console.log(initials);