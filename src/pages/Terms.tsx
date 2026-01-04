import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Terms = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-32 container mx-auto px-6 mb-24">
                <div className="max-w-4xl mx-auto space-y-10">

                    {/* HEADER */}
                    <div className="space-y-3">
                        <h1 className="text-4xl font-bold">Terms of Service – Defendit</h1>
                        {/* <p className="text-neutral-400">
                            Effective Date: January 2025<br />
                            Last Updated: January 2025
                        </p> */}
                    </div>

                    {/* INTRO */}
                    <div className="space-y-4">
                        <p className="text-neutral-300 leading-relaxed">
                            These Terms of Service (“Terms”) govern your access to and use of the Defendit website, mobile applications, and related services (collectively, the “Platform”).
                        </p>
                        <p className="text-neutral-300 leading-relaxed">
                            By accessing or using Defendit, you agree to be bound by these Terms. If you do not agree, please do not use the Platform.
                        </p>
                    </div>

                    {/* SECTION 1 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">1. About Defendit</h2>
                        <p className="text-neutral-300 leading-relaxed">
                            Defendit is a technology-enabled platform that facilitates the discovery, booking, and coordination of independent professional security service providers, including bodyguards, bouncers, event security personnel, and related professionals.
                        </p>
                        <ul className="list-none space-y-2 text-neutral-300">
                            <li>👉 Defendit does not directly provide physical security services.</li>
                            <li>👉 Security services are delivered by independent third-party professionals listed on the Platform.</li>
                        </ul>
                    </section>

                    {/* SECTION 2 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">2. Eligibility</h2>
                        <p className="text-neutral-300">To use Defendit, you must:</p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>Be at least 18 years of age</li>
                            <li>Have the legal capacity to enter into a binding agreement</li>
                            <li>Use the Platform only for lawful purposes</li>
                        </ul>
                    </section>

                    {/* SECTION 3 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
                        <p className="text-neutral-300">By using Defendit, you agree to:</p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>Provide accurate, current, and complete information</li>
                            <li>Use the Platform only for legitimate and lawful security requirements</li>
                            <li>Not misuse, abuse, or attempt to exploit security professionals</li>
                            <li>Comply with all applicable local, state, and national laws</li>
                        </ul>
                        <p className="text-neutral-300 mt-2">Defendit reserves the right to suspend or terminate accounts for violations.</p>
                    </section>

                    {/* SECTION 4 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">4. Booking & Service Fulfillment</h2>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>Defendit facilitates bookings between users and independent security professionals.</li>
                            <li>Availability, pricing, and acceptance of bookings are subject to professional confirmation.</li>
                            <li>Defendit does not guarantee uninterrupted availability of services.</li>
                            <li>Any service-related issues must be reported promptly through official support channels.</li>
                        </ul>
                    </section>

                    {/* SECTION 5 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">5. Payments & Fees</h2>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>Prices displayed on the Platform may include platform fees and applicable taxes.</li>
                            <li>Payments may be processed through authorized third-party payment gateways.</li>
                            <li>Defendit is not responsible for payment failures caused by banks, gateways, or technical issues.</li>
                            <li>Refunds, if applicable, are governed by Defendit’s cancellation and refund policy.</li>
                        </ul>
                    </section>

                    {/* SECTION 6 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">6. Verification & Safety</h2>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>Defendit conducts reasonable verification checks on security professionals.</li>
                            <li>However, Defendit does not guarantee the conduct, performance, or outcome of services.</li>
                            <li>Users are advised to exercise reasonable judgment and caution.</li>
                        </ul>
                    </section>

                    {/* SECTION 7 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
                        <p className="text-neutral-300">To the maximum extent permitted by law:</p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>Defendit shall not be liable for indirect, incidental, special, or consequential damages.</li>
                            <li>Defendit is not responsible for personal injury, loss, or damages arising from services provided by third parties.</li>
                            <li>Total liability, if any, shall not exceed the fees paid to Defendit for the relevant booking.</li>
                        </ul>
                    </section>

                    {/* SECTION 8 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">8. Intellectual Property</h2>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>All content on the Platform, including logos, text, graphics, software, and designs, is the exclusive property of Defendit or its licensors.</li>
                            <li>You may not copy, reproduce, distribute, or exploit any content without prior written permission.</li>
                        </ul>
                    </section>

                    {/* SECTION 9 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">9. Account Suspension & Termination</h2>
                        <p className="text-neutral-300">Defendit may suspend or terminate access:</p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>For violation of these Terms</li>
                            <li>For suspected fraud or misuse</li>
                            <li>To comply with legal or regulatory obligations</li>
                        </ul>
                        <p className="text-neutral-300 mt-2">Termination does not limit Defendit’s legal rights.</p>
                    </section>

                    {/* SECTION 10 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">10. Privacy</h2>
                        <p className="text-neutral-300">Your use of Defendit is also governed by our Privacy Policy, which explains how personal data is collected and processed.</p>
                    </section>

                    {/* SECTION 11 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">11. Governing Law & Jurisdiction</h2>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>These Terms shall be governed by and construed in accordance with the laws of India.</li>
                            <li>Any disputes shall be subject to the exclusive jurisdiction of the courts of Gurugram, Haryana.</li>
                        </ul>
                    </section>

                    {/* SECTION 12 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">12. Modifications to Terms</h2>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>Defendit reserves the right to modify these Terms at any time. Updated Terms will be posted on the Platform with a revised effective date.</li>
                            <li>Continued use of the Platform constitutes acceptance of the updated Terms.</li>
                        </ul>
                    </section>

                    {/* SECTION 13 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">13. Contact Information</h2>
                        <p className="text-neutral-300">For any questions or concerns regarding these Terms:</p>
                        <div className="text-neutral-300 mt-2">
                            <p className="font-semibold text-white">Defendit</p>
                            <p>📍 Gurugram, Haryana, India</p>
                            <p>📧 <a href="mailto:support@defendit.in" className="text-blue-400 hover:text-blue-300">support@defendit.in</a></p>
                            <p>📞 <a href="tel:+917355841215" className="text-blue-400 hover:text-blue-300">+91 73558 41215</a></p>
                        </div>
                    </section>

                </div>
            </div>
            <CTASection />
            <Footer />
        </div>
    );
};

export default Terms;
