import formularioLogin from "../../assets/formularioLogin.png";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAppContext } from "../../context/AppContext"
import Swal from "sweetalert2"

interface LoginFormInputs{
  email: string;
  password: string;
}

const Login = () => {

const {setUsuarioLogueado} = useAppContext();

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  
  const navegacion = useNavigate();

  const onSubmit = (data: LoginFormInputs) => {
    if(
      data.email === import.meta.env.VITE_EMAIL &&
      data.password === import.meta.env.VITE_PASSWORD
    ){
      setUsuarioLogueado(true);
      Swal.fire({
        title: "Bienvenido Administrador",
        text: "Ingresando al sistema",
        icon: "success",
        background: "#18181b",
        color: "#f4f4f5",
        confirmButtonColor: "#3b82f6",
    });
    navegacion("/administrador");
  } else {
      Swal.fire({
        title: "Ocurrió un error",
        text: "Credenciales incorrectas",
        icon: "error",
        background: "#18181b",
        color: "#f4f4f5",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  const [mostrarPassword, setMostrarPassword] = useState(false);
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-7xl bg-[#0d0d0d] border border-green-500/10 rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
        <div className="hidden lg:block">
          <img
            src={formularioLogin}
            alt="Login Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center p-6 md:p-12 bg-[#0f0f0f]">
          <div className="w-full max-w-md">
            <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
              <FaLock className="text-green-500 text-3xl" />
            </div>

            <h1 className="text-4xl font-bold text-center text-white mb-3">
              Iniciar <span className="text-green-500">sesión</span>
            </h1>

            <p className="text-gray-400 text-center mb-10">
              Ingresa tus credenciales para continuar
            </p>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Usuario
                </label>

                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500" />

                  <input
                   id="email"
                  type="email"
                  autoComplete="email"
                    placeholder="Ingresa tu correo electronico"
                    className={`w-full bg-black border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-green-500 transition-all ${errors.email ? "border-red-500" : "border-zinc-700"}`} 

                  {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "Email no válido",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1 italic">
                  {errors.email.message}
                </span>
              )}

                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Contraseña
                </label>

                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500" />

                  <input
                  id="password"
                autoComplete="current-password"
                    type={mostrarPassword ? "text" : "password"}
                    placeholder="Ingresa tu contraseña"
                    className={`w-full bg-black border border-gray-800 rounded-xl py-4 pl-12 pr-14 text-white outline-none focus:border-green-500 transition-all ${errors.password ? "border-red-500" : "border-zinc-700"}`}
                    {...register("password", {
                  required: "La contraseña es obligatoria",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message:
                      "Debe tener 8-16 caracteres, mayúscula, minúscula, número y símbolo.",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500 text-xs mt-1 italic">
                  {errors.password.message}
                </span>
              )}

                  <button
                    type="button"
                    onClick={() => setMostrarPassword(!mostrarPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500 transition-all"
                  >
                    {mostrarPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="text-right">
                <a href="#" className="text-sm text-green-500 hover:underline">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-green-500/20">
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
