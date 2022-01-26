import React from 'react';
import { useState, useReducer, useEffect } from 'react';
import moment from 'moment';
import { FC, ReactElement } from 'react';
import { createContext, useContext } from 'react';
import { LangContext, data, DataContext, location } from './MyContext';

interface FormatDateProps {
  date: Date;
}
export function formatDate() {
  const dt = moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log('in formatDate ' + dt);
  return <p className="text-lg font-bold m-5"> {dt}</p>;
}
interface ShowTextProps {
  msg: string;
}
export function showText(imsg: ShowTextProps) {
  console.log('in ShowText ' + imsg.msg);
  return <p className="text-lg font-bold m-5"> {imsg.msg}</p>;
}

function Display() {
  const value = useContext(DataContext);

  var loopData: string = '';
  var i: number = 0;
  for (i = 0; i < 2; i++) {
    console.log( {value});
    loopData = value[i];
    console.log( loopData);
    //console.log( loopData);
    //console.log( loopData.date);
    //console.log( loopData.amt);
  }

  return <div>The info is {value[0].date}</div>;

  /*
{value}.map((person, id) => (
  <p key={id} className="text-lg font-bold m-5">
    Id {person.id} , {person.name}, {person.date}, {person.amt}
  </p>
))}
*/
}
// -----------------------------------------------------------------------
export function myhooks(): JSX.Element | null {
  const [count, setCount] = useState(0);
  let myObj = { msg: 'Format to chain' };

  return (
    <div>
      {showText(myObj)}
      {Display()}

      <p className="text-lg font-bold m-5">You clicked {count} times first</p>
      <button
        className="ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Format now
      </button>
    </div>
  );
}
// -----------------------------------------------------------------------
/*
 <p className="text-lg font-bold m-15"> testing </p>
export function mydemo(): JSX.Element | null {
  console.log('this is an exportable function in TypeScript. !!');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('You clicked ' + count + ' times wow');
  }, []);

  
  return (
    <div>
      <Display />
      <p className="text-lg font-bold m-5">You clicked {count} times again</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  ml-10"
        onClick={() => setCount(count + 1)}
      >
        Click me again
      </button>
    </div>
  );
}
function Display() {
    const value = useContext(LangContext);
    return <div className="text-lg font-bold m-5">Show Block chain</div>;
  }

  function myhooks(): JSX.Element | null {

    const [count, setCount] = useState(0);
    let myObj = { msg: 'Current Message from hooks' };

    return (
      <div>
        {showText(myObj)}
        {formatDate()}
        <p className="text-lg font-bold m-15"> testing </p>

        <p className="text-lg font-bold m-5">You clicked {count} times first</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          Click me
        </button>
      </div>
    );
  };

  

   //if (show) {
  console.log('in ShowText ' + msg);
  return <p style={{ color: 'blue' }}>{msg}</p>;
  //}
  //return null;
  //const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

interface FooProp {
  name: string;
  X: number;
  Y: number;
}
declare function AnotherComponent(prop: { name: string });
function ComponentFoo(prop: FooProp) {
  return <AnotherComponent name={prop.name} />;
}
const Button = (prop: { value: string }, context: { color: string }) => (
  <button />
);

test
<p style={{ color: 'blue' }}>You clicked {count} times again</p>
      <button onClick={() => setCount(count + 1)}>Click me again</button>

      const MyComponent: FC = () => { <>...</> }
*/
