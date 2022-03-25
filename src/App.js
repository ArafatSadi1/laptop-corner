import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [laptops, setlaptops] = useState([]);
  useEffect( () => {
    fetch('laptop.json')
    .then(res => res.json())
    .then(data => console.log(data));
  }, [])
  return (
    <div className="App">
      <h2>happy for assignment 8</h2>
    </div>
  );
}

export default App;
