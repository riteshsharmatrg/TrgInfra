
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Logo from "../Assets/TRGLogo.jpg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Process", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="TRG Logo"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-open-sans font-medium transition-colors duration-200 ${isActive(item.path)
                  ? "text-trg-blue border-b-2 border-trg-orange"
                  : "text-trg-charcoal hover:text-trg-blue"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-trg-charcoal">
              <Phone size={16} />
              <span className="font-open-sans text-sm">+91 9999105055</span>
            </div>
            <Link to="/consultation">
              <Button className="bg-trg-orange hover:bg-trg-orange/90 text-white font-montserrat font-semibold">
                Get Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>


        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-open-sans font-medium transition-colors duration-200 ${isActive(item.path)
                    ? "text-trg-blue"
                    : "text-trg-charcoal hover:text-trg-blue"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-trg-charcoal mb-4">
                  <Phone size={16} />
                  <span className="font-open-sans text-sm">+91 9999105055</span>
                </div>
                <Link to="/consultation" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-trg-orange hover:bg-trg-orange/90 text-white font-montserrat font-semibold">
                    Get Consultation
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
