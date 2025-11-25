import { useState, useReducer } from 'react';
import Leaf from '../../../assets/Leaf.png';
import Grass from '../../../assets/Grass.png';
import Treasure from '../../../assets/Treasure.jpg';
import Instructioncarousel from './InstructionCarousel';
import Title from './Title';
import background from '../../../assets/background.mp4';
import NavBg from '../../../assets/NavBarBackground.jpg';


function allItemsReducer(state, action) {
  switch (action.type) {
    case "INCREMENT_LEAF":
      return { count: state.amount + 1 };
    case "INCREMENT_GRASS":
      return { count: state.amount + 1 };
    case "INCREMENT_TREASURE":
      return { count: state.amount + 1 };
    default:
      return state;
  }
}



function LeafComponent() {



  const itemsCollected = [
    { name: "leaf", amount: 0,useReducerName: "LEAF"},
    { name: "Grass", amount: 0, useReducerName: "GRASS" },
    { name: "Treasure", amount: 0, useReducerName: "TREASURE" },
  ];

  const leaf = Array(8).fill({ type: "leaf", img: Leaf });
  const grass = Array(3).fill({ type: "grass", img: Grass });
  const treasure = Array(1).fill({ type: "treasure", img: Treasure });
  const allItems = [...leaf, ...grass, ...treasure];

  const numbers = [1, 2, 3, 4, 5,6,7,8,9,10,11,12]; //wwill fix later
  const randomSubset = numbers.filter(() => Math.random() > 0.2);
  console.log(randomSubset);

  const percentResult: { top: number; left: number }[] = [{ top: 1, left: 1 }];

  const getRandomPercent = () => {
    let isUnique = false;

    while (!isUnique) {
      const top = Math.random() * 90;
      const left = Math.random() * 90;

      isUnique = !percentResult.some(
        (pos) => Math.abs(pos.top - top) < 4 && Math.abs(pos.left - left) < 4
      );

      if (isUnique) {
        const newPos = { top, left };
        percentResult.push(newPos);
        return newPos;
      }
    }

    return { top: 0, left: 0 };
  };
const [state, dispatchAllItems] = useReducer(allItemsReducer, itemsCollected);
  return (
    <>
      <main className="relative w-full overflow-visible">
        {/* Video Background */}
        <video
          src={background}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Title */}
        <div className="relative z-10">
          <Title />

          {/* Items Display */}
          <section className="w-full h-[59vh] relative">
            {allItems.map((e, i) => {
              const { top, left } = getRandomPercent();
              return (
                <img
                  key={i}
                  src={e.img}
                  alt={e.type}
                  className="w-10 h-10"
                  style={{
                    position: 'absolute',
                    top: `${top}%`,
                    left: `${left}%`,
                  }}
                />
              );
            })}
          </section>

          {/* Items Collected + Buttons */}
          <section
            className="w-full min-h-[10vh] items-center justify-center px-4 p-3"
            style={{ backgroundImage: `url(${NavBg})` }}
          >
            <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-4">

              {/* Stats */}
              <div className="flex flex-wrap gap-4">
                {itemsCollected.map((element, index) => (
                  <p
                    key={index}
                    className="px-4 py-2 font-semibold rounded-lg shadow
                               bg-gradient-to-r from-green-500 to-green-700
                               text-white border-green-600 border hover:border-gray-400
                               text-center text-2xl w-32 h-20 ml-2"
                  >
                    {element.name}:<br />
                    <span className="block">{element.amount}</span>
                  </p>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-2 md:mt-0">
                <button
                  className="px-4 py-2 font-semibold rounded-lg shadow
                             bg-gradient-to-r from-green-500 to-green-700
                             text-white border-green-600 border hover:border-gray-400"
                >
                  Spawn More Grass 🌿
                </button>
                <button
                  className="px-4 py-2 font-semibold rounded-lg shadow
                             bg-gradient-to-r from-green-500 to-green-700
                             text-white border-green-600 border hover:border-gray-400"
                >
                  Shop 🛒
                </button>
              </div>

            </div>
          </section>
        </div>
      </main>

      {/* Instruction Carousel */}
      <section className="w-full h-[5vh] bg-yellow-400 flex items-center justify-center">
        <Instructioncarousel />
      </section>
    </>
  );
}

export default LeafComponent;
