/*import logo from './logo.svg';*/
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
/*import ProductList from "./components/ProductList";*/
import Hero from "./components/Hero";
import FeaturedCategory from "./components/FeaturedCategory";
import FeaturedProduct from "./components/FeaturedProduct";

    function App() {
      return (
        <div>
          <Navbar />
          <Hero />
          <FeaturedCategory />
          <FeaturedProduct />
          {/*<ProductList />*/}
          <Footer /> 
        </div>
  );
}

export default App;
