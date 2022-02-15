import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduce from "./modules/reduce";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./modules/RootSaga";
const Saga = createSagaMiddleware();
const create = () => {
  const store = createStore(reduce, composeWithDevTools(applyMiddleware(Saga)));
  Saga.run(RootSaga);
  return store;
};

export default create;
