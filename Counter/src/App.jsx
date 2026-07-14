 

import { useState } from "react"

function App() {
  const [value, setValue] = useState(0);

  const addValue = () => {
    setValue(value + 1);
  };

  const removeValue = () => {
    setValue(value - 1);
  };

  return (
    <>
      <h1>Counter Value: {value}</h1>

      <button onClick={addValue}>Add Value</button>

      <br /><br />

      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;

