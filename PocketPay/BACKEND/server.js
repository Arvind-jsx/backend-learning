const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const users = [];

const InputsValidation = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;

  if (!name || !email) {
    const err = new Error("Please Input All The Fields");
    err.status = 400;
    return next(err);
  }
  next();
};

const PasswordValidation = (req, res, next) => {
  const pass = req.body.password;
  const MIN_LENGTH = 6;
  if (!pass || pass.length < MIN_LENGTH) {
    const err = new Error("Password Must Be 6 Characters Long");
    err.status = 400;
    return next(err);
  }
  next();
};

app.post("/signup", InputsValidation, PasswordValidation, (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const id = Math.floor(Math.random() * 9000) + 1000;
  const balance = 1000;

  const user = {
    name: name,
    email: email,
    password: password,
    id: id,
    balance: balance,
  };

  users.push(user);
  res.status(201).json({ message: "User Created Successfully" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (storedUser) => storedUser.email === email && storedUser.password === password,
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  res.json({ message: "Login successful", email: user.email });
});

app.get("/profile", (req, res) => {
  const email = req.query.email;
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

const errMiddleware = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
};

app.use(errMiddleware);

app.listen(5000, () => {
  console.log("server is running.....");
});
