import { Route, Routes } from "react-router-dom"
import Movies from "./components/Movies"
import MoviesDetails from "./components/MoviesDetails"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="movie/:id" element={<MoviesDetails />} />
      </Routes>
    </>
  )
}

export default App
