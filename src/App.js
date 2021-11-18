import React from "react";

import ErrorExample from "./components/error-example/setup";
import UseEffectBasics from "./components/useeffect-basics/setup";
import UseEffectCleanUp from "./components/useeffect-cleanup/setup";
import UseEffectFetchData from "./components/useeffect-fetch-data/setup";
import UseStateArrayExample from "./components/usestate-array/setup";
import UseStateBasics from "./components/usestate-basic/setup";
import UseStateCounter from "./components/usestate-counter/setup";
import UseStateObjectExample from "./components/usestate-object/setup";

function App() {
  return (
    <div className="container">
      <UseEffectFetchData></UseEffectFetchData>
    </div>
  );
}

export default App;
