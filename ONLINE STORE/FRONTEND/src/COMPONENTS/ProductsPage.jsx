import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const [Data, setData] = useState([]);
  const [Brand, setBrand] = useState("");
  const [Category, setCategory] = useState("");
  const [Loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [ShowModel, setShowModel] = useState(false);

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

  const user = location.state?.user;

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
            ShowModel
              ? "blur-sm flex flex-wrap gap-4 justify-center  "
              : "flex flex-wrap gap-4 justify-center "
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
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
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

      {ShowModel ? (
        <div className="fixed inset-0 flex items-center  justify-center z-50">
          <div className="bg-white p-6 rounded shadow-xl/20 w-96">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold mb-4">Add Product</h2>
              <button
                className="bg-red-500 hover:bg-red-700 cursor-pointer text-white font-bold py-1 px-3 rounded"
                onClick={() => setShowModel(false)}
              >
                Close
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Product Name"
                />
              </div>
              <div className="mb-4">
                <select className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="">All Brands</option>
                  {brands.map((brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ">
                  <option value="">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="price"
                  type="number"
                  placeholder="Product Price"
                  step="0.01"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="details"
                >
                  Details
                </label>
                <input
                  type="text"
                  name="details"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="details"
                  placeholder="Product Details"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {user.role === "admin" ? (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              setShowModel(true);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Add Product
          </button>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default ProductsPage;
