import { Route, Routes } from "react-router-dom"
import Products from "./Components/Products"
import ProductDetails from "./Components/ProductDetails"

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Products />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
