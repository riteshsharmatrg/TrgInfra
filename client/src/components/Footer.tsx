
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-trg-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-montserrat font-bold">TRG</div>
              <div className="text-sm font-open-sans">
                <div>Infra Planning</div>
                <div className="text-xs text-trg-orange">LLP</div>
              </div>
            </div>
            <p className="font-open-sans text-gray-300 mb-4">
              Your trusted partner in land development & regulatory approvals in Haryana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="font-open-sans text-gray-300 hover:text-trg-orange transition-colors">
                About Us
              </Link>
              <Link to="/services" className="font-open-sans text-gray-300 hover:text-trg-orange transition-colors">
                Services
              </Link>
              <Link to="/process" className="font-open-sans text-gray-300 hover:text-trg-orange transition-colors">
                Process
              </Link>
              <Link to="/contact" className="font-open-sans text-gray-300 hover:text-trg-orange transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 text-trg-orange" />
                <div className="font-open-sans text-gray-300">
                  <div>+91 9999105055</div>
                  <div>+91 9990105056</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 text-trg-orange" />
                <div className="font-open-sans text-gray-300">
                  trg.infra@outlook.com
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-trg-orange" />
                <div className="font-open-sans text-gray-300">
                  401A, 4th Floor, Good Earth City Centre,<br />
                  Sector 50, Gurugram, Haryana 122018
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="font-open-sans text-gray-300">
            © 2024 TRG Infra Planning LLP.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
