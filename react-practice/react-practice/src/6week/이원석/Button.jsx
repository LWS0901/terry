import React from 'react';
import './Button.css';

function Controller({ increment, decrement }) {
  return (
    <section className="controller">
      <button onClick={() => decrement(1)}>-1</button>
      <button onClick={() => decrement(10)}>-10</button>
      <button onClick={() => decrement(100)}>-100</button>
      <button onClick={() => increment(100)}>+100</button>
      <button onClick={() => increment(10)}>+10</button>
      <button onClick={() => increment(1)}>+1</button>
    </section>
  );
}


export default Controller;