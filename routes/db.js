const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

// Db import

const Datastore = require("nedb");


// token

const api_key = // insert your api key here (type: string)

// create a local database

const database = new Datastore({
    filename: "./databse.db",
    timestampData: true
    // you can declare your preferences here
});

// Get ready the database


database.loadDatabase((err) => {
    console.log("NeDB is successfully working");
    if (err) throw err
    
    
});


// Get the api data and save it into the local database


fetch(// insert your api url as first parameter here. type (type: string)
    ,{
    method: "GET",
    
})
.then((res) => {
    res.json().then(async (data) => {

        await database.insert(JSON.stringify(data))
        console.log("data has been added");
        


        // Write datas on console

        // console.log(data);

      
});

})

.catch((err) => {
    console.error("Error is: ",err);
});




module.exports = router;



