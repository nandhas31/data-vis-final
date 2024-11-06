import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import BarChart from './BarChart';

function App() {
  const [data, setData] = useState([
    { name: 'G', value: 55 },
    { name: 'A', value: 30 },
    { name: 'B', value: 80 },
    { name: 'C', value: 45 },
    { name: 'D', value: 60 },
    { name: 'E', value: 20 },
    { name: 'F', value: 90 },
  ]);


  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
        <h3>Simple D3 Bar Chart in React</h3>
        <BarChart data={data} width={600} height={400} />
      </header>
    </div>
  );
}

export default App;
