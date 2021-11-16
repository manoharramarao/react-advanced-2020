import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("useState Basics Example");
  const onClickHandler = () => {
    if (title === "useState Basics Example") {
      setTitle("Changed Title");
    } else {
      setTitle("useState Basics Example");
    }
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={onClickHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
