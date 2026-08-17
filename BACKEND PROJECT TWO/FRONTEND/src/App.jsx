import { Route, Routes } from "react-router-dom"
import VideosPage from "./VideosPage"
import VideoDetails from "./VideoDetails"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<VideosPage />} />
        <Route path="/videos/:id" element={<VideoDetails />} />
      </Routes>
    </>
  )
}

export default App
