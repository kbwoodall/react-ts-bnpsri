import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { mydemo, formatDate, showText } from './MyUseEffect';
import './style.css';
import { useState, useReducer, useEffect } from 'react';
import { FC, ReactElement } from 'react';

const hooks = () => {
  const [count, setCount] = useState(0);
  let myObj = { msg: 'Current Message from hooks' };

  return (
    <div>
      {showText(myObj)}
      {formatDate()}
      <p className="text-lg font-bold m-15"> testing </p>

      <p className="text-lg font-bold m-5">You clicked {count} times first</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
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
const CStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: 800,
  backgroundColor: 'gray',
};

const App = () => {
  return (
    <div className="flex bg-green-400 h-screen ">
      <div className="bg-blue-200 ml-10 rounded-xl mt-10 mb-10 ml-5">
        <p className="text-lg">Hooks useState</p>
        {hooks()}
      </div>

      <div className="text-black font-bold rounded mt-10 ml-5">
        <div>
          <input type="text" />
        </div>
        <button type="button"   onClick={() => alert("wassup")}>Show result</button>
      </div>
      <div className="bg-gray-200 rounded-xl w-3/6 mt-10 mb-10 ml-5">
        <p className="text-lg">Hooks useEffect</p>
        {UseEffect()}
      </div>
    </div>
  );
};

function UseEffect() {
  return mydemo();
}

render(<App />, document.getElementById('root'));
