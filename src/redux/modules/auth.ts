import { Action, createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import TokenService from "../../service/TokenService";
import UserService from "../../service/UserService";
import { Loginreqtype } from "../../types";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}
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
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}
function* logoutSaga() {}
export function* AuthSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}
