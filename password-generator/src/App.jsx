import "./App.css";

function App() {
  return (
    <>
      <div className="password-generator">
        <h1>Password Generator</h1>
        <div><input type="text" /><button>Copy</button></div>
        <input type="range" />
        <div><input type="checkbox" /> <label>Add Numbers</label></div>
        <div><input type="checkbox" /> <label htmlFor="">Add Special Characters</label></div>
      </div>
    </>
  );
}

export default App;
