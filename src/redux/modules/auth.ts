import { createActions, handleActions } from "redux-actions";

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

export function* AuthSaga() {}
