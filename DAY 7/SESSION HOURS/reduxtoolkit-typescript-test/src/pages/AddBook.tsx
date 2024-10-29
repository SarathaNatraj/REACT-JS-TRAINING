import {
  Box,
  Button,
  
  FormControl,
  FormLabel,
  
  Input
} from "@mui/material";



import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addNewBook, updateBook } from "../redux/bookSlice";
import { v4 as uuidv4 } from "uuid";
import { useParams, useHistory } from "react-router-dom";

const AddBook = () => {
  const { id } = useParams<{ id?: string }>();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const book = useAppSelector((state) =>
    state.book.bookList.find((book:any) => book.id === id)
  );

  const [title, setTitle] = useState<string | undefined>(book?.title || "");
  const [author, setAuthor] = useState<string | undefined>(book?.author || "");

  const handleOnSubmit = () => {
    if (id) {
      editBook();
      return;
    }
    dispatch(addNewBook({ author, title, id: uuidv4() }));
    clearInputs();
  };

  const editBook = () => {
    if (id) {
      dispatch(updateBook({ author, title, id }));
      clearInputs();
      history.push("/");
    }
  };

  const clearInputs = () => {
    setTitle("");
    setAuthor("");
  };

  return (
    <div
      
    >
      <Box width="50%">
        <div>
          <h1 color="white" data-testid="header">
            {id ? "Update Book" : "Add Book"}
          </h1>
        </div>
        <FormLabel >Title</FormLabel>
        <Input
          value={title}
         
          placeholder="The Lord of the Rings"
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <FormLabel>
          Author
        </FormLabel>
        <Input
          value={author}
         
          placeholder="J.R.R Tolkien"
          onChange={(e) => setAuthor(e.currentTarget.value)}
        />
        <Button
         
          type="submit"
          onClick={handleOnSubmit}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default AddBook;
