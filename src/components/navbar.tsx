import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import leo from "../logo/leo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blog", path: "/blog", isButton: true },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/">
              <img src={leo} alt="Leo Tech" className="h-12" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.isButton ? (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 ${
                      isActive ? "bg-yellow-400" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-black hover:text-orange-500 transition-all duration-300 ${
                      isActive ? "text-orange-500 font-semibold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-orange-500 hover:bg-gray-100 transition-colors duration-300"
              aria-label="Main menu"
            >
              <div className="relative flex items-center justify-center w-6 h-6">
                <span 
                  className={`absolute h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'w-6 rotate-45' : 'w-6 -translate-y-2'
                  }`}
                />
                <span 
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'w-6 -rotate-45' : 'w-6 translate-y-2'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link, index) => (
            <div 
              key={link.name}
              style={{ 
                transitionDelay: `${index * 75}ms`,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(2rem)',
                opacity: isMenuOpen ? 1 : 0
              }}
              className="transform transition-all duration-300"
            >
              {link.isButton ? (
                <NavLink
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 ${
                      isActive ? "bg-yellow-400" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ) : (
                <NavLink
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-all duration-300 ${
                      isActive ? "text-orange-500 font-semibold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;