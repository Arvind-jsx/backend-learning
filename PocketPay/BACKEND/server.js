const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const users = [];

// const InputsValidation = (req,res,next)=>{
  
// }

app.post("/signup", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const user = {
    name: name,
    email: email,
    password: password,
  };

  users.push(user);
});

app.listen(5000, () => {
  console.log("server is running.....");
});
