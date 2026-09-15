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
  res.status(201).json({ message: "User Created Successfully", user: user });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (storedUser) =>
      storedUser.email === email && storedUser.password === password,
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  res.json({
    message: "Login successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      balance: user.balance,
    },
  });
});

app.get("/profile", (req, res) => {
  const email = req.query.email;
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

const paymentsValidation = (req, res, next) => {
  const amount = Number(req.body.amount);
  const userid = Number(req.body.userId);

  if (!Number.isFinite(amount) || amount <= 0 || !Number.isInteger(userid)) {
    const err = new Error("Please Fill The Inputs");
    err.status = 400;
    return next(err);
  }
  next();
};

const errMiddleware = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
};

const transactionHistory = [];

app.post("/payments", paymentsValidation, (req, res) => {
  const senderId = Number(req.body.senderId);
  const receiverID = Number(req.body.userId);
  const amount = Number(req.body.amount);

  const sender = users.find((user) => user.id === senderId);
  const receiver = users.find((user) => user.id === receiverID);

  if (!sender || !receiver) {
    return res.status(404).json({ message: "Sender or receiver not found" });
  }

  if (sender.balance < amount) {
    return res.status(400).json({ message: "Insufficient balance" });
  }

  sender.balance -= amount;
  receiver.balance += amount;

  res.json({ message: "Payment successful" });
  transactionHistory.push({
    senderId: sender.id,
    receiverId: receiver.id,
    amount: amount,
    timestamp: new Date(),
  });
});

app.get("/transactions", (req, res) => {
  const userId = Number(req.query.userId);

  const userHistory = transactionHistory.filter(
    (user) => user.senderId === userId || user.receiverId === userId,
  );
  res.json(userHistory);
});

app.use(errMiddleware);

app.listen(5000, () => {
  console.log("server is running.....");
});
