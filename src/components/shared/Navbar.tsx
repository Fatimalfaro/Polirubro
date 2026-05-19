import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { useAppContext } from "../../context/AppContext";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const {usuario, setUsuario} = useAppContext();
  const navegacion = useNavigate();

  const logout = () => {
    setUsuario(null);
    navegacion("/");
  } 

  const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-3 transition-colors duration-200 md:p-0 ${
      isActive
        ? "text-green-500 font-semibold"
        : "text-zinc-300 hover:text-green-400"
    }`;

  return (
    <nav className="sticky top-0 z-50">
      <div>
        <div className="navbar bg-black shadow-sm">
          {/* Logo y carrito */}
          <div>
            <Link to={"/"}
              className="btn btn-ghost text-green-500 text-2xl">
              MULTICLICK
            </Link>
          </div>
          
          {usuario === "cliente" && (
          <div className="text-xl ml-4">
            <Link to={"/carrito"}>
              <FiShoppingCart />
            </Link>
          </div>
          )}

          {/* Botón Hamburguesa (Celular) */}
          <div className="md:hidden ml-auto mt-1.5">
            <button
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              type="button"
            >
              {isNavbarOpen ? (
                <FiX className="text-3xl" />
              ) : (
                <FiMenu className="text-3xl" />
              )}
            </button>
          </div>

          {/* Navbar desktop */}
          <div className="hidden md:block ml-auto">
            <div className="mr-10 flex items-center space-x-10">
              <NavLink to="/" className={navLinkStyles}>
                Inicio
              </NavLink>
              
              {usuario === "admin" ? (
                <>
                <NavLink to="/administrador" className={navLinkStyles}>Administrador</NavLink>
                <button onClick={logout}
                className="flex items-center gap-2 bg-zinc-800 hover:bg-red-900/40 text-red-400 px-4 py-2 rounded text-sm font-medium transition-all border border-zinc-700 hover:border-red-500/50"><LuLogOut/>Logout</button>
              </>
              ): (
              <NavLink to="/login" className={navLinkStyles}>Login</NavLink>
              )}
              <NavLink to="/catalogo" className={navLinkStyles}>Catalogo</NavLink>
              <NavLink to="/nosotros" className={navLinkStyles}>Nosotros</NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar desplegable */}
      <div
        className={`${isNavbarOpen ? "max-h-96 " : "max-h-0 overflow-hidden"} md:hidden transition-all duration-300 ease-in-out bg-zinc-900 border-t border-zinc-800 `}
      >
        <div className="menu px-1">
          <NavLink to="/" className={navLinkStyles}>
            Inicio
          </NavLink>
          <NavLink to="/catalogo" className={navLinkStyles}>Catalogo</NavLink>

          <NavLink
            to="/login"
            className={navLinkStyles}
          >
            Login
          </NavLink>

          <NavLink to="/administrador" className={navLinkStyles}>Administrador</NavLink>


          <NavLink to="/nosotros" className={navLinkStyles}>Nosotros</NavLink>

{usuario === "admin" ? (

    <>
      <NavLink
        to="/administrador"
        className={navLinkStyles}
      >
        Administrador
      </NavLink>

      <button
        onClick={logout}
        className="flex items-center gap-2 text-red-400 px-3 py-2"
      >
        <LuLogOut />
        Logout
      </button>
    </>

  ) : (

    <NavLink
      to="/login"
      className={navLinkStyles}
    >
      Login
    </NavLink>

  )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
