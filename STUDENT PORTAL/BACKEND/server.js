const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const ACCESS_CODE = "STUDENT2026";

const NameValidation = (req, res, next) => {
  const Name = req.body.name;

  if (!Name || Name.trim() === "") {
    return res.status(400).json({ message: "Please put the name" });
  }

  next();
};

const CodeValidation = (req, res, next) => {
  const CODE = req.body.AccessCode;

  if (CODE !== ACCESS_CODE) {
    return res.status(400).json({ message: "Access code is wrong" });
  }

  next();
};

app.post("/studentPortal", NameValidation, CodeValidation, (req, res) => {
  res.status(200).json({
    message: "Access granted",
    data: req.body,
  });
});

app.listen(5000, (req, res) => {
  console.log("server is running....");
});
