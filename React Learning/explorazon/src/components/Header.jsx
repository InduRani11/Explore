import React from "react";
// import AmazonLogo from "./../assets/amazon-logo.svg";
// import AmazonLog from "./../assets/amazon-logo.svg?react";
// https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg

export default function Header() {
  const divClassName = "hover:border-white border border-transparent";

  const HeaderBox = ({
    className = "",
    Image = null,
    subContent = "",
    content = "",
    dropdown = false,
  }) => {
    return (
      <div
        className={`  hover:border-white border border-transparent px-4 py-1 flex justify-center items-center `}
      >
        {Image ? <Image /> : null}
        <div
          className={` ${className} flex flex-col justify-center items-start  `}
        >
          <span className=" text-xs font-medium leading-4">{subContent}</span>
          <span className="flex justify-center items-center gap-1 flex-nowrap text-sm font-bold leading-4">
            {content}
            {dropdown ? (
              <img
                className="w-3 h-3 "
                src="https://img.icons8.com/FFFFFF/forma-regular-filled/48/sort-down.png"
                alt="sort-down"
              />
            ) : null}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-[#131921] flex gap-2 px-4 py-1 text-white">
      <div>Amazon</div>
      <HeaderBox
        Image={null}
        subContent="Delivering to Agra 282007"
        content="Update location"
      />
      <form className={` flex-1 flex border rounded overflow-hidden group z-[4] outline-2 group-has-[input:active]:outline-[#FF9900] text-black `}>
        <select className="bg-[#E6E6E6] px-2 z-[4] hover:outline-2 hover:outline-[#FF9900] active:outline-2 active:outline-[#FF9900]">
          <option>All</option>
        </select>
        <input type="text" className="flex-1 bg-white inp" />
        <button className="px-2 bg-[#FEBD69] z-[4] hover:outline-2 hover:outline-[#FF9900] active:outline-2 active:outline-[#FF9900]"><img className="size-6" src="https://img.icons8.com/ios-filled/100/search.png" alt="search"/></button>
      </form>
      <HeaderBox content="🚩 En" dropdown />
      <HeaderBox
        subContent="Hello, sign in"
        content="Account & Lists"
        dropdown
      />
      <HeaderBox subContent="Returns" content="& Orders" />
      <div className={` ${divClassName} flex  justify-center items-center`}>
        <span>0</span>
        <span>Cart</span>
      </div>
    </div>
  );
}