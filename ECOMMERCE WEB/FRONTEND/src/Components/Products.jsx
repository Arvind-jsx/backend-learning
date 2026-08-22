import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const [Data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Page, setPage] = useState(1);
    const [TotalPages, setTotalPages] = useState(1);
    const [Search, setSearch] = useState("");
    const [Category, setCategory] = useState("");
    const [Price, setPrice] = useState("");
    const [Rating, setRating] = useState("");
    const [Sort, setSort] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams({ page: Page });
                if (Search) params.set("search", Search);
                if (Category) params.set("category", Category);
                if (Price) params.set("maxPrice", Price);
                if (Rating) params.set("minRating", Rating);
                if (Sort) params.set("sort", Sort);

                const response = await fetch(
                    `http://localhost:5000/products?${params}`,
                );
                if (!response.ok) throw new Error("Could not load products");
                const res = await response.json();
                setData(res.items);
                setTotalPages(res.totalPages);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [Page, Search, Category, Price, Rating, Sort]);

    const categories = [
        "Electronics",
        "Wearables",
        "Computer Accessories",
        "Home & Kitchen",
        "Footwear",
        "Accessories",
        "Bags",
        "Sports & Fitness",
        "Personal Care",
        "Home Appliances",
        "Home & Office",
        "Furniture",
        "Clothing",
        "Toys",
        "Pet Supplies",
    ];

    const formHandler = (e) => {
        e.preventDefault();
        setPage(1);
    };

    return (
        <div className="products-page">
            <div className="header">
                <form
                    onSubmit={(e) => {
                        formHandler(e);
                    }}
                >
                    <input
                        type="text"
                        placeholder="Search..."
                        value={Search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <button
                        type="submit"
                    >
                        Search
                    </button>
                </form>
                <div className="category">
                    <select id="category" value={Category} onChange={(e) => { setCategory(e.target.value); setPage(1); }}>
                        <option value="" disabled>
                            Select Category
                        </option>
                        {categories.map((cat) => (
                            <option value={cat} key={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="priceFilter">
                    <select id="price" value={Price} onChange={(e) => { setPrice(e.target.value); setPage(1); }}>
                        <option value="" disabled>
                            Price
                        </option>
                        <option value="50">Under $50</option>
                        <option value="100">Under $100</option>
                        <option value="150">Under $150</option>
                        <option value="200">Under $200</option>
                    </select>
                </div>
                <div className="rating">
                    <select id="rating" value={Rating} onChange={(e) => { setRating(e.target.value); setPage(1); }}>
                        <option value="" disabled>
                            Rating
                        </option>
                        <option value="5">★ 5</option>
                        <option value="4">★ 4 </option>
                        <option value="3">★ 3</option>
                        <option value="2">★ 2</option>
                        <option value="1">★ 1</option>
                    </select>
                </div>
                <div className="sort">
                    <select id="sort" value={Sort} onChange={(e) => { setSort(e.target.value); setPage(1); }}>
                        <option value="Default">Default</option>
                        <option value="low-to-high">Price: Low → High</option>
                        <option value="high-to-low">Price: High → Low</option>
                    </select>
                </div>
            </div>
            <div className="products-container">
                {Loading ? (
                    <h1>loading...</h1>
                ) : Data.length > 0 ? (
                    Data.map((product) => (
                        <div key={product.id} className="product-card" onClick={() => {
                            navigate(`product/${product.id}`)
                        }} >
                            <div className="product-info">
                                <h2>{product.title}</h2>
                                <h4>@{product.brand}</h4>
                                <div className="rate-info">
                                    <h3>{product.price}</h3>
                                    <h3>{product.rating}</h3>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1>No Products Found</h1>
                )}
            </div>
            <div className="pageNation">
                <button
                    onClick={() => {
                        setPage(Page - 1);
                    }}
                    disabled={Page === 1}
                >
                    prv
                </button>
                <h1>{Page}</h1>
                <button
                    onClick={() => {
                        setPage(Page + 1);
                    }}
                    disabled={Page >= TotalPages}
                >
                    next
                </button>
            </div>
        </div>
    );
};

export default Products;
