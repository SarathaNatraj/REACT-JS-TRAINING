import { Link } from "react-router-dom";
import error from '../public/images/404-error-page-not-found.jpg'

// Our custom 404 component (normally implemented in ./Page404.jsx)
export const Page404 = () => {
    return (
        <div>
             <div>
                <Link to="/">back</Link>
            </div>
        
            <img alt={'A nice breed not available.'} src={process.env.PUBLIC_URL + '/images/404-error-page-not-found.jpg'} height={200} />
      </div>
      );
    }