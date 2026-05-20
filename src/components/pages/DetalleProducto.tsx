
import { FiShoppingCart, FiMinus, FiPlus } from "react-icons/fi";


const DetalleProducto = () => {
  
  return (
    <div className="min-h-screen bg-[#0b0c10] text-gray-200 font-sans p-6 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {/* Imagen */}
        <div className="bg-[#111318] border border-gray-800 rounded-xl p-8 flex items-center justify-center min-h-100">
          <img
            src='imagen'
            alt='nombreProducto'
            className="max-w-full h-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>

        {/* Detalles */}
        <div className="bg-[#111318] border border-gray-800 rounded-xl p-8 flex flex-col">
          
          <h1 className="text-3xl font-bold text-white mb-3">
            nombreProducto
          </h1>

          <div className="mb-6">
            <span className="bg-[#1a2e1d] text-[#4ade80] text-xs font-semibold px-3 py-1 rounded-md">
              Categoria
            </span>
          </div>

          <div className="flex items-center text-sm text-[#4ade80] mb-6">
            Stock disponible:  unidades
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Descripcion
          </p>

          <div className="text-4xl font-bold text-white mb-8">
            $Precio
          </div>

          <div className="mt-auto">
            <div className="mb-2 text-sm text-gray-400">
              Cantidad
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              
              {/* Selector cantidad */}
              <div className="flex items-center justify-between border border-gray-700 rounded-lg px-4 py-3 bg-[#0b0c10] w-full sm:w-32">
                
                <button
                  
                  className="text-gray-400 hover:text-white transition-colors"
                  
                >
                  <FiMinus size={18} />
                </button>

                <span className="text-white font-medium">
                 
                </span>

                <button
                  
                  className="text-gray-400 hover:text-white transition-colors"
                
                >
                  <FiPlus size={18} />
                </button>
              </div>

              {/* Botón carrito */}
              <button
                
                className="flex-1 bg-[#2e7d32] hover:bg-[#1b5e20] text-white rounded-lg flex items-center justify-center gap-2 py-3 font-medium transition-colors"
              >
                <FiShoppingCart size={20} />
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;