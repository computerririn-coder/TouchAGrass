/* Shop */
export type ShopItem = {
  IMGSRC: string;
  price: number;
  name: string;
};

export type PurchasedItem = {
  name: string;
  price: number;
};

export type ItemStorageProps = {
  itemStorage: PurchasedItem[];
  componentVisibility?: boolean;
  setComponentVisibility: React.Dispatch<React.SetStateAction<any>>;
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
};
/* End */

/* Main */

export type Item = {
  name: string;
  amount: number;
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
};

export type MainProps = {
  itemStorage: any;
  itemStorageComponent: Item[];
  setItemStorage: React.Dispatch<React.SetStateAction<Item[]>>;
  componentVisibility: ComponentVisibility;
  setComponentVisibility: React.Dispatch<
React.SetStateAction<ComponentVisibility>
  >;
};
/* End */


/* ConditinalQuestionDisplay */
export type conditionalQuestionDisplayProps = {
  type: string | undefined;
  img: string | undefined;
  question: string | undefined;
  answer: string | undefined;
  choices: string[];
};

export type InteractiveImgProps = {
  conditionalQuestionDisplayProps: conditionalQuestionDisplayProps;
  setInteractiveImgComponentVisibility: (visible: boolean) => void;
  dispatch: (action: any) => void;
};
/* End */

/* Achievement */
export type Achievement = {
  id: string;
  title: string;
  condition: string;
  difficulty: string;
  status: boolean;
};

export type AchievementCardProps = {
  achievement: Achievement;
};

/*
export type ComponentVisibility = {
  achievementsVisibility: boolean;
};
*/

export type ItemStorage = {
  name: string;
  price: number | string;
  type?: string;
};

export type AchievementsProps = {
  achievement: Achievement[];
  itemStorage: ItemStorage;
  setComponentVisibility: React.Dispatch<React.SetStateAction<any>>;
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

/* Shop */
/* End */

/* Shop */
/* End */