import { Routes, Route } from "react-router-dom";
import Sign_up from "./Pages/Sign_up";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/Profile";
import HistoryPage from "./Pages/HistoryPage";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Sign_up />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
    </>
  );
};

export default App;
