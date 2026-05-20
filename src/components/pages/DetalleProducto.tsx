import { useState } from "react";
import { useParams } from "react-router";
import { FiShoppingCart, FiMinus, FiPlus } from "react-icons/fi";

import { useAppContext } from "../../context/AppContext";

const DetalleProducto = () => {
  const { id } = useParams<{ id: string }>();

  const { productos, agregarAlCarrito } = useAppContext();

  // Buscar producto usando el id de la URL
  const producto = productos.find((p) => p.id === id);

  const [cantidad, setCantidad] = useState(1);

  // Si no existe el producto
  if (!producto) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Producto no encontrado
      </div>
    );
  }

  // Funciones
  const handleDecrementaCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleIncrementaCantidad = () => {
    if (cantidad < producto.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const handleAgregarCarrito = () => {
    agregarAlCarrito(producto);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-gray-200 font-sans p-6 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Imagen */}
        <div className="bg-[#111318] border border-gray-800 rounded-xl p-8 flex items-center justify-center min-h-100">
          <img
            src={producto.imagen}
            alt={producto.nombreProducto}
            className="max-w-full h-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>

        {/* Detalles */}
        <div className="bg-[#111318] border border-gray-800 rounded-xl p-8 flex flex-col">
          <h1 className="text-3xl font-bold text-white mb-3">
            {producto.nombreProducto}
          </h1>

          <div className="mb-6">
            <span className="bg-[#1a2e1d] text-[#4ade80] text-xs font-semibold px-3 py-1 rounded-md">
              {producto.categoria}
            </span>
          </div>

          <div className="flex items-center text-sm text-[#4ade80] mb-6">
            Stock disponible: {producto.stock} unidades
          </div>

          <div className="text-4xl font-bold text-white mb-8">
            ${producto.precio}
          </div>

          <div className="mt-auto">
            <div className="mb-2 text-sm text-gray-400">Cantidad</div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Selector cantidad */}
              <div className="flex items-center justify-between border border-gray-700 rounded-lg px-4 py-3 bg-[#0b0c10] w-full sm:w-32">
                <button
                  onClick={handleDecrementaCantidad}
                  className="text-gray-400 hover:text-white transition-colors"
                  disabled={cantidad <= 1}
                >
                  <FiMinus size={18} />
                </button>

                <span className="text-white font-medium">{cantidad}</span>

                <button
                  onClick={handleIncrementaCantidad}
                  className="text-gray-400 hover:text-white transition-colors"
                  disabled={cantidad >= producto.stock}
                >
                  <FiPlus size={18} />
                </button>
              </div>

              {/* Botón carrito */}
              <button
                onClick={handleAgregarCarrito}
                className="flex-1 bg-[#2e7d32] hover:bg-[#1b5e20] text-white rounded-lg flex items-center justify-center gap-2 py-3 font-medium transition-colors"
              >
                <FiShoppingCart size={20} />
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
        {/* Descripción del producto */}
        <div className="bg-[#111318] border border-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Descripción del producto
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {producto.descripcion}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
