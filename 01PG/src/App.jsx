import React, { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copySuccess, setCopySuccess] = useState('');

  const passwordg = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@$%^&*?><|/";
    
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordg();
  }, [length, numberAllowed, charAllowed, passwordg]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(
      () => {
        setCopySuccess('Password copied!');
        setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
      },
      (err) => {
        setCopySuccess('Failed to copy!');
        console.error('Failed to copy: ', err);
      }
    );
  };

  return (
    <>
      <div className="w-full max-w-sm mx-auto shadow-2xl rounded-lg px-4 py-6 my-8 text-white bg-purple-600 relative flex flex-col items-center">
        <h1 className="text-blue-200 border-b-2 border-lime-400 font-bold text-xl p-2 absolute top-0 left-0 w-full text-center">
          PASSWORD GENERATOR
        </h1>
        <div className="w-full mt-16 flex flex-col items-center p-4 bg-green-300 text-black rounded-lg shadow-md">
          <div className="w-full flex items-center gap-x-4 mb-4">
            <input 
              type="text" 
              value={password}
              className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
              placeholder="Password"
              readOnly 
            />
            <button 
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={copyToClipboard}
            >
              COPY
            </button>
          </div>
          {copySuccess && <div className="text-green-500 mb-2">{copySuccess}</div>}
          <div className="w-full flex flex-col items-center text-sm gap-y-2">
            <input
              type="range"
              min={8}
              max={12}
              value={length}
              className="cursor-pointer w-full"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>
              Length: {length}
            </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={numberAllowed}
              id='numberinput'
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor='numberinput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={charAllowed}
              id='charinput'
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor='charinput'>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
