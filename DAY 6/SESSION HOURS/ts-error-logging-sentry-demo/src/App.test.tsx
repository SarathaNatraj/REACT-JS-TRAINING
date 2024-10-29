import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import { getValue } from '@testing-library/user-event/dist/utils';
import BadCounter from './BadCounter';

test('simple counter app visibitity testing', () => {
  //Arrange
  render(<App />);

  //Act
  const displayElement = screen.getByText(/Simple Counter/i);
  const counterElement = screen.getByTestId(/counter/);
  const incrementButton = screen.getByTestId(/increment/);

  //Assertion
  expect(displayElement).toBeInTheDocument();
  expect(counterElement).toBeInTheDocument();
  expect(counterElement).toHaveTextContent("0");
  expect(incrementButton).toBeInTheDocument();

});


test('simple counter app increment function testing', () => {
  //Arrange
  render(<BadCounter />);

  const incrementButton = screen.getByTestId(/increment/);
  const counterElement = screen.getByTestId(/counter/);

  expect(counterElement).toHaveTextContent("0");

  //interacting with components - Action
  //fireEvent.click(incrementButton);
 // fireEvent.click(incrementButton);

  //Assertion
//  expect(counterElement).toHaveTextContent("2");
//  expect(incrementButton).toBeCalledTimes(2);

})


test('simple counter app increment function testing, if clicked 3 times it will show an error', () => {
  //Arrange
  render(<BadCounter />);
  let actualerrorMsg;

  const incrementButton = screen.getByTestId(/increment/);
  const counterElement = screen.getByTestId(/counter/);

  expect(counterElement).toHaveTextContent("0");

  try{
  //interacting with components - Actioncls
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  }catch(e:any){
    actualerrorMsg = e.message;
    console.log(actualerrorMsg);
  }
  //Assertion
  const expectedMsg = "I crashed!";
  expect(actualerrorMsg).toEqual(expectedMsg);
//  expect(incrementButton).toBeCalledTimes(2);

})