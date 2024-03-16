import Header from "./components/Header.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import './App.css'

function App() {
  return (
    <>
    <Header />
    <main className="py-8">
      {/* <ItemListContainer /> */}
      <ItemDetailContainer itemId={8}/>
    </main>
    </>
  )
}

export default App
