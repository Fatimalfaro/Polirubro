import { type Producto } from "../../interfaces/productos";
import { useAppContext } from "../../context/AppContext";
interface Props {
  producto: Producto;
}

const ItemTablaProducto = ({ producto }: Props) => {
  const { eliminarProducto } = useAppContext();
  return (
    <tr className="border-b border-gray-800 hover:bg-[#151515] transition-all">

      <td className="px-6 py-5 text-gray-300">
        {producto.id.slice(0, 5)}
      </td>

      <td className="px-6 py-5">
        <img
          src={producto.imagen}
          alt={producto.nombreProducto}
          className="w-16 h-16 object-cover rounded-xl border border-gray-700"
        />
      </td>

      <td className="px-6 py-5 font-medium">
        {producto.nombreProducto}
      </td>

      <td className="px-6 py-5 text-gray-400">
        {producto.categoria}
      </td>

      <td className="px-6 py-5 text-green-500 font-semibold">
        ${Number(producto.precio).toLocaleString("es-AR")}
      </td>

      <td className="px-6 py-5">
        <span className="bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-sm">
          {producto.stock} unidades
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
          onClick={() => eliminarProducto(producto.id)}
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