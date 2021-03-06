import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import { useState, useReducer, useEffect } from 'react';
export const data = { city: 'Yorba Linda' };

// ------------------------------------------------------------

const str = '2021-06-11';
const timestamp = new Date(str).getTime();
let newdate1 = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
}).format(timestamp);
const timestamp2 = new Date().getTime();
let newdate2 = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
}).format(timestamp2);

// ------------------------------------------------------------

const buildIt = (from: number, to: number) => {
  const Array = [];
  Array.push({
    id: 123,
    name: 'Bob',
    date: newdate1,
    ts: timestamp,
    amt: 100.01,
    fchn: from,
    tchn: from,
  });
  Array.push({
    id: 456,
    name: 'Jay',
    date: newdate2,
    ts: timestamp2,
    amt: 150.01,
    fchn: from,
    tchn: to,
  });
  console.log(Array[1]);
  return Array;
};

const fval = Math.floor(Math.random() * 100000000);
const tval = Math.floor(Math.random() * 100000000);

var gotIt = buildIt(fval, tval);

const newStuff = () => {
  return null;
};

export const DataContext = React.createContext(gotIt);

export const getBlock = () => {
  const [msg, setMsg] = useState('Block Input Data');

  console.log('date in unix ' + timestamp + ' ' + timestamp2) + ' ';

  const hdg = () => {
    return <p className="text-lg font-bold m-5">{msg} </p>;
  };

  return (
    <div>
      {hdg()}
      {gotIt.map((person, id) => (
        <p key={id} className="text-lg font-bold m-5">
          Id {person.id} , {person.name}, {person.date}, {person.amt}
        </p>
      ))}

      <button
        className="ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setMsg("Formatted to Blockchain more")}
      >
        Format  First
      </button>
    </div>
  );
};

/*

<button
        className="ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => alert("ok")}
      >
        Format now
      </button>

//const fval = Math.floor(Math.random() * 100000000);
  //const tval = Math.floor(Math.random() * 100000000);

  //const [fchn, setFchn] = useState(fval);
  //const [tchn, setTchn] = useState(tval);

  //gotIt = buildIt(fval, tval);

export const blockstuff = [
  {
    id: 123,
    name: 'Bob',
    date: newdate1,
    ts: timestamp,
    amt: 100.01,
    fchn: getFchn(),
    tchn: getTchn(),
  },
  {
    id: 345,
    name: 'Jay',
    date: newdate2,
    ts: timestamp2,
    amt: 150.23,
    fchn: getFchn(),
    tchn: getTchn(),
  },
];


//const getFchn = () => {
//  return Math.floor(Math.random() * 100000000);
//};

//const getTchn = () => {
//  return Math.floor(Math.random() * 100000000);
//};
  const getFchn = () => {
    const val = Math.floor(Math.random() * 100000000);
    console.log("val " + val);
    setFchn(val);
  };

  const getTchn = () => {
    const val = Math.floor(Math.random() * 100000000);
    setTchnval);
  };
  
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
  const UserContext = createContext(us
export const lang = { en: { stuff: 'Yorba Linda' } };
export const data = { city: 'Yorba Linda' };
export const location = { city: 'Anaheim' };
export const LangContext = React.createContext(data);

  function getDate() {
    const dt = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log('in formatDate ' + dt);
    return dt;
  }

  const currentDate = Date.now();
  const timestamp = new Date().getTime();
  var date = new Date(timestamp).toDateString();
  
  let newdate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(timestamp);
  console.log('NEWDATE ' + newdate);
  const str = '2020-06-11';
  const dateTest = new Date(str);

  // generate a timestamp
  var ts2 = Number(dateTest); //
  let newdate2 = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(ts2);

  const blockdata = [
    { id: 123, name: 'John', date: getDate(), amt: 100.01 },
    { id: 345, name: 'jack', date: newdate, amt: 150.23 },
  ];
  for (var i = 0; i < blockdata.length; i++) {
    console.log('testing ' + blockdata[i].name);
  }

  */
