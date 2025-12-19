import { Leaf2, Grass2, Treasure2 } from "../Imports";
import styles from "./Shop.module.css";
import { useState, useEffect } from "react";
import type {
  ShopItem,
  Item,
  PurchasedItem,
  ShopProps,
  ItemSectionProps,
} from "../Typescript/TypescriptCompilationtypes";

const ItemsArray = {
  commonItems: [
    { name: "leaf", IMGSRC: Leaf2, price: 1 },
    { name: "leaf", IMGSRC: Leaf2, price: 2 },
    { name: "leaf", IMGSRC: Leaf2, price: 3 },
  ],
  rareItems: [
    { name: "grass", IMGSRC: Grass2, price: 1 },
    { name: "grass", IMGSRC: Grass2, price: 2 },
    { name: "grass", IMGSRC: Grass2, price: 3 },
  ],
  treasureItems: [
    { name: "treasure", IMGSRC: Treasure2, price: 1 },
    { name: "treasure", IMGSRC: Treasure2, price: 2 },
    { name: "treasure", IMGSRC: Treasure2, price: 3 },
  ],
};

function handlePurchase(
  setItemsCollected: React.Dispatch<React.SetStateAction<Item[]>>,
  itemsCollected: Item[],
  name: string,
  price: number,
  setItemStorage: React.Dispatch<React.SetStateAction<PurchasedItem[]>>
) {
  const nextItems = itemsCollected.map(el =>
    el.name === name && el.amount - price >= 0 ? { ...el, amount: el.amount - price } : el
  );
  setItemsCollected(nextItems);

  // add to itemStorage
  setItemStorage(prev => [...prev, { name, price }]);
}

function ItemSection({
  title,
  image,
  items,
  itemsCollected,
  setItemsCollected,
  setItemStorage,
}: ItemSectionProps) {
  return (
    <div className="flex justify-start flex-wrap gap-10">
      <div className="h-[16vh] w-[16vh] flex items-center justify-center flex-wrap border-2 border-white rounded-lg p-1">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <p className="text-lg font-semibold tracking-wide uppercase w-40 self-center text-black drop-shadow-md">
        {title}
      </p>
      <div className="flex flex-wrap gap-10 pb-10">
        {items.map((item, index) => (
          <div key={index} className={styles.itemCard}>
            <img src={item.IMGSRC} alt={item.name} />
            <p>Price: {item.price}</p>
            <button
              className="bg-green-500"
              onClick={() =>
                handlePurchase(
                  setItemsCollected,
                  itemsCollected,
                  item.name,
                  item.price,
                  setItemStorage
                )
              }
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Shop({
  setItemsCollected,
  itemsCollected,
  itemStorage,
  setItemStorage,
  setComponentVisibility,
}: ShopProps) {
  return (
    <div className="w-screen h-screen flex items-center justify-center absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <section className="relative w-[80%] h-[75%] bg-gradient-to-b from-blue-500 to-green-400 text-white border-5 border-blue-600 rounded-lg flex flex-col items-center justify-start pt-10 overflow-hidden overflow-y-auto overscroll-contain pl-4">
        <button
          className="absolute top-4 right-4 text-black text-2xl font-light hover:opacity-70 rounded-full bg-gradient-to-br from-green-400 to-yellow-300 h-10 w-10 flex items-center justify-center shadow-md"
          onClick={() =>
            setComponentVisibility(prev => {
              return {
                ...prev,
                shopVisibility: false,
              };
            })
          }
        >
          X
        </button>
        <ItemSection
          title="Common Items"
          image={Leaf2}
          items={ItemsArray.commonItems}
          itemsCollected={itemsCollected}
          setItemsCollected={setItemsCollected}
          setItemStorage={setItemStorage}
        />
        <ItemSection
          title="Rare Items"
          image={Grass2}
          items={ItemsArray.rareItems}
          itemsCollected={itemsCollected}
          setItemsCollected={setItemsCollected}
          setItemStorage={setItemStorage}
        />
        <ItemSection
          title="Treasure Items"
          image={Treasure2}
          items={ItemsArray.treasureItems}
          itemsCollected={itemsCollected}
          setItemsCollected={setItemsCollected}
          setItemStorage={setItemStorage}
        />
      </section>
    </div>
  );
}

export default Shop;

