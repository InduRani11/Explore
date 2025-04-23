import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [pvalue, setPValue] = useState(25);

  console.log("Parent Running with state : ", pvalue);


  return (
    <div>
      Parent State : {pvalue}
      <button onClick={() => setPValue(pvalue + 1)}>Update Parent State</button>
      <Child data="sample1" greeting="hello" />
      <Child init={pvalue} data="sample2" greeting="hi" ><h1>yoho!</h1></Child>
      {pvalue % 2 === 0 ? <Child /> : null}
    </div>
  );
}
