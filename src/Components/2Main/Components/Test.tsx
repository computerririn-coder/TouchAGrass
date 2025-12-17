// Test.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const Test = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="relative flex gap-6 p-4 border-b bg-gray-900 text-white">
      {navItems.map((item) => (
        <div key={item.name} className="relative">
          <button
            onClick={() => setActive(item.name)}
            className={`px-3 py-1 font-medium ${
              active === item.name ? "text-yellow-400" : "text-white"
            }`}
          >
            {item.name}
          </button>

          {/* Animated underline */}
          {active === item.name && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Test;
