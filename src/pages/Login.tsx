import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-neutral-950 border border-neutral-800 rounded-3xl p-8 shadow-2xl">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400 mt-2">
            Sign in to continue to Defendit
          </p>
        </div>

        {/* FORM */}
        <div className="space-y-5">

          {/* EMAIL */}
          <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3">
            <Mail className="text-gray-400" />
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent outline-none text-white w-full"
            />
          </div>

          {/* PASSWORD */}
          <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3">
            <Lock className="text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent outline-none text-white w-full"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* OPTIONS */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-white" />
              Remember me
            </label>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Forgot password?
            </a>
          </div>

          {/* BUTTON */}
          <Button className="w-full bg-white text-black rounded-full py-5 font-semibold hover:bg-gray-200 transition">
            Sign In
          </Button>
        </div>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Don’t have an account?{" "}
          <a href="#" className="text-white hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
