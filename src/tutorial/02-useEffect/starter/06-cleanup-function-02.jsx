import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toogle, setToggle] = useState(false);
  console.log("render");

  return (
    <div>
      <h2>cleanup function</h2>
      <br />
      <button onClick={() => setToggle(!toogle)} className="btn">
        press
      </button>
      {toogle && <SecondComponent />}
    </div>
  );
};

const SecondComponent = () => {
  useEffect(() => {
    console.log("useEffcted :D");
    //every time you press (the btn) there be more EventListener
    const someFunc = () => {
      // some logic
    };
    window.addEventListener("scroll", someFunc);
    //cleanup-Function
    return () => window.removeEventListener("scroll", someFunc);
  }, []);

  return <h2>Holla!</h2>;
};

export default CleanupFunction;
