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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
