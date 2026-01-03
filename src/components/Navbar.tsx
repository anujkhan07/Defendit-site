import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import defenditLogo from "@/assets/defendit-logo.png";
import BookingDemoModal from "@/components/BookingDemoModal";

const sections = [
  { name: "Services", href: "/services" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Trust & Compliance", href: "/trust" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openBooking, setOpenBooking] = useState(false);

  // 🔐 FAKE AUTH (for incubation demo)
  const isLoggedIn = false;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
            ? "bg-neutral-950/90 backdrop-blur-xl shadow-lg border-b border-neutral-800"
            : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">

            {/* LOGO */}
            <NavLink to="/" className="flex items-center gap-3">
              <img
                src={defenditLogo}
                alt="Defendit"
                className="
    h-14 md:h-16
    w-auto
    opacity-95
    hover:opacity-100
    transition-all
    duration-300
    drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]
  "
              />
            </NavLink>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-10">
              {sections.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) => `text-sm tracking-wide transition relative
                  ${isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                    }`}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden md:flex items-center gap-4">
              <NavLink to="/login">
                <Button
                  variant="ghost"
                  className="text-neutral-300 hover:text-white"
                >
                  Sign In
                </Button>
              </NavLink>

              <Button
                onClick={() => {
                  if (!isLoggedIn) {
                    window.location.href = "/login";
                  } else {
                    setOpenBooking(true);
                  }
                }}
                className="bg-white text-black hover:bg-neutral-200 rounded-full px-6"
              >
                Book Now
              </Button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <div className="md:hidden mt-4 rounded-2xl bg-neutral-950 border border-neutral-800 p-6 space-y-4">
              {sections.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `block text-base transition
                  ${isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                    }`}
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-4 border-t border-neutral-800 space-y-3">
                <NavLink to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full text-white">
                    Sign In
                  </Button>
                </NavLink>

                <Button
                  onClick={() => {
                    if (!isLoggedIn) {
                      window.location.href = "/login";
                    } else {
                      setOpenBooking(true);
                    }
                    setIsOpen(false);
                  }}
                  className="w-full bg-white text-black rounded-full py-4"
                >
                  Book Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* BOOKING MODAL */}
      <BookingDemoModal
        open={openBooking}
        onClose={() => setOpenBooking(false)}
      />
    </>
  );
};

export default Navbar;
