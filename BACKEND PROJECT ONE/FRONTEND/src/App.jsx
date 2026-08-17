import { Route, Routes } from "react-router-dom"
import MoviesPage from "./MoviesPage.jsx"
import MovieDetails from "./MovieDetails.jsx"


const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<MoviesPage />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </>
  )
}

export default App
