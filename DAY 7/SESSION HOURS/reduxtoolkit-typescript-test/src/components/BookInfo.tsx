

import { useAppDispatch } from '../hooks';
import { deleteBook } from '../redux/bookSlice';
import { useHistory } from 'react-router-dom';

const BookInfo = ({
  title,
  author,
  id,
  ...rest
}: {
  title: string | undefined;
  author: string | undefined;
  id: string;
}) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const redirect = (id: string) => {
    history.push(`/update-book/${id}`);
  };

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h2 >{author}</h2>
      </div>
      <div>
        <h1
          color="#1a202c"
          aria-label=""
          
          
          onClick={() => dispatch(deleteBook({ id }))}
        >Delete</h1>
        <h1
          color="#1a202c"
          aria-label=""
          
          onClick={() => redirect(id)}>Edit</h1>
        
      </div>
    </div>
  );
};

export default BookInfo;
