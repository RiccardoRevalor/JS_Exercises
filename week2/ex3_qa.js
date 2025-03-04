import dayjs from 'dayjs';
//const dayjs = require('dayjs');


function Answer(response, username, score, date) {
    this.response = response;
    this.username = username;
    this.score = score;
    this.date = dayjs(date);
}

const a1 = new Answer("yes", "Luigi", 5, "2025-03-04");
console.log(a1);


function Question(question, username, date){
    this.question = question;
    this.username = username;
    this.date = dayjs(date);
    this.answers = [];

    //when a new question is created, answers are void wo we have an empty array
    //we can populate it as new ans arrive


    //method to add a new ans
    this.add = (answer) => {
        //push into the array
        this.answers.push(answer);
    }


    //find all the ans of a certain user
    this.find = (username) => {
        const res = [];
        for (const ans of this.answers){
            if (ans.username === username){
                res.push(ans);
            }
        }

        return res;
    }


    this.filterAfterDate = (date) => {
        return this.answers.filter(a => a.date.isAfter(dayjs(date)));
    }

    //find usign functional programming
    this.find2 = (name) => {
        return this.answers.filter(a => a.username === name);
    }


    this.listByScore = () => {  //function with not args
        const res = [...this.answers];
        res.sort( (a, b) => {

            if (a1.date < a2.date) return -1;
            else if (a2.date > a1.date) return 1;

            return 0;
        }
        
        );
        return res;

    }


    this.listByDate = function() { //() is equal to function()
        const res = [...this.answers];
        res.sort( (a, b) => a.score - b.score);
        return res;
    }

}

const q1 = new Question("How are you?", "Luigi", "2025-03-04");
console.log(q1)

q1.add(a1);
//now q1 has the ans array containing the Answer object a1

q1.add(new Answer("no", "Mario", 5, "2025-03-04"));


q1.add(new Answer("well", "Francesca", 3, "2025-03-05"));
q1.add(new Answer("very well", "Andrea", 7, "2025-03-04"));

console.log(q1);


const resFound = q1.find2("Francesca");

console.log("Answers found: ", resFound);


const resFilterDate = q1.filterAfterDate("2024-03-04")
console.log("RETURN 2: ", resFilterDate);

//FUNCTIONAL PROGRAMMING

/* ForEach */
const names = q1.answers;
names.forEach( (a) => console.log(a.username));


names.forEach( (a, i) => {console.log(i, a.username)}); //i is incremented automatically!
/*
forEach() invokes your (synchronous) callback function once for each
element of an iterable
– The callback may have 3 parameters
• currentValue: The current element being processed in the array.
• index (Optional): The index of currentValue in the array
• array (Optional): The array forEach() was called upon.
– Always returns undefined and is not chainable
*/

/* every */
/*
Check wether every element satisfies a property, specified in the call back. If the call back returns true for all the elements, every will return true.
At the first false element, every interrupts the iteration and returns false
*/
let a = [1, 2, 3, 4, 5];
let resultBoolean = a.every(x => x < 10);
console.log("Eevery returns: ", resultBoolean);

//check wether all the ans have scores
const all_have_scores = q1.answers.every(ans => ans.score ?? ans.score > 0); //use ?? because is ans.score is undefined you cannot use it
console.log(all_have_scores);

/* map */
/*
map takes an array and builds a new array with the same number of element by transforming each element based on the given rule 
*/

//retrieve just the names of the ans
const answers_names = q1.answers.map(elem => elem.username);    //the result is still an array buit with mapped eleme
console.log("MAP: ", answers_names);

const min_score = Math.min( ... q1.answers.map(e => e.score));
console.log(min_score);


/* filter */
/*
it returns a newly created arrays with filtered elements 

*/

/* reduce */
/* it produces a single value by combining theb array elements usign a specified function */

const scores = q1.answers.map(a => a.score);
const sum_scores = scores.reduce( (a, b) => a+b, 0);  //0: initial value arg
console.log("SCORES SUM: ", sum_scores);

const initials = q1.answers.map(a => a.username[0]).reduce ((str, user) => str + user, ""); //string concat starting from an empty string ("")

console.log("INITIALS: ", initials);



const sorted_score = q1.listByScore();
console.log("SORTED SCORES: ", sorted_score);

function Person (name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person1 = new Person("francesca", 29);
person1.greet();

const person2 = new Person("fulvio", 20);
person2.greet();