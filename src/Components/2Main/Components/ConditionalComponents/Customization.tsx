import { InputNumber } from "antd";
import { useState, useEffect } from "react";

function Customization({ setComponentVisibility, words, setWords }: any) {
  const [animation, setAnimation] = useState(false);
  const [title, setTitle] = useState("");
  const [titleFocus, setTitleFocus] = useState(false);
  const [wordsIndex, setWordsIndex] = useState(0);
  const [wordsNewWord, setWordsNewWord] = useState("");

  useEffect(() => {
    setAnimation(true);
  }, []);

  const handleClose = () => {
    setAnimation(false);
    setTimeout(() => {
      setComponentVisibility((prev: any) => ({
        ...prev,
        customizationVisibility: false,
      }));
    }, 250);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 w-full">
      <div
        className={`flex flex-col items-center relative w-[50%] h-[60vh] bg-white rounded-2xl p-6
        bg-linear-to-br from-green-400 to-yellow-300 border-4 border-blue-600 ${
          animation ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        }`}
      >
        {/* X Button */}
        <button
          onClick={handleClose}
          className="
            absolute -right-4 -top-4 h-10 w-10 flex items-center justify-center
            rounded-full bg-gradient-to-br from-green-300 to-green-500
            border border-amber-600 text-red-800 text-2xl font-bold
            shadow-lg hover:scale-110 hover:shadow-xl transition-all
          "
        >
          ×
        </button>

        <h5 className="text-gray-800 font-semibold text-xl">CUSTOMIZATION PAGE</h5>

        <div className="flex flex-row justify-center items-center gap-6 bg-gray-50 p-4 rounded-xl border border-gray-200 w-full mt-8 bg-gradient-to-b from-blue-500 to-green-400">
          {/* 1: Text Title */}
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              setWords((prev) => ({
                ...prev,
                title: title,
              }));
            }}
          >
            <label
              htmlFor="textTitle1"
              className="text-xs font-semibold uppercase tracking-wide text-gray-800"
            >
              Text Title
            </label>

            <input
              id="textTitle1"
              type="text"
              placeholder="e.g. Collect leaves to unlock rewards"
              className="w-64 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800
                placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
              onChange={(e) => setTitle(e.target.value)}
              onFocus={() => setTitleFocus(true)}
              onBlur={() => setTitleFocus(false)}
            />

            <button
              type="submit"
              className="h-10 w-full rounded-lg bg-green-500 px-6 text-sm font-semibold text-white
                hover:bg-green-600 active:scale-95 transition-all"
            >
              Submit
            </button>
          </form>

          {/* 2: Words */}
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              setWords((prev) => ({
                ...prev,
                words: prev.words.map((w, i) =>
                  i === wordsIndex ? wordsNewWord : w
                ),
              }));
            }}
          >
            <label
              htmlFor="textTitle2"
              className="text-xs font-semibold uppercase tracking-wide text-gray-800"
            >
              Words
            </label>

            <div className="flex flex-row gap-2">
              <InputNumber
                min={0}
                max={2}
                placeholder="index #"
                onChange={(value) => setWordsIndex(value ?? 0)}
              />

              <input
                id="textTitle2"
                type="text"
                placeholder="e.g. collections"
                className="w-64 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800
                  placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                onChange={(e) => setWordsNewWord(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="h-10 w-full rounded-lg bg-green-500 px-6 text-sm font-semibold text-white
                hover:bg-green-600 active:scale-95 transition-all"
            >
              Submit
            </button>
          </form>

          {/* 3: Preview */}
          <div className="flex flex-col text-sm text-black">
            <p>
              Current Text:
            </p>
              <span
                className={`ml-1 font-medium text-gray-800 rounded-md border-2 ${
                  titleFocus ? " border-blue-800" : "border-transparent"
                }`}
              >
                {words.title}
              </span>
            <p className="mt-1 text-black">Current words (max three):</p>

            <div className="flex flex-col">
              {words.words.map((e, i) => (
                <span
                  key={i}
                  className={`ml-1 font-medium ${
                    i === wordsIndex
                      ? "rounded-md border-2 border-blue-600 text-blue-900"
                      : "opacity-70 text-gray-800"
                  }`}
                >
                  {i + 1}: {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customization;
