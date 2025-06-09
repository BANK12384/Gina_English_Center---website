import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="fixed shadow-lg w-full h-[3.5rem] z-50 bg-white  Eng">
      <button
        className={`border-none z-50 fixed top-[0.9rem] right-4 ${
          isOpen ? "invisible" : "visible"
        }`}
        onClick={toggleMenu}
      >
        <span className="block bg-black w-7 h-1 my-1"></span>
        <span className="block bg-black w-7 h-1 my-1"></span>
        <span className="block bg-black w-7 h-1 my-1"></span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30"
          onClick={toggleMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 lg:w-[500px] w-[250px]  h-full shadow-lg transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-white z-40 overflow-hidden`}
      >
        <nav className="opacity-70 w-full pt-[3.5rem] pb-8 text-sm lg:text-xl">
          <ul className="list-none relative z-10">
            {isHome ? (
              <li className="py-3 lg:py-5 px-8 bg-[#24149B] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
                <a href="#home" onClick={toggleMenu}>Home</a>
              </li>
            ) : (
              <li className="py-3 lg:py-5 px-8 bg-[#24149B] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
            )}

            {isHome ? (
              <>
                <li className="py-3 lg:py-5 px-8 bg-[#E66291] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
                  <a href="#Page2" onClick={toggleMenu}>Page2</a>
                </li>
                <li className="py-3 lg:py-5 px-8 bg-[#D97C75] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
                  <a href="#teachers" onClick={toggleMenu}>Teachers</a>
                </li>
                <li className="py-3 lg:py-5 px-8 bg-[#F2CF67] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
                  <a href="#courses" onClick={toggleMenu}>Courses</a>
                </li>
                <li className="py-3 lg:py-5 px-8 bg-[#24149B] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
                  <a href="#classroom" onClick={toggleMenu}>Classroom</a>
                </li>
                <li className="py-3 lg:py-5 px-8 bg-[#E66291] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
                  <a href="#page6" onClick={toggleMenu}>Page6</a>
                </li>
                <li className="py-3 lg:py-5 px-8 bg-[#D97C75] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
                  <a href="#contact" onClick={toggleMenu}>Contact</a>
                </li>
              </>
            ) : (
              <>
               <li className="py-3 lg:py-5 px-8 bg-[#E66291] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
                  <a href="#Page2" onClick={toggleMenu}>Page2</a>
                </li>
                <li className="py-3 lg:py-5 px-8 bg-[#D97C75] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
                  <Link to="/#teachers" onClick={toggleMenu}>Teachers</Link>
                </li>
                <li className="py-3 lg:py-5 px-8 bg-[#F2CF67] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
                  <Link to="/#courses" onClick={toggleMenu}>Courses</Link>
                </li>
                <li className="py-3 lg:py-5 px-8 bg-[#24149B] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
                  <Link to="/#classroom" onClick={toggleMenu}>Classroom</Link>
                </li>
                <li className="py-3 lg:py-5 px-8 bg-[#E66291] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
                  <Link to="/#page5" onClick={toggleMenu}>Page5</Link>
                </li>
                <li className="py-3 lg:py-5 px-8 bg-[#D97C75] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
                  <Link to="/#contact" onClick={toggleMenu}>Contact</Link>
                </li>
              </>
            )}

            <li className="py-3 lg:py-5 px-8 bg-[#F2CF67] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
              <Link to="/Student" onClick={toggleMenu}>Student Info</Link>
            </li>
            <li className="py-3 lg:py-5 px-8 bg-[#F2CF67] text-white hover:bg-[#AF9D65] hover:border-2 hover:border-white">
              <Link to="/Student2" onClick={toggleMenu}>Student Info2</Link>
            </li>
          </ul>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black font-bold text-center">
            Gina English Center
          </div>
        </nav>

        <button
          className="absolute top-4 left-4 text-black text-3xl z-50"
          onClick={toggleMenu}
          aria-label="Close"
        >
          <img src="/Close_menu.svg" alt="Close menu" />
        </button>
      </div>
    </div>
  );
}
