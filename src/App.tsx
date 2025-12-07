import './App.css'
import NavBar from './Components/1NavBar/1NavBar'
import Main from './Components/2Main/Main'
import SecondMain from './Components/3SecondMain/SecondMain'
import Instructions from './Components/2Main/Components/ConditionalComponents/Instructions'
import LogIn from './Components/2Main/Components/ConditionalComponents/LogIn'
import Footer from './Components/Footer/Footer'
import Instructioncarousel from './Components/2Main/Components/InstructionCarousel'
import { useState } from 'react'

type componentVisibilityType = {
    interactiveImgComponentVisibility: boolean,
  ShopVisibility:boolean,
  instructionsVisibility: boolean,
  logInVisibility: boolean
}

function App() {
  const [componentVisibility, setComponentVisibility] = useState<componentVisibilityType>({
  interactiveImgComponentVisibility: false,
  ShopVisibility: false,
  instructionsVisibility: false,
  logInVisibility: false,
});

  return (
<>
      <NavBar setComponentVisibility={setComponentVisibility}/>
      <Main />
      {componentVisibility.instructionsVisibility && (
        <Instructions setComponentVisibility={setComponentVisibility}/>
      )}
      {componentVisibility.logInVisibility && (
        <LogIn setComponentVisibility={setComponentVisibility}/>
      )}
      <Instructioncarousel />
      <SecondMain/>
      <Footer />
</>
  )
}

export default App
