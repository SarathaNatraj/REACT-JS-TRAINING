import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter,Routes } from 'react-router-dom';
import { IndexPage } from './IndexPage';
import { DogPage } from './DogPage';
//import { Page404 } from './Page404';

export const App = () => {
  return (
    <BrowserRouter>
<Routes> 
      <Route path="/" element={<IndexPage/>} />
      <Route path="/dogs/:breed/" element={<DogPage/>} />
      {/* <Route element={<Page404/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}