import { useEffect } from "react"
import { useState } from "react"

const ProductsPage = () => {

  const [Data, setData] = useState([])
  const [Brand, setBrand] = useState("")
  const [Category, setCategory] = useState("")
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products?cat=${Category}&brand=${Brand}`)
        const res = await response.json()
        setData(res)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)

      }
    }
    FetchData()
  }, [Brand, Category])


  return (
    <div className=" flex flex-col p-2 ">
      {Loading ? <h1 className="text-center text-2xl font-bold">Loading...</h1> : <div className="grid grid-cols-4 gap-4">
        {Data.map((item) => {
          return (<div key={item.id} className="border rounded-lg p-4">
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
            <h4 className="text-lg font-bold">{item.category}</h4>
            <h4 className="text-lg font-bold">{item.brand}</h4>
          </div>)
        })}
      </div>}
    </div>
  )
}

export default ProductsPage
