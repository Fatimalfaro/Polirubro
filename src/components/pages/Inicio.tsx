import { useEffect, useState } from 'react';
import { Link } from 'react-router'; 
import { type Producto } from '../../interfaces/productos';
import CardProducto from '../products/CardProducto'; 

const Inicio = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [busqueda, setBusqueda] = useState<string>("");

  useEffect(() => {
    const guardados = localStorage.getItem("productosKey");
    if (guardados) {
      try {
        setProductos(JSON.parse(guardados));
      } catch (error) {
        console.error("Error al parsear los productos del storage:", error);
      }
    }
  }, []);

  
  const productosFiltrados = productos.filter(p => 
    p.nombreProducto.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );


  const todosOfertas = productosFiltrados.filter(p => p.categoria === 'Ofertas Mundialistas');
  const todosElectro = productosFiltrados.filter(p => p.categoria === 'Electro');
  const todosBazar = productosFiltrados.filter(p => p.categoria === 'Bazar');

  //Recorte a un máximo de 4 para la vista previa principal
  const productosOfertas = todosOfertas.slice(0, 4);
  const productosElectro = todosElectro.slice(0, 4);
  const productosBazar = todosBazar.slice(0, 4);

  const BotonVerCategoria = ({ tieneMas, urlRuta }: { tieneMas: boolean, urlRuta: string }) => {
    if (!tieneMas) return null;
    return (
      <div className="flex justify-center mt-8">
        <Link
          to={urlRuta}
          className="px-6 py-2.5 bg-transparent border border-green-500/50 hover:bg-green-500 hover:text-black text-green-500 font-bold rounded-xl transition-all duration-300 active:scale-95 text-sm uppercase tracking-wider shadow-md shadow-green-950/20 block text-center"
        >
          Ver Toda la Categoría ▼
        </Link>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4 md:p-8 space-y-12">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-green-500 uppercase tracking-wider">Nuestro Catálogo</h1>
        <p className="text-zinc-400 mt-2">Explora nuestras categorías premium</p>
      </header>

      {/* BARRA DE BÚSQUEDA */}
      <div className="max-w-md mx-auto mb-12">
        <input
          type="text"
          placeholder="Buscar producto en todo el catálogo..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full px-5 py-3 bg-zinc-950 border border-zinc-800 rounded-2xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-inner"
        />
      </div>

      {/* ESTADO VACÍO GLOBAL (Si el administrador no cargó absolutamente nada todavía) */}
      {productos.length === 0 && (
        <div className="text-center py-16 bg-zinc-950 rounded-2xl border border-zinc-800 max-w-xl mx-auto p-6">
          <p className="text-zinc-400 text-lg">Aún no hay productos registrados en la tienda.</p>
          <Link to="/administrador/crear" className="text-green-500 text-sm font-bold mt-4 inline-block underline hover:text-green-400">
            Ir al panel para agregar productos →
          </Link>
        </div>
      )}

      {/* MENSAJE SI BUSCAS ALGO QUE NO EXISTE */}
      {productos.length > 0 && productosFiltrados.length === 0 && (
        <div className="text-center py-12 bg-zinc-950 rounded-2xl border border-zinc-800 max-w-lg mx-auto">
          <p className="text-zinc-400">No hay productos que coincidan con tu búsqueda.</p>
        </div>
      )}

      {/* SECCIÓN: OFERTAS */}
      {todosOfertas.length > 0 && (
        <section className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 shadow-lg">
          <h2 className="text-2xl font-bold border-l-4 border-green-500 pl-4 text-green-500 mb-6">
            Ofertas Mundialistas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosOfertas.map((item) => <CardProducto key={item.id} producto={item} />)}
          </div>
          <BotonVerCategoria tieneMas={todosOfertas.length > 4} urlRuta="/catalogo/Ofertas Mundialistas" />
        </section>
      )}

      {/* SECCIÓN: ELECTRO */}
      {todosElectro.length > 0 && (
        <section className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 shadow-lg">
          <h2 className="text-2xl font-bold border-l-4 border-green-500 pl-4 text-green-500 mb-6">
            Electro
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosElectro.map((item) => <CardProducto key={item.id} producto={item} />)}
          </div>
          <BotonVerCategoria tieneMas={todosElectro.length > 4} urlRuta="/catalogo/Electro" />
        </section>
      )}

      {/* SECCIÓN: BAZAR */}
      {todosBazar.length > 0 && (
        <section className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 shadow-lg">
          <h2 className="text-2xl font-bold border-l-4 border-green-500 pl-4 text-green-500 mb-6">
            Bazar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosBazar.map((item) => <CardProducto key={item.id} producto={item} />)}
          </div>
          <BotonVerCategoria tieneMas={todosBazar.length > 4} urlRuta="/catalogo/Bazar" />
        </section>
      )}
    </div>
  );
};

export default  Inicio;