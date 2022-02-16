import { connectRouter } from "connected-react-router";
import { History } from "history";
import books from "./books";
import { combineReducers } from "redux";
import auth from "./auth";
const reduce = (history: History<unknown>) =>
  combineReducers({ auth, books, router: connectRouter(history) });
export default reduce;
