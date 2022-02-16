import { push } from "connected-react-router";
import { Action, createActions, handleActions } from "redux-actions";
import { call, put, select, takeEvery } from "redux-saga/effects";
import TokenService from "../../service/TokenService";
import UserService from "../../service/UserService";
import { AuthState, Loginreqtype } from "../../types";

const initialstate = {
  token: null,
  loading: false,
  error: null,
};

const prefix = "BOOKCAFE/auth";
export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

const reducer = handleActions<AuthState, string>(
  {
    PENDING: (state) => ({ ...state, loading: true, error: null }),
    SUCCESS: (state, action) => ({
      token: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      token: action.payload,
      loading: false,
      error: action.payload,
    }),
  },
  initialstate,
  { prefix }
);

export default reducer;

export const { login, logout } = createActions("LOGIN", "LOGOUT", { prefix });
function* loginSaga(action: Action<Loginreqtype>) {
  try {
    yield put(pending());
    const token: string = yield call(UserService.login, action.payload);
    TokenService.set(token);
    yield put(success(token));
    yield put(push("/"));
  } catch (error) {
    yield put(fail(new Error("UNKNOWN_ERROR")));
  }
}
function* logoutSaga() {
  try {
    yield put(pending());
    const token: string = yield select((state) => state.auth.token);
    yield call(UserService.logout, token);
    TokenService.set(token);
  } catch (error) {
  } finally {
    TokenService.remove();
    yield put(success(null));
  }
}
export function* AuthSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}
