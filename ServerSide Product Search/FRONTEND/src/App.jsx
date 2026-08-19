import { Routes, Route } from "react-router-dom"
import Products from "./Products"
import ProductDetails from "./ProductDetails"



const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
