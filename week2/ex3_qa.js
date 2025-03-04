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

}

const q1 = new Question("How are you?", "Luigi", "2025-03-04");
console.log(q1)

q1.add(a1);
//now q1 has the ans array containing the Answer object a1

q1.add(new Answer("no", "Mario", 5, "2025-03-04"));


q1.add(new Answer("well", "Francesca", 3, "2025-03-05"));
q1.add(new Answer("very well", "Andrea", 7, "2025-03-04"));

console.log(q1);


const resFound = q1.find("Francesca");

console.log("Answers found: ", resFound);


const resFilterDate = q1.filterAfterDate("2024-03-04")
console.log("RETURN 2: ", resFilterDate);



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