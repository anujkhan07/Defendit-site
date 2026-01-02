import { useEffect, useState } from "react";
import {
  CheckCircle,
  Loader2,
  X,
  MapPin,
  Shield,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onClose: () => void;
}

const BookingDemoModal = ({ open, onClose }: Props) => {
  const [step, setStep] = useState<"form" | "loading" | "success">("form");

  useEffect(() => {
    if (step === "loading") {
      const timer = setTimeout(() => setStep("success"), 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur flex items-center justify-center px-4">
      <div className="relative w-full max-w-md bg-neutral-950 border border-neutral-800 rounded-3xl p-8 shadow-2xl">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        {/* HEADER */}
        {step !== "loading" && (
          <h3 className="text-xl font-semibold text-white text-center mb-6">
            Book a Security Professional
          </h3>
        )}

        {/* FORM */}
        {step === "form" && (
          <div className="space-y-5">

            {/* SERVICE */}
            <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3">
              <Shield className="text-gray-400" />
              <select className="bg-transparent outline-none text-white w-full">
                <option>Bodyguard Protection</option>
                <option>Event Bouncers</option>
                <option>VIP Protection</option>
              </select>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3">
              <MapPin className="text-gray-400" />
              <input
                placeholder="Location"
                className="bg-transparent outline-none text-white w-full"
              />
            </div>

            {/* DATE */}
            <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3">
              <CalendarDays className="text-gray-400" />
              <input
                type="date"
                className="bg-transparent outline-none text-white w-full"
              />
            </div>

            <Button
              onClick={() => setStep("loading")}
              className="w-full bg-white text-black rounded-full py-5 font-semibold hover:bg-gray-200 transition"
            >
              Find Available Guard
            </Button>

            <p className="text-xs text-gray-500 text-center">
              Only verified & trained professionals are assigned
            </p>
          </div>
        )}

        {/* LOADING */}
        {step === "loading" && (
          <div className="py-20 flex flex-col items-center text-center gap-4">
            <Loader2 className="h-12 w-12 text-white animate-spin" />
            <p className="text-white text-lg font-medium">
              Searching nearby professionals
            </p>
            <p className="text-gray-400 text-sm">
              Matching skills, location & availability
            </p>
          </div>
        )}

        {/* SUCCESS */}
        {step === "success" && (
          <div className="py-20 flex flex-col items-center text-center gap-4">
            <CheckCircle className="h-14 w-14 text-green-500" />
            <h4 className="text-xl font-semibold text-white">
              Guard Assigned Successfully
            </h4>
            <p className="text-gray-400 text-sm max-w-xs">
              A verified professional has been assigned and will contact you shortly.
            </p>

            <Button
              className="mt-4 bg-white text-black rounded-full px-10 py-4"
              onClick={onClose}
            >
              Done
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingDemoModal;
