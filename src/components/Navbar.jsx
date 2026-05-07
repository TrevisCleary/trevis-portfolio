import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 border-b border-slate-800">
      <Link
        to="/"
        className="text-2xl font-bold"
      >
        Trevis Cleary
      </Link>

      <div className="flex gap-8 text-slate-300">
        <Link
          to="/"
          className="hover:text-white transition"
        >
          Home
        </Link>

        <Link
          to="/projects"
          className="hover:text-white transition"
        >
          Projects
        </Link>

        <Link
          to="/resume"
          className="hover:text-white transition"
        >
          Resume
        </Link>

        <Link
          to="/contact"
          className="hover:text-white transition"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;