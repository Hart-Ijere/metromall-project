/*import logo from './logo.svg';*/
import './App.css';
import { Route, Routes} from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Hero from "./components/Hero";
import FeaturedCategory from "./components/FeaturedCategory";
import FeaturedProduct from "./components/FeaturedProduct";
import { Link } from 'react-router-dom';
/*import ProductPage from "./components/ProductPage";*/
/*import ShoppingCart from "./components/ShoppingCart";*/
/*import CheckoutForm from "./components/ChecKoutForm";*/

    function App() {
      return (
            <>
             <Navbar />
             <Routes>
              <Route path="/" element={<><Hero /><FeaturedCategory /><FeaturedProduct /></>} />
              <Route path="/ProductList" element={<ProductList /> } />
             </Routes>
             <Link to="ProductList" className="hover:underline">Go Home</Link>


             {/*<Routes>
             <Route path="/productList" element={ <ProductList /> } />
             </Routes>
              <Hero />
             <FeaturedCategory />
             <FeaturedProduct />*/}
        
             {/*<ProductPage />*/}
             {/*<ShoppingCart />*/}
             {/*<CheckoutForm />*/}
             <Footer /> 
           </> 
  );
}

export default App;
