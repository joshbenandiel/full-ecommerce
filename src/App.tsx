import './App.css';
import { Navbar } from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from './pages/Home/HomePage';
import { Footer } from './components/Footer';
import { ProductDetails } from './pages/Product/ProductDetails';


function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
