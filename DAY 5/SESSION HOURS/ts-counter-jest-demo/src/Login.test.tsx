import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import { Login } from './Login';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import userEvent from "@testing-library/user-event";



describe('Login component tests', () => {
  let container: any

  // beforeEach: Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.
  beforeEach(() => {
   // render the component on virtual dom
render(<Login />);

  

  })

  // to clear everything at the end so that tests don't interrupt each other
  afterEach(() => {
   // document.body.removeChild(container);
   // container.remove();
  })

  function getAllByTagName(
    container: HTMLElement,
    tagName: keyof JSX.IntrinsicElements,
  ) {
    return Array.from(container.querySelectorAll<HTMLElement>(tagName));
  }
  


  // Running test to render each input field
  it('Renders all input fields correctly', () => {
    // Selecting the input fields
   // const inputs = screen.getByRole('input',{name: /email/i});
  // render(<Login />);
    const email = screen.getByPlaceholderText('email')
    // Asserting that the input fields are rendered correctly
    expect(email).toBeInTheDocument();

    // Let's check the first and second input field with the name "email" and "password" respectively
  //  expect(inputs[0].nodeValue).toBe('email');
    //expect(inputs[1].nodeValue).toBe('password');
  });

  // Running test to render each button
  it('Renders all buttons correctly', () => {
    const buttonEl = screen.getByText(/Sign In/);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/Sign In/);

   // expect(onClick).toHaveBeenCalledTimes(1);


    
  });

})