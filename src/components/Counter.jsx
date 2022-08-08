import React from 'react';
import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  const decrement = () => {
    // setCount(count - 1);
    setCount(prev => prev - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('Run useEffect');
    const intervalID = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => {
      console.log('Unmount');
      clearInterval(intervalID);
    };
  }, [count]);

  return (
    <div>
      <h1>Counter</h1>
      <button className="decrement-btn" onClick={() => decrement()}>
        -
      </button>
      <span>{count}</span>
      <button className="increment-btn" onClick={() => increment()}>
        +
      </button>
      <br />
      <button className="reset-btn" onClick={() => setCount(0)}>
        Reset
      </button>
      <h1>{timer}</h1>
    </div>
  );
};

export default Counter;
