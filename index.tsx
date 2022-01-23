import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { mydemo, myhooks, formatDate, showText } from './MyUseEffect';
import './style.css';
import { useState, useReducer, useEffect } from 'react';
import { FC, ReactElement } from 'react';
import { MyFormStuff } from './MyForm';

import { createContext, useContext } from 'react';
import ReactDOM from 'react-dom';

import {
  LangContext,
  data,
  DataContext,
  location,
  getBlock,
} from './MyContext';

const App = () => {
  //const [info, setInfo] = useState('K Woodall');
  //const UserContext = createContext(info);

  function Display() {
    const value = useContext(DataContext);
    return <div>The info is {value[0].date}</div>;
  }

  return (
    <DataContext.Provider value={data.city}>
      <div className="flex bg-green-400 h-screen ">
        <div className="bg-blue-200 ml-10 rounded-xl mt-10 mb-10 ml-5 mr-10">
          {getBlock()}
        </div>

        <div className="bg-blue-200 rounded-xl mt-10 mb-10 w-5/6 mr-10">
          {Display()}
          {mydemo()}
        </div>
      </div>
    </DataContext.Provider>
  );
};

render(<App />, document.getElementById('root'));

/*
<div className="text-black font-bold rounded mt-10 ml-10">
          <div>
            <Display />
            <MyFormStuff />
          </div>
        </div>
        <div className="bg-blue-200 rounded-xl mt-10 mb-10 w-5/6 mr-10">
          {mydemo()}
        </div>


<p className="text-lg mt-10">Hey {user}</p>
//const [title, setTitle] = useState('new stuff');
  //const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //  const enteredName = event.target.value;
  //  setUser(enteredName);
  //};
  const showme = (msg: string) => {
    return (
      <div>
        <p>{msg}</p>
      </div>
    );
  };

<p className="text-lg">{showme('Hooks useEffect')}</p>

  //alert(enteredName);

    //<p className="text-lg">{showme('ok so far')}</p>
const hey = (msg: string) => {
  setUser(msg);
  alert('you entered' + msg);
};

 function MyForm() {
    function Display() {
      const rval = useContext(UserContext);
      return <div>The answer is {rval}</div>;
    }

    const [name, setName] = useState('');

    const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      alert('The name you entered was:  ' + name);
    };

    return (
      <form onSubmit={handleSubmit}>
        <Display />

        <label>
          Enter your name:
          <input
            className="mb-2"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="mb-5 ml-2" type="button" onClick={() => hey(name)}>
            Show result
          </button>
        </label>
      </form>
    );
  }


<input type="submit" />

 <button type="button" onClick={() => setUser(title)}>
            Show result
          </button>
<input
              className="mb-5"
              onChange={(event) => setUser(event.target.value)}
            />


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
