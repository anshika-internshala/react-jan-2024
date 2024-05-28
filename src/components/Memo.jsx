import { useState, useMemo } from "react";
import { findPrime } from "../utilities/helper";

function Memo() {
  const [num, setNum] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const prime = useMemo(() => findPrime(num), [num]);

  function updateTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <div
      className="memoBox"
      style={
        isDarkTheme
          ? { backgroundColor: "lightgray" }
          : { backgroundColor: "white" }
      }
    >
    
    <button onClick={updateTheme}>Toggle</button> <br />
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <div>
        <h1>nth Prime: {prime}</h1>
      </div>
    </div>
  );
}

export default Memo;
