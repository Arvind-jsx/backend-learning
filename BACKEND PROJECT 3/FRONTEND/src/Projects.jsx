import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';


const Projects = () => {

  const [Data, setData] = useState([])
  const [Loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("")
  const navigate = useNavigate()

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/products")
        const res = await response.json()
        setData(res)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products?category=${selectedCategory}`);
        const data = await response.json();
        setData(data)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);




  return (
    <>
      <div className="products-page">
        <div className="category">
          <select
            name="category"
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="" disabled>
              SELECT CATEGORY
            </option>
            <option value="laptop">laptop</option>
            <option value="phone">phone</option>
            <option value="headphones">headphones</option>
          </select>
        </div>
        <div className="products-container">
          {Loading ? (
            <h1>Loading....</h1>
          ) : (
            Data.map((product) => (
              <div key={product.id} className="product-card" onClick={()=> navigate(`/products/${product.id}`)}>
                <h1>{product.name}</h1>
                <h3>{product.category}</h3>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default Projects
