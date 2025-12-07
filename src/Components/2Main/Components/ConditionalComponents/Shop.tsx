// Imports for images and CSS module
import { Leaf2, Grass2, Treasure2 } from "../Imports";
import styles from "./Shop.module.css";

// Type for each shop item (image + price)
type ShopItem = {
  IMGSRC: string;
  price: number;
  name?: string; // temporary
};

// Type for collected items in user inventory
type Item = {
  name: string;
  amount: number;
};

// All shop item categories grouped in one object
const ItemsArray: {
  commonItems: ShopItem[];
  rareItems: ShopItem[];
  treasureItems: ShopItem[];
} = {
  commonItems: [
    { name: "leaf", IMGSRC: Leaf2, price: 1 },
    { name: "leaf", IMGSRC: Leaf2, price: 2 },
    { name: "leaf", IMGSRC: Leaf2, price: 3 },
  ],
  rareItems: [
    { name: "grass", IMGSRC: Grass2, price: 1 },
    { name: "grass", IMGSRC: Grass2, price: 2 },
    { name: "grass",IMGSRC: Grass2, price: 3 },
  ],
  treasureItems: [
    { name: "treasure", IMGSRC: Treasure2, price: 1 },
    { name: "treasure", IMGSRC: Treasure2, price: 2 },
    { name: "treasure", IMGSRC: Treasure2, price: 3 },
  ],
};

// Handles removing 1 leaf from user inventory when buying
function handlePurchase(
  setItemsCollected: React.Dispatch<React.SetStateAction<Item[]>>,
  itemsCollected: Item[],
  amountName: string,
  price: number
) {
const combinedItems = [
  itemsCollected.find(item => item.name === "leaf"),
  itemsCollected.find(item => item.name === "grass"),
  itemsCollected.find(item => item.name === "treasure")
];

if (combinedItems.some((element) => !element || element.amount <= 0)) return;


  setItemsCollected((prev) =>
    prev.map((element) =>
      element.name === amountName && element.amount - price >= 0
        ? { ...element, amount: element.amount - price }
        : element
    )
  );
}

// Props for each item section (common, rare, treasure)
type ItemSectionProps = {
  title: string; // Section title
  image: string; // Display image next to title
  amountName?: string;
  price?: number;
  items: ShopItem[]; // List of items in this category
  itemsCollected: Item[]; // Player inventory
  setItemsCollected: React.Dispatch<React.SetStateAction<Item[]>>; // Update inventory
};

// Renders a single category section in the shop
function ItemSection({
  title,
  image,
  amountName,
  items,
  price,
  itemsCollected,
  setItemsCollected,
}: ItemSectionProps) {
  return (
    <div className="w-full h-[20vh] flex items-center justify-start pl-10 gap-4">
      {/* Image for category (leaf, grass, treasure) */}
      <div className="h-[16vh] w-[16vh] flex items-center justify-center border-2 border-white rounded-lg p-1">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>

      {/* Category title */}
      <p className="text-lg font-semibold tracking-wide uppercase drop-shadow-md w-40">
        {title}
      </p>

      {/* All items inside the category */}
      <div className="flex gap-4">
        {items.map((item, index) => (
          <div key={index} className={styles.itemCard}>
            <img src={item.IMGSRC} alt="Item" />
            <p>Price: {item.price} Leaf</p>
            <button
              onClick={() =>
                handlePurchase(
                  setItemsCollected,
                  itemsCollected,
                  item.name, // use current item's name
                  item.price // use current item's price
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

// Props for the main Shop component
type ShopProps = {
  setItemsCollected: React.Dispatch<React.SetStateAction<Item[]>>; // Update inventory
  itemsCollected: Item[]; // Current inventory
  setShopVisibility: React.Dispatch<React.SetStateAction<boolean>>; // Close shop
};

// Main shop container component
function Shop({
  setItemsCollected,
  itemsCollected,
  setShopVisibility,
}: ShopProps) {
  let commmonItemIndex = 0;
  let rareItemIndex = 0;
  let treasureItemIndex = 0;

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {/* Shop window container */}
      <section className="relative w-[95vw] h-[82vh] bg-gradient-to-b from-blue-500 to-green-400 text-white border-5 border-blue-600 rounded-lg p-1 overflow-hidden">
        {/* Close (X) button */}
        <button
          className="absolute top-4 right-4 text-black text-2xl font-light hover:opacity-70 rounded-full bg-gradient-to-br from-green-400 to-yellow-300 h-10 w-10 flex items-center justify-center shadow-md"
          onClick={() => setShopVisibility(false)}
        >
          X
        </button>

        {/* Common Items Section */}
        <ItemSection
          title="Common Items"
          image={Leaf2}
          amountName={ItemsArray.commonItems[commmonItemIndex].name}
          price={ItemsArray.commonItems[commmonItemIndex].price}
          items={ItemsArray.commonItems}
          itemsCollected={itemsCollected}
          setItemsCollected={setItemsCollected}
        />

        {/* Rare Items Section */}
    
<ItemSection
  title="Rare Items"
  image={Grass2}
  amountName={ItemsArray.rareItems[rareItemIndex].name}
  price={ItemsArray.rareItems[rareItemIndex].price}
  items={ItemsArray.rareItems}
  itemsCollected={itemsCollected}
  setItemsCollected={setItemsCollected}
/>

<ItemSection
  title="Treasure Items"
  image={Treasure2}
  amountName={ItemsArray.treasureItems[treasureItemIndex].name}
  price={ItemsArray.treasureItems[treasureItemIndex].price}
  items={ItemsArray.treasureItems}
  itemsCollected={itemsCollected}
  setItemsCollected={setItemsCollected}
/>

        {/* Hidden Items Placeholder */}
        <div className="w-full h-[20vh] flex items-center justify-start pl-10">
          <p className="text-lg font-semibold tracking-wide uppercase drop-shadow-md">
            Hidden Items
          </p>
        </div>
      </section>
    </div>
  );
}

export default Shop;
