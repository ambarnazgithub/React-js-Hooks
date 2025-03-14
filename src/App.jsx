import React, { useState } from 'react'

const App = () => {
  const [Num, setNum] = useState(0)
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
    <h2 className="bg-amber-700 text-white px-6 py-3 rounded-lg text-2xl shadow-lg mb-6">
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
    </div>
  </div>
  
  
  )
}

export default App
