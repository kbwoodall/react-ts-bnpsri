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
    name: string,
    id: number,
    bio?: string,
  }
  

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
