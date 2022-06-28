import './App.css';
import { Navbar } from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from './pages/Home/HomePage';
import { Footer } from './components/Footer';


function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
