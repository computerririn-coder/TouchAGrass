import { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";

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
          className="absolute -top-5 -right-5 h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-600 text-white text-2xl font-bold"
        >
          ×
        </button>

        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Log In
        </h1>

        <GoogleLogin
          onSuccess={(res) => {
            console.log(res);
          }}
          onError={() => {
            console.log("Google Login Failed");
          }}
        />

        <div className="mt-4 text-center text-gray-400 text-sm">or</div>

        <div className="flex flex-col gap-4 mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-2 bg-black text-white border border-gray-600 rounded-md w-full"
          />
          <button className="w-full py-2 bg-white text-black font-semibold rounded-md">
            Send Magic Link
          </button>
          <p className="text-sm text-center">Note This LogIn Component Have No Backend or Functionality</p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
