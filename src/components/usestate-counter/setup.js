import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);
  const changeCounter = () => {
    setTimeout(() => {
      setCounter((prevState) => {
        let newCounter = prevState + 1;
        return newCounter;
      });
    }, 2000);
  };
  return (
    <React.Fragment>
      <section>
        <div>UseState counter example</div>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>{counter}</h2>
        <button className="btn" onClick={changeCounter}>
          Increase
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
