import Leaf2 from "../../../assets/Leaf2.png";
import Grass2 from "../../../assets/Grass2.png";
import Treasure2 from "../../../assets/Treasure2.png";

/* TYPES */
type Item = { name: string; amount: number; img?: string };
type Action = { type: string; index?: number };



type InteractiveImgProps = {
  allItems: Item[];
  positions: { top: number; left: number }[];
  visible: number[];
  setVisible: React.Dispatch<React.SetStateAction<number[]>>;
  setInteractiveImgComponentVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: React.Dispatch<Action>;
  setConditionalQuestionDisplayProps: React.Dispatch<React.SetStateAction<{
    type: string | undefined;
    img: string | undefined;
    question: string | undefined;
    answer: string | undefined;
    choices: string[] | undefined[];
  }>>;
};



const imgQuestionAnswerEtc = {
  leaf: [
    {
      type: "leaf",
      img: Leaf2,
      question: "What color are most leaves in summer?",
      answer: "Green",
      choices: ["Red", "Yellow", "Green", "Blue"]
    },
{
  type: "leaf",
  img: Leaf2,
  question: "Which season do most trees have green leaves?",
  answer: "Summer",
  choices: ["Spring", "Summer", "Autumn", "Winter"]
},
  ],

  grass: [
    {
      type: "grass",
      img: Grass2,
      question: "Which animal is known for grazing on grass?",
      answer: "Cow",
      choices: ["Lion", "Cow", "Eagle", "Shark"]
    },
    {
      type: "grass",
      img: Grass2,
      question: "What is the tallest species of grass in the world?",
      answer: "Bamboo",
      choices: ["Wheat", "Bamboo", "Oats", "Rye"]
    },
  ],

  treasure: [
    {
      type: "treasure",
      img: Treasure2,
      question: "Which country is home to the lost city of Petra?",
      answer: "Jordan",
      choices: ["Egypt", "Jordan", "Greece", "Peru"]
    },
    {
      type: "treasure",
      img: Treasure2,
      question: "Which treasure is famously linked to King Tutankhamun?",
      answer: "Gold Mask",
      choices: ["Gold Mask", "Emerald Necklace", "Silver Crown", "Bronze Statue"]
    },
  ]
};






function InteractiveImg({
  allItems,
  positions,
  visible,
  setVisible,
  setInteractiveImgComponentVisibility,
  dispatch,
  setConditionalQuestionDisplayProps,
}: InteractiveImgProps) {

const maxNumber = 1;
const randomNumber = Math.floor(Math.random() * (maxNumber + 1));



  return (
    <section className="w-full h-[59vh] relative">
      {allItems.map((e, i) => {
        if (visible.includes(i)) return null;

        const { top, left } = positions[i];

        return (
          <img
            key={i}
            src={e.img}
            alt={e.name}
            className="w-10 h-10 absolute"
            style={{ top: `${top}%`, left: `${left}%` }}
            onClick={() => {
              setVisible(prev => [...prev, i]);

              switch (e.name) {
                case "leaf":
                  setConditionalQuestionDisplayProps(imgQuestionAnswerEtc.leaf[randomNumber]);
                  setInteractiveImgComponentVisibility(true);
                  
                  break; 
                case "grass":
                  setConditionalQuestionDisplayProps(imgQuestionAnswerEtc.grass[randomNumber]);
                  setInteractiveImgComponentVisibility(true);
                  break;
                case "treasure":
                  setConditionalQuestionDisplayProps(imgQuestionAnswerEtc.treasure[randomNumber]);
                  setInteractiveImgComponentVisibility(true);
                  break;

              }
            }}
          />
        );
      })}
    </section>
  );
}

export default InteractiveImg;
