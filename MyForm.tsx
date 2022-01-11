import React from 'react';
import { useState, useReducer, useEffect } from 'react';
import moment from 'moment';
import { FC, ReactElement } from 'react';
import { createContext, useContext } from 'react';

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
