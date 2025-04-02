import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Subtopo from './components/Subtopo';
import Anuncio from './components/Anuncio';
import Itens from './components/Itens';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div className="bottombox">
        <Subtopo />
        <Anuncio />
        <Itens />
       <Footer />
    </div>
    </>
  )
}

export default App
