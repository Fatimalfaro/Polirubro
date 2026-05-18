import ItemTablaProducto from "../products/ItemTablaProducto";

const Administrador = () => {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-10">
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Gestión de <span className="text-green-500">productos</span>
            </h1>

            <p className="text-gray-400">
              Administra el inventario de tu tienda
            </p>
          </div>

          <button className="bg-green-600 hover:bg-green-500 transition-all px-6 py-4 rounded-2xl font-semibold shadow-lg shadow-green-500/20">
            + Agregar producto
          </button>
        </div>

        <div className="bg-[#0f0f0f] border border-green-500/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* HEAD */}
              <thead className="bg-[#151515] border-b border-green-500/10">
                <tr>
                  <th className="text-left px-6 py-5 text-green-500 font-semibold">
                    ID
                  </th>

                  <th className="text-left px-6 py-5 text-green-500 font-semibold">
                    Imagen
                  </th>

                  <th className="text-left px-6 py-5 text-green-500 font-semibold">
                    Nombre
                  </th>

                  <th className="text-left px-6 py-5 text-green-500 font-semibold">
                    Categoría
                  </th>

                  <th className="text-left px-6 py-5 text-green-500 font-semibold">
                    Precio
                  </th>

                  <th className="text-left px-6 py-5 text-green-500 font-semibold">
                    Stock
                  </th>

                  <th className="text-center px-6 py-5 text-green-500 font-semibold">
                    Acciones
                  </th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody>
                <ItemTablaProducto />

              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Administrador;
