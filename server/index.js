const express = require("express");
const app = express();
const cors = require("cors");
const body_parser = require("body-parser");
const dotenv = require("dotenv");
const mysql = require("mysql");

app.use(cors());

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "shoppifydb",
});

const PORT = 3900;
dbConnection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected...");
});


app.get("/homedata", (req, res) => {
  dbConnection.query("SELECT * FROM cart", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result[0]);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on 3900`);
});



