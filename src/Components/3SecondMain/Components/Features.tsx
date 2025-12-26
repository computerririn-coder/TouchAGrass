import { Grass } from "../../2Main/Components/Imports";
import styles from "./This.module.css";

function FeatureCard({ imageSrc, title, description }: any) {
  return (
    <div className={`${styles.card} h-[16rem]`}>
      <img src={imageSrc} alt={title} className="w-16 h-16 rounded-full object-cover" loading="lazy"/>
      <h3 className="text-2xl font-semibold text-amber-400">{title}</h3>
      <p className="text-center text-slate-800">{description}</p>
    </div>
  );
}

function Features() {
  return (
    <section className="bg-[#1f1f1f] w-full min-h-[50vh] flex flex-col items-center pt-15 px-4 text-amber-400 pb-10 gap-5">
      <h1 className="text-4xl font-bold mb-2">FEATURES</h1>
      <h2 className="text-lg text-gray-300 mb-10 text-center max-w-xl">
        What the website can do.
      </h2>

      <div className="flex flex-row gap-35 flex-wrap items-center justify-center pb-10">
        <FeatureCard
          imageSrc={Grass}
          title="Fully Customizable"
          description={`Clicking the "Customize" button lets you personalize the website to your liking, including custom backgrounds, images, and more.`}
        />

        <FeatureCard
          imageSrc={Grass}
          title="Fully Responsive"
          description="Mobile, computer, or even unusually small screens — this website is fully responsive."
        />

        <FeatureCard
          imageSrc={Grass}
          title="Good UX"
          description="Designed with good UX, ensuring clear visuals and effortless interaction across the site."
        />
      </div>
    </section>
  );
}

export default Features;
