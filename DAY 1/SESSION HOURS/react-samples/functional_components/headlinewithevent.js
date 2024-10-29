import userEvent from "@testing-library/user-event";
import { useState } from "react";

const HeadlineWithEvent = () => {
    const [welcome, setWelcome] = useState(
      'Hello Function Component!'
    );

    let [noOfClicks,setNoOfClicks]=useState(
      0
    );

    let [noOfLikes,setNoOfLikes]=useState(
      0
    );
    //event.target - input element
    //event.taraget.value - input element value
  
    const handleChange = event => setWelcome(event.target.value);
    const handleClick = event =>setNoOfClicks(noOfClicks++);
    const handleClickLikes = event =>setNoOfLikes(noOfLikes++);
    return (
      <div>
        <h1>{welcome}</h1>
        <h1>{noOfClicks} of times you clicked</h1>
  
        <h1>{noOfLikes} Likes</h1>
        <input type="text" value={welcome} onChange={handleChange} />
        <button onClick={handleClick} >Click Me!</button>
        <button onClick={handleClickLikes} >Like</button>
      </div>
    );
  };
  
  export default HeadlineWithEvent;
  