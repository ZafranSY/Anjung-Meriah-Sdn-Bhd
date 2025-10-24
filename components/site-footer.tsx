// Add this import
import Image from "next/image";
import Link from "next/link";
// Added Newspaper as a placeholder for Bloomberg
import { Facebook, Linkedin, MapPin, Newspaper } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/AnjungMeriah_logo.png" // Path from the public folder
                alt="Anjung Meriah Sdn Bhd Logo"
                width={180} // Adjust width to actual logo width if known
                height={60} // Adjust height to actual logo height if known
                className="h-14 w-auto" // Adjust h-14 as needed for desired display size
              />
            </div>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              A 100% Bumiputera, CIDB G7 Contractor and SEDA Registered EPCC Provider delivering total solutions in
              Construction and Renewable Energy.
            </p>
            <div className="text-xs text-white/60">
              <p>Reg No: 0166125V</p>
              <p>Est. 16 Nov 1987</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/discover-us/about" className="text-white/70 hover:text-corporate-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions/services" className="text-white/70 hover:text-corporate-red transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-corporate-red transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/discover-us/certifications"
                  className="text-white/70 hover:text-corporate-red transition-colors"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-corporate-red transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/solutions/sectors#residential"
                  className="text-white/70 hover:text-corporate-red transition-colors"
                >
                  Residential Solar
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/sectors#commercial"
                  className="text-white/70 hover:text-corporate-red transition-colors"
                >
                  Commercial Solar
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/sectors#industrial"
                  className="text-white/70 hover:text-corporate-red transition-colors"
                >
                  Industrial Solar
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/sectors#solar-farms"
                  className="text-white/70 hover:text-corporate-red transition-colors"
                >
                  Solar Farms
                </Link>
              </li>
              <li>
                <Link href="/solutions/products" className="text-white/70 hover:text-corporate-red transition-colors">
                  Products Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Updated Social Links */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-corporate-red flex-shrink-0 mt-0.5" />
                <span className="text-white/70">Dataran Ara Damansara, Petaling Jaya, Selangor</span>
              </li>
              <li>
                <div className="bg-white/5 border border-white/10 rounded p-2">
                  <p className="text-xs text-corporate-red font-semibold mb-1">[CLIENT TO PROVIDE]</p>
                  <p className="text-xs text-white/60">Phone number and professional email address</p>
                </div>
              </li>
            </ul>
            {/* --- Social Links Updated --- */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/anjungmeriah/?locale=ms_MY" // Updated Facebook link
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Security best practice
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-corporate-red hover:text-white transition-colors"
                aria-label="Anjung Meriah Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#" // Keep LinkedIn link placeholder for now, or add the correct URL
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-corporate-red hover:text-white transition-colors"
                aria-label="Anjung Meriah LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.bloomberg.com/profile/company/2463917D:MK" // Added Bloomberg link
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-corporate-red hover:text-white transition-colors"
                aria-label="Anjung Meriah Bloomberg Profile"
              >
                {/* Using Newspaper as a placeholder icon */}
                <Newspaper className="h-4 w-4" />
              </a>
            </div>
             {/* --- End Social Links Update --- */}
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <span className="px-3 py-1 border border-white/20 rounded">SEDA RPVSP Certified</span>
            <span className="px-3 py-1 border border-white/20 rounded">CIDB G7</span>
            <span className="px-3 py-1 border border-white/20 rounded">ISO 9001:2015</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2025 Anjung Meriah Sdn. Bhd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-corporate-red transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-corporate-red transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-corporate-red transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} //