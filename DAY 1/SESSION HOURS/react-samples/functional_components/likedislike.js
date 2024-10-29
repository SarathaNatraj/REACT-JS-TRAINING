import {useState} from "react";
import Header from "./Header";
function LikeAndDislike() {
    let [noOfLikes, setNoOfLikes] = useState(
        0
    );

    let [noOfDisLikes, setNoOfDisLikes] = useState(
        0
    );

    const handleLikes = event =>setNoOfLikes(noOfLikes++);
    const handleDisLikes = event =>setNoOfDisLikes(noOfDisLikes++);
    
    return (
        <div>

        <Header />
            <div class="a2">
                <img src="../../images/control_statements.png" width="220px" height="200px" />
            </div>
            <h1>{noOfLikes} Likes</h1>
            <h1>{noOfDisLikes} DisLikes</h1>
            <button onClick={handleLikes} >Like</button>
            <button onClick={handleDisLikes} >DisLike</button>
      
      
        </div>
    )
}
export default LikeAndDislike;