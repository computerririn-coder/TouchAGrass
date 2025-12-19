import LeafComponent from "./Components/LeafComponent";
import Instructions from "./Components/ConditionalComponents/Instructions";
import LogIn from "./Components/ConditionalComponents/LogIn";
import ItemStorageComponent from "./Components/ConditionalComponents/ItemStorageComponent";
import Achievements from "./Components/ConditionalComponents/Achievements";
import { useState, useEffect, useReducer } from "react";
import { questions } from "../../assets/questionsForInterActiveImg";
import type {Item, Action, MainProps, } from "./Components/Typescript/TypescriptCompilationtypes";

/* REDUCER */
function allItemsReducer(state:  Item[], action: Action) {
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

function Main({itemStorage, setItemStorage, componentVisibility, setComponentVisibility }:MainProps ) {
  /* For Achievements */
  const [achievement, setAchievement] = useState(questions);

  /* PERSISTENT STATE: itemsCollected */
const [itemsCollected, setItemsCollected] = useState<Item[]>(() => {
  const saved = localStorage.getItem("itemsCollected");
  return saved
    ? JSON.parse(saved)
    : [
        { name: "leaf", amount: 10,  },
        { name: "grass", amount: 10, },
        { name: "treasure", amount: 10,  }
      ];
});


  /* PERSISTENT countImg */
  const [countImg, setCountImg] = useState<number>(() => {
    const saved = localStorage.getItem("countImg");
    const n = Number(saved);
    return !isNaN(n) ? n : 2;
  });

  /* PERSISTENT leaf + treasure counts array */
  const [leafTreasureCount, setLeafTreasureCount] = useState<number[]>(() => {
    const saved = localStorage.getItem("leafTreasureCount");
    try {
      const parsed = saved ? JSON.parse(saved) : [4, 2];
      return Array.isArray(parsed) && parsed.length >= 2 ? parsed : [4, 2];
    } catch {
      return [4, 2];
    }
  });

  /* REDUCER STATE */
  const [state, dispatch] = useReducer(allItemsReducer, itemsCollected);

  /* SYNC: state to itemsCollected */
  useEffect(() => {
    setItemsCollected(state);
  }, [state]);

  /* SYNC: itemsCollected */
  useEffect(() => {
    localStorage.setItem("itemsCollected", JSON.stringify(itemsCollected));
  }, [itemsCollected]);

  /* SYNC: countImg */
  useEffect(() => {
    localStorage.setItem("countImg", countImg.toString());
  }, [countImg]);

  /* SYNC: leafTreasureCount */
  useEffect(() => {
    localStorage.setItem("leafTreasureCount", JSON.stringify(leafTreasureCount));
  }, [leafTreasureCount]);

  /* Entered the website */
  useEffect(() => {
    setAchievement(prev =>
      prev.map((item, index) => (index === 0 ? { ...item, status: true } : item))
    );
  }, []);



  return (
    <main className="w-full min-h-[85vh] bg-black relative overflow-hidden">
      <LeafComponent 
        itemStorage={itemStorage} 
        setItemStorage={setItemStorage}
        itemsCollected={itemsCollected}
        setItemsCollected={setItemsCollected}
        countImg={countImg}
        setCountImg={setCountImg}
        leafTreasureCount={leafTreasureCount}
        setLeafTreasureCount={setLeafTreasureCount}
        dispatch={dispatch}
        state={state}
        componentVisibility={componentVisibility}
      />

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
        <ItemStorageComponent
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