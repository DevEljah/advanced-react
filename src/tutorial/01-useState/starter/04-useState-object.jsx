import { useState } from "react";
import { data } from "../../../data";

const items = [
  { id: 1, name: "dev", age: "29", hobby: "coding" },
  { id: 2, name: "max", age: "29", hobby: "sport" },
  { id: 3, name: "nina", age: "33", hobby: "hanging out with friends" },
  { id: 4, name: "anna", age: "22", hobby: "travel" },
];

const UseStateObject = () => {
  const [person, setPerson] = useState(data);
  const handlePerson = () => {
    let people = [...data];
    setPerson(people);
  };
  return (
    <>
      <h2>useState object example;</h2>
      <br />
      <div>
        {/*   {data.map((person) => (
          <h4 key={person.id}>
            {person.name} <br /> {person.age} <br /> {person.hobby}
          </h4>
        ))} */}
        <h4> {data.name} </h4>
      </div>
    </>
  );
};

export default UseStateObject;
