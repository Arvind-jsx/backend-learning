const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    title: "Wireless Bluetooth Speaker",
    category: "Electronics",
    price: 45.99,
    rating: 4.5,
    stock: 120,
    brand: "SonicWave",
    image: "https://unsplash.com",
    description:
      "Portable waterproof speaker with 20 hours of battery life and deep bass performance.",
  },
  {
    id: 2,
    title: "Noise Cancelling Headphones",
    category: "Electronics",
    price: 89.99,
    rating: 4.7,
    stock: 85,
    brand: "SonicWave",
    image: "https://unsplash.com",
    description:
      "Over-ear headphones with active noise cancellation and 30-hour playback.",
  },
  {
    id: 3,
    title: "Smart Fitness Watch",
    category: "Wearables",
    price: 129.99,
    rating: 4.3,
    stock: 60,
    brand: "PulseFit",
    image: "https://unsplash.com",
    description:
      "Tracks heart rate, sleep, and workouts with a 7-day battery life.",
  },
  {
    id: 4,
    title: "4K Action Camera",
    category: "Electronics",
    price: 199.99,
    rating: 4.4,
    stock: 40,
    brand: "ShotPro",
    image: "https://unsplash.com",
    description:
      "Waterproof action camera with 4K recording and image stabilization.",
  },
  {
    id: 5,
    title: "Mechanical Gaming Keyboard",
    category: "Computer Accessories",
    price: 74.99,
    rating: 4.6,
    stock: 95,
    brand: "KeyForge",
    image: "https://unsplash.com",
    description: "RGB backlit mechanical keyboard with hot-swappable switches.",
  },
  {
    id: 6,
    title: "Ergonomic Wireless Mouse",
    category: "Computer Accessories",
    price: 29.99,
    rating: 4.2,
    stock: 150,
    brand: "KeyForge",
    image: "https://unsplash.com",
    description: "Comfort-grip wireless mouse with adjustable DPI settings.",
  },
  {
    id: 7,
    title: "Portable Power Bank 20000mAh",
    category: "Electronics",
    price: 39.99,
    rating: 4.5,
    stock: 200,
    brand: "ChargeMax",
    image: "https://unsplash.com",
    description:
      "High-capacity power bank with fast charging and dual USB ports.",
  },
  {
    id: 8,
    title: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    price: 19.99,
    rating: 4.8,
    stock: 300,
    brand: "HydroLife",
    image: "https://unsplash.com",
    description:
      "Insulated bottle that keeps drinks cold for 24 hours or hot for 12.",
  },
  {
    id: 9,
    title: "Non-Stick Frying Pan Set",
    category: "Home & Kitchen",
    price: 54.99,
    rating: 4.4,
    stock: 70,
    brand: "ChefCraft",
    image: "https://unsplash.com",
    description: "3-piece non-stick frying pan set suitable for all stovetops.",
  },
  {
    id: 10,
    title: "Cotton Bath Towel Set",
    category: "Home & Kitchen",
    price: 34.99,
    rating: 4.6,
    stock: 110,
    brand: "SoftHome",
    image: "https://unsplash.com",
    description: "Set of 4 ultra-absorbent 100% cotton bath towels.",
  },
  {
    id: 11,
    title: "Running Shoes",
    category: "Footwear",
    price: 64.99,
    rating: 4.3,
    stock: 80,
    brand: "StrideX",
    image: "https://unsplash.com",
    description: "Lightweight running shoes with breathable mesh upper.",
  },
  {
    id: 12,
    title: "Leather Wallet",
    category: "Accessories",
    price: 24.99,
    rating: 4.5,
    stock: 130,
    brand: "UrbanEdge",
    image: "https://unsplash.com",
    description: "Slim genuine leather wallet with RFID blocking technology.",
  },
  {
    id: 13,
    title: "Polarized Sunglasses",
    category: "Accessories",
    price: 27.99,
    rating: 4.4,
    stock: 90,
    brand: "SunShade",
    image: "https://unsplash.com",
    description:
      "UV400 protection sunglasses with a lightweight polarized lens.",
  },
  {
    id: 14,
    title: "Backpack for Laptops",
    category: "Bags",
    price: 49.99,
    rating: 4.6,
    stock: 100,
    brand: "TravelPro",
    image: "https://unsplash.com",
    description:
      "Water-resistant backpack with padded laptop compartment up to 15.6 inch.",
  },
  {
    id: 15,
    title: "Yoga Mat",
    category: "Sports & Fitness",
    price: 22.99,
    rating: 4.7,
    stock: 160,
    brand: "FlexFit",
    image: "https://unsplash.com",
    description: "Non-slip eco-friendly yoga mat with carrying strap.",
  },
  {
    id: 16,
    title: "Adjustable Dumbbell Set",
    category: "Sports & Fitness",
    price: 149.99,
    rating: 4.5,
    stock: 35,
    brand: "IronCore",
    image: "https://unsplash.com",
    description: "Space-saving adjustable dumbbells from 5 to 50 lbs per hand.",
  },
  {
    id: 17,
    title: "Resistance Bands Set",
    category: "Sports & Fitness",
    price: 15.99,
    rating: 4.3,
    stock: 220,
    brand: "FlexFit",
    image: "https://unsplash.com",
    description:
      "5-piece resistance bands set for strength and mobility training.",
  },
  {
    id: 18,
    title: "Electric Toothbrush",
    category: "Personal Care",
    price: 34.99,
    rating: 4.6,
    stock: 140,
    brand: "BrightSmile",
    image: "https://unsplash.com",
    description: "Rechargeable electric toothbrush with 3 cleaning modes.",
  },
  {
    id: 19,
    title: "Hair Dryer",
    category: "Personal Care",
    price: 42.99,
    rating: 4.2,
    stock: 75,
    brand: "GlowTech",
    image: "https://unsplash.com",
    description: "Ionic hair dryer with multiple heat and speed settings.",
  },
  {
    id: 20,
    title: "Facial Cleansing Brush",
    category: "Personal Care",
    price: 18.99,
    rating: 4.1,
    stock: 105,
    brand: "GlowTech",
    image: "https://unsplash.com",
    description: "Waterproof silicone facial brush for deep pore cleansing.",
  },
  {
    id: 21,
    title: "Ceramic Coffee Mug Set",
    category: "Home & Kitchen",
    price: 21.99,
    rating: 4.7,
    stock: 190,
    brand: "BrewHouse",
    image: "https://unsplash.com",
    description: "Set of 4 handcrafted ceramic coffee mugs, microwave safe.",
  },
  {
    id: 22,
    title: "French Press Coffee Maker",
    category: "Home & Kitchen",
    price: 29.99,
    rating: 4.5,
    stock: 85,
    brand: "BrewHouse",
    image: "https://unsplash.com",
    description: "Borosilicate glass French press with stainless steel filter.",
  },
  {
    id: 23,
    title: "Electric Kettle",
    category: "Home & Kitchen",
    price: 32.99,
    rating: 4.4,
    stock: 95,
    brand: "QuickBoil",
    image: "https://unsplash.com",
    description:
      "1.7L electric kettle with auto shut-off and boil-dry protection.",
  },
  {
    id: 24,
    title: "Robot Vacuum Cleaner",
    category: "Home Appliances",
    price: 249.99,
    rating: 4.3,
    stock: 30,
    brand: "CleanBot",
    image: "https://unsplash.com",
    description: "Smart robot vacuum with app control and automatic charging.",
  },
  {
    id: 25,
    title: "Air Purifier",
    category: "Home Appliances",
    price: 119.99,
    rating: 4.5,
    stock: 50,
    brand: "PureAir",
    image: "https://unsplash.com",
    description:
      "HEPA air purifier for rooms up to 500 sq ft with quiet operation.",
  },
  {
    id: 26,
    title: "Desk Lamp with USB Port",
    category: "Home & Office",
    price: 26.99,
    rating: 4.6,
    stock: 130,
    brand: "BrightHome",
    image: "https://unsplash.com",
    description:
      "LED desk lamp with adjustable brightness and built-in USB charging.",
  },
  {
    id: 27,
    title: "Office Chair",
    category: "Furniture",
    price: 159.99,
    rating: 4.2,
    stock: 25,
    brand: "ComfortSit",
    image: "https://unsplash.com",
    description:
      "Ergonomic mesh office chair with lumbar support and adjustable armrests.",
  },
  {
    id: 28,
    title: "Standing Desk Converter",
    category: "Furniture",
    price: 189.99,
    rating: 4.4,
    stock: 20,
    brand: "ComfortSit",
    image: "https://unsplash.com",
    description:
      "Height-adjustable desk converter for sitting or standing work.",
  },
  {
    id: 29,
    title: "Bookshelf 5-Tier",
    category: "Furniture",
    price: 89.99,
    rating: 4.3,
    stock: 40,
    brand: "HomeCraft",
    image: "https://unsplash.com",
    description: "Modern 5-tier bookshelf with sturdy metal frame.",
  },
  {
    id: 30,
    title: "Memory Foam Pillow",
    category: "Home & Kitchen",
    price: 24.99,
    rating: 4.6,
    stock: 175,
    brand: "SoftHome",
    image: "https://unsplash.com",
    description: "Contour memory foam pillow for neck and shoulder support.",
  },
  {
    id: 31,
    title: "Weighted Blanket",
    category: "Home & Kitchen",
    price: 59.99,
    rating: 4.7,
    stock: 60,
    brand: "SoftHome",
    image: "https://unsplash.com",
    description: "15lb weighted blanket for improved sleep and relaxation.",
  },
  {
    id: 32,
    title: "Smartphone Gimbal Stabilizer",
    category: "Electronics",
    price: 99.99,
    rating: 4.4,
    stock: 45,
    brand: "ShotPro",
    image: "https://unsplash.com",
    description:
      "3-axis gimbal stabilizer for smooth smartphone video recording.",
  },
  {
    id: 33,
    title: "Wireless Charging Pad",
    category: "Electronics",
    price: 19.99,
    rating: 4.3,
    stock: 210,
    brand: "ChargeMax",
    image: "https://unsplash.com",
    description:
      "Fast wireless charging pad compatible with all Qi-enabled devices.",
  },
  {
    id: 34,
    title: "Bluetooth Earbuds",
    category: "Electronics",
    price: 49.99,
    rating: 4.5,
    stock: 160,
    brand: "SonicWave",
    image: "https://unsplash.com",
    description: "True wireless earbuds with touch controls and charging case.",
  },
  {
    id: 35,
    title: "Smart LED Light Strip",
    category: "Electronics",
    price: 27.99,
    rating: 4.4,
    stock: 140,
    brand: "BrightHome",
    image: "https://unsplash.com",
    description: "App-controlled RGB LED strip with music sync feature.",
  },
  {
    id: 36,
    title: "Portable Bluetooth Projector",
    category: "Electronics",
    price: 179.99,
    rating: 4.1,
    stock: 22,
    brand: "ShotPro",
    image: "https://unsplash.com",
    description: "Mini projector with 1080p support and built-in speaker.",
  },
  {
    id: 37,
    title: "Digital Kitchen Scale",
    category: "Home & Kitchen",
    price: 14.99,
    rating: 4.5,
    stock: 250,
    brand: "ChefCraft",
    image: "https://unsplash.com",
    description:
      "Precision digital scale with tare function, up to 5kg capacity.",
  },
  {
    id: 38,
    title: "Cast Iron Skillet",
    category: "Home & Kitchen",
    price: 39.99,
    rating: 4.8,
    stock: 100,
    brand: "ChefCraft",
    image: "https://unsplash.com",
    description:
      "Pre-seasoned cast iron skillet ideal for stovetop and oven use.",
  },
  {
    id: 39,
    title: "Cutting Board Set",
    category: "Home & Kitchen",
    price: 17.99,
    rating: 4.4,
    stock: 180,
    brand: "ChefCraft",
    image: "https://unsplash.com",
    description: "Set of 3 bamboo cutting boards in varying sizes.",
  },
  {
    id: 40,
    title: "Denim Jacket",
    category: "Clothing",
    price: 54.99,
    rating: 4.3,
    stock: 70,
    brand: "UrbanEdge",
    image: "https://unsplash.com",
    description:
      "Classic fit denim jacket with button closure and chest pockets.",
  },
  {
    id: 41,
    title: "Graphic Print T-Shirt",
    category: "Clothing",
    price: 14.99,
    rating: 4.2,
    stock: 300,
    brand: "UrbanEdge",
    image: "https://unsplash.com",
    description: "100% cotton t-shirt with modern graphic print design.",
  },
  {
    id: 42,
    title: "Slim Fit Chinos",
    category: "Clothing",
    price: 34.99,
    rating: 4.4,
    stock: 120,
    brand: "UrbanEdge",
    image: "https://unsplash.com",
    description:
      "Stretch-fabric slim fit chinos suitable for casual or office wear.",
  },
  {
    id: 43,
    title: "Wool Blend Scarf",
    category: "Accessories",
    price: 19.99,
    rating: 4.6,
    stock: 95,
    brand: "WarmWear",
    image: "https://unsplash.com",
    description: "Soft wool blend scarf for cold-weather styling.",
  },
  {
    id: 44,
    title: "Leather Belt",
    category: "Accessories",
    price: 22.99,
    rating: 4.5,
    stock: 140,
    brand: "UrbanEdge",
    image: "https://unsplash.com",
    description: "Genuine leather belt with classic buckle design.",
  },
  {
    id: 45,
    title: "Travel Duffel Bag",
    category: "Bags",
    price: 44.99,
    rating: 4.5,
    stock: 65,
    brand: "TravelPro",
    image: "https://unsplash.com",
    description:
      "Durable duffel bag with spacious main compartment and shoe pocket.",
  },
  {
    id: 46,
    title: "Anti-Theft Sling Bag",
    category: "Bags",
    price: 32.99,
    rating: 4.3,
    stock: 110,
    brand: "TravelPro",
    image: "https://unsplash.com",
    description:
      "Compact sling bag with hidden zippers for secure everyday carry.",
  },
  {
    id: 47,
    title: "Kids Building Blocks Set",
    category: "Toys",
    price: 29.99,
    rating: 4.7,
    stock: 150,
    brand: "PlayJoy",
    image: "https://unsplash.com",
    description: "200-piece educational building blocks set for creative play.",
  },
  {
    id: 48,
    title: "Remote Control Car",
    category: "Toys",
    price: 39.99,
    rating: 4.4,
    stock: 85,
    brand: "PlayJoy",
    image: "https://unsplash.com",
    description:
      "High-speed RC car with rechargeable battery and off-road tires.",
  },
  {
    id: 49,
    title: "Puzzle Game 1000 Pieces",
    category: "Toys",
    price: 12.99,
    rating: 4.6,
    stock: 200,
    brand: "PlayJoy",
    image: "https://unsplash.com",
    description:
      "1000-piece jigsaw puzzle featuring a scenic landscape design.",
  },
  {
    id: 50,
    title: "Pet Dog Bed",
    category: "Pet Supplies",
    price: 34.99,
    rating: 4.7,
    stock: 90,
    brand: "PawComfort",
    image: "https://unsplash.com",
    description:
      "Orthopedic memory foam dog bed with removable washable cover.",
  },
];

app.get("/products", (req, res) => {
  const page = Number(req.query.page) || 1;
  const search = String(req.query.search || "").toLowerCase();
  const category = String(req.query.category || "");
  const maxPrice = Number(req.query.maxPrice);
  const minRating = Number(req.query.minRating);
  const sort = String(req.query.sort || "");

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search);
    const matchesCategory = !category || product.category === category;
    const matchesPrice = !maxPrice || product.price <= maxPrice;
    const matchesRating = !minRating || product.rating >= minRating;

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  if (sort === "low-to-high") {
    filteredProducts.sort((first, second) => first.price - second.price);
  }

  if (sort === "high-to-low") {
    filteredProducts.sort((first, second) => second.price - first.price);
  }

  const limit = 10;
  const start = (page - 1) * limit;
  const end = start + limit;
  const items = filteredProducts.slice(start, end);
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / limit));

  res.json({ items, totalPages });
});

app.get("/products/:id", (req, res) => {
  const ProductID = Number(req.params.id);
  const Product = products.find((product) => product.id === ProductID);
  if (Product) {
    res.json(Product);
  } else {
    res.json("product not found");
  }
});

app.listen(5000, () => {
  console.log("server is running.........");
});
