import { push } from "connected-react-router";
import { Action, createActions, handleActions } from "redux-actions";
import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import BookService from "../../service/BookService";
import { BookReqType, BookState, BookType } from "../../types";

const initialstate: BookState = {
  books: null,
  loading: false,
  error: null,
};
const prefix = "bookcafe/books";

export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);
const reducer = handleActions<BookState, BookType[]>(
  {
    PENDING: (state) => ({ ...state, loading: true, error: null }),
    SUCCESS: (state, action) => ({
      books: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,

      loading: false,
      error: action.payload,
    }),
  },
  initialstate,
  { prefix }
);
export default reducer;
export const { getBooks, addBook } = createActions("GET_BOOKS", "ADD_BOOK", {
  prefix,
});
function* getBooksSaga() {
  try {
    yield put(pending());
    const token: string = yield select((state) => state.auth.token);
    const books: BookType[] = yield call(BookService.getBooks, token);
    yield put(success(books));
  } catch (error) {
    yield put(fail(new Error("UNKNOWN_ERROR")));
  }
}
function* addBookSaga(action: Action<BookReqType>) {
  try {
    yield put(pending());
    const token: string = yield select((state) => state.auth.token);
    const book: BookType = yield call(
      BookService.addBook,
      token,
      action.payload
    );
    const books: BookType[] = yield select((state) => state.books.books);
    yield put(success([...books, book]));
    yield put(push("/"));
  } catch (error) {
    yield put(fail(new Error("UNKNOWN_ERROR")));
  }
}
export function* rootSaga() {
  yield all([getBooksSaga()]);
}
export function* bookSaga() {
  yield takeLatest(`${prefix}/GET_BOOKS`, getBooksSaga);
  yield takeEvery(`${prefix}/ADD_BOOK`, addBookSaga);
}
