import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const ProductsDetails = () => {

  const [product, setProduct] = useState(null);
  const [Loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const FetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/product/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    FetchProduct();
  }, [id]);

  if (Loading) {
    return <h1 className="text-2xl font-bold">Loading...</h1>;
  }

  return (
    <div className="flex flex-col gap-3.75 justify-center items-center h-screen">
      <button onClick={() => navigate(-1)} className="bg-blue-500 cursor-pointer absolute top-2.5 left-2.5 text-white px-4 py-2 rounded hover:bg-blue-600">
        Back
      </button>
      <h1 className="text-2xl font-bold">ProductsDetails</h1>
      {product && (
        <div className="border border-gray-300 rounded p-4 mb-4">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-lg font-semibold">Brand: {product.brand}</p>
          <p className="text-md">Category: {product.category}</p>
          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
          <p className="text-gray-600">{product.details}</p>
        </div>
      )}

    </div>
  )
}

export default ProductsDetails
