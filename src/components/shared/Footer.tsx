import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 py-12 px-6 md:px-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-black text-green-500 uppercase tracking-wider">
            MultiClick
          </h3>
          <p className="text-sm text-zinc-500 font-medium">
            Tu tienda premium de tecnología y bazar. Llevando la innovación a tu
            hogar.
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-widest mb-1">
            Seguinos en :
          </h4>
          <div className="flex items-center gap-4">
            <Link to={"/redes-error"} className="p-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-green-400 border border-zinc-800 rounded-xl transition-all duration-200 active:scale-95">
              <FaInstagram />
            </Link>
            <Link to={"/redes-error"} className="p-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-green-400 border border-zinc-800 rounded-xl transition-all duration-200 active:scale-95">
              <IoLogoFacebook />
            </Link>
            <Link to={"/redes-error"} className="p-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-green-400 border border-zinc-800 rounded-xl transition-all duration-200 active:scale-95">
              <FaTwitter />
            </Link>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-widest mb-1">
            Soporte
          </h4>
          <p className="text-sm text-zinc-500">
            Soporte:{" "}
            <span className="text-zinc-300">soporte@multiclick.com</span>
          </p>
          <p className="text-sm text-zinc-500">Tucumán, Argentina</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-zinc-900 text-center text-xs text-zinc-600 font-medium">
        &copy; {new Date().getFullYear()} MultiClick App. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
