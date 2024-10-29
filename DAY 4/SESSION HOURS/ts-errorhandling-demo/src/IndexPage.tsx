import React from 'react';
import { BrowserRouter, Route, useParams, Link } from "react-router-dom";
import { DogPage } from './DogPage';


// A page that shows us a list of dog breeds to select from
const breeds = ["husky", "akita", "pitbull","demo"];
export const IndexPage = () => {
  return (
    <div>
      <h1>View some nice pictures of a dog breed</h1>
      <ul>
        {breeds.map(breed => (
          <li key={breed}>
            <Link to={`/dogs/${breed}/`}>{breed}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};