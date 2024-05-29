import React, { useState } from 'react';
import Viewer from '../main/Viewer';
import Controller from '../main/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="SC">
      <h1>Simple Counter</h1>
      <Viewer count={count} />
      <Controller increment={increment} decrement={decrement} />
    </div>
  );
}

export default App;
