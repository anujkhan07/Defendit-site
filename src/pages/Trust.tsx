import Navbar from "@/components/Navbar";
import TrustComplianceSection from "@/components/TrustComplianceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Trust = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-20">
                <TrustComplianceSection />
            </div>
            <CTASection />
            <Footer />
        </div>
    );
};

export default Trust;
