import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const formHandler = async (e) => {
    e.preventDefault();

    if (search) {
      const response = await fetch(`http://localhost:5000/products?search=${search}`)
      const res = await response.json()
      setData(res)
    } else {
      setData([])
    }



  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = data.filter((product) => {
    const searchValue = search.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div className="products-page">
      <div className="search">
        <form onSubmit={formHandler}>
          <input
            type="text"
            placeholder="Search Products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {loading ? (
        <h1>Loading....</h1>
      ) : (
        filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} onClick={() => {
              navigate(`/product/${product.id}`)
            }} className="product-card">
              <h1>{product.name}</h1>
              <h3>₹{product.price}</h3>
              <p>{product.category}</p>
            </div>
          ))
        ) : (
          <h2>No products found.</h2>
        ))}


    </div>
  );
};

export default Products;
