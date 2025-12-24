import { useEffect, useReducer, useState } from "react";

import LeafComponent from "./Components/LeafComponent";
import Instructions from "./Components/ConditionalComponents/Instructions";
import LogIn from "./Components/ConditionalComponents/LogIn";
import ItemStorageComponent from "./Components/ConditionalComponents/ItemStorageComponent";
import Achievements from "./Components/ConditionalComponents/Achievements";

import { questions } from "./Components/ConditionalComponents/ForAchievements";
import type { Item, Action, MainProps, reusableSync, Achievement } from "./Components/ConditionalComponents/ExportstypeScriptEtc/Typescript/TypescriptCompilationtypes";
import Customization from "./Components/ConditionalComponents/Customization";



/* Reusable for sync */
const useLocalStorageSync = ({key, value}: reusableSync) =>
  useEffect(() => {
    if (value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

/* REDUCER */
function allItemsReducer(state: Item[], action: Action) {
  switch (action.type) {
    case "INCREMENT_leaf": {
      const newState = state.map(item =>
        item.name === "leaf" ? { ...item, amount: item.amount + 1 } : item
      );
      console.log("New state after INCREMENT_leaf:", newState);
      return newState;
    }

    case "INCREMENT_grass":
      return state.map(item =>
        item.name === "grass" ? { ...item, amount: item.amount + 1 } : item
      );

    case "INCREMENT_treasure":
      return state.map(item =>
        item.name === "treasure" ? { ...item, amount: item.amount + 1 } : item
      );

    case "TYPE_ACHIEVEMENT_1": {
      window.alert("You Claimed 30 Leaf Currency");
      return state.map(item =>
        item.name === "leaf" ? { ...item, amount: item.amount + 20 } : item
      );
    }

    case "TYPE_ACHIEVEMENT_2": {
      window.alert("You Claimed 30 Grass Currency");
      return state.map(item =>
        item.name === "grass" ? { ...item, amount: item.amount + 20 } : item
      );
    }

    case "TYPE_ACHIEVEMENT_3": {
      console.log("Before:", state);
      const nextState = state.map(item =>
        item.name === "treasure" ? { ...item, amount: item.amount + 20 } : item
      );
      window.alert("You Claimed 30 Treasure Currency");
      return nextState;
    }

    default:
      return state;
  }
}

function Main({
  itemStorage,
  setItemStorage,
  componentVisibility,
  setComponentVisibility,
}: MainProps) {
  /* PERSISTENT STATE: achievement */
  const [achievement, setAchievement] = useState(() => {
    const saved = localStorage.getItem("achievements");
    return saved ? JSON.parse(saved) : questions;
  });

  /* PERSISTENT STATE: itemsCollected */
  const [itemsCollected, setItemsCollected] = useState<Item[]>(() => {
    const saved = localStorage.getItem("itemsCollected");
    return saved
      ? JSON.parse(saved)
      : [
          { name: "leaf", amount: 10 },
          { name: "grass", amount: 10 },
          { name: "treasure", amount: 10 },
        ];
  });

  /* PERSISTENT STATE: countImg */
  const [countImg, setCountImg] = useState<number>(() => {
    const saved = localStorage.getItem("countImg");
    const n = Number(saved);
    return !isNaN(n) ? n : 2;
  });

  /* PERSISTENT STATE: leaf + treasure counts */
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

  /* SYNC: reducer -> itemsCollected */
  useEffect(() => {
    setItemsCollected(state);
  }, [state]);

  /* Local Storage */
useLocalStorageSync({ key: "itemsCollected", value: itemsCollected });
useLocalStorageSync({ key: "leafTreasureCount", value: leafTreasureCount });
useLocalStorageSync({ key: "achievements", value: achievement });
useLocalStorageSync({ key: "countImg", value: countImg });
  /* Local Storage End */

/* Achievement: entered website */
useEffect(() => {
  setAchievement((prev: Achievement[]) =>
    prev.map((item, index) =>
      index === 0 ? { ...item, status: true, isUnlocked: true } : item
    )
  );
}, []);

/* Achievement: You Answered A Treasure Level Question */
useEffect(() => {
  const treasureAmount: number =
    itemsCollected.find(({ name }) => name === "treasure")?.amount || 0;

  if (treasureAmount >= 11 && achievement[1] && !achievement[1].isUnlocked) {
    setAchievement((prev: Achievement[]) =>
      prev.map((item, index) =>
        index === 1 ? { ...item, status: true, isUnlocked: true } : item
      )
    );
  }
}, [itemsCollected, achievement]);

const [words, setWords] = useState({
  title: "Collect leaves and unlock",
  words: ["collections", "stickers", "achievements"]
});


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
        setComponentVisibility={setComponentVisibility}
        setAchievement={setAchievement}
        words={words}
        setWords={setWords}
      />

      {componentVisibility.instructionsVisibility && (
        <Instructions setComponentVisibility={setComponentVisibility} />
      )}

      {componentVisibility.customizationVisibility && (
        <Customization setComponentVisibility={setComponentVisibility} words={words} setWords={setWords}/>
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
          setAchievement={setAchievement}
          setComponentVisibility={setComponentVisibility}
          dispatch={dispatch}
        />
      )}
    </main>
  );
}

export default Main;
