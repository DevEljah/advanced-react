const Person = ({ name, id, removePerson }) => {
  console.log("re");
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)} className="btn">
        remove person
      </button>
    </div>
  );
};
export default Person;
