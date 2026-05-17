import formularioLogin from "../../assets/formularioLogin.png";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";

const Login = () => {
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

            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Usuario
                </label>

                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500" />

                  <input
                    type="text"
                    placeholder="Ingresa tu usuario"
                    className="w-full bg-black border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-green-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Contraseña
                </label>

                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500" />

                  <input
                    placeholder="Ingresa tu contraseña"
                    className="w-full bg-black border border-gray-800 rounded-xl py-4 pl-12 pr-14 text-white outline-none focus:border-green-500 transition-all"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
