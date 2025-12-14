import './App.css'
import NavBar from './Components/1NavBar/1NavBar'
import Main from './Components/2Main/Main'
import SecondMain from './Components/3SecondMain/SecondMain'
import Instructions from './Components/2Main/Components/ConditionalComponents/Instructions'
import LogIn from './Components/2Main/Components/ConditionalComponents/LogIn'
import Footer from './Components/Footer/Footer'
import Instructioncarousel from './Components/2Main/Components/InstructionCarousel'
import { useState, useEffect } from 'react'
import Test from './Components/2Main/Components/Test'
import ItemStorage from './Components/2Main/Components/ConditionalComponents/ItemStorage'
import Achievements from './Components/2Main/Components/ConditionalComponents/Achievements'
type componentVisibilityType = {
    interactiveImgComponentVisibility: boolean,
  ShopVisibility:boolean,
  instructionsVisibility: boolean,
  logInVisibility: boolean
  itemStorageVisibility: boolean,
  achievementsVisibility: boolean, 
}

function App() {
  const [componentVisibility, setComponentVisibility] = useState<componentVisibilityType>({
    interactiveImgComponentVisibility: false,
    ShopVisibility: false,
    instructionsVisibility: false,
    logInVisibility: false,
    itemStorageVisibility: false,
    achievementsVisibility: false,
  });

  const [itemStorage, setItemStorage] = useState<{ name: string; price: number; type?: string }[]>(() => {
    const saved = localStorage.getItem("itemStorage");
    return saved ? JSON.parse(saved) : [{ name: "Sample", price: "Sample" }];
  });

  // Sync to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("itemStorage", JSON.stringify(itemStorage));
  }, [itemStorage]);


useEffect(() => {
  const toggleBodyScroll = () => {
    const anyVisible = Object.values(componentVisibility).some(Boolean);
    document.body.style.overflow = anyVisible ? "hidden" : "auto";
  };

  toggleBodyScroll();
}, [componentVisibility]);


  return (
    <>
      <NavBar setComponentVisibility={setComponentVisibility} />
      <Main itemStorage={itemStorage} setItemStorage={setItemStorage} />
      <Instructioncarousel />
      <SecondMain />
      <Footer />

      {/* Conditional Components */}
      {componentVisibility.instructionsVisibility && (
        <Instructions setComponentVisibility={setComponentVisibility} />
      )}
      {componentVisibility.logInVisibility && (
        <LogIn componentVisibility={componentVisibility} setComponentVisibility={setComponentVisibility} />
      )}
      {componentVisibility.itemStorageVisibility && (
        <ItemStorage itemStorage={itemStorage} setComponentVisibility={setComponentVisibility} />
      )}
      {componentVisibility.achievementsVisibility && (
        <Achievements setComponentVisibility={setComponentVisibility}/>
      )}
      
    </>
  );
}


export default App
