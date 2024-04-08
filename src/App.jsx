import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx";
import ItemListContainer from "./components/ItemComponents/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemComponents/ItemDetailContainer.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/CartComponents/Cart.jsx";
import { Checkout } from "./components/Checkout.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zapatillas" element={<ItemListContainer />} />
            <Route path="/zapatillas/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App
