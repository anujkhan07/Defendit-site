import { Mail, Phone, MapPin, ShieldCheck, Building2, Users } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-28 bg-black border-t border-neutral-800 overflow-hidden"
    >
      {/* subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 to-black" />

      <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-up">
          Get in Touch with Defendit
        </h2>

        <p className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-up-delay-1">
          Defendit is building India’s on-demand professional security platform.
          We work closely with individuals, housing societies, enterprises,
          event organizers, and institutions that require reliable, verified,
          and responsive security services.
        </p>

        {/* Use cases */}
        <div className="grid sm:grid-cols-3 gap-6 mt-14 animate-fade-up-delay-2">
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6">
            <Users className="h-8 w-8 text-white mb-4 mx-auto" />
            <p className="text-white font-semibold mb-1">Individuals & Families</p>
            <p className="text-neutral-400 text-sm">
              Personal bodyguards, travel security, short-notice protection
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6">
            <Building2 className="h-8 w-8 text-white mb-4 mx-auto" />
            <p className="text-white font-semibold mb-1">Enterprises & Societies</p>
            <p className="text-neutral-400 text-sm">
              Corporate offices, gated communities, visitor & event security
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6">
            <ShieldCheck className="h-8 w-8 text-white mb-4 mx-auto" />
            <p className="text-white font-semibold mb-1">High-Risk & VIP Events</p>
            <p className="text-neutral-400 text-sm">
              Celebrities, executives, large-scale & sensitive deployments
            </p>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-16 space-y-6 animate-fade-up-delay-3">
          <p className="text-neutral-300 text-lg font-medium">
            For partnerships, enterprise onboarding, pilot programs, or official
            communication:
          </p>

          <div className="flex flex-col items-center gap-4 text-neutral-300">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-white" />
              <span className="text-lg">support@defendit.in</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-white" />
              <span className="text-lg">+91 73558 41215</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-white" />
              <span className="text-lg">Gurugram, Haryana, India</span>
            </div>
          </div>
        </div>

        {/* trust note */}
        <div className="mt-12 animate-fade-up-delay-4">
          <p className="text-sm text-neutral-500">
            All security professionals onboarded on Defendit undergo identity
            verification, background screening, and platform onboarding before
            deployment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
