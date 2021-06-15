const Datastore = require("nedb");
require('dotenv').config();

const api_key = process.env.API_KEY; // create .env file in root directory. Then insert your api key in .env file (type: string)

// create a local database
const database = new Datastore({
  filename: "./test.db",
  timestampData: true,
  // you can declare your preferences here
});

// Get ready the database

module.exports = database;
