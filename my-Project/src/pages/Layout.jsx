import React from 'react'
import Home from './Home'
import Error404page from './Error404page'
import RegisterPage from './RegisterPage'
import OrderTrack from './OrderTrack'
import Contact from './ContactUS'
import ShopList from './ShopList'
import BlogPage from './Blog'
import WhishList from './WhishList'
import Cart from './Cart'
import About from './AboutUs'
import ProductGrid from './ProductGrid'
import Navbar from '../components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/registerpage' element={<RegisterPage/>}></Route>
                <Route path='/ordertrack' element={<OrderTrack/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/blogpage' element={<BlogPage/>}></Route>
                <Route path='/shoplist' element={<ShopList/>}></Route>
                <Route path='/whishlist' element={<WhishList/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/productgrid' element={<ProductGrid/>}></Route>
                <Route path='/*' element={<Error404page/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout