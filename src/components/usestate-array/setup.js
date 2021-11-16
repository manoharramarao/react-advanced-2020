import React, { useState } from "react";
import { data } from "../../data";

const UseStateArrayExample = () => {
  const [persons, setPerson] = useState(data);
  const onRemove = (id) => {
    console.log("clicked on id", id);
    let newPersonsList = persons.filter((person) => person.id !== id);
    setPerson(newPersonsList);
  };
  return (
    <React.Fragment>
      <h2>Usestate Array Example</h2>
      {persons.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => onRemove(id)}>remove</button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default UseStateArrayExample;
