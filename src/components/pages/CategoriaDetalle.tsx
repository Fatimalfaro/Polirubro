import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router'; // useParams lee la URL
import { type Producto } from '../../interfaces/productos';
import CardProducto from '../products/CardProducto'; 

// Volvemos a incluir la misma data de prueba por si el LocalStorage está limpio
const productosDePrueba: Producto[] = [
  { id: "1", nombreProducto: "Camiseta Argentina Tres Estrellas", precio: 85000, categoria: "Ofertas Mundialistas", imagen: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500", descripcion: "Camiseta oficial de la selección con el parche de campeón.", stock: 15 },
  { id: "2", nombreProducto: "Pelota Al Rihla Oficial", precio: 120000, categoria: "Ofertas Mundialistas", imagen: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500", descripcion: "Balón oficial utilizado en el certamen mundialista.", stock: 8 },
  { id: "3", nombreProducto: "Gorros Piluso Argentina", precio: 12000, categoria: "Ofertas Mundialistas", imagen: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500", descripcion: "Gorro piluso celeste y blanco ideal para la cancha.", stock: 50 },
  { id: "4", nombreProducto: "Vaso Térmico Qatar 2022", precio: 25000, categoria: "Ofertas Mundialistas", imagen: "https://images.unsplash.com/photo-1517256064527-09c53b2d0c6f?w=500", descripcion: "Vaso de acero inoxidable edición limitada.", stock: 20 },
  { id: "5", nombreProducto: "Corneta Hincha Ruidosa", precio: 3500, categoria: "Ofertas Mundialistas", imagen: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500", descripcion: "Alienta a la selección haciendo el mayor ruido posible.", stock: 100 },
  { id: "6", nombreProducto: "Teclado Mecánico RGB Pro", precio: 65000, categoria: "Electro", imagen: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500", descripcion: "Switches red, ideal para gaming y escritura suave.", stock: 10 },
  { id: "7", nombreProducto: "Mouse Óptico Ergonómico", precio: 32000, categoria: "Electro", imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500", descripcion: "Inalámbrico, alta precisión y batería recargable.", stock: 25 },
  { id: "8", nombreProducto: "Monitor Gamer 24' Full HD", precio: 210000, categoria: "Electro", imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500", descripcion: "Tasa de refresco de 144Hz y 1ms de respuesta.", stock: 5 },
  { id: "9", nombreProducto: "Auriculares Bluetooth ANC", precio: 78000, categoria: "Electro", imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", descripcion: "Cancelación activa de ruido y 40 horas de autonomía.", stock: 12 },
  { id: "10", nombreProducto: "Silla Gamer Ergonómica", precio: 295000, categoria: "Electro", imagen: "https://images.unsplash.com/photo-1598550476439-6847785fce6e?w=500", descripcion: "Almohadillas lumbares y reclinable hasta 180 grados.", stock: 4 },
  { id: "11", nombreProducto: "Set de Cuchillos de Cocina", precio: 45000, categoria: "Bazar", imagen: "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=500", descripcion: "Acero inoxidable de alta resistencia, incluye soporte.", stock: 14 },
  { id: "12", nombreProducto: "Termo de Acero 1 Litro", precio: 52000, categoria: "Bazar", imagen: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500", descripcion: "Mantiene el agua caliente por 24 horas. Ideal para el mate.", stock: 30 }
];

const CategoriaDetalle = () => {
  // Capturamos el parámetro ":nombreCategoria" desde la URL de la página
  const { nombreCategoria } = useParams<{ nombreCategoria: string }>();
  
  const [productos, setProductos] = useState<Producto[]>([]);
  const [busqueda, setBusqueda] = useState<string>("");

  useEffect(() => {
    const guardados = localStorage.getItem("productos_proyecto");
    if (guardados && JSON.parse(guardados).length > 0) {
      setProductos(JSON.parse(guardados));
    } else {
      setProductos(productosDePrueba);
    }
  }, []);

  // 1. Filtramos primero estrictamente por la categoría seleccionada en la URL
  const productosDeLaCategoria = productos.filter(p => p.categoria === nombreCategoria);

  // 2. Sobre esa categoría, aplicamos el buscador dinámico interno
  const productosFiltrados = productosDeLaCategoria.filter(p =>
    p.nombreProducto.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
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

      {/* GRILLA QUE MAPEA TODO EL ARRAY COMPLETO (Sin usar .slice) */}
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