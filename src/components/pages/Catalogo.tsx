import { useEffect, useState } from 'react';
import { type Producto } from '../../interfaces/productos';
import CardProducto from '../products/CardProducto'; 

const Catalogo = () => {
  // 1. Inicializamos el estado como un array VACÍO
  const [productos, setProductos] = useState<Producto[]>([]);

  // 2. Usamos useEffect para leer el LocalStorage al cargar el componente
  useEffect(() => {
    const guardados = localStorage.getItem("productos_proyecto");
    if (guardados) {
      try {
        const parseados = JSON.parse(guardados);
        setProductos(parseados);
      } catch (error) {
        console.error("Error al parsear los productos del storage:", error);
      }
    }
  }, []); // El array vacío asegura que solo se ejecute UNA VEZ al montar la página

  // 3. Tus filtros siguen funcionando exactamente igual de forma dinámica:
  const productosElectro = productos.filter(p => p.categoria === 'Electro').slice(0,4);
  const productosBazar = productos.filter(p => p.categoria === 'Bazar').slice(0,4);
  const productosOfertas = productos.filter(p => p.categoria === 'Ofertas Mundialistas').slice(0,4);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4 md:p-8 space-y-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-green-500 uppercase tracking-wider">Nuestro Catálogo</h1>
        <p className="text-zinc-400 mt-2">Explora nuestras categorías premium</p>
      </header>

      {/* SECCIÓN: OFERTAS MUNDIALISTAS */}
      {productosOfertas.length > 0 && (
        <section className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 shadow-lg">
          <h2 className="text-2xl font-bold border-l-4 border-green-500 pl-4 text-green-500 mb-6">
            Ofertas Mundialistas
          </h2>
          {/* Reemplazamos la lista por la grilla nativa de Tailwind */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosOfertas.map((item) => (
              <CardProducto key={item.id} producto={item} />
            ))}
          </div>
        </section>
      )}

      {/* SECCIÓN: ELECTRO */}
      {productosElectro.length > 0 && (
        <section className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 shadow-lg">
          <h2 className="text-2xl font-bold border-l-4 border-green-500 pl-4 text-green-500 mb-6">
            Electro
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosElectro.map((item) => (
              <CardProducto key={item.id} producto={item} />
            ))}
          </div>
        </section>
      )}

      {/* SECCIÓN: BAZAR */}
      {productosBazar.length > 0 && (
        <section className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 shadow-lg">
          <h2 className="text-2xl font-bold border-l-4 border-green-500 pl-4 text-green-500 mb-6">
            Bazar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosBazar.map((item) => (
              <CardProducto key={item.id} producto={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Catalogo;