import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
export const lang = { en: { stuff: 'Yorba Linda' } };
export const data = { city: 'Yorba Linda' };
export const location = { city: 'Anaheim' };
export const LangContext = React.createContext(data);
export const DataContext = React.createContext(location);

export const getBlock = () => {
  function getDate() {
    const dt = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log('in formatDate ' + dt);
    return dt;
  }

  const currentDate = Date.now();
  const timestamp = new Date().getTime();
  var date = new Date(timestamp).toDateString();

  // generate a timestamp
  var ts2 = Number(getDate); //1479895361931

  const blockdata = [
    { id: 123, name: 'John', date: getDate(), amt: 100.01 },
    { id: 345, name: 'jack', date: getDate(), amt: 150.23 },
  ];
  for (var i = 0; i < blockdata.length; i++) {
    console.log('testing ' + blockdata[i].name);
  }
  const hdg = () => {
    return;
    <p className="text-lg font-bold m-5">Block input </p>;
  };

  return (
    <div>
      {blockdata.map((person, id) => (
        <p key={id} className="text-lg font-bold m-5">
          Id {person.id} , {person.name}, {person.date}, {person.amt}
        </p>
      ))}
    </div>
  );
};
