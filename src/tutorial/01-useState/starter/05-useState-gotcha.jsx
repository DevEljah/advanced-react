import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setValue(value + 1); // its not synchronously rerander//
    // console.log(value);
    // ==>>

    // synchronously rerander//
    setValue((currentState) => {
      const newState = currentState + 1;
      console.log(newState);
      return newState;
    });
  };
  return (
    <>
      <h4> {value} </h4>
      <button className="btn" onClick={handleClick}>
        +
      </button>
    </>
  );
};

export default UseStateGotcha;
