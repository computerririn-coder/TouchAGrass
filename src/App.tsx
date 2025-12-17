import './App.css'
import NavBar from './Components/1NavBar/1NavBar'
import Main from './Components/2Main/Main'
import SecondMain from './Components/3SecondMain/SecondMain'
import Instructions from './Components/2Main/Components/ConditionalComponents/Instructions'
import LogIn from './Components/2Main/Components/ConditionalComponents/LogIn'
import Footer from './Components/Footer/Footer'
import Instructioncarousel from './Components/2Main/Components/InstructionCarousel'
import { useState, useEffect } from 'react'
import ItemStorage from './Components/2Main/Components/ConditionalComponents/ItemStorage'
import Achievements from './Components/2Main/Components/ConditionalComponents/Achievements'
import Test from './Components/2Main/Components/Test'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ErrorMessage from './Components/2Main/Components/ConditionalComponents/ErrorMessage'
import { questions }   from "./assets/questionsForInterActiveImg";

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
    achievementsVisibility: true,
  });

  const [itemStorage, setItemStorage] = useState<{ name: string; price: number | string; type?: string }[]>(() => {
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

/* For Achievements */
  const [achievement, setAchievement] = useState(questions);
/*Entered the website */
  useEffect(() => {
      setAchievement((prev) =>
    prev.map((item, index) =>
      index === 0 ? { ...item, status: true } : item
    )
  );
  }, []);

  return (
  <Routes>
     <Route path="/" element={
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
        <Achievements itemStorage={itemStorage} achievement={achievement} setComponentVisibility={setComponentVisibility}/>
      )}
    </>
    }/>
    <Route path='/ErrorMessage' element={<ErrorMessage/>}/>
    </Routes>
  );
}


export default App

