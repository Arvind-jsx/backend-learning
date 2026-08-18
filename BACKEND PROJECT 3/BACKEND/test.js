const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "MacBook Air", category: "laptop" },
  { id: 2, name: "Dell Inspiron", category: "laptop" },
  { id: 3, name: "iPhone 15", category: "phone" },
  { id: 4, name: "Samsung S24", category: "phone" },
  { id: 5, name: "Sony Headphones", category: "headphones" },
];

app.get("/products", (req, res) => {
  if (req.query.category) {
    const cat = req.query.category;
    const product = products.filter((product) => product.category === cat);
    res.json(product);
  } else {
    res.json(products);
  }
});

app.get("/products/:id", (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find((product) => product.id === productId);
  res.json(product);
});

app.listen(5000, () => {
  console.log("server is running.....");
});
