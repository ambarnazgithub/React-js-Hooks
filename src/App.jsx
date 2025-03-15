import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [Num, setNum] = useState(0);
  const numRef = useRef(0); // useRef to store the previous number
  const headingRef = useRef(null); // useRef to reference the heading element

  // USEEFFECT
  // CASE 01: RUN ON EVERY RENDER
  useEffect(() => {
    alert("I run on every render");
  });

  // CASE 02: RUN ON FIRST RENDER
  useEffect(() => {
    alert("Hey Welcome to my Page");
  }, []);

  // CASE 03: RUN ONLY WHEN CERTAIN VALUE CHANGES
  useEffect(() => {
    alert("Num was changed");
    numRef.current = Num; // Store the latest Num value in ref
  }, [Num]);

  // Reset function using useRef
  const handleReset = () => {
    setNum(0);
    alert(`Number reset from ${numRef.current} to 0`);
  };

  // ✅ Function to change heading color
  const changeHeadingColor = () => {
    if (headingRef.current) {
      headingRef.current.style.color = headingRef.current.style.color === "yellow" ? "white" : "yellow";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2
        ref={headingRef}
        className="bg-amber-700 text-white px-6 py-3 rounded-lg text-2xl shadow-lg mb-6"
      >
        Number is {Num}
      </h2>
      <div className="flex items-center justify-center gap-6">
        <button
          className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300 hover:bg-green-600 hover:scale-105"
          onClick={() => setNum(Num + 10)}
        >
          ➕ Increment
        </button>
        <button
          className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300 hover:bg-red-600 hover:scale-105"
          onClick={() => setNum(Num - 10)}
        >
          ➖ Decrement
        </button>
        <button
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300 hover:bg-blue-600 hover:scale-105"
          onClick={handleReset}
        >
          🔄 Reset
        </button>
        {/* ✅ New button for color change */}
        <button
          className="px-6 py-3 bg-purple-500 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300 hover:bg-purple-600 hover:scale-105"
          onClick={changeHeadingColor}
        >
          🎨 Change Color
        </button>
      </div>
    </div>
  );
};

export default App;
