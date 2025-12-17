import LeafComponent from "./Components/LeafComponent";
import Instructions from "./Components/ConditionalComponents/Instructions";
import LogIn from "./Components/ConditionalComponents/LogIn";
import ItemStorage from "./Components/ConditionalComponents/ItemStorage";
import Achievements from "./Components/ConditionalComponents/Achievements";
import { useState, useEffect,useReducer } from "react";
import { questions } from "../../assets/questionsForInterActiveImg";

function allItemsReducer(state: Item[], action: Action) {
  switch (action.type) {
    case "INCREMENT_leaf":
      return state.map(item =>
        item.name === "leaf" ? { ...item, amount: item.amount + 1 } : item
      );
    case "INCREMENT_grass":
      return state.map(item =>
        item.name === "grass" ? { ...item, amount: item.amount + 1 } : item
      );
    case "INCREMENT_treasure":
      return state.map(item =>
        item.name === "treasure" ? { ...item, amount: item.amount + 1 } : item
      );
    default:
      return state;
  }
}



function Main({ itemStorage, setItemStorage, componentVisibility, setComponentVisibility }) {
  /* For Achievements */
  const [achievement, setAchievement] = useState(questions);

  /* Entered the website */
  useEffect(() => {
    setAchievement(prev =>
      prev.map((item, index) => (index === 0 ? { ...item, status: true } : item))
    );
  }, []);

  useEffect(() => {
    const toggleBodyScroll = () => {
      const anyVisible = Object.values(componentVisibility).some(Boolean);
      document.body.style.overflow = anyVisible ? "hidden" : "auto";
    };

    toggleBodyScroll();
  }, [componentVisibility]);

  return (
    <main className="w-full min-h-[85vh] bg-black relative overflow-hidden">
      <LeafComponent itemStorage={itemStorage} setItemStorage={setItemStorage} />

      {/* Conditional Components */}
      {componentVisibility.instructionsVisibility && (
        <Instructions setComponentVisibility={setComponentVisibility} />
      )}
      {componentVisibility.logInVisibility && (
        <LogIn
          componentVisibility={componentVisibility}
          setComponentVisibility={setComponentVisibility}
        />
      )}
      {componentVisibility.itemStorageVisibility && (
        <ItemStorage
          itemStorage={itemStorage}
          setComponentVisibility={setComponentVisibility}
        />
      )}
      {componentVisibility.achievementsVisibility && (
        <Achievements
          itemStorage={itemStorage}
          achievement={achievement}
          setComponentVisibility={setComponentVisibility}
        />
      )}
    </main>
  );
}

export default Main;
