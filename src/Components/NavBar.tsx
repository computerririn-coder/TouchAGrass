import Logo from "../assets/Logo.png";

function NavBar() {
  return (
    <nav className="w-full h-20">
      <ul className="flex items-center gap-6 p-4 w-full text-sm  text-white">

        <li className="flex items-center">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
        </li>

<li className="bg-green-600 w-auto h-7 px-4 rounded-2xl flex items-center justify-center hover:bg-green-700 transition-colors duration-200 shadow-sm">
  <span className="text-white font-medium tracking-wide text-sm">
    How To Use?
  </span>
</li>



<li className="flex gap-4 mx-auto">
<span className="bg-gray-800 h-7 px-4 rounded-2xl flex items-center justify-center
                hover:bg-gray-700 transition-colors duration-200 shadow-sm text-green-100
                font-medium tracking-wide text-sm cursor-pointer">
  About The Code
</span>




  <span className="bg-blue-600 h-7 px-4 rounded-2xl flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 shadow-sm text-white font-medium tracking-wide text-sm cursor-pointer">
    Contact
  </span>
</li>


        <li className="flex justify-center items-center w-20 h-10 text-base bg-green-400 rounded-[5px] border border-gray-600 hover:bg-green-500 hover:border-white">
          <span className="text-black font-semibold tracking-wide drop-shadow-sm ">
            Log In
          </span>
        </li>

      </ul>
    </nav>
  );
}

export default NavBar;
