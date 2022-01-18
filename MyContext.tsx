import React, { Component } from 'react';

export const lang = { en: { stuff: 'Yorba Linda' } };
export const data = { city: 'Yorba Linda' };
export const location = { city: 'Anaheim' };
export const LangContext = React.createContext(data);
export const DataContext = React.createContext(location);

export const getBlock = () => {
  const blockdata = [
    { id: 123, name: 'arnie', date: '2021-01-20' },
    { id: 345, name: 'jack', date: '2021-01-20' },
  ];
  for (var i = 0; i < blockdata.length; i++) {
    console.log('testing ' + blockdata[i].name);
  }
};
