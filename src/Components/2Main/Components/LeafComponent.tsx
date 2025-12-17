import { useState, useReducer, useEffect } from "react";
import {
  useUniquePositions,
  Leaf,
  Grass,
  Treasure,
  Grass2,
  background,
  Title,
  InteractiveImg,
  Amounts,
  ConditionalQuestionDisplay,
  BackgroundVideo,
  Leaf2,
  Treasure2
} from "./Imports";
import Shop from "./ConditionalComponents/Shop";

/* TYPES */
type Item = { name: string; amount: number; img?: string };
type Action = { type: string; index?: number };

/* REDUCER */
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

/* COMPONENT */
function LeafComponent({itemStorage, setItemStorage}) {
  /* VISIBILITY STATE */
  const [visible, setVisible] = useState<number[]>([]);
  const [interactiveImgComponentVisibility, setInteractiveImgComponentVisibility] =
    useState<boolean>(false);
  const [ShopVisibility, setShopVisibility] = useState(false);
  /* CONDITIONAL DISPLAY PROPS */
  const [conditionalQuestionDisplayProps, setConditionalQuestionDisplayProps] =
    useState({
      type: undefined as undefined | string,
      img: undefined as undefined | string,
      question: undefined as undefined | string,
      answer: undefined as undefined | string,
      choices: [] as string[] | undefined[]
    });

  /* PERSISTENT STATE: itemsCollected */
  const [itemsCollected, setItemsCollected] = useState<Item[]>(() => {
    const saved = localStorage.getItem("itemsCollected");
    return saved
      ? JSON.parse(saved)
      : [
          { name: "leaf", amount: 10, bought: false },
          { name: "grass", amount: 10, bought: false },
          { name: "treasure", amount: 10, bought: false }
        ];
  });


  /* PERSISTENT countImg */
  const [countImg, setCountImg] = useState<number>(() => {
    const saved = localStorage.getItem("countImg");
    return saved ? Number(saved) : 2;
  });

  /* PERSISTENT leaf + treasure counts array */
  const [leafTreasureCount, setLeafTreasureCount] = useState<number[]>(() => {
    const saved = localStorage.getItem("leafTreasureCount");
    return saved ? JSON.parse(saved) : [4, 2];
  });

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

  
  /* ITEM CONFIG */
  const [itemConfig] = useState([
    { name: "leaf", img: Leaf, count: countImg },
    { name: "grass", img: Grass, count: leafTreasureCount[0] },
    { name: "treasure", img: Treasure, count: leafTreasureCount[1] }
  ]);

  /* BUILD allItems */
  const allItems = itemConfig.flatMap(element =>
    Array.from({ length: element.count }, () => ({
      name: element.name,
      img: element.img
    }))
  );

  /* UNIQUE POSITIONS */
  const positions = useUniquePositions(allItems.length);

  /* REDUCER STATE */
  const [state, dispatch] = useReducer(allItemsReducer, itemsCollected);
useEffect(() => {
  setItemsCollected(state);
}, [state]);

  return (
    <main className="relative w-full overflow-visible">
      <BackgroundVideo background={background} />

      <div className="relative z-10">
        <Title />

        <InteractiveImg
          allItems={allItems}
          positions={positions}
          visible={visible}
          setVisible={setVisible}
          dispatch={dispatch}
          setConditionalQuestionDisplayProps={setConditionalQuestionDisplayProps}
          setInteractiveImgComponentVisibility={
            setInteractiveImgComponentVisibility
          }
        />

        <Amounts
          state={state}
          itemsCollected={itemsCollected}
          countImg={countImg}
          setCountImg={setCountImg}
          setLeafTreasureCount={setLeafTreasureCount}
          setShopVisibility={setShopVisibility}
        />
      </div>

      {interactiveImgComponentVisibility && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[4px] overflow-hidden z-50">
          <ConditionalQuestionDisplay
            conditionalQuestionDisplayProps={conditionalQuestionDisplayProps}
            setInteractiveImgComponentVisibility={
              setInteractiveImgComponentVisibility
            }
            dispatch={dispatch}
          />
        </div>
      )}

      {ShopVisibility && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[0px] overflow-hidden z-50 ">
          <Shop
            itemsCollected={itemsCollected}
            setItemsCollected={setItemsCollected}
            setShopVisibility={setShopVisibility}
            itemStorage={itemStorage}
            setItemStorage={setItemStorage}
          />
        </div>
      )}
    </main>
  );
}

export default LeafComponent;
