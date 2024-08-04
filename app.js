import dotenv from 'dotenv'
dotenv.config()
import express from "express"; // ES6 syntax
import connectDB from "./db/connectdb.js";
import web from "./routes/web.js";
import path from "path";
const app = express();
const port = process.env.PORT || "8001"; //initalizing port
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017"

import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// database connection
connectDB(DATABASE_URL);

//while creating Doc. when we do console.log(req.body) it print undefined, to solve this we use urlencoded
//extended: false means value can be string or array
//extended: true means value can be any type
// Middleware to parse URL-encoded data
app.use(express.urlencoded({extended:true}))

// Serve static files from the "public/uploads" directory
// app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

//static file
app.use(express.static('public'));
// app.use('/adminPanel', express.static('uploads'));

// Ensure the static file serving middleware is set up correctly
app.use('/adminPanel', express.static(path.join(__dirname, 'uploads')));

// app.use(): This is used to set up middleware functions in an Express application.
//  Middleware functions are functions that have access to the request object (req), 
// the response object (res), and the next middleware function in the application’s request-response cycle.



// load routes 
app.use('/', web)

//set template engine
app.set("view engine","ejs");


app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`)
})
