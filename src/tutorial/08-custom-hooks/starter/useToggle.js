import { useState } from "react";

const useToggle = () => {
  const [show, setShow] = useState();

  const toggle = () => {
    setShow(!show);
  };
  return { show, toggle }; //or return Array e.g [show, toggle]
};

export default useToggle;
