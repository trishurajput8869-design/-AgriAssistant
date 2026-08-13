import { useState } from "react";
import { Menu, X, Leaf, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white/90 backdrop-blur-xl border border-green-100 shadow-[0_8px_30px_rgba(20,83,45,0.08)] rounded-2xl px-5 md:px-7 py-3.5 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5"
            onClick={closeMenu}
          >
            <div className="w-10 h-10 rounded-xl bg-green-700 flex items-center justify-center shadow-lg shadow-green-700/20">
              <Leaf size={21} className="text-white" strokeWidth={2.5} />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-green-950">
                Agri<span className="text-green-600">Assist</span>
              </h1>

              <p className="hidden sm:block text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                Smart Farming • AI
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="nav-link"
            >
              Home
            </a>

            <a
              href="#about"
              className="nav-link"
            >
              About
            </a>

            <a
              href="#features"
              className="nav-link"
            >
              Features
            </a>

            <a
              href="#projects"
              className="nav-link"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="nav-link"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => navigate("/chat")}
            className="hidden md:flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-green-700/20 hover:-translate-y-0.5"
          >
            Ask AI
            <ArrowRight size={16} />
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-green-50 text-green-800 flex items-center justify-center"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white border border-green-100 rounded-2xl shadow-xl p-4">

            <div className="flex flex-col gap-1">

              <a
                href="#home"
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                About
              </a>

              <a
                href="#features"
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                Features
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                Contact
              </a>

              <button
                onClick={() => {
                  closeMenu();
                  navigate("/chat");
                }}
                className="mt-2 flex items-center justify-center gap-2 bg-green-700 text-white py-3 rounded-xl font-bold"
              >
                Ask AgriAssist AI
                <ArrowRight size={17} />
              </button>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;