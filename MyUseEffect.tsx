import React from 'react';
import { useState, useReducer, useEffect } from 'react';

export function mydemo() {
  // logic will go here ..
  console.log('this is exportable function in TypeScript. !!');
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('You clicked ' + count + ' times');
  }, []);

  return (
    <div>
      <p style={{ color: 'blue' }}>You clicked {count} times again</p>
      <button onClick={() => setCount(count + 1)}>Click me again</button>
    </div>
  );
}
