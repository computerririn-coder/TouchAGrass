import { useState, useReducer, useRef } from 'react';

import Leaf from '../../../assets/Leaf.png';
import Grass from '../../../assets/Grass.png';
import Treasure from '../../../assets/Treasure.jpg';
import background from '../../../assets/background.mp4';
import NavBg from '../../../assets/NavBarBackground.jpg';
import Title from './Title';
import Grassbackground from "../../../assets/Grassbackground.jpg";
import styles from "C:/Users/Balanag PC/Desktop/TouchAGrass/Touch_A_Grass/src/Components/2Main/Components/LeafComponent.module.css";

/* TYPES */
type Item = { name: string; amount: number };
type Action = { type: string; index?: number };

/* REDUCER */
function allItemsReducer(state: Item[], action: Action) {
  switch (action.type) {
    case 'INCREMENT_leaf':
      return state.map(item =>
        item.name === 'leaf' ? { ...item, amount: item.amount + 1 } : item);
        case 'INCREMENT_GRASS':
          return state.map(item => item.name === 'grass' ? {...item, amount: item.amount  + 1} : item)
    default:
      return state;
  }
}

/* COMPONENT */
function LeafComponent() {
  const [visible, setVisible] = useState<number[]>([]);

  /* INITIAL STATE */
  const itemsCollected: Item[] = [
    { name: 'leaf', amount: 67 },
    { name: 'grass', amount: 0 },
    { name: 'treasure', amount: 0 }
  ];

  /* ITEMS  */
  const leaf = Array(8).fill(null).map(() => ({ name: 'leaf', img: Leaf }));
  const grass = Array(3).fill(null).map(() => ({ name: 'grass', img: Grass }));
  const treasure = Array(1).fill(null).map(() => ({ name: 'treasure', img: Treasure }));
  const allItems = [...leaf, ...grass, ...treasure];

  /* POSITIONING/NO NEED TO TOUCH THIS */
  const positionsRef = useRef<{ top: number; left: number }[]>([]);

  if (positionsRef.current.length === 0) {
    const used: { top: number; left: number }[] = [];

    const getRandomPercent = () => {
      let top = 0;
      let left = 0;
      let unique = false;

      while (!unique) {
        top = Math.random() * 90;
        left = Math.random() * 90;
        unique = !used.some(pos => Math.abs(pos.top - top) < 4 && Math.abs(pos.left - left) < 4);
      }

      const result = { top, left };
      used.push(result);
      return result;
    };

    allItems.forEach(() => positionsRef.current.push(getRandomPercent()));
  }

  const [state, dispatch] = useReducer(allItemsReducer, itemsCollected);

  /* RENDER */
  return (
    <main className="relative w-full overflow-visible">
      <video
        src={background}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10">
        <Title />

        {/* INTERACTIVE ITEMS */}
        <section className="w-full h-[59vh] relative">
          {allItems.map((item, i) => {
            if (visible.includes(i)) return null;
            const { top, left } = positionsRef.current[i];

            return (
              <img
                key={i}
                src={item.img}
                alt={item.name}
                className="w-10 h-10 absolute"
                style={{ top: `${top}%`, left: `${left}%` }}
                onClick={() => {
                  dispatch({ type: `INCREMENT_${item.name}`, index: i });
                  setVisible(prev => [...prev, i]);
                }}
              />
            );
          })}
        </section>

        {/* STATS + UI */}
        <section
          className="w-full min-h-[10vh] items-center justify-center px-4 p-3"
          style={{ backgroundImage: `url(${NavBg})` }}
        >
          <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-4">
            {/* STATS */}
            <div className="flex flex-wrap gap-4">
              {state.map((element, index) => (
                <p
                  key={index}
                  className="px-4 py-2 font-semibold rounded-lg shadow bg-gradient-to-r from-green-500 to-green-700 text-white border-green-600 border hover:border-gray-400 text-center text-2xl w-32 h-20 ml-2"
                >
                  {element.name}:<br />
                  <span className="block">{element.amount}</span>
                </p>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 mt-2 md:mt-0">
              <button className="px-4 py-2 font-semibold rounded-lg shadow bg-gradient-to-r from-green-500 to-green-700 text-white border-green-600 border hover:border-gray-400">
                Spawn More Grass 🌿
              </button>
              <button className="px-4 py-2 font-semibold rounded-lg shadow bg-gradient-to-r from-green-500 to-green-700 text-white border-green-600 border hover:border-gray-400">
                Shop 🛒
              </button>
            </div>
          </div>
        </section>
      </div>

{/* CONDITIONAL RENDER (WHEN AN IMG IS CLICKED EG LEAF THIS COMPONENT WILL APPEAR*/}
<section className="relative z-20 mx-auto">
  <div className="bg-gradient-to-br from-emerald-100 via-emerald-200 to-green-200 mx-auto rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-amber-700 to-amber-900 border border-amber-600 flex flex-col items-center justify-start min-h-[20rem] w-[40rem]">

{/* IMAGE */}
<div className="image-wrapper w-full h-48 overflow-hidden p-5 bg">
  <div className="w-full h-full rounded-xl overflow-hidden">
    <img
      src={Grassbackground}
      alt="placeholder"
      className="w-full h-full object-cover"
    />
  </div>
</div>



    {/* QUESTION */}
    <div className="question p-2">
      <p>Placeholder Question</p>
    </div>

        {/* OPTIONS */}
        <div className={styles.options}>
          <p className={styles.option}>Placeholder</p>
          <p className={styles.option}>Placeholder</p>
          <p className={styles.option}>Placeholder</p>
          <p className={styles.option}>Placeholder</p>
        </div>


  </div>
</section>




    </main>
  );
}

export default LeafComponent;
