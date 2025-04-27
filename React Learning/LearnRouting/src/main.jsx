import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './Product.jsx'
import { ProductReview } from './Product.jsx'
import Xyz from './Xyz.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<App />} /> */}
      {/* <Route path='/app' element={<Xyz />} /> */}
      <Route path='/' element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/products" >
        <Route index element={<h1>Products</h1>} />
        <Route path="product1" element={<h1>Product 1</h1>} />
        <Route path=":productId" Component={Product} />
        <Route path=":productId/:reviewId/" Component={ProductReview} />
      </Route>
      {/*<Route path='/test'>
        <Route index element={<div>test Component</div>}/>
        <Route path='1' element={<div>test 1</div>}/>
        <Route path='2' element={<div>test 2</div>}/>
        <Route path='3' element={<div>test 3</div>}/>
        <Route path='4' element={<div>test 4</div>}/>
        <Route path='*' element={<div>not found</div>}/>
      </Route> */}
      <Route path='*' element={<div>404 not found</div>} />
    </Routes>
  </BrowserRouter>
)
