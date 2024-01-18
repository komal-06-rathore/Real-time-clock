import React, { useState } from "react";

function App() {
  // setInterval(curr, 1000);
  let time = new Date().toLocaleTimeString();
  const [state, setState] = useState(time);

  function curr() {
    let new_time = new Date().toLocaleTimeString();
    setState(new_time);
    // console.log("called");
  }

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={curr}> GET TIME</button>
    </div>
  );
}
export default App;
