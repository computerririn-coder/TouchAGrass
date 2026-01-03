import './App.css';
import NavBar from './Components/1NavBar/1NavBar';
import Main from './Components/2Main/Main';
import SecondMain from './Components/3SecondMain/SecondMain';
import Footer from './Components/Footer/Footer';
import Instructioncarousel from './Components/2Main/Components/InstructionCarousel';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorMessage from './Components/2Main/Components/ConditionalComponents/ErrorMessage';
import type { ComponentVisibility, ImgState } from './Components/2Main/Components/ConditionalComponents/ExportstypeScriptEtc/Typescript/TypescriptCompilationtypes';
import Logo from "./assets/Logo.png"; 


function App() {
  /*Conditional Components Visibility */
  const [componentVisibility, setComponentVisibility] = useState<ComponentVisibility>({
    interactiveImgComponentVisibility: false,
    shopVisibility: false,
    instructionsVisibility: false,
    logInVisibility: false,
    itemStorageVisibility: false,
    achievementsVisibility: false,
    navbarHambugerVisibility: false, 
    customizationVisibility: false,
  });

  //disable schrolling when any conditional component is visible
useEffect(() => {
  const isAnyVisible = Object.values(componentVisibility).some(Boolean);
  
  document.body.style.overflow = isAnyVisible ? 'hidden' : 'auto';
    
  //from Ai
  let backdrop = document.getElementById('modal-backdrop');
  if (isAnyVisible) {
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'modal-backdrop';
      backdrop.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        z-index: 0;
        pointer-events: none;
      `;
      document.body.appendChild(backdrop);
    }
  } else {
    if (backdrop) {
      backdrop.remove();
    }
  }
  //End
}, [componentVisibility]);




/*End */

/*For instruction component,it will show only once (when user first enters the website) */
useEffect(() => {
  const hasSeen = localStorage.getItem("hasSeenInstructions");

if (!hasSeen) {
  setComponentVisibility((prev: ComponentVisibility) => {
    return {
      ...prev,
      instructionsVisibility: true,
    };
  });
  
    localStorage.setItem("hasSeenInstructions", "true");
  }
}, []);
/*End */

//For Customization
const [img, setImg] = useState<ImgState>(() => {
  const stored = localStorage.getItem("img");
  return stored ? JSON.parse(stored) : { logo: Logo}; //removed 1: null, 2: null, 3: null 
});

useEffect(() => {
  localStorage.setItem("img", JSON.stringify(img));
}, [img]);
//End
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar
              componentVisibility={componentVisibility}
              setComponentVisibility={setComponentVisibility}
              img={img}
            />
            <Main
              componentVisibility={componentVisibility}
              setComponentVisibility={setComponentVisibility}
              img={img}
              setImg={setImg}
            />
            <Instructioncarousel />
            <SecondMain />
            <Footer />
          </>
        }
      />
      <Route path="/ErrorMessage" element={<ErrorMessage />} />
    </Routes>
  );
}

export default App;
