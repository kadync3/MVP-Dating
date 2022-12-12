
var express = require("express");
const app = express();
const { Client } = require("pg");
const cors = require('cors')
const connectionString =
  "postgresql://postgres:docker@127.0.0.1:5432/datingusers";
const client = new Client({ connectionString: connectionString });
client.connect();
app.use(cors());
app.use(express.json());
// routes


  app.get("", (req, res) => {
    res.send(JSON.stringify("Hello World"));
  })
  
var userData;
app.get("/users", (req, res) => {

  client.query("SELECT * FROM users").then((result) => {
    res.send(result.rows);
    userData = result.rows;
    console.log(userData);
  });
});


app.post("/users", (req, res) => {
  let newUser = req.body;
  client.query(`INSERT INTO users
  (first_name, last_name,  weight,  age,  height,   gender,  intent)
   VALUES ('${newUser.firstName}', '${newUser.lastName}', '${newUser.weight}', '${newUser.age}', '${newUser.height}', '${newUser.gender}', '${newUser.intent}')`
  )
  .then((result)=>{
    res.send(newUser)
  })
  .catch((err)=>console.error(err.stack))
});

app.delete("/users/:user_id", (req ,res)=>{
  var id = req.params.user_id;
  client.query(`DELETE FROM users WHERE user_id=${id}`)
  .then(result=>{
    res.send('User ' + id + ' has been deleted')
  })
  .catch(err => console.error(err.stack))
});

app.patch("/users/:user_id", (req,res)=>{
  var id = req.params.user_id
  client.query(`UPDATE users SET ${Object.keys(req.body)}='${Object.values(req.body)}'
  WHERE user_id=${id}`
  )
  .then((result) =>res.send(req.body))
  .catch((err) => console.error(err.stack))
});

// listining
app.listen(8000, function () {
  console.log("Listining on port 8000");
});
