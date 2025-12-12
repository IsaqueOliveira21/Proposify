import { useState } from "react";
import { Link } from "react-router-dom";

const HomeMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="scroll-smooth">
      <header className="flex px-5 py-7 bg-blue-600 justify-between items-center">
        <h2 className="text-2xl text-white shadow font-semibold">Proposify</h2>

        {/* MENU DESKTOP */}
        <nav className="hidden md:block">
          <ul className="flex gap-5 items-center">
            <li>
              <a
                href="/#sobre"
                className="text-white font-semibold hover:text-gray-200"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="https://github.com/IsaqueOliveira21/Proposify"
                className="text-white font-semibold hover:text-gray-200"
              >
                Github
              </a>
            </li>
            <li>
              <Link
                to="/proposal"
                className="text-white px-4 py-2 rounded-xl border border-white flex items-center justify-center font-semibold bg-transparent hover:bg-gray-200 hover:text-blue-600"
              >
                Acessar
              </Link>
            </li>
          </ul>
        </nav>

        {/* BOTA MOBILE */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </header>

      {/* MENU MOBILE */}
      <nav
        className={`
    w-full bg-gray-50 overflow-hidden transition-all duration-300 md:hidden absolute z-20
    ${
      open
        ? "max-h-[800px] opacity-100 translate-y-0 py-10"
        : "max-h-0 opacity-0 -translate-y-3 py-0"
    }
  `}
      >
        <ul className="p-5 text-blue-600 text-center space-y-5 font-semibold">
          <li>
            <a href="/#sobre">Sobre</a>
          </li>
          <li>
            <a href="https://github.com/IsaqueOliveira21/Proposify">Github</a>
          </li>
          <li>
            <Link
              to="/proposal"
              className="bg-blue-600 w-full flex justify-center items-center text-white font-semibold rounded-xl px-3 py-2"
            >
              Acessar
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomeMenu;
