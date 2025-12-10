import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logoImage from 'figma:asset/aa4c22f68ceab40ef6e0d340b54bba61147da13b.png';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <img src={logoImage} alt="SBN Advisors" className="h-10 mb-6" />
            <p className="text-sm leading-relaxed">
              Premier commercial capital advisory network delivering institutional-grade financing
              solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  Commercial Real Estate Finance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  Corporate Finance Advisory
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  Investment Sales
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  Structured Finance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  Capital Markets
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="hover:text-amber-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#transactions" className="hover:text-amber-500 transition-colors">
                  Transactions
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amber-500 transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-amber-500 transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>
                  123 Financial Plaza
                  <br />
                  New York, NY 10004
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href="tel:+12125551234" className="hover:text-amber-500 transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a
                  href="mailto:info@sbnadvisors.com"
                  className="hover:text-amber-500 transition-colors"
                >
                  info@sbnadvisors.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} SBN Advisors. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              Securities offered through registered representatives. Member FINRA/SIPC.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-sm hover:text-amber-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm hover:text-amber-500 transition-colors">
              Terms of Service
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
