import React from 'react';
import { useState, useReducer, useEffect } from 'react';
import { FC, ReactElement } from 'react';

export function mydemo() {
  // logic will go here ..
  console.log('this is exportable function in TypeScript. !!');
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('You clicked ' + count + ' times wow');
  }, []);

  type ChildProps = {
    name: string;
    id: number;
    bio?: string;
  };

  const Child: FC<ChildProps> = (): ReactElement => {
    const [clickA, setClickA] = useState(0);
    const [clickB, setClickB] = useState(0);
  
    useEffect(() => {
      if (clickA === 0) {
        console.log('Component loaded!')
      } else {
        console.log('Button A was clicked!');
      }
    }, [clickA]);
  
    return (
      <div>
        <p>A Clicks: {clickA}</p>
        <p>B Clicks: {clickB}</p>
        <button onClick={() => setClickA(clickA + 1)}>Button A</button>
        <button onClick={() => setClickB(clickB + 1)}>Button B</button>
        <p id="click-a"></p>
      </div>
    )
  };
  

  return <div>{'xxx'}</div>;

  /*

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
}
