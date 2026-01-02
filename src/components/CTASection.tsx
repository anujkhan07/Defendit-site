import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-black text-center">
      <h2 className="text-4xl font-bold text-white mb-6">
        Ready for Professional Protection?
      </h2>
      <p className="text-gray-400 mb-10">
        Book elite security in minutes. Available 24/7.
      </p>

      <Button className="bg-white text-black px-10 py-6 rounded-full text-lg hover:bg-gray-200">
        Book Now <ArrowRight className="inline ml-2" />
      </Button>
    </section>
  );
};

export default CTASection;
