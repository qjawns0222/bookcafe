import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "../components/Book";
import { BookType, RootState } from "../types";
import { getBooks as getBooksSagaStart } from "../redux/modules/books";

export default function BookContainer() {
  const dispatch = useDispatch();
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );
  const getBooks = useCallback(() => {
    dispatch(getBooksSagaStart());
  }, [dispatch]);
  return <Book books={books} loading={loading} getBooks={getBooks} />;
}
