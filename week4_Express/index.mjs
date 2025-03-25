import express from 'express'
import morgan from 'morgan'


//Create an App
const app = express();

//register morgan middleware
//morgan used for logging about requests on the terminal
app.use(morgan("dev")) //remenber to register morgan BEFORE starting the app!


//Start the App
//two params: port number (use a free port), callback that will tell us the App has succesfully started
//app.listen(3001, () => {console.log("App started.")})   //this is just an empty website
//if you do "node index.mjs" now it schedules a new listener and the app is alive until you manually stop it
//Website running on localhost:3001
//However, the server is not responding to any address (Cannot GET / error)
//Also: Failed to load resource: the server responded with a status of 404 (Not Found)

//To create some content we must extend the app by registering handlers to some requests (GET, POST etc...)

//Set handler for HTTP method GET:
//app.method(endpoint, callback handler)
// / is the home adx, link that with a callback (req, res) => request, sent by the client, and response, sent to the client
app.get('/', (req, res) => {
    //the callback is the handler to the method
    res.send("Hello World!") //sen content to the client
    //send method sets the body of the response
})

//Start again the app:
//app.listen(3001, () => {console.log("App started.")})


//Extending Express with Middlewares
//these are middle functions (to usually preprocess data) called for every request
//They can be either inserted on a specific route or used globally for all route

//1. Inserting a middleware on a specific rout: 
//app.method(path, MiddlewareCallBack, (req, res) =>{})

//Static middleware: express.static(root, [paths])
//used to register static file (for ex images)

//create the static directory, and put static files in it
//I created info.txt and I wanna it to be accessible from the endpoint:
//GET http://localhost:3001/info.txt
//Use static middleware for all routes:
app.use(express.static('static')) //the arg is the folder path of the statuc files


//use express.json() middleware required for POST/PUT requests
app.use(express.json())

//Parametric paths
//Useful for having user (of the website) custom resources or static files


//start the app AFTER all the middlewares registrations
app.listen(3001, () => {console.log("App started.")})