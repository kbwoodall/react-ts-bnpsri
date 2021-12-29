import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { mydemo, myhooks, formatDate, showText } from './MyUseEffect';
import './style.css';
import { useState, useReducer, useEffect } from 'react';
import { FC, ReactElement } from 'react';

import { createContext, useContext } from 'react';
import ReactDOM from 'react-dom';

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
  const [title, setTitle] = useState('new stuff');
  const [user, setUser] = useState('K Woodall');
  const UserContext = createContext(user);
  const value2 = useContext(UserContext);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setUser(enteredName);
    //alert(enteredName);
  };

  function MyForm() {
    const [name, setName] = useState('');

    const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      alert('The name you entered was:  ' + name);
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            className="mb-2"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="mb-5 ml-2"
            type="button"
            onClick={() => alert(name)}
          >
            Show result
          </button>
        </label>
      </form>
    );
  }

  return (
    <UserContext.Provider value={user}>
      <div className="flex bg-green-400 h-screen ">
        <div className="bg-blue-200 ml-10 rounded-xl mt-10 mb-10 ml-5">
          <p className="text-lg">{showme('ok so far')}</p>
          {myhooks()}

          <p className="text-lg mt-10">Hello {user}</p>
        </div>

        <div className="text-black font-bold rounded mt-10 ml-5">
          <div>
            <MyForm />
          </div>
        </div>
        <div className="bg-blue-200 rounded-xl mt-10 mb-10 w-5/6 mr-10">
          <p className="text-lg">{showme('Hooks useEffect')}</p>
          {mydemo()}
        </div>
      </div>
    </UserContext.Provider>
  );
};

render(<App />, document.getElementById('root'));

/*
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
