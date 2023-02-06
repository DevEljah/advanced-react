import { useState } from "react";

const ErrorExample = () => {
  // const value = useState(0)[0];
  // const func = useState(0)[1];
  // console.log(value);
  // console.log(func);
  // ==>>
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>useState error example</h2>
      <h3> {count} </h3>
      <button
        style={{ padding: "10px", backgroundColor: "#0066ff" }}
        onClick={() => setCount(count + 1)}
      >
        <h3>+</h3>
      </button>
    </>
  );
};

export default ErrorExample;
