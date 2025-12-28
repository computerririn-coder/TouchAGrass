//Typescripts

import type { Dispatch, SetStateAction } from "react";

export type NavBarProps = {
  componentVisibility: ComponentVisibility;
  setComponentVisibility: Dispatch<SetStateAction<ComponentVisibility>>;
  img: ImgState;
};

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
  interactiveImgComponentVisibility: boolean;
  instructionsVisibility: boolean;
  logInVisibility: boolean;
  itemStorageVisibility: boolean;
  achievementsVisibility: boolean;
  shopVisibility?: boolean; 
  customizationVisibility: boolean;
  navbarHambugerVisibility:boolean;
};
export type ImgState = {
  logo: string;
  icon1: string | null;
  icon2: string | null;
  icon3: string | null;
};

export type MainProps = {
  componentVisibility: ComponentVisibility;
  setComponentVisibility: React.Dispatch<React.SetStateAction<ComponentVisibility>>;
  img: ImgState; 
  setImg: React.Dispatch<React.SetStateAction<ImgState>>; 
};

/* End */



/*InteractiveImg */
export type QuestionItem = {
  type: string;
  img: string;
  question: string;
  answer: string;
  choices: string[];
};

export type ImgQuestionAnswerEtc = {
  leaf: QuestionItem[];
  grass: QuestionItem[];
  treasure: QuestionItem[];
};

export type InteractiveImgProps = {
  allItems: { name: string; img: string }[];
  positions: { top: number; left: number }[];
  visible: number[];
  setVisible: React.Dispatch<React.SetStateAction<number[]>>;
  setInteractiveImgComponentVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: React.Dispatch<any>;
  setConditionalQuestionDisplayProps: React.Dispatch<React.SetStateAction<QuestionItem>>;
};



/* Achievement */
export type Achievement = {
  id: string;
  title: string;
  condition: string;
  difficulty: string;
  status: boolean;
  isUnlocked: boolean;  
  claimStatus: boolean;  
  dispatchType: string;  
};

export type AchievementCardProps = {
  achievement: Achievement;
  dispatch: React.Dispatch<Action>; 
  setAchievement: React.Dispatch<React.SetStateAction<Achievement[]>>; 
};

export type ItemStorage = {
  name: string;
  price: number | string;
  type?: string;
};

export type AchievementsProps = {
  achievement: Achievement[];
  itemStorage: PurchasedItem[]; 
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
  state: { name: string; amount?: number }[]; 
  countImg: number;
  setCountImg: React.Dispatch<React.SetStateAction<number>>;
  setLeafTreasureCount: React.Dispatch<React.SetStateAction<number[]>>;
  itemsCollected: { name: string; amount?: number }[];  // 
  setComponentVisibility: React.Dispatch<React.SetStateAction<ComponentVisibility>>;
  componentVisibility: ComponentVisibility; 
  setShopVisibility: React.Dispatch<React.SetStateAction<boolean>>; 
}
/* End */

/* reusableSync */
export type ReusableSync = {
  key: string;
  value: any;
}
/* End */

/* LeafComponent */
export type LeafComponentProps = {
  itemStorage: PurchasedItem[];
  setItemStorage: React.Dispatch<React.SetStateAction<PurchasedItem[]>>; 
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
  words: { title: string; words: string[] }; 
  setWords: React.Dispatch<React.SetStateAction<{ title: string; words: string[] }>>;
}
/* End */

/* InteractiveImgComponent */
export type ConditionalQuestionDisplayProps = {
  type: string;
  img: string;
  question: string;
  answer: string;
  choices: string[];
};
export type ConditionalQuestionDisplayComponentProps = {
  conditionalQuestionDisplayProps: ConditionalQuestionDisplayProps;
  setInteractiveImgComponentVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: React.Dispatch<any>;
  setAchievement: React.Dispatch<React.SetStateAction<Achievement[]>>;
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

/*CustomizationProps */
export type CustomizationProps = {
  words: { 
    title: string; 
    words: string[]; 
  };
  setWords: React.Dispatch<React.SetStateAction<{ title: string; words: string[] }>>;
  setComponentVisibility: React.Dispatch<React.SetStateAction<ComponentVisibility>>;
    img: ImgState; 
  setImg: React.Dispatch<React.SetStateAction<ImgState>>; 
};

/*End */

/*TItle */
export type TitleProps = {
  words: {
    title: string;
    words: string[];
  };
  setWords: Dispatch<SetStateAction<{ title: string; words: string[] }>>;
};
/*End */