import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Inicio from "./components/pages/Inicio";
import Catalogo from "./components/pages/Catalogo";
import Carrito from "./components/pages/Carrito";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import Administrador from "./components/pages/Administrador";
import FormularioProducto from "./components/pages/FormularioProducto";
import Nosotros from "./components/pages/Nosotros";
import { BrowserRouter, Routes, Route } from "react-router";
import ProtectorRutas from "./components/routes/ProtectorRutas";
import { useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";
import type { Producto, ProductoFormData } from "./interfaces/productos";

function App() {
 const usuarioSessionStorage = JSON.parse(
  sessionStorage.getItem("usuarioKey") || "null"
);

  const [usuario, setUsuario] = useState<string | null>(
    usuarioSessionStorage,
  );

  const productosLocalStorage = JSON.parse(localStorage.getItem('productosKey') || "[]");
  const [productos, setProductos] = useState<Producto[]>(productosLocalStorage)


  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuario));
  }, [usuario]);


   useEffect(() => {
    localStorage.setItem('productosKey', JSON.stringify(productos));
  },[productos]);


  const crearProducto = (dataProducto: ProductoFormData) => {
    const productoNuevo: Producto = {
      ...dataProducto,
      id: crypto.randomUUID()
    };
    setProductos([...productos, productoNuevo]);

  }

  return (
  <BrowserRouter>
  <div className="flex flex-col min-h-screen" >
      <Navbar></Navbar>
    <main className="grow container mx-auto my-4 px-4 py-8" >
    <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/catalogo" element={<Catalogo/>}></Route>
        <Route path="/catalogo/:nombreCategoria" element={<CategoriaDetalle />} />
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
  </div>
  
  </BrowserRouter>

    
  );
}

export default App;
