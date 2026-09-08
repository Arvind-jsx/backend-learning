const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "AuraSound Wireless Headphones",
    brand: "SoundPulse",
    category: "Electronics",
    price: 129.99,
    details:
      "Over-ear bluetooth headphones featuring active noise cancellation and a 30-hour battery life.",
  },
  {
    id: 2,
    name: "ErgoDesk Pro Chair",
    brand: "FlexiSpace",
    category: "Furniture",
    price: 249.5,
    details:
      "Ergonomic mesh office chair equipped with adjustable lumbar support and 3D armrests.",
  },
  {
    id: 3,
    name: "TrailBlazer Running Shoes",
    brand: "Stride",
    category: "Footwear",
    price: 89.95,
    details:
      "Lightweight, breathable trail running shoes designed with high-traction rubber outsoles.",
  },
  {
    id: 4,
    name: "ThermalGrip Stainless Tumbler",
    brand: "HydroFlow",
    category: "Kitchenware",
    price: 24.99,
    details:
      "Double-wall vacuum insulated 32oz water bottle that keeps beverages cold for up to 24 hours.",
  },
  {
    id: 5,
    name: "Luminary Mechanical Keyboard",
    brand: "KeyCraft",
    category: "Electronics",
    price: 109.0,
    details:
      "Compact 75% hot-swappable mechanical keyboard with RGB backlighting and tactile switches.",
  },
  {
    id: 6,
    name: "PulseFit Smart Fitness Tracker",
    brand: "FitTech",
    category: "Wearables",
    price: 59.99,
    details:
      "Water-resistant fitness tracker with real-time heart rate monitoring, sleep analysis, and GPS tracking.",
  },
  {
    id: 7,
    name: "AromaMist Essential Oil Diffuser",
    brand: "ZenLiving",
    category: "Home Decor",
    price: 34.5,
    details:
      "Ultrasonic cool mist diffuser featuring 7 ambient LED light colors and automatic shut-off.",
  },
  {
    id: 8,
    name: "BaristaPro Espresso Machine",
    brand: "BrewMaster",
    category: "Kitchen Appliances",
    price: 299.0,
    details:
      "Compact 15-bar pump espresso maker with built-in steam wand for velvety milk froth.",
  },
  {
    id: 9,
    name: "Nomad Travel Backpack 35L",
    brand: "Venture",
    category: "Luggage & Bags",
    price: 79.99,
    details:
      "Durable, water-resistant carry-on backpack featuring a padded 15.6-inch laptop compartment.",
  },
  {
    id: 10,
    name: "GlowSkin Sonic Facial Cleanser",
    brand: "DermaPure",
    category: "Beauty & Personal Care",
    price: 45.0,
    details:
      "Silicone facial cleansing brush utilizing high-frequency sonic vibrations for deep pore cleansing.",
  },
  {
    id: 11,
    name: "Apex Precision Gaming Mouse",
    brand: "HyperGlide",
    category: "Electronics",
    price: 49.99,
    details:
      "Ultra-lightweight wireless gaming mouse with 26,000 DPI optical sensor and customizable buttons.",
  },
  {
    id: 12,
    name: "EcoLight Solar Camping Lantern",
    brand: "Outbound",
    category: "Sports & Outdoors",
    price: 19.99,
    details:
      "Collapsible LED camping lantern powered by integrated solar panels or USB quick-charge.",
  },
  {
    id: 13,
    name: "VelvetGlow Dimmable Desk Lamp",
    brand: "Lumina",
    category: "Home & Lighting",
    price: 39.95,
    details:
      "Modern touch-controlled LED desk lamp with 5 color modes and built-in wireless charging pad.",
  },
  {
    id: 14,
    name: "SonicShine Electric Toothbrush",
    brand: "OralTech",
    category: "Beauty & Personal Care",
    price: 64.99,
    details:
      "Rechargeable sonic toothbrush with 4 cleaning modes, smart timer, and 3 replacement brush heads.",
  },
  {
    id: 15,
    name: "PeakPerformance Yoga Mat",
    brand: "FlexFit",
    category: "Fitness",
    price: 29.99,
    details:
      "Extra thick 6mm non-slip eco-friendly TPE workout mat with alignment lines and carrying strap.",
  },
];

app.get("/products", (req, res) => {
  const { cat, brand } = req.query;

  const filteredProducts = products.filter(
    (product) =>
      (!cat || product.category === cat) && (!brand || product.brand === brand),
  );

  res.json(filteredProducts);
});

const ProductsValidation = (req, res, next) => {
  const ProductName = req.body.productName;
  const ProductPrice = req.body.price;
  const ProductBrand = req.body.brand;
  const ProductCategory = req.body.category;
  const ProductDetails = req.body.details;

  if (
    !ProductName ||
    !ProductPrice ||
    !ProductBrand ||
    !ProductCategory ||
    !ProductDetails
  ) {
    res.json({ message: "Please fill all the fields" });
    return;
  }
  next();
};

app.post("/products", ProductsValidation, (req, res) => {
  const { productName, brand, category, price, details } = req.body;
  const newProduct = {
    id: products.length + 1,
    name: productName,
    brand: brand,
    category: category,
    price: price,
    details: details,
  };
  products.push(newProduct);
  res.json({ message: "Product added successfully" });
});

app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

const ACCESS_CODE = "ADMIN123";

const NameValidation = (req, res, next) => {
  const Name = req.body.name;
  if (!Name || Name === "") {
    res.json({ message: "Please Put The Name" });
  }
  next();
};

const AccessCodeValidation = (req, res, next) => {
  const Role = req.body.role;
  const AccessCode = req.body.access_code;
  if (Role === "admin" && AccessCode !== ACCESS_CODE) {
    res.json({ message: "Invalid access code" });
  }
  next();
};

app.post("/signup", NameValidation, AccessCodeValidation, (req, res) => {
  res.json({ message: "Sign up successful" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
