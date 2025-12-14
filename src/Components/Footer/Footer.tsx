function Footer() {
  return (
    <footer className="bg-[#242424]">
      <ul className="w-full flex flex-col gap-3 text-sm  text-white p-4 justify-center items-center">
        
        <li className="flex gap-4 text-green-500 gap-10">
          <span>Help</span>
          <span>Legals</span>
          <span>Pricing</span>
        </li>

        <li className="flex items-center justify-center w-45 h-10 px-4 bg-green-500 rounded-[5px] gap-2">
          <span>🍕</span>
          <span className="text-black">Buy Me A Pizza</span>
        </li>

        <li className="text-gray-400">
          © 2025 Placeholder. All rights reserved.
        </li>

      </ul>
    </footer>
  );
}

export default Footer;
