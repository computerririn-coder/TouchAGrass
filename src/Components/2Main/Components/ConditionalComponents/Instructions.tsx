function Instructions({ setComponentVisibility }: any) {
  const steps = [
    "Click on any image",
    "Answer the question",
    "Correct answers increase your points",
    "Use points to purchase items in the shop",
    "If you run out of images, use the spawn options in the top-left",
    "Complete tasks to unlock achievements",
  ];

  return (
    <div className="w-[40%] h-auto bg-white border border-gray-700 rounded-xl shadow-lg p-[0.2rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <button
        onClick={() =>
          setComponentVisibility((prev: any) => ({
            ...prev,
            instructionsVisibility: false,
          }))
        }
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
  );
}

export default Instructions;
