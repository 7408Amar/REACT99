import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed top-0 left-0 right-0 flex justify-center items-center bg-white p-2 shadow-lg">
        <div className="flex gap-4">
          <div className="bg-blue-500 p-5 shadow-lg rounded-full">
            <button onClick={() => setColor("blue")} className="text-white">BLUE</button>
          </div>
          <div className="bg-red-500 p-5 shadow-lg rounded-full">
            <button onClick={() => setColor("red")} className="text-white">RED</button>
          </div>  
          <div className="bg-green-500 p-5 shadow-lg rounded-full">
            <button onClick={() => setColor("green")} className="text-white">GREEN</button>  
          </div>
          <div className="bg-orange-500 p-5 shadow-lg rounded-full">
            <button onClick={() => setColor("orange")}className="text-white">ORANGE</button>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
