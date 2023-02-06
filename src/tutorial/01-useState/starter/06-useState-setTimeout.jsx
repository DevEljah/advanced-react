import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log("clicked");
      // setValue(value + 1);
      // ==>>
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000); // 3 sec! //
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
