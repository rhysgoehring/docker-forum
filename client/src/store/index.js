import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "../reducers";

const middleware = [thunk, logger];

const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(...middleware))
);

export default store;
