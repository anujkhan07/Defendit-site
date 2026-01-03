import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const About = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-20">
                <AboutSection />
            </div>
            <CTASection />
            <Footer />
        </div>
    );
};

export default About;
