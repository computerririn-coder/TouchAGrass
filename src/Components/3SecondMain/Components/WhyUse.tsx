import { Grass } from "../../2Main/Components/Imports";
import styles from "./This.module.css";
function FeatureCard({ imageSrc, title, description }: any) {
  return (
   <div className={`${styles.card} h-[16rem]`}>
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-16 h-16 rounded-full object-cover"
      />
      <h3 className="text-2xl font-semibold text-amber-400 ">{title}</h3>
      <p className="text-center text-slate-800">{description}</p>
    </div>
  );
}

function WhyUse() {
  return (
    <section className="bg-[#1f1f1f] w-full min-h-[50vh]  flex flex-col items-center pt-15 px-4 text-amber-400 pb-10 gap-5">
      <h1 className="text-4xl font-bold mb-2">FEATURES</h1>
      <h2 className="text-lg text-gray-300 mb-10 text-center max-w-xl">
        Kill boredom in seconds—no effort, no money, just pure fun at your fingertips.
      </h2>
      {/* Reusables */}
      <div className="flex flex-row gap-35 flex-wrap items-center justify-center pb-10">
     <FeatureCard 
  imageSrc={Grass} 
  title="Its Fun" 
  description="Bored? Want to kill time fast? Check out my website." 
/>

<FeatureCard 
  imageSrc={Grass} 
  title="Easy To Use" p
  description='Designed with a modern approach to ensure a seamless, and user-friendly experience for the price of "free".' 
/>

<FeatureCard 
  imageSrc={Grass} 
  title="Coded to Perfection" 
  description="Built with a modern tool that makes the website fast, interactive, and smooth for all users." 
/>

      </div>
    </section>
  );
}

export default WhyUse;
