import { FiMinus, FiPlus, FiShoppingCart, FiTrash2 } from "react-icons/fi";


const Carrito = () => {
  return (
    <section className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
    
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <FiShoppingCart className="text-4xl text-green-500" />

            <h1 className="text-4xl font-bold">
              TU <span className="text-green-500">CARRITO</span>
            </h1>
          </div>

          <p className="text-zinc-400">
            Revisá los productos que agregaste y finalizá tu compra.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 overflow-x-auto">
            
            <div className="hidden md:grid grid-cols-5 gap-4 border-b border-zinc-800 pb-4 mb-6 text-zinc-400 text-sm uppercase tracking-wide">
              <p className="col-span-2">Producto</p>
              <p>Precio</p>
              <p>Cantidad</p>
              <p>Subtotal</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center border-b border-zinc-800 py-6">
              
              <div className="md:col-span-2 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                  alt="Auriculares"
                  className="w-24 h-24 object-cover rounded-xl border border-zinc-800"
                />

                <div>
                  <h2 className="font-semibold text-lg">
                    Auriculares Inalámbricos
                  </h2>

                  <p className="text-sm text-zinc-400">
                    Tecnología
                  </p>

                  <span className="inline-block mt-2 text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded-lg">
                    Stock disponible: 12 unidades
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xl font-semibold">
                  $22.990
                </p>
              </div>

              <div>
                <div className="flex items-center border border-zinc-700 rounded-xl w-fit">
                  
                  <button className="px-4 py-3 hover:bg-zinc-800 transition-all">
                    <FiMinus />
                  </button>

                  <span className="px-4 font-medium">
                    1
                  </span>

                  <button className="px-4 py-3 hover:bg-zinc-800 transition-all">
                    <FiPlus />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-green-500">
                  $22.990
                </p>

                <button className="text-zinc-400 hover:text-red-500 transition-all ml-4">
                  <FiTrash2 size={22} />
                </button>

                 

              </div>
              
            </div>
            <div className="mt-8">
              <button className="border border-zinc-700 hover:border-green-500 text-green-500 px-6 py-3 rounded-xl transition-all">
                ← Seguir comprando
              </button>
            </div>
        </div>

        </div>

      </div>
    </section>
  );
};

export default Carrito;