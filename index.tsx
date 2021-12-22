import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { mydemo, myhooks, formatDate, showText } from './MyUseEffect';
import './style.css';
import { useState, useReducer, useEffect } from 'react';
import { FC, ReactElement } from 'react';

import { createContext, useContext } from 'react';
import ReactDOM from 'react-dom';

const UserContext = createContext();

const hey = (msg: string) => {
  alert('ok so far ' + msg);
};

const showme = (msg: string) => {
  return (
    <div>
      <p>{msg}</p>
    </div>
  );
};

const App = () => {
  const [title, setTitle] = useState('');
  const [user, setUser] = useState("Jesse Hall");

  return (
    <div className="flex bg-green-400 h-screen ">
      <div className="bg-blue-200 ml-10 rounded-xl mt-10 mb-10 ml-5">
        <p className="text-lg">{showme('ok so far')}</p>
        {myhooks()}
      </div>

      <div className="text-black font-bold rounded mt-10 ml-5">
        <div>
          <input onChange={(me) => setTitle(me.target.value)} />
        </div>
        <button type="button" onClick={() => hey(title)}>
          Show result
        </button>
      </div>
      <div className="bg-gray-200 rounded-xl w-3/6 mt-10 mb-10 ml-5 mr-5">
        <p className="text-lg">{showme('Hooks useEffect')}</p>
        {mydemo()}
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));

/*

const showme = (msg: string) => {
  return (
    <div>
      <p>{msg}</p>
    </div>
  );
};

const hey = (msg: string) => {
  alert('ok so far ' + msg);
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

  function UseEffect() {
  return mydemo();
}

 <input type="email" value={this.state.email}
          	onChange={this.handleEmail}/>


*/
