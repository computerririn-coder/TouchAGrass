import Logo from "../../assets/Logo.png";
import NavBg from "../../assets/NavBarBackground.jpg";


function NavBar() {
  return (
    <nav
      className="w-full h-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${NavBg})` }}
    >
      <ul className="flex items-center gap-6 p-2 w-full text-xs text-white">

        <li className="flex items-center flex-shrink">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
        </li>

        <li className="bg-green-600 h-6 px-3 rounded-2xl flex items-center justify-center flex-shrink">
          <span className="text-white font-medium tracking-wide text-xs">
            How To Use?
          </span>
        </li>

        <li className="flex gap-3 mx-auto flex-shrink">
          <span className="bg-green-700 h-6 px-4 rounded-2xl flex items-center justify-center flex-shrink text-green-100 font-medium tracking-wide text-xs cursor-pointer">
            Items Storage
          </span>

          <span className="bg-blue-400 h-6 px-3 rounded-2xl flex items-center justify-center flex-shrink text-white font-medium tracking-wide text-xs cursor-pointer">
            Achievements
          </span>
        </li>

        <li className="flex justify-center items-center w-16 h-8 bg-green-400 rounded-[5px] border border-gray-600 flex-shrink">
          <span className="text-black font-semibold tracking-wide text-xs">
            Log In
          </span>
        </li>

      </ul>
    </nav>
  );
}

export default NavBar;
