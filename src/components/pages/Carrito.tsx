import {FiShoppingCart} from "react-icons/fi";


const Carrito = () => {
  return (
    <section className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        
        {/* TITULO */}
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

      </div>
    </section>
  );
};

export default Carrito;