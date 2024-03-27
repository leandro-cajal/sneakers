import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx";
import ItemListContainer from "./components/ItemComponents/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemComponents/ItemDetailContainer.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/CartComponents/Cart.jsx";
import { CartProvider } from "./context/CartContext.jsx";


function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zapatillas" element={<ItemListContainer />} />
            <Route path="/zapatillas/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>

  )
}

export default App
