// Customization: Found in navbar, lets user customize the websites text,img,etc

import { InputNumber, Upload } from "antd";
import { useState, useEffect } from "react";
import type {
  ComponentVisibility,
  CustomizationProps,
} from "./ExportstypeScriptEtc/Typescript/TypescriptCompilationtypes";
import axios from "axios";

function Customization({
  setComponentVisibility,
  words,
  setWords,
  img,
  setImg,
}: CustomizationProps) {
  const [animation, setAnimation] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [titleFocus, setTitleFocus] = useState<boolean>(false);
  const [wordsIndex, setWordsIndex] = useState<number>(0);
  const [wordsNewWord, setWordsNewWord] = useState<string>("");
  const [apiImage, setApiImage] = useState<string>("ditto");
  
  // Convert file to base64 (From AI)
  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  // Usage
  const handleUpload = async (file: File) => {
    const base64 = await fileToBase64(file);
    setImg((prev: any) => ({ ...prev, logo: base64 }));
    localStorage.setItem("img", JSON.stringify({ ...img, logo: base64 }));
  };
  // End

  useEffect(() => {
    setAnimation(true);
  }, []);

  const handleClose = () => {
    setAnimation(false);
    setTimeout(() => {
      setComponentVisibility((prev: ComponentVisibility) => ({
        ...prev,
        customizationVisibility: false,
      }));
    }, 250);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 w-full p-4">
      <div
        className={`flex flex-col items-center relative w-full sm:w-[90%] md:w-[70%] lg:w-[50%] 
        h-auto max-h-[90vh] bg-white rounded-2xl p-4 sm:p-6 overflow-auto
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
          shadow-lg hover:scale-110 hover:shadow-xl transition-all"
        >
          ×
        </button>

        <h5 className="text-gray-800 font-semibold text-lg sm:text-xl mb-4">
          CUSTOMIZATION PAGE
        </h5>

        <div
          className="flex flex-col lg:flex-row justify-center items-stretch gap-4 sm:gap-6 
          bg-gray-50 p-3 sm:p-4 rounded-xl border border-gray-200 w-full
          bg-gradient-to-b from-blue-500 to-green-400"
        >
          {/* 1: Text Title */}
          <form
            className="flex flex-col gap-2 w-full lg:flex-1 lg:min-w-0"
            onSubmit={(e) => {
              e.preventDefault();
              setWords((prev: any) => ({
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
              hover:bg-green-600 active:scale-95 transition-all"
            >
              Submit
            </button>
          </form>

          {/* Words */}
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
                onChange={(value: number | null) =>
                  setWordsIndex(value ?? 1)
                }
                style={{ width: "30%" }}
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

          {/* Preview */}
          <div className="flex flex-col text-sm text-black w-full lg:flex-1 lg:min-w-0">
            <p className="font-semibold">Current Text:</p>

            <span
              className={`ml-1 font-medium text-gray-800 rounded-md border-2 p-1 break-words ${
                titleFocus ? "border-blue-800" : "border-transparent"
              }`}
            >
              {words.title}
            </span>

            <p className="mt-2 font-semibold text-black">
              Current words (max 3):
            </p>

            <div className="flex flex-col">
              {words.words.map((e, i) => (
                <span
                  key={i}
                  className={`ml-1 font-medium p-1 break-words rounded-md border-2 ${
                    i === wordsIndex - 1
                      ? "border-blue-600 text-blue-900"
                      : "opacity-70 text-gray-800 border-transparent"
                  }`}
                >
                  {i + 1}: {e}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2: Left Box */}
        <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-5 mt-4">
          <div
            className="flex flex-col justify-start items-start gap-4 bg-gray-50 p-3 sm:p-4
            rounded-xl border border-gray-200 w-full lg:w-[50%]
            bg-gradient-to-b from-blue-500 to-green-400"
          >
            <div className="flex flex-row gap-4">
              {/* Left column - Upload */}
              <div className="flex flex-col gap-2">
                <Upload
                  accept="image/*"
                  showUploadList={false}
                  beforeUpload={(file) => {
                    handleUpload(file as File);
                    return false;
                  }}
                >
                  <div className="w-full h-20 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-green-500 transition">
                    <p className="text-gray-600 text-center text-sm sm:text-base">
                      Click or drag image here
                    </p>
                  </div>
                </Upload>

                <p className="text-sm sm:text-base font-semibold text-gray-800">
                  Change Icon Img
                </p>
              </div>
              <div className="w-full h-full flex items-center justify-center border-2 border-gray-400 rounded-lg bg-gray-100 ml-auto">
                <img
                  src={img.logo}
                  alt="Logo Image"
                  className="w-full h-full object-contain p-2 max-w-30"
                />
              </div>
            </div>

            <button
              className="w-full px-3 py-2 text-sm sm:text-base bg-green-500 text-white 
              rounded-lg hover:bg-green-600 transition mt-4"
            >
              Submit
            </button>
          </div>

          {/* 3: Right Box  */}
          <div
            className="flex flex-col items-center gap-3 bg-gray-50 sm:p-4
            rounded-xl border border-gray-200 w-full lg:w-[50%]
            bg-gradient-to-b from-blue-500 to-green-400 p-5"
          >
            {/* Image placeholder */}
            <div className="w-full h-32 bg-gray-300 flex items-center justify-center rounded-xl ">
              <img src={img.logo} alt="Pokemon Image Preview" className="w-full h-full object-contain p-2 max-w-30" />
            </div>

            {/* Label + Input */}
            <label className="w-full text-sm text-black">
               Name Of Desired Pokemon Image
              <input
                type="text"
                className="mt-1 w-full rounded border border-gray-800 p-2 text-black"
                placeholder="Ditto"
                onChange={(e) => setApiImage(e.target.value)}
              />
            </label>

            {/* button */}
            <button
              className="bg-green-600 rounded border-2 border-slate-600 w-full"
              onClick={async () => {
                try {
                  const apiResponse = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${apiImage}`
                  );
                  setImg(prev => ({
                    ...prev,
                    logo: apiResponse.data.sprites.front_default
                  }))
                } catch (error) {
                  window.alert(error)
                }
              }}
            >
              Get Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customization;
