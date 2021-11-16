import React, { useState } from "react";

const UseStateObjectExample = () => {
  let manohar = {
    firstName: "Syed",
    lastName: "Farooq",
    message: "He is a programmer",
  };
  const [person, setPerson] = useState(manohar);
  const changeMessage = () => {
    manohar.message = "He is a programmer and hacker";
    console.log(manohar);
    setPerson({ ...manohar });
  };
  return (
    <React.Fragment>
      <div>
        <h2>UseState Object Example</h2>
        <h4>{person.firstName}</h4>
        <h4>{person.lastName}</h4>
        <h4>{person.message}</h4>
        <button type="button" className="btn" onClick={changeMessage}>
          Change message
        </button>
      </div>
    </React.Fragment>
  );
};

export default UseStateObjectExample;
