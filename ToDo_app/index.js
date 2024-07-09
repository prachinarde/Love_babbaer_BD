const express = require("express");
const app = express();

// load congig
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json req body

app.use(express.json());

//import routes for todo api

const todoRoutes = require("./Routes/toDo");

//mount the todo api routes

app.use("/api/v1", todoRoutes);

//start

app.listen(PORT, ()=>{
    console.log(`Server stareted successfully at ${PORT} `)
})

//connect to the db

const dbConnect = require("./config/databse");
dbConnect();

//defauylt route
app.get("/", (req, res)=>{
    res.send(`<h1>This is Home Page </h1>`);
})