import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center space-x-8 mt-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-16 h-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-center mt-8">Vite + React</h1>
      <div className="card p-6 mt-6 max-w-sm mx-auto bg-white shadow-lg rounded-lg">
        <button 
          onClick={() => setCount(count + 1)} 
          className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 transition"
        >
          count is {count}
        </button>
        <p className="mt-4 text-center text-gray-500">
          Edit <code className="font-bold">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-center text-gray-700 mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App