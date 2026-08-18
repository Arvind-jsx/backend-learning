import { Route, Routes } from "react-router-dom"
import Projects from "./Projects"
import ProductsDeatils from "./ProductsDeatils"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/products/:id" element={<ProductsDeatils />} />
      </Routes>
    </>
  )
}

export default App
