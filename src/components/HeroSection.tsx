import { useState } from "react";
import { ArrowRight, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-defendit-new.png";
import BookingDemoModal from "@/components/BookingDemoModal";

const HeroSection = () => {
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-black pt-24 pb-20 overflow-hidden">
        
        {/* Right subtle gradient */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 bg-gradient-to-l from-neutral-900 to-black" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div className="space-y-8 text-center lg:text-left">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 mx-auto lg:mx-0 animate-fade-up">
                <Clock className="h-4 w-4 text-gray-300" />
                <span className="text-sm text-gray-300">
                  Book in 20 minutes
                </span>
              </div>

              <h1 className="font-bold leading-tight text-white
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="block animate-fade-up">Professional</span>
                <span className="block animate-fade-up-delay-1">Security</span>
                <span className="block text-gray-400 animate-fade-up-delay-2">
                  On Demand
                </span>
              </h1>

              <p className="text-gray-400 max-w-xl mx-auto lg:mx-0
                text-base sm:text-lg md:text-xl animate-fade-up-delay-3">
                Book elite bodyguards, bouncers, and VIP protection professionals
                within minutes. Your safety is our priority — available 24/7.
              </p>

              <div className="flex justify-center lg:justify-start animate-fade-up-delay-3">
                <Button
                  size="lg"
                  onClick={() => setOpenBooking(true)}
                  className="bg-white text-black hover:bg-gray-200
                  font-semibold px-8 py-6 rounded-full
                  transition-all duration-300 hover:scale-[1.04] group"
                >
                  Book a Professional
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 pt-10 border-t border-neutral-800
                justify-center lg:justify-start animate-fade-up-delay-3">

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-900 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">500+</p>
                    <p className="text-sm text-gray-400">Verified Professionals</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-900 flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">10k+</p>
                    <p className="text-sm text-gray-400">Happy Clients</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-900 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">24/7</p>
                    <p className="text-sm text-gray-400">Availability</p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden lg:block">
              <img
                src={heroImage}
                alt="Defendit Professional Security Team"
                className="w-full max-w-2xl ml-auto rounded-2xl shadow-2xl animate-slow-zoom"
              />
            </div>

          </div>
        </div>
      </section>

      {/* BOOKING MODAL */}
      <BookingDemoModal
        open={openBooking}
        onClose={() => setOpenBooking(false)}
      />
    </>
  );
};

export default HeroSection;
