import './App.css';
import { Route, Routes } from 'react-router-dom'; 
import NavBar from './components/Navbar';
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";
import ProductPage from "./components/ProductPage";
import CheckoutForm from "./components/ChecKoutForm";
import About from "./components/About";
import ContactUS from "./components/ContactUs";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Success from "./components/Success";

    function App() {
      return (
            <>
             <NavBar />
             <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productList" element={<ProductList /> } />
              <Route path='/shoppingCart' element={<ShoppingCart />} />
              <Route path='/checkoutForm' element={<CheckoutForm />} />
              <Route path='/about' element={<About />} />
              <Route path='/contactus' element={<ContactUS />} />
              <Route path='/privacy' element={<Privacy/>} />
              <Route path='/terms' element={<Terms/>} />
              <Route path='/success' element={<Success/>} />
              <Route path="/products/:id" element={<ProductPage />} /> {/* Dynamic route */}
             </Routes>
             <Footer /> 
           </> 
  );
}

export default App;
