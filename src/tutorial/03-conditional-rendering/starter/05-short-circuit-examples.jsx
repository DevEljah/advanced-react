import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState(false);
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2> {text || "Hello"} </h2>
      {text && (
        <div>
          <h2>Hi</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/*  <button style={{ padding: "10px" }} onClick={() => setText(true)}>
        +
      </button> */}
      {user && <SomeComponent name={user.name} />}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2> {name} </h2>
    </div>
  );
};

export default ShortCircuitExamples;
