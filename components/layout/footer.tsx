import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">CHITSULO</h3>
            <p className="text-muted-foreground text-sm">
              Expert welding and metal fabrication for your security and style.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Custom Gates
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Burglar Bars
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Steel Furniture
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Repairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <a
                  href="tel:+265112345678"
                  className="hover:text-primary transition"
                >
                  +2651(2) 123 456
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                <a
                  href="mailto:info@chitsulo.com"
                  className="hover:text-primary transition"
                >
                  info@chitsulo.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span>Blantyre, Malawi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 Chitsulo Fabricators. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-primary transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
