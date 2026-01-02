import { ShieldCheck, Users, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 bg-neutral-950 border-t border-neutral-800"
    >
      <div className="container mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-neutral-900 text-neutral-300 text-sm">
            About Defendit
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Redefining On-Demand
            <br />
            Personal Security in India
          </h2>

          <p className="text-neutral-400 text-lg leading-relaxed">
            Defendit is a tech-enabled personal security platform that allows
            individuals and organizations to instantly book verified security
            professionals — just like booking a ride, but for protection.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
            <ShieldCheck className="h-10 w-10 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Verified & Trusted
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Every professional on Defendit undergoes identity verification,
              background checks, and platform onboarding to ensure reliability
              and accountability.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
            <Zap className="h-10 w-10 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Instant Booking Model
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              We replace slow, agent-driven security processes with a real-time,
              app-based booking system for urgent and scheduled security needs.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
            <Users className="h-10 w-10 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Dual-App Ecosystem
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Defendit operates with separate apps for customers and security
              professionals — enabling transparency, fair earnings, and service
              quality at scale.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
