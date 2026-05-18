import { useState } from "react";
import { Link, NavLink } from "react-router";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-3 transition-colors duration-200 md:p-0 ${
      isActive
        ? "text-green-500 font-semibold"
        : "text-zinc-300 hover:text-blue-400"
    }`;

  return (
    <nav>
      <div>
        <div className="navbar bg-base-300 shadow-sm">
          {/* Logo y carrito */}
          <div className="flex-1">
            <Link to={"/"} className="btn btn-ghost text-x text-green-500 text-2xl">
              MULTICLICK
            </Link>
          </div>
            <div className="flex-6">

            <Link to={"/carrito"}>
              <FiShoppingCart />
            </Link>
            </div>

          {/* Botón Hamburguesa (Celular) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              type="button"
            >
              {isNavbarOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Navbar desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 capitalize">
                <NavLink
              to="/"
              className={navLinkStyles}
              
            >
              Inicio
            </NavLink>
            <NavLink to="/catalogo" >
              Catalogo
            </NavLink>
            <NavLink to="/nosotros" >
              Nosotros
            </NavLink>
            <NavLink to="/administrador" >
              Administrador
            </NavLink>
            <NavLink
              to="/login"
              className={navLinkStyles}
              onClick={() => setIsNavbarOpen(false)}
            >
              Login
            </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar desplegable */}
      <div
        className={`${isNavbarOpen ? "max-h-96 " : "max-h-0 overflow-hidden"} md:hidden transition-all duration-300 ease-in-out bg-zinc-900 border-t border-zinc-800 `}
      >
        <div className="menu menu-horizontal px-1">
          
            <NavLink
              to="/"
              className={navLinkStyles}
              
            >
              Inicio
            </NavLink>
          
          
            <NavLink
              to="/login"
              className={navLinkStyles}
              onClick={() => setIsNavbarOpen(false)}
            >
              Login
            </NavLink>
          
          
            <NavLink to="/administrador" >
              Administrador
            </NavLink>
          
          
            <NavLink to="/catalogo" >
              Catalogo
            </NavLink>
          
          
            <NavLink to="/nosotros" >
              Nosotros
            </NavLink>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
