import { useState } from "react";

// const persons = {
//   firstName: "max",
// };

const UserChallenge = () => {
  // const [name, setName] = useState({ persons });

  // const [toggle, setToggle] = useState(false); //no need!
  const [user, setUser] = useState(null);

  const login = () => {
    // setToggle(true);
    setUser({ name: "dev" });
    console.log("login clicked");
  };

  const logout = () => {
    // setToggle(false);
    setUser(null);
  };

  return (
    <div>
      <h2>user challenge</h2>
      <br />
      {!user ? (
        <div>
          <button onClick={login} className="btn">
            Login
          </button>
          <h4> Pls login</h4>
        </div>
      ) : (
        <div>
          <button onClick={logout} className="btn">
            Logout
          </button>
          <h4> Holla! {user.name}</h4>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
