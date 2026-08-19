import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {

  const [Data, setData] = useState(null)
  const [Loading, setLoading] = useState(true)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {Loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="product-page">
          <button onClick={()=>{
            navigate(-1)
          }}>Back</button>
          <div className="product-card">
            <h1>{Data.name}</h1>
            <h3>₹{Data.price}</h3>
            <p>{Data.category}</p>
          </div>
        </div>

      )}
    </div>
  )
}

export default ProductDetails
