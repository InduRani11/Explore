import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function CategoryBar() {
  const [open, setOpen] = useState(false);
  function close() {
    setOpen(false);
  }
  return (
    <div className="flex gap-1 overflow-auto bg-[#232F3E] text-white text-sm font-normal whitespace-nowrap relative">
      <Sidebar open={open} close={close} />
      <div
        onClick={() => setOpen(true)}
        className="p-2 flex justify-center items-center gap-2 hover:border-white border border-transparent text-nowrap"
      >
        <img
          className="w-4 h-4 "
          src="https://img.icons8.com/FFFFFF/ios-filled/100/menu--v1.png"
          alt="menu--v1"
        />
        All
      </div>
      {data.map((item) => (
        <div className="p-2 hover:border-white border border-transparent text-nowrap">
          {item}
        </div>
      ))}
    </div>
  );
}

const data = [
  "Fresh",
  "MX Player",
  "Sell",
  "Bestsellers",
  "Today's Deals",
  "Mobiles",
  "Prime",
  "Fashion",
  "Customer Service",
  "New Releases",
  "Electronics",
  "Amazon Pay",
  "Home & Kitchen",
];