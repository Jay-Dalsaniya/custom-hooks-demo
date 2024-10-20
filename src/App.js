import React from "react";
import useLocalStorage from "./useLocalStorage"; // Import the custom hook
import "./App.css";
function App() {
  const [name, setName] = useLocalStorage("name", "John Doe"); // Use the hook with an initial value

  return (
    <div className="container">
      <h1>Hello, {name}!</h1>
      <button onClick={() => setName("Jay Dalsaniya")}>
        Change Name to Jay
      </button>
      <button onClick={() => setName("Dalsaniya Jayu")}>
        Reset Name to Jayu
      </button>
    </div>
  );
}

export default App;
