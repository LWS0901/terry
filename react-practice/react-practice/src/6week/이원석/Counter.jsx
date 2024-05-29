import React from 'react';
import './Counter.css';

function Counter({ count }) {
  return (
    <section className="Count">
      <h2>현재 카운트: {count}</h2>
    </section>
  );
}

export default Counter;