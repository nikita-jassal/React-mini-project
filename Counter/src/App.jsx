 

import { useState } from "react"

function App() {
  const [value, setValue] = useState(0);

  const addValue = () => {
    if(value<=20 ){
      setValue(value+1);
    }
    else{
      alert("the value can't be greater then 20");

    }
  };

  const removeValue = () => {
    if(value>=1){
      setValue(value-1);
    }else{
      alert("the value can't be negative");
    }
    
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

