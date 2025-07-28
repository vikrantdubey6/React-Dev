import { useState } from "react"

function App(){

const [color, setColor] = useState("olive")
  return (
  <div className = 'w-full h-screen duration-200'style = {{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

      <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-3xl">
        <button onClick={()=> setColor("red")}
        className="bg-red-600 text-black px-2 rounded-lg">Red</button>
        <button onClick={()=> setColor("black")}
        className="bg-black text-white px-2 rounded-lg">Black</button>
        <button onClick={()=> setColor("blue")}
        className="bg-blue-600 text-black px-2 rounded-lg">Blue</button>
        <button onClick={()=> setColor("green")}
        className="bg-green-600 text-white px-2 rounded-lg">Green</button>
      </div>
    </div>
  </div>
  )
}

export default App
