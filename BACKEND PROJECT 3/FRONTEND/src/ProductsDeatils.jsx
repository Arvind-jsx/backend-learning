import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductsDeatils = () => {

    const [Data, setData] = useState(null)
    const [Loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/products/${id}`)
                const res = await response.json()
                setData(res)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()

    }, [id])
    return (
        <div className="product-details-page">
            {Loading ? (
                <h1>Loading....</h1>
            ) : Data ? (
                <div className="product-details-container">
                    <div className="product-details-card">
                        <h1 className="product-details-name">{Data.name}</h1>
                        <div className="product-details-category">
                            <span>{Data.category}</span>
                        </div>
                        <button className="back-button" onClick={() => window.history.back()}>
                            ← Back to Products
                        </button>
                    </div>
                </div>
            ) : (
                <h1>Product not found</h1>
            )}
        </div>
    )
}

export default ProductsDeatils
