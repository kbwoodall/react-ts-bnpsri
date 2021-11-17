import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { useState, useReducer, useEffect } from 'react';

interface AppProps {}
interface AppState {
  name: string;
}

const hooks = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
const showme = (msg: string) => {
  return msg;
};

const addit = (x: number, y: number) => {
  return <div>return (x*y);</div>;
};

const App = () => {
  return (
    <div>
      <p> {showme('ok so far')}</p>
      <p> {hooks()}</p>
      <p>Hooks stuff</p>
      <p>{UseEffect()}</p>
    </div>
  );
};

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert('You clicked ' + count + ' times');
  });

  return (
    <div>
      <p>You clicked {count} times again</p>
      <button onClick={() => setCount(count + 1)}>Click me again</button>
    </div>
  );
}

render(<App />, document.getElementById('root'));
