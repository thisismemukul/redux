import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import authReducer from "./auth/authReducers";

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
});

export default rootReducer;