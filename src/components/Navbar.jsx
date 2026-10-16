import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-semibold tracking-tight"
        >
          Trevis Cleary
        </Link>

        <div className="hidden md:flex items-center gap-8 text-slate-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) => `border-b-2 py-2 text-sm transition-colors ${isActive ? "border-accent text-accent" : "border-transparent hover:text-slate-100"}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="md:hidden p-2 text-slate-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-slate-800 bg-slate-950 px-6 py-5 flex flex-col gap-2 text-slate-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) => `rounded-md px-3 py-3 ${isActive ? "bg-slate-900 text-accent" : "hover:text-slate-100"}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
