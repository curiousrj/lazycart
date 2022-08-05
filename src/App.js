import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Error404 from './pages/Error404';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop/:id" element={<Product />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
