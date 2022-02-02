import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';

export const data = { city: 'Yorba Linda' };
export const LangContext = React.createContext(data);
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

const getRandom = () => {
  return Math.floor(Math.random() * 100000000);
};

export const blockstuff = [
  {
    id: 123,
    name: 'Bob',
    date: newdate1,
    ts: timestamp,
    amt: 100.01,
    rnd: getRandom(),
  },
  {
    id: 345,
    name: 'Bing',
    date: newdate2,
    ts: timestamp2,
    amt: 150.23,
    rnd: getRandom(),
  },
];

export const DataContext = React.createContext(blockstuff);

export const getBlock = () => {
  console.log('date in unix ' + timestamp + ' ' + timestamp2 + ' ');

  const hdg = () => {
    return <p className="text-lg font-bold m-5">Block input </p>;
  };

  return (
    <div>
      {hdg()}
      {blockstuff.map((person, id) => (
        <p key={id} className="text-lg font-bold m-5">
          Id {person.id} , {person.name}, {person.date}, {person.rnd}
        </p>
      ))}
    </div>
  );
};

/*

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
