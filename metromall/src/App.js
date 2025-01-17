import './App.css';
import { Route, Routes } from 'react-router-dom'; 
import NavBar from './components/Navbar';
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";
import ProductPage from "./components/ProductPage";
//import { CartProvider } from "./context/CartContext";

    function App() {
      return (
            <>
             <NavBar />
             <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productList" element={<ProductList /> } />
              <Route path='/shoppingCart' element={<ShoppingCart />} />
              <Route path="/products/:id" element={<ProductPage />} /> {/* Dynamic route */}
             </Routes>
             <Footer /> 
           </> 
  );
}

export default App;
