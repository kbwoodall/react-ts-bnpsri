import React, { Component } from 'react';
import { render } from 'react-dom';
export const lang = { en: { stuff: 'Yorba Linda' } };
export const data = { city: 'Yorba Linda' };
export const location = { city: 'Anaheim' };
export const LangContext = React.createContext(data);
export const DataContext = React.createContext(location);

export const getBlock = () => {
  const blockdata = [
    { id: 123, name: 'John', date: '2021-01-20', amt: 100.01 },
    { id: 345, name: 'jack', date: '2021-01-20', amt: 150.23 },
  ];
  for (var i = 0; i < blockdata.length; i++) {
    console.log('testing ' + blockdata[i].name);
  }

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
