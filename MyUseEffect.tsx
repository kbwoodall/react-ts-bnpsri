import React from 'react';
import { useState, useReducer, useEffect } from 'react';
import moment from 'moment';
import { FC, ReactElement } from 'react';
import { createContext, useContext } from 'react';
import { data, DataContext } from './MyContext';

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
  //console.log('in ShowText ' + imsg.msg);
  return <p className="text-lg font-bold m-5"> {imsg.msg}</p>;
}
// -----------------------------------------------------------------------
export function myhooks(): JSX.Element | null {
  const [count, setCount] = useState(0);
  let myObj = { msg: 'Format to chain ' };
  const value: Array = (useContext(DataContext));
  console.log('Value is ' + value[0].name) + ' ' + value;

  for (var i:number = 0; i < 2; i++) {
  }

  return (
    <div>
      {showText(myObj)}
      <div>
        {(value).map((person, id) => (
          <p key={id} className="text-lg font-bold m-5">
            Id {person.id} , {person.name}, {person.ts}, {person.amt},{' '}
            {person.fchn}, {person.tchn}
          </p>
        ))}
      </div>

      <button
        className="ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => alert("ok")}
      >
        Format now
      </button>
    </div>
  );
}
// -----------------------------------------------------------------------
/*

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

function Display() {
  const value = useContext(DataContext);

  var loopData: string = '';
  var i: number = 0;
  for (i = 0; i < 2; i++) {
    console.log({ value });
    loopData = value[i].date;
    console.log(loopData);
    let date1 = value[0].date;
    const date11 = new Date(date1);
    let date2 = value[1].date;
    console.log(date11);
  }

  return <div>The info is {value[0].date}</div>;
}
<p className="text-lg font-bold m-5">You clicked {count} times first</p>
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


{value}.map((person, id) => (
  <p key={id} className="text-lg font-bold m-5">
    Id {person.id} , {person.name}, {person.date}, {person.amt}
  </p>
))}

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
