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
      <h2 style={{ color: "#fff", backgroundColor: "#000000" }}>
        Ternary Operator in jsx
      </h2>
      <button className="btn"> {isEditing ? "Edit" : "Add"} </button>
      {user ? (
        <div>
          <h4> Holla {user.name} </h4>
        </div>
      ) : (
        <h4>please login</h4>
      )}
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
