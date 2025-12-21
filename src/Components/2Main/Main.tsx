import { useEffect, useReducer, useState } from "react";

import LeafComponent from "./Components/LeafComponent";
import Instructions from "./Components/ConditionalComponents/Instructions";
import LogIn from "./Components/ConditionalComponents/LogIn";
import ItemStorageComponent from "./Components/ConditionalComponents/ItemStorageComponent";
import Achievements from "./Components/ConditionalComponents/Achievements";

import { questions } from "./Components/ConditionalComponents/ForAchievements";
import type { Item, Action, MainProps } from "./Components/Typescript/TypescriptCompilationtypes";

/* Reusable for sync */
const useLocalStorageSync = (key, value) =>
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
        item.name === "leaf"
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      console.log("New state after INCREMENT_leaf:", newState);
      return newState;
    }

    case "INCREMENT_grass":
      return state.map(item =>
        item.name === "grass"
          ? { ...item, amount: item.amount + 1 }
          : item
      );

    case "INCREMENT_treasure":
      return state.map(item =>
        item.name === "treasure"
          ? { ...item, amount: item.amount + 1 }
          : item
      );

    case "TYPE_ACHIEVEMENTS_ENTERED":
      return state.map(item =>
        item.name === "leaf"
          ? { ...item, amount: item.amount + 20 }
          : item
      );

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
      return Array.isArray(parsed) && parsed.length >= 2
        ? parsed
        : [4, 2];
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
useLocalStorageSync("itemsCollected", itemsCollected);
useLocalStorageSync("leafTreasureCount", leafTreasureCount);
useLocalStorageSync("achievements", achievement);
useLocalStorageSync("countImg", countImg);

/*Local Storage End */
  /* Achievement: entered website */
  useEffect(() => {
    setAchievement(prev =>
      prev.map((item, index) =>
        index === 0
          ? { ...item, status: true, isUnlocked: true }
          : item
      )
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
        setComponentVisibility={setComponentVisibility}
      />

      {componentVisibility.instructionsVisibility && (
        <Instructions
          setComponentVisibility={setComponentVisibility}
        />
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
