import { useState } from "react";
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
import type { LeafComponentProps, InteractiveImgComponentProps, QuestionItem } from "./ConditionalComponents/ExportstypeScriptEtc/Typescript/TypescriptCompilationtypes";

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
  state,
  componentVisibility,
  setComponentVisibility,
  setAchievement,
  words,
  setWords,
}: LeafComponentProps) {
  /* VISIBILITY STATE */
  const [visible, setVisible] = useState<number[]>([]);
  const [interactiveImgComponentVisibility, setInteractiveImgComponentVisibility] =
    useState<boolean>(false);
  const [ShopVisibility, setShopVisibility] = useState(false);

  /* CONDITIONAL DISPLAY PROPS */
const [conditionalQuestionDisplayProps, setConditionalQuestionDisplayProps] =
  useState<QuestionItem>({
    type: "",
    img: "",
    question: "",
    answer: "",
    choices: [],
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
        <Title words={words}setWords={setWords}/>

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
          componentVisibility={componentVisibility}
          setShopVisibility={setShopVisibility}
          setComponentVisibility={setComponentVisibility}
        />
      </div>

      {interactiveImgComponentVisibility && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[4px] overflow-hidden z-50">
          <ConditionalQuestionDisplay
            conditionalQuestionDisplayProps={conditionalQuestionDisplayProps}
            setInteractiveImgComponentVisibility={setInteractiveImgComponentVisibility}
            dispatch={dispatch}
            setAchievement={setAchievement}
          />
        </div>
      )}

      {componentVisibility.shopVisibility && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[0px] overflow-hidden z-50">
          <Shop
            itemsCollected={itemsCollected}
            setItemsCollected={setItemsCollected}
            setShopVisibility={setShopVisibility}
            itemStorage={itemStorage}
            setItemStorage={setItemStorage}
            setComponentVisibility={setComponentVisibility}
          />
        </div>
      )}
    </main>
  );
}

export default LeafComponent;