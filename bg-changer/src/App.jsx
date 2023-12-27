import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("green");

  return (
    <div 
    className="wrapper"
    style={{backgroundColor:color,}}>
      <h1>Background Color</h1>
      <div>

      <button 
      onClick={() => setColor("red")}
      style={{ backgroundColor: "red", margin:"1em"}}
      >Red</button>

      <button 
      onClick={() => setColor("Green")}
      style={{ backgroundColor: "green", margin:"1em" }}
      >Green</button>

      <button 
      onClick={() => setColor("Pink")}
      style={{ backgroundColor: "pink", margin:"1em" }}
      >Pink</button>

      <button 
      onClick={() => setColor("Blue")}
      style={{ backgroundColor: "blue", margin:"1em" }}
      >Blue</button>

    </div>
    </div>
  );
}

export default App;
