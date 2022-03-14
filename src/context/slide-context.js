import React, { useState } from "react";
const slideContex = React.createContext({
  slideInOrOut: "false",
  find: (value) => {},
});
export const SlideContextProvider = (props) => {
  const [slide, setSlide] = useState(false);
  const find = (value) => {
    setSlide(value);
  };
  const values = {
    slideInOrOut: slide,
    find: find,
  };
  return (
    <slideContex.Provider value={values}>{props.children}</slideContex.Provider>
  );
};

export default slideContex;
