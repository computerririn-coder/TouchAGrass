import './App.css';
import NavBar from './Components/1NavBar/1NavBar';
import Main from './Components/2Main/Main';
import SecondMain from './Components/3SecondMain/SecondMain';
import Footer from './Components/Footer/Footer';
import Instructioncarousel from './Components/2Main/Components/InstructionCarousel';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorMessage from './Components/2Main/Components/ConditionalComponents/ErrorMessage';
import type { ComponentVisibility } from './Components/2Main/Components/ConditionalComponents/ExportstypeScriptEtc/Typescript/TypescriptCompilationtypes';
function App() {
  /*Conditional Components Visibility */
  const [componentVisibility, setComponentVisibility] = useState<boolean[{}]>({
    interactiveImgComponentVisibility: false,
    shopVisibility: false,
    instructionsVisibility: false, // excluded
    logInVisibility: false,
    itemStorageVisibility: false,
    achievementsVisibility: false,
    navbarHambugerVisibility: false, // excluded
    customizationVisibility: false,
  });
  useEffect(() => {
    const excludeKeys = ['navbarHambugerVisibility', 'instructionsVisibility'];
    const anyVisible = Object.keys(componentVisibility).some(
      key => !excludeKeys.includes(key) && componentVisibility[key]
    );
    document.body.style.overflow = anyVisible ? 'hidden' : 'auto';
  }, [componentVisibility]);
/*End */

/*For instruction component,it will show only once (when user first enteres the website) */
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



  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar
              componentVisibility={componentVisibility}
              setComponentVisibility={setComponentVisibility}
            />
            <Main
              componentVisibility={componentVisibility}
              setComponentVisibility={setComponentVisibility}
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
