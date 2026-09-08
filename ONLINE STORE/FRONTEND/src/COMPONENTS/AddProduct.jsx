import { useState } from "react";
import { useLocation } from "react-router-dom";

const AddProduct = () => {
    const [ShowModel, setShowModel] = useState(false);
    const location = useLocation();
    const [ProductName, setProductName] = useState("");
    const [Brand, setBrand] = useState("");
    const [Category, setCategory] = useState("");
    const [Price, setPrice] = useState("");
    const [Details, setDetails] = useState("");
    const [Message, setMessage] = useState("");


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

    const user = location.state?.user;

    const HandleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            productName: ProductName,
            brand: Brand,
            category: Category,
            price: Price,
            details: Details
        }

        try {
            const SendData = await fetch("http://localhost:5000/products", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            const res = await SendData.json()
            setMessage(res.message)
            if (res.message === "Product added successfully") {
                setShowModel(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {ShowModel ? (
                <div className="fixed backdrop-blur-sm inset-0 flex items-center  justify-center z-50">
                    <div className="bg-white animate-fade-up p-6 rounded shadow-xl/20 w-96">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-2xl font-bold mb-4">Add Product</h2>
                            <button
                                className="bg-red-500 hover:bg-red-700 cursor-pointer text-white font-bold py-1 px-3 rounded"
                                onClick={() => setShowModel(false)}
                            >
                                Close
                            </button>
                        </div>
                        <form onSubmit={HandleSubmit}>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    value={ProductName}
                                    onChange={(e) => {
                                        setProductName(e.target.value);
                                    }}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Product Name"
                                />
                            </div>
                            <div className="mb-4">
                                <select
                                    value={Brand}
                                    onChange={(e) => {
                                        setBrand(e.target.value);
                                    }}
                                    className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="">All Brands</option>
                                    {brands.map((brand, index) => (
                                        <option key={index} value={brand}>
                                            {brand}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <select
                                    value={Category}
                                    onChange={(e) => {
                                        setCategory(e.target.value);
                                    }}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                >
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
                                    value={Price}
                                    onChange={(e) => {
                                        setPrice(e.target.value);
                                    }}
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
                                    value={Details}
                                    onChange={(e) => {
                                        setDetails(e.target.value);
                                    }}
                                    type="text"
                                    name="details"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="details"
                                    placeholder="Product Details"
                                />
                            </div>
                            {Message && (
                                <p className="text-red-500 text-sm mb-2">{Message}</p>
                            )}
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
        </>
    );
};

export default AddProduct;
