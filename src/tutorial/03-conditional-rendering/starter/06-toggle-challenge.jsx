import { useState } from "react";

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)} className="btn">
        press
      </button>

      {toggle && (
        <div>
          <h2> Holla!</h2>
        </div>
      )}
    </div>
  );
};

export default ToggleChallenge;
