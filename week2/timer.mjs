//setTimeout(action, time_after)
//setTimeout(console.log("Hello World"), 1000); -> THIS IS WRONG!!!
setTimeout(() => console.log("Hello World"), 1000); //I put () => so the function is not called as soon as the expression is evaluated, it's just stored and called after 1 sec
console.log("This will be executed before");


//Infinite loop: this infinute loop block the timer!!
for (let i = 0; ; i++){
    let a = 2+3;
}
