import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduce from "./modules/reduce";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./modules/RootSaga";
import { routerMiddleware } from "connected-react-router";
import history from "../history";
import TokenService from "../service/TokenService";

const create = () => {
  const token = TokenService.get();
  const Saga = createSagaMiddleware();
  const store = createStore(
    reduce(history),
    { auth: { token, loading: false, error: null } },
    composeWithDevTools(applyMiddleware(Saga, routerMiddleware(history)))
  );
  Saga.run(RootSaga);
  return store;
};

export default create;
