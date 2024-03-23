import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx";
import ItemListContainer from "./components/ItemComponents/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemComponents/ItemDetailContainer.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "./context/CartContext.jsx";


function App() {

  const [ cart , setCart ] = useState([]);
  const [ finalPrice, setFinalPrice] = useState(0)

  return (
    <>
      <CartContext.Provider value={{cart,setCart,finalPrice,setFinalPrice}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zapatillas" element={<ItemListContainer />} />
            <Route path="/zapatillas/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </>

  )
}

export default App
