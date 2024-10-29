import { Box, Button, Stack } from '@mui/material';

import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import BookInfo from '../components/BookInfo';

const BookList = () => {
  const bookList = useAppSelector((state) => state.book.bookList);
  console.log(bookList);
  return (
    <div>
      <div>
        <div>
          <h1 color="white">Book List</h1>
          <Link to="/add-new-book">
            <Button>Add</Button>
          </Link>
          </div>
        </div>
        <div>
          <Stack spacing={8}>
            {bookList.map((book:any) => (
              <BookInfo
                key={book.id}
                title={book.title}
                author={book.author}
                id={book.id}
              />
            ))}
          </Stack>
        </div>
      </div>
  
  );
};

export default BookList;
