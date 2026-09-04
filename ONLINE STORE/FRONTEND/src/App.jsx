import { Route, Routes } from "react-router-dom"
import Sign_UP from "./COMPONENTS/Sign_UP"
import ProductsPage from "./COMPONENTS/ProductsPage"
import ProductsDetails from "./COMPONENTS/ProductsDetails"

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Sign_UP />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
      </Routes>
    </div>
  )
}

export default App
