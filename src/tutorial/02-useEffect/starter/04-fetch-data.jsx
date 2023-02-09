import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  const bunc = () => {
    console.log("Hi rerander");
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      // const users = await res.json();
      // setUsers(users);
      // ==>>
      try {
        const users = await res.json();
        setUsers(users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData(); // invoke the function! //
    ////////////////////////////////////////
    ////////////////////////////////////////
    /*  fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
    // .catch((err) => console.log(err)); */
    ////////////////////////////////////////
    ////////////////////////////////////////
    /*    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then((data) => setUsers(data)); */
    ////////////////////////////////////////
    const func = () => {
      console.log("Hi intail rander");
    };
    func();
  }, []);
  return (
    <>
      <h3>fetch data example</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="img" />
              <h5>{login}</h5>
              <a href={html_url}> &nbsp; Profile</a>
            </li>
          );
        })}
      </ul>
      {/* 
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p> {user.login} </p>
          </div>
        ))}
      </div> */}

      <button
        style={{ backgroundColor: "#3399ff", padding: "20px" }}
        onClick={bunc}
      >
        click (see console!)
      </button>
    </>
  );
};
export default FetchData;
