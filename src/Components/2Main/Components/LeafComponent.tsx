import { useState, useReducer, useUniquePositions, Leaf, Grass, Treasure, Grass2, background, Title, InteractiveImg, Amounts, ConditionalQuestionDisplay, BackgroundVideo, 
  Leaf2, Treasure2 } from './Imports';

/* TYPES */
type Item = { name: string; amount: number; img?: string };
type Action = { type: string; index?: number };

/* REDUCER */
function allItemsReducer(state: Item[], action: Action) {
  switch (action.type) {
    case 'INCREMENT_leaf':
      return state.map(item => item.name === 'leaf' ? { ...item, amount: item.amount + 1 } : item);
    case 'INCREMENT_GRASS':
      return state.map(item => item.name === 'grass' ? { ...item, amount: item.amount + 1 } : item);
    default:
      return state;
  }
}

/* COMPONENT */
function LeafComponent() {
  const [visible, setVisible] = useState<number[]>([]);
  const [interactiveImgComponentVisibility, setInteractiveImgComponentVisibility] = useState<boolean>(false);
const [conditionalQuestionDisplayProps, setConditionalQuestionDisplayProps] = useState({
  type: undefined as undefined | string,
  img: undefined as undefined | string,
  question: undefined as undefined | string,
  answer: undefined as undefined | string,
  choices: [] as string[] | undefined[],
});




  /* USEREDUCER STATE */
const [itemsCollected, setItemsCollected] = useState<Item[]>([
  { name: 'leaf', amount: 67, img: Grass2 },
  { name: 'grass', amount: 0 },
  { name: 'treasure', amount: 0 },
]);


  /* ITEMS CONFIG (THE INTERACTIVE IMGS YOU SEE ON SCREEN) */
  const ITEM_CONFIG = [
    { name: 'leaf', img: Leaf, count: 8 },
    { name: 'grass', img: Grass, count: 3 },
    { name: 'treasure', img: Treasure, count: 1 },
  ];

  const allItems = ITEM_CONFIG.flatMap(element =>
    Array.from({ length: element.count }, () => ({
      name: element.name,
      img: element.img,
      amount: 0
    }))
  );

  /* POSITIONS CUSTOM HOOK */
  const positions = useUniquePositions(allItems.length);

  /* REDUCER STATE */
  const [state, dispatch] = useReducer(allItemsReducer, itemsCollected);

  return (
    <main className="relative w-full overflow-visible">
      {/* BACKGROUND VIDEO */}
      <BackgroundVideo background={background} />

      <div className="relative z-10">
        <Title />

        {/* INTERACTIVE IMG */}
        
        <InteractiveImg
          allItems={allItems}
          positions={positions}
          visible={visible}
          setVisible={setVisible}
          dispatch={dispatch}
          setConditionalQuestionDisplayProps={setConditionalQuestionDisplayProps}
          setInteractiveImgComponentVisibility={setInteractiveImgComponentVisibility}
        />
        

        {/* Amounts */}
        <Amounts state={state} />
      </div>

      {/* CONDITIONAL QUESTION DISPLAY */}
{interactiveImgComponentVisibility && (
  <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[4px] overflow-hidden z-50">
    <ConditionalQuestionDisplay
      conditionalQuestionDisplayProps={conditionalQuestionDisplayProps}
      setInteractiveImgComponentVisibility={setInteractiveImgComponentVisibility}
      state={state}
    />
  </div>
)}

      
    </main>
  );
}

export default LeafComponent;
