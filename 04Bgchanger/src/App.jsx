import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState('olive')


  // function changeColor(color) {
  //   setColor(color)
  // }
  

  return (
    <div
      className="w-full h-screen duration-200 bg-green-700"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0.5 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor("red");
            }}
            // onClick={() => {
            //   changeColor("red");
            // }}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
          >
            red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
          >
            green
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
          >
            yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
