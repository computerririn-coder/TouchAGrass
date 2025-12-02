import {
  useState,
  useReducer,
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
} from './Imports';
import { useEffect } from 'react';
/* TYPES */
type Item = { name: string; amount: number; img?: string };
type Action = { type: string; index?: number };

/* REDUCER */
function allItemsReducer(state: Item[], action: Action) {
  switch (action.type) {
    case 'INCREMENT_leaf':
      return state.map(item =>
        item.name === 'leaf' ? { ...item, amount: item.amount + 1 } : item
      );

    case 'INCREMENT_grass':
      return state.map(item =>
        item.name === 'grass' ? { ...item, amount: item.amount + 1 } : item
      );

    case 'INCREMENT_treasure':
      return state.map(item =>
        item.name === 'treasure' ? { ...item, amount: item.amount + 1 } : item
      );

    default:
      return state;
  }
}

/* COMPONENT */
function LeafComponent() {
  const [visible, setVisible] = useState<number[]>([]);
  const [interactiveImgComponentVisibility, setInteractiveImgComponentVisibility] =
    useState<boolean>(false);
  const [conditionalQuestionDisplayProps, setConditionalQuestionDisplayProps] =
    useState({
      type: undefined as undefined | string,
      img: undefined as undefined | string,
      question: undefined as undefined | string,
      answer: undefined as undefined | string,
      choices: [] as string[] | undefined[],
    });

  /* USEREDUCER STATE */
/* Persistent state for itemsCollected */
const [itemsCollected, setItemsCollected] = useState<Item[]>(() => {
  const saved = localStorage.getItem('itemsCollected');
  return saved
    ? JSON.parse(saved)
    : [
        { name: 'leaf', amount: 67 },
        { name: 'grass', amount: 0 },
        { name: 'treasure', amount: 0 },
      ];
});

/* Persistent state for count1 */
const [count1, setCount1] = useState<number>(() => {
  const saved = localStorage.getItem('count1');
  return saved ? Number(saved) : 3;
});

/* Sync itemsCollected to localStorage whenever it changes */
useEffect(() => {
  localStorage.setItem('itemsCollected', JSON.stringify(itemsCollected));
}, [itemsCollected]);

/* Sync count1 to localStorage whenever it changes */
useEffect(() => {
  localStorage.setItem('count1', count1.toString());
}, [count1]);

/* ITEMS CONFIG (dynamic leaf count) */
const [itemConfig, setItemConfig] = useState([
  { name: 'leaf', img: Leaf, count: count1 },
  { name: 'grass', img: Grass, count: 3 },
  { name: 'treasure', img: Treasure, count: 1 },
]);

/* Keep itemConfig.count for leaf in sync with count1 */
useEffect(() => {
  setItemConfig(prev =>
    prev.map(item =>
      item.name === 'leaf' ? { ...item, count: count1 } : item
    )
  );
}, [count1]);

/* Generate allItems dynamically */
const allItems = itemConfig.flatMap(element =>
  Array.from({ length: element.count }, () => ({
    name: element.name,
    img: element.img,
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
        <Amounts state={state} setCount1={setCount1} count1={count1}/>
      </div>

      {/* CONDITIONAL QUESTION DISPLAY */}
      {interactiveImgComponentVisibility && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[4px] overflow-hidden z-50">
          <ConditionalQuestionDisplay
            conditionalQuestionDisplayProps={conditionalQuestionDisplayProps}
            setInteractiveImgComponentVisibility={setInteractiveImgComponentVisibility}
            dispatch={dispatch}
          />
        </div>
      )}
    </main>
  );
}

export default LeafComponent;
