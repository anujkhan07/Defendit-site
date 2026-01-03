import Navbar from "@/components/Navbar";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const HowItWorks = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-20">
                <HowItWorksSection />
            </div>
            <CTASection />
            <Footer />
        </div>
    );
};

export default HowItWorks;
