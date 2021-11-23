import React from 'react';
import { useState, useReducer, useEffect } from 'react';

export function mydemo() {
  // logic will go here ..
  console.log('this is exportable function in TypeScript. !!');
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('You clicked ' + count + ' times wow');
  }, []);

  
}
