import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Contact = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-20">
                <ContactSection />
            </div>
            <CTASection />
            <Footer />
        </div>
    );
};

export default Contact;
