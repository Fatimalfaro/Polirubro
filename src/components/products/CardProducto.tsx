import React from "react";
import { type Producto } from "../../interfaces/productos";
import { Link } from "react-router";

interface Props {
  producto: Producto;
}

const CardProducto = ({ producto }: Props) => {
  return (
    <div className="bg-neutral text-neutral-content rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-zinc-800 flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
        <img
          src={producto.imagen}
          alt={producto.nombreProducto}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 opacity-90 hover:opacity-100"
        />

        <span className="absolute top-3 right-3 bg-black text-green-500 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider border border-green-500/30 shadow-md">
          {producto.categoria}
        </span>
      </div>

      
      <div className="p-5 flex flex-col grow bg-zinc-950">
      
        <h3 className="text-lg font-bold text-green-500 mb-2 truncate tracking-tight">
          {producto.nombreProducto}
        </h3>
        
       
        <p className="text-zinc-400 text-sm line-clamp-2 mb-5 grow font-medium">
          {producto.descripcion}
        </p>

        <div className="flex justify-between items-center mt-auto pt-3 border-t border-zinc-900">
          <span className="text-2xl font-black text-green-400 tracking-tight">
            ${producto.precio.toLocaleString()}
          </span>
          <span
            className={`text-xs font-bold px-2 py-1 rounded ${
              producto.stock > 0
                ? "bg-zinc-900 text-zinc-400"
                : "bg-red-950/50 text-red-400 border border-red-900/50"
            }`}
          >
            {producto.stock > 0 ? `Stock: ${producto.stock}` : "Sin stock"}
          </span>
        </div>
        <Link
          to={`/producto/${producto.id}`}
          className="w-full mt-5 bg-green-600 text-black py-2.5 rounded-xl font-extrabold hover:bg-green-500 active:scale-95 transition-all duration-200 shadow-md shadow-green-900/20 uppercase text-xs tracking-wider text-center block"
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default CardProducto;
