import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E5E5E5] bg-[#F2F2F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-center">
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6 text-sm sm:text-base text-[#444] sm:whitespace-nowrap">
          <Link to="/" className="hover:text-[#E78E4E] transition-colors">Inicio</Link>
          <Link to="/adoptar" className="hover:text-[#E78E4E] transition-colors">Encontrar Felinos</Link>
          <Link to="/guias" className="hover:text-[#E78E4E] transition-colors">Nuestras Guías</Link>
          <Link to="/nosotros" className="hover:text-[#E78E4E] transition-colors">Quiénes somos</Link>
        </nav>

        <p className="mt-4 text-sm text-[#777]">
          © {year} Operación Bigotes, todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;