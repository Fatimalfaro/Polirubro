import Navbar from "./components/shared/Navbar"
import Footer from "./components/shared/Footer"
import Inicio from "./components/pages/Inicio"
import Catalogo from "./components/pages/Catalogo"
import Carrito from "./components/pages/Carrito"
import Error404 from "./components/pages/Error404"
import Login from "./components/pages/Login"
import Administrador from "./components/pages/Administrador"
import FormularioProducto from "./components/pages/FormularioProducto"
import { BrowserRouter, Routes, Route } from "react-router"



function App() {
  
  return (
  <BrowserRouter>
    <Navbar></Navbar>
    <main>
    <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/catalogo" element={<Catalogo/>}></Route>
        <Route path="/administrador" element={<Administrador/>}></Route>
        <Route path="/administrador/crear" element={<FormularioProducto/>}></Route>
        <Route path="/carrito" element={<Carrito/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="*" element={<Error404/>}></Route>


    </Routes>
    </main>
    <Footer></Footer>
  </BrowserRouter>
    
  );
}

export default App