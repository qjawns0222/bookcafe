import { all } from "redux-saga/effects";
import { AuthSaga } from "./auth";

export default function* RootSaga() {
  yield all([AuthSaga()]);
}
