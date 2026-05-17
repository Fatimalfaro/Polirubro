import ItemTablaProducto from "../products/ItemTablaProducto";

const Administrador = () => {
    return (
         <main className="min-h-screen bg-black text-white px-4 py-10">

        {/* CONTENEDOR */}
        <section className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

            <div>
              <h1 className="text-4xl font-bold mb-2">
                Gestión de{" "}
                <span className="text-green-500">
                  productos
                </span>
              </h1>

              <p className="text-gray-400">
                Administra el inventario de tu tienda
              </p>
            </div>

            {/* BOTON */}
            <button
              className="bg-green-600 hover:bg-green-500 transition-all px-6 py-4 rounded-2xl font-semibold shadow-lg shadow-green-500/20"
            >
              + Agregar producto
            </button>
        </div>
    </section>
    </main>

    );
};

export default Administrador;