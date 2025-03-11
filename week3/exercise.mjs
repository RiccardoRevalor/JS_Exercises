import dayjs from 'dayjs';
import sqlite from 'sqlite3';

// Open the sqlite db
const db_filename = 'qa.sqlite';
const db = new sqlite.Database(db_filename, (err) => {
    if (err) {
        //error in opening the db
        console.error("Error, cannot open the database: ", err.message);
    }
});


//Answer class
function Answer(id, text, email, date, score = 0) {
    this.id = id;
    this.text = text;
    this.email = email;
    this.score = score;
    this.date = dayjs(date);
  }

//Questions class
function Questions(id, text, email, date) {
    this.id = id;
    this.text = text;
    this.email = email;
    this.date = date;

    //retrieve all answers and user email from answer, user tables, matching the questionId
    this.getAns = () => {
        //Promise: objects that soon or later will be rejected or resolved
        //Advantages:
        // - Avoid callback hell
        // - Better error handling
        // - Better readability

        //The constructor of the Promise object takes a executor function as argument
        //The executor function takes two parameters: resolve and reject functions as parameters
        return new Promise((resolve, reject) => {
            const sql = "SELECT answer.*, user.email FROM answer, user WHERE answer.authorId = user.id AND answer.questionId = ?";

            //retrieve all the matching rows from the db
            db.all(sql, [this.id], (err, rows) => {

                //error case
                if (err) {
                    //reject the promise
                    reject(err); //then it's up to the caller to decide what to do with the error
                } else {
                    //success case
                    //create an array of Answer objects and resolve the promise

                    //row: (id, text, authorId, questionId, date, score, email)
                    const res = rows.map((row) => new Answer(row.id, row.text, row.email, row.date, row.score));
                    //res is an array of Answer objects
                    resolve(res);
                }
            });
            
        });

    }

}


function QuestionsList() {
    this.Questions = (id) => new Promise((resolve, reject) => {
        
        const sql = "SELECT question.*, user.email FROM question, user WHERE question.authorId = user.id AND question.id = ?";

        db.get(sql, [id], (err, row) => {

            if (err) {
                reject(err);
            } else {
                if (!row) { //it's the same as checking if row === undefined
                    reject(new Error("No question having id: " + id));
                } else {
                    resolve(new Questions(row.id, row.text, row.email, row.date));
                }
            }
        });
    })
}

//testing

//Create QuestionList object
const ql = new QuestionsList();
//get q1 by calling the Questions method of ql
const q1 = ql.Questions(1)       //get the question with id 1 from the QuestionsList
    .then( (q) => q.getAns())   //get the answers of q1
    .then((res) => {console.log('We have: ', res);})            //print the answers             (resolve)
    .catch((err) => {console.error('Error: ', err)});           //otherwise, print the error    (reject)






//const q1 = new Questions(1, "What is the meaning of life?", "email", "2021-03-01");
//const p = q1.getAns();

//Method chaining with promises, since every method returns a promise
//then is a method that takes a callback function as argument and returns a promise
//then is executed when the promise is resolved
//otherwise, catch is executed when the promise is rejected
p.then((res) => {console.log('We have: ', res);})
.catch((err) => {console.error('Error: ', err)});
