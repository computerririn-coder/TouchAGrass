import { useEffect, useReducer, useState } from "react";
import LeafComponent from "./Components/LeafComponent";
import Instructions from "./Components/ConditionalComponents/Instructions";
import LogIn from "./Components/ConditionalComponents/LogIn";
import ItemStorageComponent from "./Components/ConditionalComponents/ItemStorageComponent";
import Achievements from "./Components/ConditionalComponents/Achievements";
import Customization from "./Components/ConditionalComponents/Customization";

import { questions } from "./Components/ConditionalComponents/ForAchievements";
import type {Item, Action, MainProps, ReusableSync, Achievement, PurchasedItem } from "./Components/ConditionalComponents/ExportstypeScriptEtc/Typescript/TypescriptCompilationtypes";
import { shop_treasure3 } from "./Components/Imports";
import Test from "./Components/Test";

/* REDUCER */
function allItemsReducer(state: Item[], action: Action) {
  switch (action.type) {
    case "INCREMENT_leaf": {
      const newState = state.map(item =>
        item.name === "leaf"
          ? { ...item, amount: (item.amount ?? 0) + 1 }
          : item
      );
      console.log("New state after INCREMENT_leaf:", newState);
      return newState;
    }

    case "INCREMENT_grass":
      return state.map(item =>
        item.name === "grass"
          ? { ...item, amount: (item.amount ?? 0) + 1 }
          : item
      );

    case "INCREMENT_treasure":
      return state.map(item =>
        item.name === "treasure"
          ? { ...item, amount: (item.amount ?? 0) + 1 }
          : item
      );

    case "TYPE_ACHIEVEMENT_1":
      window.alert("You Claimed 30 Leaf Currency");
      return state.map(item =>
        item.name === "leaf"
          ? { ...item, amount: (item.amount ?? 0) + 20 }
          : item
      );

    case "TYPE_ACHIEVEMENT_2":
      window.alert("You Claimed 30 Grass Currency");
      return state.map(item =>
        item.name === "grass"
          ? { ...item, amount: (item.amount ?? 0) + 20 }
          : item
      );

    case "TYPE_ACHIEVEMENT_3": {
      console.log("Before:", state);
      const nextState = state.map(item =>
        item.name === "treasure"
          ? { ...item, amount: (item.amount ?? 0) + 20 }
          : item
      );
      window.alert("You Claimed 30 Treasure Currency");
      return nextState;
    }

    default:
      return state;
  }
}

/* Reusable localStorage sync */
const useLocalStorageSync = ({ key, value }: ReusableSync) =>
  useEffect(() => {
    if (value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

function Main({ componentVisibility, setComponentVisibility, img, setImg }: MainProps) {
  const [achievement, setAchievement] = useState(() => {
    const saved = localStorage.getItem("achievements");
    return saved ? JSON.parse(saved) : questions;
  });

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

  const [countImg, setCountImg] = useState<number>(() => {
    const saved = localStorage.getItem("countImg");
    if (saved === null) return 4;
    const n = Number(saved);
    return n ? n : 4;
  });

  const [leafTreasureCount, setLeafTreasureCount] = useState<number[]>(() => {
    const saved = localStorage.getItem("leafTreasureCount");
    try {
      const parsed = saved ? JSON.parse(saved) : [4, 2];
      return Array.isArray(parsed) && parsed.length >= 2 ? parsed : [4, 2];
    } catch {
      return [4, 2];
    }
  });

  const [state, dispatch] = useReducer(allItemsReducer, itemsCollected);

  useEffect(() => {
    setItemsCollected(state);
  }, [state]);

  useLocalStorageSync({ key: "itemsCollected", value: itemsCollected });
  useLocalStorageSync({ key: "leafTreasureCount", value: leafTreasureCount });
  useLocalStorageSync({ key: "achievements", value: achievement });
  useLocalStorageSync({ key: "countImg", value: countImg });

  useEffect(() => {
    setAchievement((prev: Achievement[]) =>
      prev.map((item, index) =>
        index === 0 ? { ...item, status: true, isUnlocked: true } : item
      )
    );
  }, []);

  useEffect(() => {
    const treasureAmount =
      itemsCollected.find(({ name }) => name === "treasure")?.amount || 0;

    if (treasureAmount >= 11 && achievement[1] && !achievement[1].isUnlocked) {
      setAchievement((prev: Achievement[]) =>
        prev.map((item, index) =>
          index === 1 ? { ...item, status: true, isUnlocked: true } : item
        )
      );
    }
  }, [itemsCollected, achievement]);

  //For Customization
  const [words, setWords] = useState({
    title: "Collect leaves and unlock",
    words: ["collections", "stickers", "achievements"],
  });




  //End

const [itemStorage, setItemStorage] = useState<PurchasedItem[]>(() => {
  const saved = localStorage.getItem("itemStorage");

  if (saved) {
    return JSON.parse(saved);
  }else return [
    {
      type: "Sample",
      name: "Diamond",
      price: 99,
      IMGSRC: shop_treasure3,
    },
  ];
});


  useEffect(() => {
    localStorage.setItem("itemStorage", JSON.stringify(itemStorage));
  }, [itemStorage]);

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
        <Customization
          setComponentVisibility={setComponentVisibility}
          words={words}
          setWords={setWords}
          img={img}
          setImg={setImg}
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
