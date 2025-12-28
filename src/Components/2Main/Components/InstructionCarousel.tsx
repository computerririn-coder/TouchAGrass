//InstructionsCarousel: this is the infinitely moving yellow bar thing you see just below the Ammount Component(the one with lots of button)

import Marquee from "react-fast-marquee";

function InstructionCarousel() {
  // Define your steps in an array for clarity
  const gameSteps = [
    "1️⃣ Click on any image",
    "2️⃣ Answer the question",
    "3️⃣ If correct, your points will increase",
    "4️⃣ Use points to buy in the shop",
    "5️⃣ If out of images, click 'Spawn More' or 'Spawn More Special Type' in the top-left corner",
    "6️⃣ Unlock achievements by completing tasks"
  ];

  return (
    <section className="w-full h-[5vh] bg-yellow-400 flex items-center justify-center">
      <Marquee gradient={false} speed={50} loop={0}>
        {gameSteps.map((step, index) => (
          <span key={index} className="mx-6 font-semibold text-black">
            {step}
          </span>
        ))}
      </Marquee>
    </section>
  );
}

export default InstructionCarousel;
