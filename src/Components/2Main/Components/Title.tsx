import { Typewriter } from "react-simple-typewriter";

function Title() {
  return (
    <section className="w-[50%] flex justify-center items-center  py-16 px-4 mx-auto rounded-lg shadow-lg">
      <p className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-snug">
        Collect leaves and unlock{" "}
        <span className="text-yellow-300 font-bold">
          <Typewriter
            words={["collections", "stickers", "achievements"]}
            loop={0} // 0 = infinite
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
