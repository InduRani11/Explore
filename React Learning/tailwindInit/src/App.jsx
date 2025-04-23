import React from "react";

export default function App() {
  return (
    <div className="min-w-lg h-[25rem] p-20 justify-between border-4 items-center bg-[#50d71e] rounded-4xl flex-col flex">
      <h1 className="text-center text-6xl">Hello There</h1>
      <button className="text-4xl px-2 py-1 rounded-3xl h-1/3 bg-amber-600 border-4 w-xs ">Click me</button>
    </div>
  );
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
//
// export default App

// import React from 'react'
//
// export default function App() {
//   return (
//     <div className="w- h-screen p-20 justify-center items-center bg-[#50d71e] h-[32rem] round flex-col flex">
//       <h1 className='text-center h-2/3'>Hello There</h1>
//       <button className="border-2 h-2/3 bg-red w-xs ">Click me</button>
//
//     </div>
//   )
// }
