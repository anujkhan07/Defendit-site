import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", role: "Event Organizer", text: "Outstanding security service.", rating: 5 },
  { name: "James R.", role: "Celebrity Manager", text: "Highly professional team.", rating: 5 },
  { name: "Emily C.", role: "Nightclub Owner", text: "Best security decision we made.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">What Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
              <p className="text-gray-400 mb-6">"{t.text}"</p>
              <div className="flex justify-center mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 text-white fill-white" />
                ))}
              </div>
              <p className="text-white font-semibold">{t.name}</p>
              <p className="text-sm text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
