import './App.css';
import { Route, Routes } from 'react-router-dom'; 
import NavBar from './components/Navbar';
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Home from "./components/Home";

    function App() {
      return (
            <>
             <NavBar />
             <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productList" element={<ProductList /> } />
             </Routes>
             <Footer /> 
           </> 
  );
}

export default App;
