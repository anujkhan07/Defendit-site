import { Search, UserCheck, Calendar, Shield } from "lucide-react";

const steps = [
  { icon: Search, title: "Choose Service", desc: "Select the security service you need." },
  { icon: UserCheck, title: "Verify Professional", desc: "Browse verified profiles & reviews." },
  { icon: Calendar, title: "Book & Confirm", desc: "Choose time, place & confirm instantly." },
  { icon: Shield, title: "Get Protection", desc: "Professional arrives on time." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">How It Works</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s, i) => (
            <div key={i} className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
              <s.icon className="h-10 w-10 text-white mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
