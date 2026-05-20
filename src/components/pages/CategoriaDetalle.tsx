import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router'; // useParams lee la URL
import { type Producto } from '../../interfaces/productos';
import CardProducto from '../products/CardProducto'; 

// Volvemos a incluir la misma data de prueba por si el LocalStorage está limpio


const CategoriaDetalle = () => {
  const { nombreCategoria } = useParams<{ nombreCategoria: string }>();
  const [productos, setProductos] = useState<Producto[]>([]);
  const [busqueda, setBusqueda] = useState<string>("");

  useEffect(() => {
    const guardados = localStorage.getItem("productos_proyecto");
    if (guardados) {
      try {
        setProductos(JSON.parse(guardados));
      } catch (error) {
        console.error("Error al parsear los productos del storage:", error);
      }
    }
  }, []);

  // 1. Filtrado estricto por la categoría de la URL
  const productosDeLaCategoria = productos.filter(p => p.categoria === nombreCategoria);

  // 2. Buscador interno de la categoría
  const productosFiltrados = productosDeLaCategoria.filter(p =>
    p.nombreProducto.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );
  );

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4 md:p-8 space-y-8">
      
      {/* Botón superior para regresar al catálogo general */}
      <div className="max-w-7xl mx-auto">
        <Link to="/catalogo" className="text-green-500 hover:text-green-400 font-bold text-sm transition-colors flex items-center gap-2">
          ← Volver al Catálogo General
        </Link>
      </div>

      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-green-500 uppercase tracking-wider">
          Categoría: {nombreCategoria}
        </h1>
        <p className="text-zinc-400 mt-2">
          Viendo {productosFiltrados.length} de {productosDeLaCategoria.length} productos guardados
        </p>
      </header>

      {/* INPUT DE BÚSQUEDA EXCLUSIVO DE LA CATEGORÍA */}
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder={`Buscar dentro de ${nombreCategoria}...`}
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full px-5 py-3 bg-zinc-950 border border-zinc-800 rounded-2xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-inner"
        />
      </div>

      {/* Aqui mapeo el array con todos los productos sin aplicar la restriccion de mostrar solo 4 items (slice) */}
      <div className="max-w-7xl mx-auto bg-zinc-950 p-6 rounded-2xl border border-zinc-800 shadow-lg">
        {productosFiltrados.length === 0 ? (
          <p className="text-center text-zinc-500 py-8">No se encontraron productos para tu búsqueda.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosFiltrados.map((item) => (
              <CardProducto key={item.id} producto={item} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default CategoriaDetalle;