import { Button,  Box} from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
     
      <Box>
        <Link to="/">
          <Button
               >
          
            Library App
          </Button>
        </Link>
      </Box>

      <Box>
        <Link to="/">
          <Button
          >
            List Books
          </Button>
        </Link>
        <Link to="/add-new-book">
          <Button
           >
            Add Book
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Navbar;
