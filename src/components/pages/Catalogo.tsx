import { useEffect, useState } from 'react';
import { type Producto } from '../../interfaces/productos';
// 1. Importamos la Card directo aquí
import CardProducto from '../products/CardProducto'; 

const Catalogo = () => {
  // Datos de prueba fijos para el maquetado
  const [productos, setProductos] = useState<Producto[]>([
    {
      id: "1",
      nombreProducto: "Teclado Mecánico RGB Pro",
      precio: 85000,
      categoria: "Electro",
      imagen: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=500&auto=format&fit=crop",
      descripcion: "Teclado mecánico con switches blue, retroiluminación RGB personalizada y respuesta ultra rápida para gaming extremo.",
      stock: 12
    },
    {
      id: "2",
      nombreProducto: "Set de Vasos de Cristal",
      precio: 24000,
      categoria: "Bazar",
      imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500&auto=format&fit=crop",
      descripcion: "Set x6 vasos de vidrio templado.",
      stock: 0
    },
    {
      id: "3",
      nombreProducto: "Mouse Gamer Inalámbrico",
      precio: 42000,
      categoria: "Ofertas Mundialistas",
      imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=500&auto=format&fit=crop",
      descripcion: "Mouse ergonómico inalámbrico con sensor óptico de alta precisión.",
      stock: 5
    },
    {
      id: "4",
      nombreProducto: "Teclado Mecánico RGB Pro",
      precio: 85000,
      categoria: "Electro",
      imagen: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=500&auto=format&fit=crop",
      descripcion: "Teclado mecánico con switches blue, retroiluminación RGB personalizada y respuesta ultra rápida para gaming extremo.",
      stock: 12
    },
    {
      id: "5",
      nombreProducto: "Set de Vasos de Cristal",
      precio: 24000,
      categoria: "Bazar",
      imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500&auto=format&fit=crop",
      descripcion: "Set x6 vasos de vidrio templado.",
      stock: 0
    },
    {
      id: "6",
      nombreProducto: "Mouse Gamer Inalámbrico",
      precio: 42000,
      categoria: "Ofertas Mundialistas",
      imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=500&auto=format&fit=crop",
      descripcion: "Mouse ergonómico inalámbrico con sensor óptico de alta precisión.",
      stock: 5
    },
    {
      id: "7",
      nombreProducto: "Teclado Mecánico RGB Pro",
      precio: 85000,
      categoria: "Electro",
      imagen: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=500&auto=format&fit=crop",
      descripcion: "Teclado mecánico con switches blue, retroiluminación RGB personalizada y respuesta ultra rápida para gaming extremo.",
      stock: 12
    },
    {
      id: "8",
      nombreProducto: "Set de Vasos de Cristal",
      precio: 24000,
      categoria: "Bazar",
      imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500&auto=format&fit=crop",
      descripcion: "Set x6 vasos de vidrio templado.",
      stock: 0
    },
    {
      id: "9",
      nombreProducto: "Mouse Gamer Inalámbrico",
      precio: 42000,
      categoria: "Ofertas Mundialistas",
      imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=500&auto=format&fit=crop",
      descripcion: "Mouse ergonómico inalámbrico con sensor óptico de alta precisión.",
      stock: 5
    },
    {
      id: "10",
      nombreProducto: "Teclado Mecánico RGB Pro",
      precio: 85000,
      categoria: "Electro",
      imagen: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=500&auto=format&fit=crop",
      descripcion: "Teclado mecánico con switches blue, retroiluminación RGB personalizada y respuesta ultra rápida para gaming extremo.",
      stock: 12
    },
    {
      id: "11",
      nombreProducto: "Set de Vasos de Cristal",
      precio: 24000,
      categoria: "Bazar",
      imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500&auto=format&fit=crop",
      descripcion: "Set x6 vasos de vidrio templado.",
      stock: 0
    },
    {
      id: "12",
      nombreProducto: "Mouse Gamer Inalámbrico",
      precio: 42000,
      categoria: "Ofertas Mundialistas",
      imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=500&auto=format&fit=crop",
      descripcion: "Mouse ergonómico inalámbrico con sensor óptico de alta precisión.",
      stock: 5
    },
    {
      id: "13",
      nombreProducto: "Teclado Mecánico RGB Pro",
      precio: 85000,
      categoria: "Electro",
      imagen: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=500&auto=format&fit=crop",
      descripcion: "Teclado mecánico con switches blue, retroiluminación RGB personalizada y respuesta ultra rápida para gaming extremo.",
      stock: 12
    },
    {
      id: "14",
      nombreProducto: "Set de Vasos de Cristal",
      precio: 24000,
      categoria: "Bazar",
      imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500&auto=format&fit=crop",
      descripcion: "Set x6 vasos de vidrio templado.",
      stock: 0
    },
    {
      id: "15",
      nombreProducto: "Mouse Gamer Inalámbrico",
      precio: 42000,
      categoria: "Ofertas Mundialistas",
      imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=500&auto=format&fit=crop",
      descripcion: "Mouse ergonómico inalámbrico con sensor óptico de alta precisión.",
      stock: 5
    }
  ]);

  // Filtros de categorías
  const productosElectro = productos.filter(p => p.categoria === 'Electro');
  const productosBazar = productos.filter(p => p.categoria === 'Bazar');
  const productosOfertas = productos.filter(p => p.categoria === 'Ofertas Mundialistas');

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