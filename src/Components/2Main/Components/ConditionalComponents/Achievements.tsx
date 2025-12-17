import { BronzeMedal, SilverMedal, GoldMedal } from './../Imports';


/* TYPESCRIPT — ALL any */

type Achievement = {
  id: string;
  title: string;
  condition: string;
  difficulty: string;
  status: boolean;
};

type AchievementCardProps = {
  achievement: Achievement;
};

type ComponentVisibility = {
  achievementsVisibility: boolean;
};

type ItemStorage = {
  name: string;
  price: number | string;
  type?: string;
};

type AchievementsProps = {
  achievement: Achievement[];
  itemStorage: ItemStorage;
  setComponentVisibility: React.Dispatch<React.SetStateAction<any>>;
};

const difficultyColor: { 
  [key: string]: { 
    textColor: string; 
    bgColor: string; 
    boxColor: string; 
    medal: string; 
    claimBtnColor: string; 
    dispatchName?: string,
  };  
} = {
  Easy: {
    textColor: "text-green-400",
    bgColor: "bg-gradient-to-r from-green-700 to-green-500",
    boxColor: "bg-green-500",
    medal: BronzeMedal,
    claimBtnColor: "bg-[#CD7F32]",
    dispatchName: "CLAIM_REWARD_#1",
  },
  Normal: {
    textColor: "text-yellow-400",
    bgColor: "bg-gradient-to-r from-yellow-800 to-yellow-600",
    boxColor: "bg-yellow-600",
    medal: SilverMedal,
    claimBtnColor: "bg-[#E5E4E2] ", 
  },
  Extreme: {
    textColor: "text-red-500",
    bgColor: "bg-gradient-to-r from-red-800 to-red-600",
    boxColor: "bg-red-600",
    medal: GoldMedal,
    claimBtnColor: "bg-[#FFD700]", 
  },
};



function AchievementCard({ achievement }: AchievementCardProps) {
  const colors = difficultyColor[achievement.difficulty] || {};

  return (
    <div className={`w-full border min text-slate-900 min-h-42 border-white/30 rounded-lg p-4 flex flex-row gap-2 ${colors?.bgColor || ""}`}>
  <div className='flex flex-col gap-[0.3rem] w-[60%]'>
      <h3 className="text-lg font-semibold break-words">
        {achievement.title}
      </h3>
      <p className={`text-sm opacity-90 border border-2 ${colors.boxColor} w-[100%] h-[100%] p-1 flex flex-row items-center justify-start`}>
        {achievement.condition}
      </p>
      <span className={`text-2xl font-bold py-1 ${colors?.textColor || ""}`}>
        {achievement.difficulty}
      </span>
      <p>
        {achievement.status ? "Status: Completed" : "Status: Incomplete"}
      </p>
  </div>
  <div className='ml-auto mt-auto'>
<img
  src={colors.medal}
  alt="example"
  className=" bg-tranparent w-20 h-20 ml-auto"
/>

<button className={`${colors.claimBtnColor} text-gray-900 font-bold py-2 px-4 rounded shadow-md transition-colors duration-200 min-w-15`}>
  Claim reward
</button>
</div>
    </div>
  );
}

function Achievements({
  achievement,
  itemStorage,
  setComponentVisibility,
}: AchievementsProps) {
  return (
    <div className="w-screen h-screen flex items-center justify-center absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20 overflow-y-auto">
      <section className="relative w-[80%] h-[75%] bg-gradient-to-b from-blue-500 to-green-400 text-white border-5 border-blue-600 rounded-lg p-6 overflow-y-auto">
        <button
          className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-yellow-300 text-black text-xl shadow-md hover:opacity-70"
          onClick={() =>
            setComponentVisibility((prev: ComponentVisibility) => ({
              ...prev,
              achievementsVisibility: false,
            }))
          }
        >
          X
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {achievement.map((a: Achievement) => (
            <AchievementCard key={a.id} achievement={a} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Achievements;
