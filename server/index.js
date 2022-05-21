const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

var corsOptions = {
  origin: "http://localhost:8080",
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
const db = require("./models");
db.sequelize.sync();

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "shoppifydb",
});

// app.get("/homedata", (req, res) => {
//   dbConnection.query("SELECT * FROM sellers", (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(result[0]);
//   });
// });

app.post("/addbuyer", (req, res) => {
  const { name, emailid, password } = req.body;
  dbConnection.query(
    `INSERT INTO buyers VALUES('${emailid}',0,5,'${name}','null','${password}')`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send("suceeesful");
    }
  );
});

app.post("/addseller", (req, res) => {
  const { name, emailid, password } = req.body;
  dbConnection.query(
    `INSERT INTO sellers VALUES('${emailid}',0,5,'${name}','null','${password}')`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send("suceeesful");
    }
  );
});

app.post("/addtocart", (req, res) => {
  const { title, index, name } = req.body;
  dbConnection.query(
    `INSERT INTO carts VALUES(5,'seller',0,'jdsd','${name}','${title}','${index}')`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send("suceeesful");
    }
  );
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
