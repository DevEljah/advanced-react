import React from "react";
import avatar from "../../../assets/default-avatar.svg";

const Person = ({ name, nickName, images /* ...person */ }) => {
  //   console.log(person);

  //////////////// render image ////////////////
  // const img = images[0].small.url; //this way gets error!!

  // ==>> option 1 (old wasy);
  // const img = images && images[0] && images[0].small && images[0].small.url;

  // ==>> option 2 (optional chaining);
  // const img = images?.[0]?.small?.url;
  // ==>>
  const img = images?.[0]?.small?.url || avatar;
  // or // const img = images?.[0]?.small?.url ?? avatar;
  return (
    <>
      {/* <h2 style={{ background: "#000066", color: "#fff" }}>Person Component</h2> */}
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h5>
        Name : {name} &nbsp; Nickname : {nickName || "None"}
      </h5>
      <h5></h5>
    </>
  );
};

export default Person;
