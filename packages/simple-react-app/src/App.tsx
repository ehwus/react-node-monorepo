import React, {useState} from 'react';
import './App.css';

function App() {
  const [exampleData, setExampleData] = useState("");

  return (
    <div className="App">
      <p>Data: {exampleData}</p>
      <button onClick={() => {
        fetch("http://localhost:3001/data", {})
          .then(res => res.json())
          .then(data => setExampleData(JSON.stringify(data)));
      }}>Fetch Data</button>
    </div>
  );
}

export default App;
