import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
