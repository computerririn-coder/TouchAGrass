import { useState, useEffect } from "react";
import Countdown from "react-countdown";

type conditionalQuestionDisplayPropsTS = {
  type: string | undefined;
  img: string | undefined;
  question: string | undefined;
  answer: string | undefined;
  choices: string[];
};

type InteractiveImgProps = {
  conditionalQuestionDisplayProps: conditionalQuestionDisplayPropsTS;
  setInteractiveImgComponentVisibility: (visible: boolean) => void;
  dispatch: (action: any) => void;
};

function ConditionalQuestionDisplay({
  conditionalQuestionDisplayProps,
  setInteractiveImgComponentVisibility,
  dispatch,
}: InteractiveImgProps) {
  const [feedback, setFeedback] = useState<boolean | string>("Not Yet Answered");
  const [attempts, setAttempts] = useState<number>(0);
  const [maxAttempts, setMaxAttempts] = useState<number>(0);

  const isDisabled = attempts >= maxAttempts || feedback === true;

  useEffect(() => {
    switch (conditionalQuestionDisplayProps.type) {
      case "leaf":
        setMaxAttempts(3);
        break;
      case "grass":
        setMaxAttempts(2);
        break;
      case "treasure":
        setMaxAttempts(1);
        break;
      default:
        setMaxAttempts(3);
    }
  }, [conditionalQuestionDisplayProps.type]);

  function handleFeedback() {
    setTimeout(() => {
      if(setInteractiveImgComponentVisibility){
        setInteractiveImgComponentVisibility(false);
      }
    }, 5000);
  }

  function handleAnswer(choice: string) {
    if (attempts >= maxAttempts) return;

    setAttempts((prev) => {
      const newAttempts = prev + 1;

      if (choice === conditionalQuestionDisplayProps.answer) {
        setFeedback(true);
        handleFeedback();
        dispatch({ type: `INCREMENT_${conditionalQuestionDisplayProps.type}` });
      } else if (newAttempts >= maxAttempts && choice !== conditionalQuestionDisplayProps.answer) {
        setFeedback(false);
        handleFeedback();
      }

      return newAttempts;
    });
  }

  const countdown = isDisabled ? Date.now() + 5000 : null;

  return (
    <section className="relative z-20 mx-auto">
      <div
        className="
          bg-gradient-to-br from-emerald-200 via-emerald-300 to-green-400 
          mx-auto rounded-2xl shadow-2xl overflow-hidden 
          border border-amber-600 flex flex-col items-center justify-start 
          min-h-80 w-[80%] md:w-full
        "
      >
        <button
          onClick={() => setInteractiveImgComponentVisibility(false)}
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

        {/* IMAGE */}
        <div className="image-wrapper w-full h-48 md:h-60 overflow-hidden p-5">
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              src={conditionalQuestionDisplayProps.img}
              alt="placeholder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* DIFFICULTY + QUESTION */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 pb-5 w-full px-4">
          {/* left side */}
          <div className="flex flex-col gap-2 items-start md:items-center min-w-fit">
            <span className="text-xs md:text-sm font-semibold bg-blue-900 text-white px-3 py-1 rounded-full shadow-md w-full">
              Difficulty: {conditionalQuestionDisplayProps.type}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text-xs md:text-sm font-semibold bg-blue-900 text-white px-3 py-1 rounded-full shadow-md min-w-full">
              Status: {feedback ? "Correct" : "Wrong"}
            </span>
          </div>

          {/* right side */}
          <div className="flex flex-row justify-between items-center gap-4 p-4 bg-amber-400 rounded-2xl shadow-md flex-1">
            {isDisabled ? (
              <p className="text-base md:text-lg font-semibold w-95">
                {feedback ? "Correct" : "Wrong"}, This page will be nuked in{" "}
                <Countdown
                  date={countdown as number}
                  renderer={({ total }) => {
                    const seconds = Math.ceil(total / 1000);
                    return <span>{seconds > 0 ? seconds : 0}</span>;
                  }}
                />
              </p>
            ) : (
              <p className="text-base md:text-lg font-semibold w-95">
                {conditionalQuestionDisplayProps.question}
              </p>
            )}

            <p className="text-xs md:text-sm w-16 font-medium bg-white text-amber-700 px-3 py-1 rounded-full shadow">
              {attempts} / {maxAttempts}
            </p>
          </div>
        </div>

        {/* OPTIONS */}
        <div className="flex flex-col items-center gap-4 w-full pb-4.5">
          {conditionalQuestionDisplayProps.choices.map((choice, index) => (
            <p
              key={index}
              className={`
                w-[80%] flex justify-center items-center 
                bg-white/70 text-gray-800 backdrop-blur-sm 
                border border-gray-300 rounded-xl 
                py-3 px-4 shadow-sm 
                transition duration-200 ease-in-out 
                ${isDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-white/95 hover:translate-y-[-3px] hover:scale-105 hover:shadow-xl hover:border-green-500"}
                font-semibold text-center
              `}
              onClick={() => !isDisabled && handleAnswer(choice)}
            >
              {choice}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConditionalQuestionDisplay;
