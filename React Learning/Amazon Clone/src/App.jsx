import React, { createContext, useState } from "react";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const countContext = createContext(null);

function Store({ children }) {
  const [obj, setObj] = useState(0);

  console.log(" > Store Rendered");

  return (
    <countContext.Provider
      value={{
        obj,
        setObj,
      }}
    >
      {children}
    </countContext.Provider>
  );
}

export default function App() {
  console.log(" > App Rendered");

  return (
    <Store>
    {/* <countContext.Provider
      value={0} > */}
      <div className="flex flex-1 justify-center align-center">
        App
        {/* <Header obj={obj} />
        <Content obj={obj} />
        <Sidebar obj={obj} /> */}
        <Header />
        <Content />
        <Sidebar />
      </div>
      {/* </countContext.Provider> */}
    </Store>
  );
}