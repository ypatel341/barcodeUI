//imports for most tests

// import React from 'react';
// import { shallow } from 'enzyme';
// import Todo from '../src/components/Todo';

//this is an example of a snapshot test. see https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675

// describe('App', () => {
//   it('should render correctly in "debug" mode', () => {
//     // const component = shallow(<Todo onClick={function(){}} completed={true} text={sampleText}/>);
  
//     // expect(component).toMatchSnapshot();
//     exportAllDeclaration(
    
//   });

//simple logic test
test('Adding 1+1', () => {
    expect(1+1).toBe(2);
});