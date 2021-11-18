import React, { useEffect, useState } from "react";

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  return (
    <>
      <h2>UseEffect Cleanup</h2>
      <h2>Window Size</h2>
      <h3>{size}</h3>
    </>
  );
};

export default UseEffectCleanUp;
