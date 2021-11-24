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
    <div >
      <div style={{ backgroundColor: 'coral' }}>
        <p>Hooks useState</p>
        {hooks()}
        <p>Hooks useEffect</p>
        {UseEffect()}
      </div>

      <div style={{ backgroundColor: 'coral' }}>
        <p>Hooks useState</p>
        {hooks()}
        <p>Hooks useEffect</p>
        {UseEffect()}
      </div>
    </div>
  );
};

function UseEffect() {
  return mydemo();
  let msg: string = 'Wassup from ShowText';
  return ShowText({ msg });
}

render(<App />, document.getElementById('root'));
