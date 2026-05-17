const ItemTablaProducto = () => {
    return (
        <tr className="border-b border-gray-800 hover:bg-[#151515] transition-all">
     
      <td className="px-6 py-5 text-gray-300">
        #001
      </td>

      <td className="px-6 py-5">

        <img
          alt="Producto"
          className="w-16 h-16 object-cover rounded-xl border border-gray-700"
        />

      </td>

      <td className="px-6 py-5 font-medium">
        Auriculares Gamer
      </td>

      <td className="px-6 py-5 text-gray-400">
        Tecnología
      </td>

      <td className="px-6 py-5 text-green-500 font-semibold">
        $25.000
      </td>

      <td className="px-6 py-5">

        <span className="bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-sm">
          12 unidades
        </span>

      </td>

      <td className="px-6 py-5">

        <div className="flex items-center justify-center gap-3">

          <button
            className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl transition-all"
          >
            Editar
          </button>

          <button
            className="bg-red-500/10 hover:bg-red-500/20 text-red-400 px-4 py-2 rounded-xl transition-all"
          >
            Eliminar
          </button>

        </div>
      </td>
    </tr>
    );
};

export default ItemTablaProducto;