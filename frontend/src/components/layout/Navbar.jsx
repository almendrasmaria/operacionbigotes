import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50">
        <div className="mx-auto w-full px-4 md:max-w-[764px]">
          <nav className="h-[68px] w-full rounded-full bg-white backdrop-blur-xl shadow-md flex items-center px-5 sm:px-6 justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="Operación Bigotes"
                className="h-9 w-9 object-contain"
              />
              <span className="text-sm font-semibold text-gray-900">
                Operación Bigotes.
              </span>
            </Link>

            <ul className="hidden md:flex items-center space-x-6">
              <li><NavLink to="/" end className={linkClass}>Inicio</NavLink></li>
              <li><NavLink to="/adoptar" className={linkClass}>Adoptar</NavLink></li>
              <li><NavLink to="/guias" className={linkClass}>Guías</NavLink></li>
              <li><NavLink to="/nosotros" className={linkClass}>Nosotros</NavLink></li>
            </ul>

            <div className="flex items-center gap-3">
              <Link
                to="/comenzar"
                className="hidden sm:inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition"
              >
                Comenzar
              </Link>

              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-gray-700 hover:text-orange-600 transition"
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
              >
                {open ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            className="absolute inset-0 bg-black/30"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          />

          <div className="absolute top-24 left-4 right-4 mx-auto max-w-sm rounded-2xl bg-white/95 backdrop-blur-xl shadow-md p-4 ring-1 ring-black/5">
            <ul className="space-y-3">
              <li><NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>Inicio</NavLink></li>
              <li><NavLink to="/adoptar" className={linkClass} onClick={() => setOpen(false)}>Adoptar</NavLink></li>
              <li><NavLink to="/guias" className={linkClass} onClick={() => setOpen(false)}>Guías</NavLink></li>
              <li><NavLink to="/nosotros" className={linkClass} onClick={() => setOpen(false)}>Nosotros</NavLink></li>

              <li className="pt-2">
                <Link
                  to="/comenzar"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition"
                >
                  Comenzar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
