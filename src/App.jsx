import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import numberBrm from 'number-brm'
import { Route, Routes } from 'react-router-dom'
import Wishlist from './pages/wishlist/Wishlist'
import Cart from './pages/cart/Cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>

     </Routes>
    </>
  )
}

export default App
