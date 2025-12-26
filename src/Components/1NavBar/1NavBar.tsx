import Logo from "../../assets/Logo.png";
import NavBg from "../../assets/NavBarBackground.jpg";
import type ItemStorage from "../2Main/Components/ConditionalComponents/ItemStorageComponent";

function NavBar({ componentVisibility,setComponentVisibility }) {
  return (
    <nav
      className="w-full h-14 bg-cover bg-center shadow-md bg-gradient-to-b from-blue-700 to-green-600"
    >
      <ul className="flex items-center gap-4 sm:gap-8 px-2 sm:px-4 w-full text-xs sm:text-sm text-white h-full">
        {/* Logo */}
        <li className="flex items-center flex-shrink-0">
          <img
            src={Logo}
            alt="Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-lg"
          />
        </li>

        {/* How To Use */}
        <li className="h-7 sm:h-8  min-w-30 sm:min-w-32 px-2 sm:px-4 rounded-full bg-green-600/90 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-green-700 min-w-0 border-2 [border-color:#C0C0C0]">
          <span
            className="font-medium tracking-wide whitespace-nowrap truncate"
            onClick={() =>
              setComponentVisibility((prev): boolean => ({
                ...prev,
                instructionsVisibility: true,
              }))
            }
          >
            How To Use?
          </span>
        </li>

        
        {/* Achievements */}
        <li className="invisible md:visible h-7 sm:h-8 w-32 px-2 sm:px-4 rounded-full bg-green-600/90 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-green-700 min-w-0 border-2 [border-color:#C0C0C0]">
          <span
            className="font-medium tracking-wide whitespace-nowrap truncate"
            onClick={() =>
              setComponentVisibility((prev): boolean => ({
                ...prev,
                customizationVisibility: true,
              }))
            }
          >
            Customize
          </span>
        </li>

<div className="invisible md:visible flex flex-row justify-end w-full">
        {/* Center Section */}
        <li className="flex gap-2 sm:gap-4 mx-auto flex-shrink min-w-0">
          <span
            className="h-7 sm:h-8 px-3 sm:px-5 rounded-full bg-green-700/90 backdrop-blur-sm flex items-center justify-center text-green-50 font-medium tracking-wide cursor-pointer transition-colors hover:bg-green-800 whitespace-nowrap truncate min-w-0 border-2 [border-color:#C0C0C0]"
            onClick={() =>
              setComponentVisibility(prev => ({
                ...prev,
                itemStorageVisibility: true,
              }))
            }
          >
            Items Storage
          </span>

          <span
            className="h-7 sm:h-8 px-3 sm:px-4 rounded-full bg-blue-500/90 backdrop-blur-sm flex items-center justify-center text-white font-medium tracking-wide cursor-pointer transition-colors hover:bg-blue-600 whitespace-nowrap truncate min-w-0 border-2 [border-color:#C0C0C0]"
            onClick={() =>
              setComponentVisibility(prev => ({
                ...prev,
                achievementsVisibility: true,
              }))
            }
          >
            Achievements
          </span>
        </li>

        {/* Log In */}
        <li
          className="w-16 sm:w-20 h-7 sm:h-8 bg-green-400/90 border-2 [border-color:#C0C0C0] rounded-md flex items-center justify-center shadow-sm transition-colors hover:bg-green-300 min-w-0"
          onClick={() =>
            setComponentVisibility((prev: any) => ({
              ...prev,
              logInVisibility: true,
            }))
          }
        >
          <span className="text-black font-semibold tracking-wide whitespace-nowrap truncate">
            Log In
          </span>
        </li>
        </div>
        {/* Hamburger button */}
<button className="absolute md:hidden right-0 pr-5 flex flex-col gap-1 text-3xl "onClick={() => 
setComponentVisibility(prev => ({
  ...prev,
  navbarHambugerVisibility: !prev.navbarHambugerVisibility,
}))

}>☰
</button>

{componentVisibility.navbarHambugerVisibility && (
<div className="bg-gradient-to-b from-blue-500 to-green-400 text-white flex flex-col w-36 absolute right-0 top-16 z-20 p-3 shadow-lg rounded-lg space-y-2 md:hidden">
      <button
    className="cursor-pointer hover:bg-blue-900 rounded px-2 py-1 transition-colors text-left bg-blue-800"
    onClick={() =>
      setComponentVisibility(prev => ({
        ...prev,
        customizationVisibility: true,
      }))
    }
  >
    Customize
  </button>
  <button
    className="cursor-pointer hover:bg-blue-900 rounded px-2 py-1 transition-colors text-left bg-blue-800"
    onClick={() =>
      setComponentVisibility(prev => ({
        ...prev,
        itemStorageVisibility: true,
      }))
    }
  >
    Items Storage
  </button>
  <button
    className="cursor-pointer hover:bg-blue-900 rounded px-2 py-1 transition-colors text-left bg-blue-800"
    onClick={() =>
      setComponentVisibility(prev => ({
        ...prev,
        achievementsVisibility: true,
      }))
    }
  >
    Achievements
  </button>
  <button
    className="cursor-pointer hover:bg-blue-900 rounded px-2 py-1 transition-colors text-left bg-blue-800"
    onClick={() =>
      setComponentVisibility(prev => ({
        ...prev,
        logInVisibility: true,
      }))
    }
  >
    Log In
  </button>

</div>
)}



      </ul>
    </nav>
  );
}

export default NavBar;
