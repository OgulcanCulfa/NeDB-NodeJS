const db = require("./utils/dbSetup");
const fetch = require("node-fetch");

//Get ready the db

db.loadDatabase((err) => {
  if (err) throw err;
  console.log("NeDB is successfully working");
});

// Get the api data and save it into the local database

fetch(
  // insert your api url as first parameter here. type (type: string)
  {
    method: "GET",
  }
)
  .then((res) => {
    res.json().then(async (data) => {
      await database.insert(JSON.stringify(data));
      console.log("data has been added");
    });
  })
  .catch((err) => {
    console.log(err);
  });
