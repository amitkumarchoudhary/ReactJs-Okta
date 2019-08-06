import React from 'react';
// import ReactDOM from 'react-dom';
import Demo from './Demo';
import Demo2 from './Demo2';

import { create } from 'react-test-renderer'

describe('My first snapshot test demo 1',()=>{
    test('testing app button demo', () => {
    let tree = create(<Demo />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
describe('My first snapshot test demo2',()=>{
    test('testing app button', () => {
    let tree = create(<Demo2 />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
