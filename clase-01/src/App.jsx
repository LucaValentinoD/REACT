import { useState } from 'react';
import './App.css';
import{ BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./paginas/Inicio.jsx";
import './paginas/Inicio.jsx';
import Contacto from './paginas/contacto.jsx';
import Productos from './paginas/productos.jsx';
import Info from './paginas/info.jsx';
import Nopage from './paginas/nopage.jsx';
import Navbar from './navbar.jsx';
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />}/>
        <Route index element={<Inicio/>}/>
        <Route path="contacto" element={<Contacto/>}/>
        <Route path="productos" element={<Productos/>}/>
        <Route path="info" element={<Info/>}/>
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>



    </>
  )
}

export default App
