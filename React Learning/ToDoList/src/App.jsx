import React from 'react'
import Counter from './counter'

export default function App() {
  console.log("app rerender");
  return (
    <>
      <Counter/>
    </>
  )
}

// import React, { useState } from "react";
//
// export default function App() {
//   // let isOpen = false;
//
//   const [isOpen, setIsOpen] = useState(false);
//
//   function handleOpen() {
//     // isOpen = true;
//     setIsOpen(true);
//     console.log("opens the dialog", isOpen);
//   }
//   function handleClose() {
//     setIsOpen(false);
//   }
//
//   // const items = [1, 2, 3, 4];
//   // const card = (
//   <li className="TodoCard flex flex-col min-w-[30%] max-w-1/3 flex-1 gap-4 p-4 border-2 rounded-sm bg-violet-50">
//     <div className="flex justify-between items-center w-full">
//       <span className="text-lg">Item 1</span>
//       <input type="checkbox" />
//     </div>
//     <teaxtarea className="p-4 border-2 rounded-sm" rows="4">
//       Sample Description
//     </teaxtarea>
//   </li>;
//   // );
//   // const arr = items.map(item => card)
//
//   const arf = [1, 2, 3, 4, 5];
//   const arg = arf.map((element, index) => (
//     <li className="TodoCard flex flex-col min-w-[30%] max-w-1/3 flex-1 gap-4 p-4 border-2 rounded-sm bg-violet-50">
//       <div className="flex justify-between items-center w-full">
//         <span className="text-lg">Item {index + 1}</span>
//         <input type="checkbox" />
//       </div>
//       <teaxtarea className="p-4 border-2 rounded-sm" rows="4">
//         Sample Description
//       </teaxtarea>
//     </li>
//   ));
//   return (
//     <div className="App flex flex-col">
//       <header className="p-4 max-w-full w-full flex items-center relative bg-[#e9e9e9]">
//         <img
//           className="w-10 h-10"
//           src="https://img.icons8.com/fluency/144/microsoft-todo-2019.png"
//           alt="todo-logo"
//         />
//         <h1 className="w-full max-w-full text-2xl font-semibold text-center absolute left-0">
//           Todo
//         </h1>
//       </header>
//       <main>
//         <div className="w-full aspect-6/1 h-auto bg-[#f8f8f8] flex items-center justify-center">
//           Carousel
//         </div>
//
//         <section className="flex flex-col items-center justify-center w-full max-w-full bg-[#e3e3e3] p-4 gap-4 overflow-hidden border-8">
//           <h2 className="text-xl">TodoList</h2>
//           <button
//             onClick={handleOpen}
//             className="py-1 px-3 border-2 rounded-md cursor-pointer"
//           >
//             Add Item
//           </button>
//           <ul className=" flex flex-wrap justify-center gap-4 w-full max-w-full bg-amber-50 overflow-auto">
//             {arg}
//             {/* <li className="TodoCard flex flex-col min-w-[30%] max-w-1/3 flex-1 gap-4 p-4 border-2 rounded-sm bg-violet-50">
//               <div className="flex justify-between items-center w-full">
//                 <span className="text-lg">Item 1</span>
//                 <input type="checkbox" />
//               </div>
//               <teaxtarea className="p-4 border-2 rounded-sm" rows="4">
//                 Sample Description
//               </teaxtarea>
//             </li>
//             <li className="TodoCard flex flex-col min-w-[30%] max-w-1/3 flex-1 gap-4 p-4 border-2 rounded-sm bg-violet-50">
//               <div className="flex justify-between items-center w-full">
//                 <span className="text-lg">Item 1</span>
//                 <input type="checkbox" />
//               </div>
//               <teaxtarea className="p-4 border-2 rounded-sm" rows="4">
//                 Sample Description
//               </teaxtarea>
//             </li>
//             <li className="TodoCard flex flex-col min-w-[30%] max-w-1/3 flex-1 gap-4 p-4 border-2 rounded-sm bg-violet-50">
//               <div className="flex justify-between items-center w-full">
//                 <span className="text-lg">Item 1</span>
//                 <input type="checkbox" />
//               </div>
//               <teaxtarea className="p-4 border-2 rounded-sm" rows="4">
//                 Sample Description
//               </teaxtarea>
//             </li> */}
//           </ul>
//         </section>
//         {isOpen ? (
//           <div
//             onClick={handleClose}
//             className="w-screen h-screen fixed top-0 left-0 bg-[#00000080]  flex justify-center items-center"
//           >
//             <div
//               onClick={(e) => e.stopPropagation()}
//               onSubmit={() => console.log("Submit Called !")}
//               className="min-w-40 w-1/3 min-h-32 h-3/5 p-4 flex flex-col gap-4 text-black bg-white shadow border-2"
//             >
//               <h2 className="w-full text-center text-xl p-4 pb-0">
//                 Add A New ToDo
//               </h2>
//               <label htmlFor="titleInput">
//                 Title
//                 <input
//                   id="titleInput"
//                   type="text"
//                   placeholder="Enter the Title"
//                   className="w-full h-10 p-2 border-2 rounded-md"
//                 />
//               </label>
//               <label
//                 htmlFor="descriptionInput"
//                 className="flex-1 flex flex-col"
//               >
//                 Description
//                 <textarea
//                   id="descriptionInput"
//                   placeholder="Enter the Description"
//                   className="flex-1 w-full h-10 p-2 border-2 rounded-md"
//                   rows="4"
//                 ></textarea>
//               </label>
//               <span className="flex justify-end gap-4">
//                 <Button className="bg-red-50" children={"Cancel"} />
//                 <Button
//                   title="CLick to Add a new TODO"
//                   className=" bg-blue-600 text-white "
//                   type="submit"
//                   onClick={() => console.log("Submit Called !")}
//                 >
//                   Add
//                 </Button>
//               </span>
//             </div>
//           </div>
//         ) : null}
//       </main>
//     </div>
//   );
// }
//
// // const prop = {
// //   title: "CLick to Add a new TODO",
// //   className: " bg-blue-600 text-white ",
// //   type: "submit",
// //   onClick: () => console.log("Submit Called !"),
// // };
//
// // const {title, className, ...rest} = prop;
//
// // const rest = {
// //   type: "submit",
// //   onClick: () => console.log("Submit Called !"),
// // }
//
//
// export function Button({ className, children, ...props }) {
//   return (
//     <button
//       {...props}
//       // title={title}
//       className={` ${className} px-4 py-1 border rounded-lg shadow active:inset-shadow `}
//     >
//       {children}
//     </button>
//   );
// }