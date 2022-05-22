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
  const id = Math.floor(Math.random() * 1000 + 1);
  dbConnection.query(
    `INSERT INTO buyers VALUES('${emailid}',0,${id},'${name}','null','${password}')`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send("suceeesful");
    }
  );
});

app.post("/addseller", (req, res) => {
  const id = Math.floor(Math.random() * 1000 + 1);
  const { name, emailid, password } = req.body;
  dbConnection.query(
    `INSERT INTO sellers VALUES('${emailid}',0,${id},'${name}','null','${password}')`,
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
  const id = Math.floor(Math.random() * 1000 + 1);
  dbConnection.query(
    `INSERT INTO carts VALUES(${id},'seller',0,'jdsd','${name}','${title}','${index}')`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send("suceeesful");
    }
  );
});

app.post("/addorder", (req, res) => {
  const { itemnumber, buyerid, sellerid, buyername, address, index, title, name } = req.body;
  const id = Math.floor(Math.random() * 1000 + 1);
  dbConnection.query(
    `INSERT INTO orders VALUES(${id},${itemnumber},${buyerid},0,${sellerid},'${title}','${name}','${index}','Godown','${address}')`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send("suceeesful");
    }
  );
});

app.get("/getcart", (req, res) => {
  dbConnection.query("SELECT * FROM carts", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.get("/getorder", (req, res) => {
  dbConnection.query("SELECT * FROM orders", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
