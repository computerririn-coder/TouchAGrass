import type { Dispatch, SetStateAction } from "react";

/* Shop */
export type ShopItem = {
  type: string,
  IMGSRC: string;
  price: number;
  name: string;
  currencyType: string;
};

export type PurchasedItem = {
  type: string;
  name: string;
  price: number;
  IMGSRC: URL | string;
};

export type ItemStorageProps = {
  itemStorage: PurchasedItem[];
  componentVisibility?: boolean;
  setComponentVisibility: React.Dispatch<React.SetStateAction<ComponentVisibility>>;
};

export type ItemSectionProps = {
  title: string;
  image: string;
  items: ShopItem[];
  itemsCollected: Item[];
  setItemsCollected: React.Dispatch<React.SetStateAction<Item[]>>;
  setItemStorage: React.Dispatch<React.SetStateAction<PurchasedItem[]>>;
};

export type ShopProps = {
  setItemsCollected: React.Dispatch<React.SetStateAction<Item[]>>;
  itemsCollected: Item[];
  itemStorage: PurchasedItem[];
  setItemStorage: React.Dispatch<React.SetStateAction<PurchasedItem[]>>;
  setShopVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  setComponentVisibility: React.Dispatch<React.SetStateAction<ComponentVisibility>>;
};
/* End */

/* Main */
export type Item = {
  name: string;
  amount?: number | undefined;
  img?: string;
  bought?: boolean;
};

export type Action = {
  type: string;
  index?: number;
};

export type ComponentVisibility = {
  instructionsVisibility: boolean;
  logInVisibility: boolean;
  itemStorageVisibility: boolean;
  achievementsVisibility: boolean;
  shopVisibility?: boolean; 
  customizationVisibility: boolean;
};

export type MainProps = {
  itemStorage: any;
  itemStorageComponent: Item[];
  setItemStorage: React.Dispatch<React.SetStateAction<Item[]>>;
  componentVisibility: ComponentVisibility;
  setComponentVisibility: React.Dispatch<React.SetStateAction<ComponentVisibility>>;
};
/* End */

/* ConditionalQuestionDisplay */
export type conditionalQuestionDisplayProps = {
  type: string | undefined;
  img: string | undefined;
  question: string | undefined;
  answer: string | undefined;
  choices: string[];
};

export type InteractiveImgProps = {
  conditionalQuestionDisplayProps: conditionalQuestionDisplayProps;
  setInteractiveImgComponentVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: React.Dispatch<Action>;
  setAchievement: Dispatch<SetStateAction<Achievement[]>>;
};
/* End */

/* Achievement */
export type Achievement = {
  id: string;
  title: string;
  condition: string;
  difficulty: string;
  status: boolean;
  isUnlocked: boolean;  // <- ADD THIS
  claimStatus: boolean;  // <- ADD THIS
  dispatchType: string;  // <- ADD THIS
};

export type AchievementCardProps = {
  achievement: Achievement;
  dispatch: React.Dispatch<Action>;  // <- ADD THIS
  setAchievement: React.Dispatch<React.SetStateAction<Achievement[]>>;  // <- ADD THIS
};

export type ItemStorage = {
  name: string;
  price: number | string;
  type?: string;
};

export type AchievementsProps = {
  achievement: Achievement[];
  itemStorage: ItemStorage;
  setAchievement: React.Dispatch<React.SetStateAction<Achievement[]>>;
  setComponentVisibility: React.Dispatch<React.SetStateAction<any>>;
  dispatch: React.Dispatch<Action>;
};

export type DifficultyStyle = {
  textColor: string;
  bgColor: string;
  boxColor: string;
  medal: string;
  claimBtnColor: string;
  dispatchName?: string;
};
/* End */

/* Amount */
export type AmountsProps = {
  state: { name: string; amount?: number }[];  // <- Made amount optional
  countImg: number;
  setCountImg: React.Dispatch<React.SetStateAction<number>>;
  setLeafTreasureCount: React.Dispatch<React.SetStateAction<number[]>>;
  itemsCollected: { name: string; amount?: number }[];  // <- Made amount optional
  setComponentVisibility: React.Dispatch<React.SetStateAction<ComponentVisibility>>;
  componentVisibility: ComponentVisibility;  // <- ADD THIS
  setShopVisibility: React.Dispatch<React.SetStateAction<boolean>>;  // <- ADD THIS
}
/* End */

/* reusableSync */
export type reusableSync = {
  key: string;
  value: any;
}
/* End */

/* LeafComponent */
export type LeafComponentProps = {
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
  componentVisibility: ComponentVisibility;
  setComponentVisibility: Dispatch<SetStateAction<ComponentVisibility>>;
  setAchievement: Dispatch<SetStateAction<Achievement[]>>;
}
/* End */

/* InteractiveImgComponent */
export type ConditionalQuestionDisplayProps = {
  type?: string;
  img?: string;
  question?: string;
  answer?: string;
  choices?: string[];
};

export type InteractiveImgComponentProps = {
  allItems: Item[];
  positions: { top: number; left: number }[];
  visible: number[];
  setVisible: React.Dispatch<React.SetStateAction<number[]>>;
  setInteractiveImgComponentVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: React.Dispatch<Action>;
  setConditionalQuestionDisplayProps: React.Dispatch<React.SetStateAction<ConditionalQuestionDisplayProps>>;
};


/* End */