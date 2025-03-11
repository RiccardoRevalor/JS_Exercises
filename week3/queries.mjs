import sqlite from 'sqlite3';

// Open the sqlite db
const db_filename = 'qa.sqlite';
const db = new sqlite.Database(db_filename, (err) => {  //err is the error object
    //this is the callback function that is called when the db is opened and executed in case of errors
    if (err) {
        //error in opening the db
        console.error("Error, cannot open the database: ", err.message);
    }
});

//We wanna query 
const sql = "SELECT * FROM user";


//users array
let users = [];

//db.all is a method that takes a sql query and a callback function as arguments and returns ALL the rows that match the query
//args: sql string, optional parameters, callback function or just string, callback
//for just retrieving the first row, use db.get
//fdor SQL statement not returning a value (ex INSERT, DELETE, UPDATE) use db.run
db.all(sql, (err, rows) => {
    //here we can handler the result, in this callback!

    //error case
    if (err){
        console.error("Error in SQL query: ", err.message);
    } else {
        //success case
        //iterate on retrieved rows
        rows.forEach((row) => {
            console.log(row);   //print the row
            users.push(row);    //add the row to the users

            //here I can schedule other callbacks or operations
        })
    }
})

//IMPORTANT!!
//FOR db.run(sql, [params], function (err) { } ) -> you CANNOT use arrow functions, because you need to access the 'this' object.
//If you use arrow functions with db.run, this will be undefined and you will get an error.

//Parametric Queries:
//You can use ? as a placeholder for parameters in the query string
//Never use string concatenation to build a query string, always use parametric queries to avoid SQL injection attacks!

//Example of parametric query
let email = "francesca.russo@polito.it";
const sql2 = "SELECT * FROM user WHERE email = ?";
let res = db.get(sql2, [email], (err, row) => {
    if (err) {
        console.error("Error in SQL query: ", err.message);
    } else {
        console.log("\n\n")
        console.log(row);
    }
})
