import { ShieldCheck, UserCheck, FileCheck } from "lucide-react";

const TrustComplianceSection = () => {
  return (
    <section
  id="trust"
  className="py-24 bg-black border-t border-neutral-800"
>

      <div className="container mx-auto px-6">

        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Trust & Compliance
          </h2>
          <p className="mt-4 text-neutral-400 text-lg">
            Defendit operates within India’s private security regulatory framework,
            ensuring verified professionals, compliant agencies, and secure operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
            <ShieldCheck className="h-8 w-8 text-white mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              PSARA Compliant Agencies
            </h3>
            <p className="text-sm text-neutral-400">
              All partner agencies operate under valid PSARA licenses
              and follow regulated security norms.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
            <UserCheck className="h-8 w-8 text-white mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Police Verified Guards
            </h3>
            <p className="text-sm text-neutral-400">
              Every guard undergoes mandatory police verification
              and identity validation before deployment.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
            <FileCheck className="h-8 w-8 text-white mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Background Screening
            </h3>
            <p className="text-sm text-neutral-400">
              Multi-layer background checks including experience,
              skill assessment, and reference verification.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustComplianceSection;
