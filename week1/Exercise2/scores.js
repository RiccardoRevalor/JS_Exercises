"use strict";

let scores =  [1, -1, 0, 2];
let NN = 0; //number of negative scores that are deleted

let rounded_avg = 0;

//eliminate the negative scores
for (let i = 0; i < scores.length; i++){
    if (scores[i] < 0){
        scores.splice(i, 1); //remove 1 element starting from index i without replacement
        NN++;
    }
}

//eliminate the 2 lowest scores
let scores_sorted = scores.sort();
scores_sorted.splice(0, 2); //remove 2 items starting from index 0 without replacement

//calculate average
let sum = scores_sorted.reduce((a, b) => a+b);
rounded_avg = Math.round(sum / scores_sorted.length);

console.log("ROUNDED AVG: " + rounded_avg);