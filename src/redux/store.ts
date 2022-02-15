import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduce from "./modules/reduce";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./modules/RootSaga";
const Saga = createSagaMiddleware();
const store = createStore(reduce, composeWithDevTools(applyMiddleware()));
Saga.run(RootSaga);
export default store;
