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
    console.log("useEffcted :)");
    //"initial render" every time you press (mount/unmount)
    const intId = setInterval(() => {
      console.log("Hi from Interval");
    }, 1000);
    //cleanup-Function
    return () => {
      clearInterval(intId);
      console.log("Clean-up");
      //the cleanup "func" runs after the "render" and
      //before the "useEffect" !
      //basically when the component unmount it runs !!
    };
  }, []);

  return (
    <div>
      <h4>Second-Component</h4>
      <h2>Holla!</h2>
    </div>
  );
};

export default CleanupFunction;
