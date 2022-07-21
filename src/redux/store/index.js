import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import rootReducer from "../rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;