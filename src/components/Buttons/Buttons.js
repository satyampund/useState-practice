import React, { useState } from "react";

function Buttons(props) {
  const [val, setVal] = useState(props.val);

  function clickHandler() {
    setVal("12");
  }
  return (
    <>
      <h1>
        Button {props.btn} and Value {val}
      </h1>
      <button onClick={clickHandler}>Click here</button>
    </>
  );
}

export default Buttons;
