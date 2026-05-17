import Navbar from "./components/shared/Navbar"
import Footer from "./components/shared/Footer"
import Inicio from "./components/pages/Inicio"
import Catalogo from "./components/pages/Catalogo"
import Carrito from "./components/pages/Carrito"
import Error404 from "./components/pages/Error404"
import Login from "./components/pages/Login"
import Administrador from "./components/pages/Administrador"
import FormularioProducto from "./components/pages/FormularioProducto"
import Nosotros from "./components/pages/Nosotros"
import { BrowserRouter, Routes, Route } from "react-router"
import ProtectorRutas from "./components/routes/ProtectorRutas"



function App() {
  
  return (
  <BrowserRouter>
    <Navbar></Navbar>
    <main>
    <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/catalogo" element={<Catalogo/>}></Route>
        <Route path="/administrador" element={<ProtectorRutas/>}>
          <Route index element={<Administrador/>}></Route>
          <Route path="crear" element={<FormularioProducto titulo={'Crear Servicio'}></FormularioProducto>}/>
          <Route path="editar/:id" element={<FormularioProducto titulo={'Editar Servicio'}></FormularioProducto>}/>
        </Route>
        <Route path="/carrito" element={<Carrito/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="*" element={<Error404/>}></Route>


    </Routes>
    </main>
    <Footer></Footer>
  </BrowserRouter>
    
  );
}

export default App