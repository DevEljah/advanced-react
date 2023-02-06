import { useState } from "react";
import { data } from "../../../data";

const ErrorExample = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    // console.log(id);
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4> {name} </h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        onClick={() => setPeople([])}
        style={{ marginTop: "10px" }}
        className="btn"
      >
        clear all
      </button>
    </>
  );
};

export default ErrorExample;
