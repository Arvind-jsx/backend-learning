import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const ProductDetails = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`)
        if (!response.ok) throw new Error("Could not load product")

        const result = await response.json()
        if (typeof result === "string") throw new Error("Product not found")

        setData(result)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])


  return (
    <div>
      {loading ? (
        <p className="details-message">Loading product...</p>
      ) : error || !data ? (
        <div className="details-message">
          <p>{error || "Product not found"}</p>
          <button className="back-button" onClick={() => navigate(-1)}>
            Back to products
          </button>
        </div>
      ) : (
        <div className="product-details-page">
          <button className="back-button" onClick={() => navigate(-1)}>
            Back to products
          </button>
          <article className="product-details-card">
            <p className="product-details-category">{data.category}</p>
            <h1>{data.title}</h1>
            <p className="product-details-brand">By {data.brand}</p>
            <p className="product-details-description">{data.description}</p>
            <div className="product-details-meta">
              <strong>${data.price.toFixed(2)}</strong>
              <span>Rating: {data.rating}</span>
              <span>{data.stock} in stock</span>
            </div>
          </article>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
