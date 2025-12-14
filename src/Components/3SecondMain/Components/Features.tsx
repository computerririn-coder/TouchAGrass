import { Grass } from "../../2Main/Components/Imports";

function FeatureCard({ imageSrc, title, description }: any) {
  return (
    <div className="w-64 h-72 rounded-lg p-6 flex flex-col items-center space-y-4  bg-blue-500 border border-2 border-green-600 shadow-md transform scale-125">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-16 h-16 rounded-full object-cover"
      />
      <h3 className="text-2xl font-semibold text-amber-400">{title}</h3>
      <p className="text-center text-slate-800">{description}</p>
    </div>
  );
}

function Features() {
  return (
    <section className="bg-[#242424] w-full min-h-[50vh] flex flex-col items-center pt-12 px-4 text-amber-400 pb-20 gap-7 ">
      
      <h1 className="text-4xl font-bold mb-2">Why Use This Website?</h1>
      <h2 className="text-lg text-gray-300 mb-10 text-center max-w-xl">
        Below Are the Reasons.
      </h2>

      {/* Reusable FeatureCards */}
      <div className="flex flex-row gap-55 flex-wrap items-center justify-center">
        <FeatureCard 
          imageSrc={Grass} 
          title="Life Changing" 
          description="“You will never find the true meaning of life if you dont use my website.” — Creator“"
        />
        <FeatureCard 
          imageSrc={Grass} 
          title="Full Of Wisdom" 
          description="Grants you new wisdom guaranteed to positively change your life"
        />
        <FeatureCard 
          imageSrc={Grass} 
          title="Gives More Luck In Your Life" 
          description="Magically increases your luck in life in ways you never expected."
        />
      </div>

    </section>
  );
}

export default Features;
