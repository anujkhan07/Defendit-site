import { Shield, Users, Star, Car, Building, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Bodyguard Protection",
    description:
      "Personal security professionals trained in close protection, threat assessment, and emergency response.",
    features: ["24/7 Personal Protection", "Threat Assessment", "Secure Transportation"],
    popular: true,
  },
  {
    icon: Users,
    title: "Event Bouncers",
    description:
      "Professional crowd control and security for clubs, parties, and private events of any size.",
    features: ["Crowd Management", "ID Verification", "Conflict Resolution"],
  },
  {
    icon: Star,
    title: "VIP Protection",
    description:
      "Executive protection for high-profile individuals, celebrities, and business leaders.",
    features: ["Discreet Service", "Advance Planning", "Global Coverage"],
  },
  {
    icon: Car,
    title: "Secure Transport",
    description:
      "Security escorts for safe transportation of valuables and VIPs.",
    features: ["Armored Vehicles", "Route Planning", "GPS Tracking"],
  },
  {
    icon: Building,
    title: "Corporate Security",
    description:
      "Comprehensive security solutions for offices and enterprises.",
    features: ["Access Control", "Surveillance", "Security Audits"],
  },
  {
    icon: Calendar,
    title: "Event Security",
    description:
      "Full-scale security for concerts, conferences, weddings, and events.",
    features: ["Crowd Control", "Emergency Planning", "VIP Handling"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-5 py-2 rounded-full bg-white text-black text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Complete Security Solutions
          </h2>
          <p className="text-gray-400 text-lg">
            Premium on-demand security services designed for individuals,
            events, and enterprises.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card service-glow relative rounded-3xl
              bg-neutral-950 border border-neutral-800 p-8
              hover:border-white/30`}
            >
              {/* POPULAR BADGE */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2
                  px-4 py-1 rounded-full text-xs font-semibold
                  bg-white text-black shadow-lg">
                  MOST POPULAR
                </div>
              )}

              {/* ICON */}
              <div className="mb-6">
                <div className="h-14 w-14 rounded-2xl bg-neutral-900
                  flex items-center justify-center
                  transition-all duration-300
                  group-hover:rotate-6">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* FEATURES */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex gap-2">
                    <span className="text-white">•</span> {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full rounded-full py-5
                ${service.popular
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-neutral-900 text-white hover:bg-white hover:text-black"
                } transition-all`}
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
