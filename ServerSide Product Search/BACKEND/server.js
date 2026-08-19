const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "MacBook Air M2",
    category: "laptop",
    price: 99999,
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    category: "laptop",
    price: 149999,
  },
  {
    id: 3,
    name: "Dell Inspiron 15",
    category: "laptop",
    price: 59999,
  },
  {
    id: 4,
    name: "HP Pavilion 15",
    category: "laptop",
    price: 64999,
  },
  {
    id: 5,
    name: "iPhone 15",
    category: "phone",
    price: 69999,
  },
  {
    id: 6,
    name: "iPhone 15 Pro",
    category: "phone",
    price: 129999,
  },
  {
    id: 7,
    name: "Samsung Galaxy S24",
    category: "phone",
    price: 74999,
  },
  {
    id: 8,
    name: "Sony WH-1000XM5",
    category: "headphones",
    price: 29999,
  },
  {
    id: 9,
    name: "JBL Tune 770NC",
    category: "headphones",
    price: 8999,
  },
  {
    id: 10,
    name: "Apple Watch Series 9",
    category: "smartwatch",
    price: 41999,
  },
];

app.get("/products", (req, res) => {
  const searchItem = req.query.search;
  if (searchItem) {
    const filteredProducts = products.filter((product) => {
      const searchValue = searchItem.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue)
      );
    });

    res.json(filteredProducts);
  } else {
    res.json(products);
  }
});

app.get("/products/:id", (req, res) => {
  const ProductId = Number(req.params.id);
  if (ProductId) {
    const product = products.find((product) => product.id === ProductId);
    res.json(product)
  } else {
    res.json(products)
  }
});

app.listen(5000, () => {
  console.log("sever is running.....");
});
