const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const signupValidation = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "please fill all the inputs" });
  }

  next();
};

app.post("/signup", signupValidation, (req, res) => {
  console.log(req.body.name);
  console.log(req.body.email);
  res.status(200).json({ message: "signup successful" });
});

app.listen(5000, () => {
  console.log("server is running....");
});
