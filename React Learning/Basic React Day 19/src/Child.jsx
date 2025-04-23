import React, { useState } from "react";

export default function Child(props) {
  const { init = 45 } = props;

  console.log("Child Running with Props : ", props, init);

  const [value, setValue] = useState(init);
  const [valu2, setValu2] = useState(init);

  console.log(" ->> ", props.init);

  function handleClick2() {
    console.log("Updating State Variable", value);
    // setValue((pre) => {
    //   setValu2((prev) => prev + 2);
    //   return pre + 1;
    // });
    setValue(value + 1);
    setValu2(valu2 + 5);
  }

  return (
    <div>
      Init : {init} <br />
      State Variable 1 : {value} <br />
      State Variable 2 : {valu2}
      <button onClick={handleClick2}>Update State Variable</button>
    </div>
  );
}
