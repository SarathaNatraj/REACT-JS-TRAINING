import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//import { Page404 } from "./Page404";

export const DogPage = () => {
    const { breed } = useParams();
    const [imageSrc, setimageSrc] = React.useState();
    //const [httpStatusCode, setHttpStatusCode] = React.useState();
  
    React.useEffect(() => {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(data => data.json())
        .then(data => setimageSrc(data.message));
    }, [breed]);
  
    // React.useEffect(() => {
    //     fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    //       .then(data => data.json())
    //       .then(data => {
    //         setHttpStatusCode(data.code)
    //         if (data.status === 'success') {
    //           setimageSrc(data.message)
    //         }
    //       });
    //   }, [breed]);
      // if (httpStatusCode === 404) {
      //   return <Page404 />
      // }

    return (
      <div>
        <div>
          <Link to="/">back</Link>
        </div>
        {!imageSrc && <p>Loading...</p>}
        {imageSrc && <img alt={`A nice ${breed}`} src={imageSrc} height={200} />}
      </div>
    );
  }