import { useState } from "react";
import CodeExample from "./../../02-useEffect/final/01-code-example";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("Dev");

  const codeExample = name || "Hi";
  // you go also like this :) ! //

  return (
    <div>
      <h2>short circuit overview</h2>
      {/* {if(someCondition) {"won#t work!"}}
      we cant use "if" Condition in "jsx"! */}
      <h4>Falsy "OR" Operator: {text || "Hi"}</h4>
      <h4>Falsy "AND" Operator: {text && "Hi"}</h4>
      <h4>Truthy "OR" Operator: {name || "Hi"}</h4>
      <h4>Truthy "AND" Operator: {name && "Hi"}</h4>
      <h3>{codeExample} </h3>
    </div>
  );
};
export default ShortCircuitOverview;
