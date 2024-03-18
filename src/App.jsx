import Navbar from "./components/Navbar.jsx"
import Index from "./components/Index.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/zapatillas" element={<ItemListContainer />} />
          <Route exact path="/zapatillas/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App
