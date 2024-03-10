import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Clients", to: "clients" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-2">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="fleetmax logo" className="h-32" />
          </div>

          {/* === desktop menu start === */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-gray-600 hover:text-[#857aef] transition-colors cursor-pointer"
                activeClass="!text-[#e854e4]"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* === desktop menu end === */}

          {/* === mobile menu button === */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#857aef]"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* === mobile menu start === */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="block px-3 py-2 text-gray-600 hover:text-[#857aef] transition-colors cursor-pointer"
                activeClass="!text-[#e854e4]"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* === mobile menu end === */}
    </nav>
  );
};

export default Navbar;
