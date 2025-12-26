import { InputNumber, Upload } from "antd";
import { useState, useEffect } from "react";

function Customization({ setComponentVisibility, words, setWords }: any) {
  const [animation, setAnimation] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [titleFocus, setTitleFocus] = useState<boolean>(false);
  const [wordsIndex, setWordsIndex] = useState<number>(0);
  const [wordsNewWord, setWordsNewWord] = useState<string>("");
  const [userImg, setUserImg] = useState<File | null>(null);

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
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 w-full p-4">
      <div
        className={`flex flex-col items-center relative w-full sm:w-[90%] md:w-[70%] lg:w-[50%] 
          h-auto max-h-[90vh]  bg-white rounded-2xl p-4 sm:p-6 overflow-auto
          bg-linear-to-br from-green-400 to-yellow-300 border-4 border-blue-600 
          transition-all duration-300 ${
            animation ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
      >
        {/* X Button */}
        <button
          onClick={handleClose}
          className="absolute right-2 top-2 h-8 w-8 sm:h-10 sm:w-10 
            flex items-center justify-center rounded-full bg-gradient-to-br from-green-300 to-green-500
            border border-amber-600 text-red-800 text-xl sm:text-2xl font-bold
            shadow-lg hover:scale-110 hover:shadow-xl transition-all "
        >
          ×
        </button>

        <h5 className="text-gray-800 font-semibold text-lg sm:text-xl mb-4">
          CUSTOMIZATION PAGE
        </h5>

       {/* Top Section - Forms and Preview */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 sm:gap-6 
          bg-gray-50 p-3 sm:p-4 rounded-xl border border-gray-200 w-full
          bg-gradient-to-b from-blue-500 to-green-400">
          
          {/* 1: Text Title */}
          <form
            className="flex flex-col gap-2 w-full lg:flex-1 lg:min-w-0"
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
              placeholder="e.g. Collect leaves"
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 
                text-sm text-gray-800 placeholder:text-gray-500 
                focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400" 
              onChange={(e) => setTitle(e.target.value)}
              onFocus={() => setTitleFocus(true)}
              onBlur={() => setTitleFocus(false)}
            />

            <button
              type="submit"
              className="h-10 w-full rounded-lg bg-green-500 px-6 text-sm font-semibold text-white
                hover:bg-green-600 active:scale-95 transition-all "
            >
              Submit
            </button>
          </form>

          {/* 2: Words */}
          <form
            className="flex flex-col gap-2 w-full lg:flex-1 lg:min-w-0"
            onSubmit={(e) => {
              e.preventDefault();
              setWords((prev) => ({
                ...prev,
                words: prev.words.map((w, i) =>
                  i === wordsIndex - 1 ? wordsNewWord : w
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

            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <InputNumber
                min={1}
                max={3}
                placeholder="index #"
                onChange={(value) => setWordsIndex(value)}
                 style={{
    width: "30%",

  }}
              />

              <input
                id="textTitle2"
                type="text"
                placeholder="e.g. collections"
                className="w-full flex-1 min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2 
                  text-sm text-gray-800 placeholder:text-gray-500
                  focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
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
          <div className="flex flex-col text-sm text-black w-full lg:flex-1 lg:min-w-0">
            <p className="font-semibold">Current Text:</p>

            <span
              className={`ml-1 font-medium text-gray-800 rounded-md border-2 p-1 break-words ${
                titleFocus ? "border-blue-800" : "border-transparent"
              }`}
            >
              {words.title}
            </span>

            <p className="mt-2 font-semibold text-black">Current words (max 3):</p>

            <div className="flex flex-col">
              {words.words.map((e, i) => (
                <span
                  key={i}
                  className={`ml-1 font-medium p-1 break-words rounded-md border-2 ${
                    i === wordsIndex - 1
                      ? " border-blue-600 text-blue-900"
                      : "opacity-70 text-gray-800 border-transparent"
                  }`}
                >
                  {i + 1}: {e}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Image Upload */}
        <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-5 mt-4">
          
          {/* Left Box - Upload */}
          <div className="flex flex-col justify-start items-start gap-4 bg-gray-50 p-3 sm:p-4
            rounded-xl border border-gray-200 w-full lg:w-[50%]
            bg-gradient-to-b from-blue-500 to-green-400">
            
            <Upload
              className="bg-slate-400 w-full sm:w-auto px-4 py-3 grid place-items-center 
                border-2 border-blue-700 rounded-md"
              accept="image/*"
              beforeUpload={(file) => {
                setUserImg(file);
                return false;
              }}
            >
              <button className="text-sm sm:text-base">Select image</button>
            </Upload>

            <div 
              style={{
                display: "grid",
                gridTemplateAreas: `
                  "one one"
                  "two three"`,
                gridTemplateColumns: "1fr 1fr",
              }}
              className="gap-2 w-full"
            >
              <p 
                style={{ gridArea: "one" }} 
                className="text-sm sm:text-base font-semibold text-gray-800"
              >
                Change Icon Img
              </p>
              
              <button  
                style={{ gridArea: "two" }} 
                className="w-full px-3 py-2 text-sm sm:text-base bg-green-500 text-white 
                  rounded-lg hover:bg-green-600 transition"
              >
                Submit
              </button>
              
              <button 
                style={{ gridArea: "three" }} 
                className="w-full px-3 py-2 text-sm sm:text-base bg-red-600 text-white 
                  rounded-lg hover:bg-red-700 transition"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Right Box - Placeholder */}
          <div className="flex flex-row justify-center items-center gap-6 bg-gray-50 p-3 sm:p-4
            rounded-xl border border-gray-200 w-full lg:w-[50%]
            bg-gradient-to-b from-blue-500 to-green-400 min-h-[150px]"
          >
            <p className="text-gray-600 text-sm">Additional content here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customization;