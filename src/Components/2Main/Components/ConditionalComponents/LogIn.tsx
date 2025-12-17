import { useState, useEffect } from "react";
import GoogleLogo from "../../../../assets/GoogleLogo.png";

function LogIn({ componentVisibility, setComponentVisibility }: any) {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  const handleClose = () => {
    setAnimation(false);
    setTimeout(() => {
      setComponentVisibility((prev: any) => ({
        ...prev,
        logInVisibility: false,
      }));
    }, 500);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${
        animation
          ? "opacity-100 mb-auto translate-y-5"
          : "opacity-0 translate-y-[-5rem]"
      }`}
    >
      <div className="w-full max-w-md bg-gradient-to-b from-blue-500 to-green-400 border border-gray-700 rounded-xl shadow-xl p-8 relative">
        <button
          onClick={handleClose}
          className="
            absolute -top-5 -right-5
            h-10 w-10 flex items-center justify-center
            rounded-full bg-gray-800 border border-gray-600
            text-white text-2xl font-bold
            hover:scale-110 hover:shadow-lg transition-all
          "
        >
          ×
        </button>

        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Log In
        </h1>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-2 border border-gray-600 rounded-md bg-white text-black hover:bg-gray-100 transition-colors mb-4"
        >
          <img src={GoogleLogo} alt="Google" className="w-5 h-5" />
          Log in with Google
        </button>

        <div className="mt-2 text-center text-gray-400 text-sm mb-4">or</div>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-2 bg-black text-white border border-gray-600 rounded-md w-full"
          />
          <button className="w-full py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors">
            Send Magic Link
          </button>
        </div>

        <p className="mt-6 text-xs text-center text-gray-900">
          By logging in, you agree to our{" "}
          <a href="#" className="underline text-blue-600 hover:text-gray-300">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline text-blue-600 hover:text-gray-300">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
}

export default LogIn;
