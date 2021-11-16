import React from "react";

import ErrorExample from "./components/error-example/setup";
import UseStateArrayExample from "./components/usestate-array/setup";
import UseStateBasics from "./components/usestate-basic/setup";
import UseStateObjectExample from "./components/usestate-object/setup";

function App() {
  return (
    <div className="container">
      <h2>
        <UseStateObjectExample></UseStateObjectExample>
      </h2>
    </div>
  );
}

export default App;
