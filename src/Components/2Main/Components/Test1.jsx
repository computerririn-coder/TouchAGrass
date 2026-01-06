import React from 'react';

// 1. Added the regular function
function getGreeting(name) {
  return "Hello, " + name; 
}

function Test1() {
  const name = "Alice";
  
  return ( 
    <div className="relative w-screen h-screen bg-gray-100">
      <div className="absolute top-0 left-0 w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">
        {/* 2. Called the function inside JSX */}
        <h1>{getGreeting(name)}!</h1>
      </div>
    </div>
  );
}

export default Test1;