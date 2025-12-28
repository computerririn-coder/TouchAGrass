//Instructions: navbar => instruction

import { useState, useEffect } from "react";

function Instructions({ setComponentVisibility }: any) {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  const steps = [
    "Click on any image",
    "Answer the question",
    "Correct answers increase your points",
    "Use points to purchase items in the shop",
    "If you run out of images, use the spawn options in the bottom-left",
    "Complete tasks to unlock achievements",
  ];

  const handleClose = () => {
    setAnimation(false);
    setTimeout(() => {
      setComponentVisibility((prev: any) => ({
        ...prev,
        instructionsVisibility: false,
      }));
    }, 250);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 ">
      <div
        className={`w-[80%] xl:w-[30%] bg-white rounded-2xl shadow-2xl p-1 transition-all duration-300 transform ${
          animation ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        }`}
      >
        <button
          onClick={handleClose}
          className="
            absolute right-[-1rem] top-[-1rem]
            h-10 w-10 flex items-center justify-center
            rounded-full bg-gradient-to-br from-green-300 to-green-500
            border border-amber-600 shadow-lg
            text-red-800 text-2xl font-bold
            hover:scale-110 hover:shadow-xl
            transition-all
          "
        >
          ×
        </button>

        <div className="flex flex-col items-center bg-gradient-to-br from-green-600 to-green-700 rounded-2xl px-8 py-7 space-y-6">
          <h1 className="text-2xl font-bold tracking-wide text-white">
            How to Play
          </h1>

          <div className="flex flex-col space-y-4 w-full">
            {steps.map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/10 rounded-xl px-4 py-3 text-white"
              >
                <span className="flex items-center justify-center h-7 w-7 rounded-full bg-white text-green-700 font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-gray-100">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructions;



/* Ive used ai to polish it because i dont have design sense,heres my original code */

/*
import { useState, useEffect } from "react";

function Instructions({ setComponentVisibility }: any) {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  const steps = [
    "Click on any image",
    "Answer the question",
    "Correct answers increase your points",
    "Use points to purchase items in the shop",
    "If you run out of images, use the spawn options in the top-left",
    "Complete tasks to unlock achievements",
  ];

  const handleClose = () => {
    setAnimation(false);
    setTimeout(() => {
      setComponentVisibility((prev: any) => ({
        ...prev,
        instructionsVisibility: false,
      }));
    }, 500);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className={`w-[40%] h-auto bg-white border border-gray-700 rounded-xl shadow-lg p-[0.2rem] transition-all duration-300 transform ${
          animation ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        <button
          onClick={handleClose}
          className="
          absolute right-[-1rem] top-[-1rem]
          h-10 w-10 flex items-center justify-center
          rounded-full bg-gradient-to-br from-green-300 to-green-500
          border border-amber-600 shadow-md
          text-red-800 text-2xl font-bold
          hover:scale-110 hover:shadow-xl hover:bg-green-400
          transition-all
          "
        >
          ×
        </button>

        <div className="flex flex-col items-center justify-center text-white space-y-4 bg-black rounded-xl bg-gradient-to-r from-green-600 to-green-700 py-6">
          <h1 className="text-xl font-semibold">Instructions</h1>

          <div className="flex flex-col space-y-3 text-sm text-gray-300 w-full relative px-6">
            {steps.map((text, i) => (
              <div key={i} className="relative flex justify-center">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-white font-bold">
                  {i + 1}
                </span>
                <p className="text-center">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
*/