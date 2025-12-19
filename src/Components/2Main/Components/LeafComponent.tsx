import { useState, useEffect } from "react";
import {
  useUniquePositions,
  Leaf,
  Grass,
  Treasure,
  background,
  Title,
  InteractiveImg,
  Amounts,
  ConditionalQuestionDisplay,
  BackgroundVideo,
} from "./Imports";
import Shop from "./ConditionalComponents/Shop";

/* TYPES */
type Item = { name: string; amount: number; img?: string; bought?: boolean };

/* COMPONENT */
interface LeafComponentProps {
  itemStorage: Item[];
  setItemStorage: React.Dispatch<React.SetStateAction<Item[]>>;
  itemsCollected: Item[];
  setItemsCollected: React.Dispatch<React.SetStateAction<Item[]>>;
  countImg: number;
  setCountImg: React.Dispatch<React.SetStateAction<number>>;
  leafTreasureCount: number[];
  setLeafTreasureCount: React.Dispatch<React.SetStateAction<number[]>>;
  dispatch: React.Dispatch<any>;
  state: Item[];
}

function LeafComponent({ 
  itemStorage, 
  setItemStorage,
  itemsCollected,
  setItemsCollected,
  countImg,
  setCountImg,
  leafTreasureCount,
  setLeafTreasureCount,
  dispatch,
  state
}: LeafComponentProps) {
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

  /* "Spawn special" btn */
  const [itemConfig] = useState([
    { name: "leaf", img: Leaf, count: countImg },
    { name: "grass", img: Grass, count: leafTreasureCount[0] ?? 0 },
    { name: "treasure", img: Treasure, count: leafTreasureCount[1] ?? 0 }
  ]);

  /* IMG */
  const allItems = itemConfig.flatMap(element =>
    Array.from({ length: element.count }, () => ({
      name: element.name,
      img: element.img
    }))
  );

  /* UNIQUE POSITIONS */
  const positions = useUniquePositions(allItems.length);

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
          setInteractiveImgComponentVisibility={setInteractiveImgComponentVisibility}
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
            setInteractiveImgComponentVisibility={setInteractiveImgComponentVisibility}
            dispatch={dispatch}
          />
        </div>
      )}

      {ShopVisibility && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[0px] overflow-hidden z-50">
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