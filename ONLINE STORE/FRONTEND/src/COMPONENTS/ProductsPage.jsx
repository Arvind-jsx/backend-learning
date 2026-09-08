import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProduct from "./AddProduct";

const ProductsPage = () => {
  const [Data, setData] = useState([]);
  const [Brand, setBrand] = useState("");
  const [Category, setCategory] = useState("");
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/products?cat=${Category}&brand=${Brand}`,
        );
        const res = await response.json();
        setData(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, [Brand, Category]);


  const brands = [
    "BrewMaster",
    "DermaPure",
    "FitTech",
    "FlexFit",
    "FlexiSpace",
    "HydroFlow",
    "HyperGlide",
    "KeyCraft",
    "Lumina",
    "OralTech",
    "Outbound",
    "SoundPulse",
    "Stride",
    "Venture",
    "ZenLiving",
  ];

  const categories = [
    "Beauty & Personal Care",
    "Electronics",
    "Fitness",
    "Footwear",
    "Furniture",
    "Home & Lighting",
    "Home Decor",
    "Kitchen Appliances",
    "Kitchenware",
    "Luggage & Bags",
    "Sports & Outdoors",
    "Wearables",
  ];

  return (
    <div className="flex flex-col p-2 gap-2">
      <div className=" flex  flex-row justify-center gap-2 p-2  ">
        <select
          className=" border rounded p-0.5 cursor-pointer "
          value={Brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <select
          className=" border rounded p-0.5 cursor-pointer  "
          value={Category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {Loading ? (
        <h1 className="text-center text-2xl font-bold">Loading...</h1>
      ) : (
        <div
          className={
               "flex flex-wrap gap-4 justify-center "
          }
        >
          {Data.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  navigate(`product/${item.id}`);
                }}
                className="border cursor-pointer shadow-md hover:scale-105 duration-300 ease-out w-57.5 flex flex-col items-start gap-2.25 rounded-lg p-3"
              >
                <h2 className="text-lg text-[14px] font-bold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex gap-2 items-center">
                  <h4 className="text-lg text-gray-600 bg-gray-200 w-fit py-0.5 px-1.5 rounded text-[10px] font-bold">
                    {item.category}
                  </h4>
                  <h4 className="text-lg text-gray-700 bg-gray-300 rounded py-0.5 px-1.5 text-[10px] font-bold">
                    @{item.brand}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <AddProduct />

    </div>
  );
};

export default ProductsPage;
