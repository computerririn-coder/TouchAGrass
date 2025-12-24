import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function Title({words, setWords}) {


  return (
    <section className="w-[70%] h-20 flex justify-center items-center py-16 px-4 mx-auto rounded-lg shadow-lg">
      <p className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-snug">
        {words.title} {" "}
        <span className="text-yellow-300 font-bold">
          <Typewriter
            words={words.words}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={200}
            delaySpeed={2000}
          />
        </span>
      </p>
    </section>
  );
}

export default Title;
