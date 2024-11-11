import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio.jsx";
import Contacto from './paginas/contacto.jsx';
import Category from './paginas/itemListContainer.jsx';
import Info from './paginas/info.jsx';
import Nopage from './paginas/nopage.jsx';
import DetalleProd from './paginas/itemDetailContainer.jsx';
import Navbar from "./navbar.jsx";
import Carrito from "./paginas/carrito.jsx";
import CartProvider from "./Context/cartContext.jsx";
import { LoadProvider } from "./Context/loadContex";
import './App.css';
import Logo from './assets/logo.png';

function App() {
  return (
    <CartProvider>
      <LoadProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="info" element={<Info />} />
          <Route path="/detail/:id" element={<DetalleProd />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
      </LoadProvider>
    </CartProvider>
  );
}

export default App;
