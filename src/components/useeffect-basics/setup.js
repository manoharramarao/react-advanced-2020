import React, { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const onClickHandler = () => {
    setValue(value + 1);
  };
  useEffect(() => {
    console.log("useEffect called");
    document.title = `New Messages(${value})`;
  });
  console.log("Render Component");
  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={onClickHandler}>
        Increase
      </button>
    </>
  );
};

export default UseEffectBasics;
