import React, { useContext } from "react";
import { countContext } from "./App";

export default function Sidebar() {
  console.log(" > Sidebar Rendered");
  //   const obj = useContext(countContext)
  const { obj, setObj } = useContext(countContext);
  return <div onClick={() => setObj((prev) => prev + 1)}>Sidebar :{obj}</div>;
}
