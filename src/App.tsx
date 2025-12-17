import './App.css'
import NavBar from './Components/1NavBar/1NavBar'
import Main from './Components/2Main/Main'
import SecondMain from './Components/3SecondMain/SecondMain'
import Footer from './Components/Footer/Footer'
import Instructioncarousel from './Components/2Main/Components/InstructionCarousel'
import { useState, useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ErrorMessage from './Components/2Main/Components/ConditionalComponents/ErrorMessage'

function App() {
const [componentVisibility, setComponentVisibility] = useState({
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
  useEffect(() => {
    localStorage.setItem("itemStorage", JSON.stringify(itemStorage));
  }, [itemStorage]);

  return (
  <Routes>
     <Route path="/" element={
    <>
      <NavBar setComponentVisibility={setComponentVisibility} />
      <Main itemStorage={itemStorage} setItemStorage={setItemStorage} componentVisibility={componentVisibility} setComponentVisibility={setComponentVisibility}/>
      <Instructioncarousel />
      <SecondMain />
      <Footer />
    </>
    }/>
    <Route path='/ErrorMessage' element={<ErrorMessage/>}/>
    </Routes>
  );
}


export default App

