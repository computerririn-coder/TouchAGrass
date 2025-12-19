import './App.css'
import NavBar from './Components/1NavBar/1NavBar'
import Main from './Components/2Main/Main'
import SecondMain from './Components/3SecondMain/SecondMain'
import Footer from './Components/Footer/Footer'
import Instructioncarousel from './Components/2Main/Components/InstructionCarousel'
import { useState, useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ErrorMessage from './Components/2Main/Components/ConditionalComponents/ErrorMessage'
import Test from './Components/2Main/Components/Test'
function App() {
const [componentVisibility, setComponentVisibility] = useState({
  interactiveImgComponentVisibility: false,
  shopVisibility: false,
  instructionsVisibility: false,
  logInVisibility: false,
  itemStorageVisibility: false,
  achievementsVisibility: false,
  navbarHambugerVisibility: false, //excluded
});

useEffect(() => {
  const excludeKeys = ["navbarHambugerVisibility"];
  const anyVisible = Object.keys(componentVisibility).some(
    key => !excludeKeys.includes(key) && componentVisibility[key]
  );
  document.body.style.overflow = anyVisible ? "hidden" : "auto";
}, [componentVisibility]);



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
      <NavBar componentVisibility={componentVisibility} setComponentVisibility={setComponentVisibility} />
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

