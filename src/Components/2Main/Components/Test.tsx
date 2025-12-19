import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative p-4 border-b bg-gray-900 text-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <span className="text-lg font-semibold">Logo</span>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-6">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        {/* Hamburger */}
        <button
          className="sm:hidden"
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </div>
        </button>
      </div>

      {/* Mobile menu (overlay, does NOT resize navbar) */}
      {open && (
        <div className="absolute top-full right-4 mt-2 w-40 bg-gray-800 border rounded flex flex-col gap-3 p-3 sm:hidden z-50">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      )}
    </nav>
  );
};

export default Test;
