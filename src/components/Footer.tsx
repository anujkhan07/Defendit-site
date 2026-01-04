import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import defenditLogo from "@/assets/defendit-logo.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="container mx-auto px-6 lg:px-8 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="space-y-4">
            <img
              src={defenditLogo}
              alt="Defendit"
              className="h-24 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] opacity-95"
            />
            <p className="text-neutral-400 text-sm leading-relaxed">
              Defendit is an on-demand professional security platform enabling
              instant booking of verified bodyguards, bouncers, and security
              personnel across India.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>Personal Bodyguards</li>
              <li>Event Security</li>
              <li>VIP Protection</li>
              <li>Corporate Security</li>
              <li>Visitor & Escort Services</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="/about" className="hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="/trust" className="hover:text-white transition">Trust & Compliance</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>

            <div className="space-y-4 text-sm text-neutral-400">

              <div className="flex gap-3 items-start">
                <MapPin className="h-4 w-4 mt-1 text-neutral-500" />
                <span>Gurugram, Haryana, India</span>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="h-4 w-4 mt-1 text-neutral-500" />
                <span>support@defendit.in</span>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-neutral-500 mt-[2px]">📞</span>
                <span>+91 73558 41215</span>
              </div>

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-14 border-t border-neutral-800 pt-8
          flex flex-col md:flex-row items-center justify-between gap-6">

          {/* COPYRIGHT */}
          <p className="text-sm text-neutral-500">
            © 2026 SCOUTRL Pvt. Ltd. All rights reserved.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4">
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-neutral-900
              flex items-center justify-center
              hover:bg-white hover:text-black transition"
            >
              <Facebook className="h-4 w-4" />
            </a>

            <a
              href="#"
              className="h-10 w-10 rounded-full bg-neutral-900
              flex items-center justify-center
              hover:bg-white hover:text-black transition"
            >
              <Twitter className="h-4 w-4" />
            </a>

            <a
              href="#"
              className="h-10 w-10 rounded-full bg-neutral-900
              flex items-center justify-center
              hover:bg-white hover:text-black transition"
            >
              <Instagram className="h-4 w-4" />
            </a>

            {/* LINKEDIN – ACTIVE */}
            <a
              href="https://www.linkedin.com/company/defendit.in/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-neutral-900
              flex items-center justify-center
              hover:bg-white hover:text-black transition"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* LEGAL */}
          <div className="flex gap-6 text-sm text-neutral-500">
            {/* Duplicate links removed as requested to be in main list, but user said "acc to website" so maybe keep bottom ones? 
                 The user said: "add these allso in footer ... and remove Careers Partners Blog". 
                 It seems they want the main vertical list to have these. 
                 I'll remove the bottom right ones if they are redundant, or just point them to the same place. 
                 The request "add these allso in footer" implies the vertical list. 
                 Let's keep the bottom bar simple or remove the links if they are duplicates. 
                 I'll keep them but point them correctly for now.
             */}
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
