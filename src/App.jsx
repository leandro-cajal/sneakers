import Header from "./assets/components/Header.jsx"
import Greetings from './assets/components/Greetings.jsx'
import './App.css'

function App() {

  return (
    <>
    <Header />
    <main>
      <Greetings message={"Bienvenidos a mi página"}/>
    </main>
    </>
  )
}

export default App
