import { Routes, Route } from 'react-router-dom';
import Sign_up from './Pages/Sign_up';
import Login from './Pages/Login';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Sign_up />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
