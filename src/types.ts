import { RouterState } from "connected-react-router";
import { AnyAction, Reducer } from "redux";

export type Loginreqtype = { email: string; password: string };
export interface RootState {
  auth: AuthState;
  books: BookState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}
export interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}
export interface BookType {}
export interface BookState {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
}
