import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-32 container mx-auto px-6 mb-24">
                <div className="max-w-4xl mx-auto space-y-10">

                    {/* HEADER */}
                    <div className="space-y-3">
                        <h1 className="text-4xl font-bold">Privacy Policy – Defendit</h1>
                        {/* <p className="text-neutral-400">
                            Effective Date: January 2025<br />
                            Last Updated: January 2025
                        </p> */}
                    </div>

                    {/* INTRO */}
                    <p className="text-neutral-300 leading-relaxed">
                        Defendit (“Defendit”, “we”, “our”, or “us”) is committed to protecting the privacy and personal information of its users. This Privacy Policy explains how we collect, use, store, share, and safeguard information when you access or use the Defendit website, mobile applications, and related services (collectively, the “Platform”).
                        <br /><br />
                        By accessing or using Defendit, you agree to the practices described in this Privacy Policy.
                    </p>

                    {/* SECTION 1 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>

                        <div className="space-y-2">
                            <h3 className="text-xl font-medium text-white">1.1 Information You Provide</h3>
                            <p className="text-neutral-300">We may collect the following information when you register, book services, or communicate with us:</p>
                            <ul className="list-disc list-inside text-neutral-300 space-y-1 ml-4">
                                <li>Full name</li>
                                <li>Mobile number and email address</li>
                                <li>Location and address details</li>
                                <li>Booking details and service requirements</li>
                                <li>Communication records with customer support</li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-medium text-white">1.2 Information Collected Automatically</h3>
                            <p className="text-neutral-300">When you use our Platform, we may automatically collect:</p>
                            <ul className="list-disc list-inside text-neutral-300 space-y-1 ml-4">
                                <li>IP address</li>
                                <li>Device information (browser, OS, device type)</li>
                                <li>Usage data (pages visited, time spent, interactions)</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-medium text-white">1.3 Information of Security Professionals</h3>
                            <p className="text-neutral-300">For security professionals onboarded on Defendit, we may additionally collect:</p>
                            <ul className="list-disc list-inside text-neutral-300 space-y-1 ml-4">
                                <li>Government-issued identity details</li>
                                <li>Background verification information</li>
                                <li>Professional certifications and experience</li>
                                <li>Bank or payout-related details</li>
                            </ul>
                        </div>
                    </section>

                    {/* SECTION 2 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
                        <p className="text-neutral-300">We use the collected information to:</p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>Facilitate and manage security service bookings</li>
                            <li>Verify identities and maintain platform safety</li>
                            <li>Communicate booking updates and service information</li>
                            <li>Improve platform functionality and user experience</li>
                            <li>Prevent fraud, misuse, and unauthorized access</li>
                            <li>Comply with legal and regulatory requirements</li>
                        </ul>
                    </section>

                    {/* SECTION 3 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">3. Information Sharing & Disclosure</h2>
                        <p className="text-neutral-300">Defendit does not sell or rent personal data.<br />We may share information only in the following cases:</p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>With verified security professionals to fulfill bookings</li>
                            <li>With trusted third-party service providers (hosting, analytics, payment processing)</li>
                            <li>When required by law, court order, or government authority</li>
                            <li>To protect the rights, safety, or integrity of Defendit, users, or professionals</li>
                        </ul>
                        <p className="text-neutral-300">All third parties are bound by confidentiality and data protection obligations.</p>
                    </section>

                    {/* SECTION 4 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">4. Data Security</h2>
                        <p className="text-neutral-300">We implement industry-standard technical and organizational measures to safeguard data, including:</p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>Secure servers and encrypted communication</li>
                            <li>Restricted internal access to personal data</li>
                            <li>Regular monitoring and security updates</li>
                        </ul>
                        <p className="text-neutral-300">While we strive to protect user data, no system can guarantee absolute security.</p>
                    </section>

                    {/* SECTION 5 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">5. Data Retention</h2>
                        <p className="text-neutral-300">We retain personal information only as long as necessary to:</p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>Provide services</li>
                            <li>Meet legal, regulatory, or compliance obligations</li>
                            <li>Resolve disputes and enforce agreements</li>
                        </ul>
                        <p className="text-neutral-300">When no longer required, data is securely deleted or anonymized.</p>
                    </section>

                    {/* SECTION 6 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">6. Your Rights</h2>
                        <p className="text-neutral-300">You have the right to:</p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>Access and review your personal information</li>
                            <li>Request correction or updates to your data</li>
                            <li>Request deletion of your account and personal data (subject to legal requirements)</li>
                            <li>Withdraw consent for non-essential communications</li>
                        </ul>
                        <p className="text-neutral-300">Requests can be made by contacting us at <a href="mailto:support@defendit.in" className="text-blue-400 hover:text-blue-300">support@defendit.in</a>.</p>
                    </section>

                    {/* SECTION 7 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">7. Cookies & Tracking Technologies</h2>
                        <p className="text-neutral-300">Defendit uses cookies to:</p>
                        <ul className="list-disc list-inside text-neutral-300 space-y-2">
                            <li>Improve site performance</li>
                            <li>Analyze traffic and usage patterns</li>
                            <li>Enhance user experience</li>
                        </ul>
                        <p className="text-neutral-300">You may disable cookies through your browser settings, though some features may not function properly.</p>
                    </section>

                    {/* SECTION 8 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">8. Third-Party Links</h2>
                        <p className="text-neutral-300">Our Platform may contain links to third-party websites. Defendit is not responsible for the privacy practices or content of such external sites.</p>
                    </section>

                    {/* SECTION 9 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">9. Children’s Privacy</h2>
                        <p className="text-neutral-300">Defendit does not knowingly collect personal information from individuals under the age of 18. If such data is identified, it will be removed promptly.</p>
                    </section>

                    {/* SECTION 10 */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">10. Changes to This Privacy Policy</h2>
                        <p className="text-neutral-300">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of the Platform constitutes acceptance of the updated policy.</p>
                    </section>

                    {/* SECTION 11 contacts */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">11. Contact Us</h2>
                        <p className="text-neutral-300">For questions, concerns, or requests regarding this Privacy Policy, please contact:</p>
                        <div className="text-neutral-300 mt-2">
                            <p className="font-semibold text-white">Defendit</p>
                            <p>📍 Gurugram, Haryana, India</p>
                            <p>📧 <a href="mailto:support@defendit.in" className="text-blue-400 hover:text-blue-300">support@defendit.in</a></p>
                        </div>
                    </section>

                </div>
            </div>
            <CTASection />
            <Footer />
        </div>
    );
};

export default Privacy;
