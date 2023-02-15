
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import './App.css';
import Home from './Component/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './Component/Product';
import Productss from './Component/Productss';
import Contact from './Component/Contact Us/contact';
import About from './Component/About Us/About';
import CartPage from './Component/CartPage';
import { CartProvider } from 'react-use-cart'
  
function App() {
  return (
    <>
    <CartProvider>
    <Navbar/>
    <Routes>
    <Route  path='/cart' element={<CartPage/>}/>
     <Route  path='/' element={<Home/>}/>
     <Route  path='/product' element={<Product/>}/>
     <Route  path='/product/:id' element={<Productss/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/about' element={<About/>}/>
     </Routes>
     <Footer/>
     </CartProvider>
     </>
  ); 
}

export default App;
