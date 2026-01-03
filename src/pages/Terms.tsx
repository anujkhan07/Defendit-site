import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Terms = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-32 container mx-auto px-6">
                <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
                <div className="prose prose-invert max-w-none">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <p>Please read these terms and conditions carefully before using our service.</p>
                    {/* Add actual terms content here */}
                    <p className="mt-4 text-neutral-400">Content to be added.</p>
                </div>
            </div>
            <CTASection />
            <Footer />
        </div>
    );
};

export default Terms;
