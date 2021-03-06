import React from 'react';
import { useState, useReducer, useEffect } from 'react';
import moment from 'moment';
import { FC, ReactElement } from 'react';
import { createContext, useContext } from 'react';

export function MyFormStuff() {
  const hey = (msg: string) => {
    setUser(msg);
    alert('you entered ' + msg);
  };

  const [user, setUser] = useState('K Woodall');
  const [name, setName] = useState('');
  const UserContext = createContext(user);

  const Display = (msg: string) => {
    return (
      <div>
        <p>{msg}</p>
      </div>
    );
  };

  return (
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
  );
}

/*

//<form onSubmit={handleSubmit}>
 //  </form>
  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    alert('The name you entered was:  ' + name);
  };


*/
