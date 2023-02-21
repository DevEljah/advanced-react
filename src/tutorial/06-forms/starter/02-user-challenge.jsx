import { useState } from "react";
import { data } from "./../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  // console.log(data);
  // console.log(persons);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    if (!name) return; // if no value do nothing
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setName("");
  };

  const handleRmove = (id) => {
    const fliteredUser = users.filter((person) => person.id !== id);
    setUsers(fliteredUser);
  };

  const handleRmoveAll = () => {
    setUsers([]);
  };
  return (
    <>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <h4>Add User</h4>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-input"
              id="name"
            />
          </div>
          <button type="submit" className="btn btn-block">
            submit
          </button>
        </form>
        <div>
          <h2>Users</h2>
          {users.map((user) => (
            <div key={user.id}>
              <h4>{user.name}</h4>
              <button
                onClick={() => handleRmove(user.id)}
                type="button"
                className="btn"
              >
                remove
              </button>
            </div>
          ))}
        </div>
        <br />
        <button onClick={handleRmoveAll} type="button" className="btn">
          clear all
        </button>
      </div>
    </>
  );
};
export default UserChallenge;
