import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { type Producto, type ProductoFormData } from "../../interfaces/productos";
import Swal from "sweetalert2";
import { useAppContext } from "../../context/AppContext";

const FormularioProducto = ({ titulo }: { titulo: string }) => {

  const { id } = useParams();
  const navigate = useNavigate();

  const {
    crearProducto,
    editarProducto,
    productos
  } = useAppContext();
  // 1. PRIMERO inicializamos el useForm para que esté disponible en todo el componente
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ProductoFormData>();

  useEffect(() => {
  if (id) {
    const productoEncontrado = productos.find(
      (producto) => producto.id === id
    );

    if (productoEncontrado) {
      reset(productoEncontrado);
    }
  }
}, [id, productos, reset]);

  // 2. SEGUNDO definimos la función que maneja el envío usando el nombre correcto
  const onSubmit = (data: ProductoFormData) => {
  try {

    if (id) {

      editarProducto(id, data);

      Swal.fire({
        title: "¡Producto Editado!",
        text: `El producto "${data.nombreProducto}" fue actualizado.`,
        icon: "success",
        confirmButtonColor: "#16a34a",
      });

    } else {

      crearProducto({
        ...data,
        precio: Number(data.precio),
        stock: Number(data.stock)
      });

      Swal.fire({
        title: "¡Producto Creado!",
        text: `El producto "${data.nombreProducto}" se guardó en el sistema.`,
        icon: "success",
        confirmButtonColor: "#16a34a",
      });

      reset();
    }

    navigate("/administrador");

  } catch (error) {

    Swal.fire({
      title: "Error",
      text: "No se pudo guardar el producto.",
      icon: "error"
    });

  }
};

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-base-100 shadow-2xl rounded-3xl p-8 border border-base-300">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-green-800 uppercase tracking-tight">
          {titulo}
        </h2>

        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Nombre del Producto */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-lg text-green-500">Nombre</span>
            </label>
            <input
              type="text"
              placeholder="Ej: Teclado Mecánico Pro"
              className={`input input-bordered w-full focus:outline-primary ${errors.nombreProducto ? 'input-error' : ''}`}
              {...register("nombreProducto", { 
                required: "El nombre es obligatorio",
                minLength: { value: 3, message: "Mínimo 3 caracteres" }
              })}
            />
            {errors.nombreProducto && <span className="text-error text-sm mt-1">{errors.nombreProducto.message}</span>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Precio */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-green-500 mr-1">Precio ($)</span>
              </label>
              <input
                type="number"
                className={`input input-bordered mr-1 ${errors.precio ? 'input-error' : ''}`}
                {...register("precio", { 
                  required: "El precio es obligatorio",
                  min: { value: 1, message: "Debe ser mayor a 0" }
                })}
              />
              {errors.precio && <span className="text-error text-sm mt-1">{errors.precio.message}</span>}
            </div>

            {/* Categoría */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-green-500">Categoría</span>
              </label>
              <select 
                className="select select-bordered w-full"
                {...register("categoria", { required: true })}
              >
                <option value="Electro">Electro</option>
                <option value="Bazar">Bazar</option>
                <option value="Ofertas Mundialistas">Ofertas Mundialistas</option>
              </select>
            </div>
          </div>

          {/* Imagen URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-green-500 mr-1">URL de Imagen</span>
            </label>
            <input
              type="text"
              placeholder="https://ejemplo.com/foto.png"
              className={`input input-bordered mr-1 w-full ${errors.imagen ? 'input-error' : ''}`}
              {...register("imagen", { 
                required: "La URL es obligatoria",
                pattern: {
                  value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
                  message: "Debe ser una URL de imagen válida"
                }
              })}
            />
            {errors.imagen && <span className="text-error text-sm mt-1">{errors.imagen.message}</span>}
          </div>

          {/* Descripción */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-green-500 mr-1">Descripción</span>
            </label>
            <textarea
              className={`textarea textarea-bordered h-24 mr-1 w-full ${errors.descripcion ? 'textarea-error' : ''}`}
              placeholder="Escribe los detalles aquí..."
              {...register("descripcion", { 
                required: "La descripción es necesaria",
                maxLength: { value: 200, message: "Máximo 200 caracteres" }
              })}
            ></textarea>
            {errors.descripcion && <span className="text-error text-sm mt-1">{errors.descripcion.message}</span>}
          </div>

          {/* Stock */}
          <div className="form-control w-full md:w-1/3">
            <label className="label">
              <span className="label-text font-bold text-green-500 mr-1">Stock Inicial</span>
            </label>
            <input
              type="number"
              className={`input input-bordered mr-1 ${errors.stock ? 'input-error' : ''}`}
              {...register("stock", { 
                required: "Indica el stock",
                min: { value: 0, message: "No puede ser negativo" }
              })}
            />
            {errors.stock && <span className="text-error text-sm mt-1">{errors.stock.message}</span>}
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button type="submit" className="btn bg-green-600 hover:bg-green-700 border-none flex-1 shadow-lg text-black font-bold">
              {id ? "Guardar Cambios" : "Crear Producto"}
            </button>
            <button 
              type="button" 
              onClick={() => reset()}
              className="btn btn-outline btn-ghost text-lg hover:border-green-500 sm:w-1/3"
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioProducto;