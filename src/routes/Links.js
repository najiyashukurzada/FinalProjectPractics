import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../pages/addProduct/addProduct'
import Detail from '../pages/detail/detail'
import Product from '../pages/products/product'

const Links = () => {
  return (
    <Routes>
        <Route path='/' element={<AddProduct/>}/>
        <Route path='/products' element={<Product/>} />
        <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  )
}

export default Links