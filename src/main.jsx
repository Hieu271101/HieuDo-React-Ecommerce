import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import Product from './pages/Product/Product.jsx'
import ProductListPage from './pages/Product/ProductListPage.jsx'
import Cart from './pages/Cart/Cart.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductListPage />} />
          <Route path="/product/*" element={<Product />} />
          <Route path="/cart/" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
