import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { mydemo, FormatDate, ShowText } from './MyUseEffect';
import './style.css';
import { useState, useReducer, useEffect } from 'react';
import { FC, ReactElement } from 'react';

const hooks = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p style={{ color: 'blue' }}>You clicked {count} times first</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
const showme = (msg: string) => {
  return (
    <div>
      <p>{msg}</p>
    </div>
  );
};

const addit = (x: number, y: number) => {
  return <p>return (x*y);</p>;
};

const App = () => {
  return (
    <div style={{ backgroundColor: 'coral' }}>
      <p>Hooks useState</p>
      {hooks()}
      <p>Hooks useEffect</p>
      {UseEffect()}
    </div>
  );
};

function UseEffect() {
  mydemo();
  let msg: string = 'wassup from ShowText';
  return ShowText({ msg });
}

render(<App />, document.getElementById('root'));

/*
function UseEffectx() {
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


*/
