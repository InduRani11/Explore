import React, { useState } from "react";
import Parent from "./Parent";
export default function App() {
  // const var1= useState(3);
  // console.log(var1);
  const [var1, setVar1] = useState(3);
  console.log(var1, setVar1);

  // Array Destructuring

  //   const arr = [1, 2, 3, 4, 5];
  //   const [a, b, c, d, e, f = 58] = arr;
  //
  //   const obj = {
  //     abc: 1,
  //     xyz: 2,
  //     child: {
  //         ab: 1,
  //         xy: {
  //             fg: 2
  //         }
  //     }
  //   }
  //   const { abc, xyz, child: { ab, xy: { fg, gh = 35 } } } = obj;
  // const obj={
  //   abc:1,
  //   xyz:2,
  //   child:{
  //     xy:12,
  //     ab:34
  //   }
  // }
  // const{abc,xyz,child:{xy,ab}}=obj
  // console.log(abc,xyz,xy,ab)

  // const child = React.createElement(
  //   "button",
  //   { className: "abc", title: "dgdsd" },
  //   "click here"
  // );
  // const elem = React.createElement(
  //   "div",
  //   { className: "abc", title: "dgdsd" },
  //   child
  // );
  // return elem;

  //  {}
  return (
    <div className="abc" title="dfghfg">
      <Parent/>
     {48764*565464}

      {/* fhgdshz
      <button className="abc" title="dfghfg">
        click me
      </button> */}
    </div>
  );
}
