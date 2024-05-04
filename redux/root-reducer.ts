import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth.slice";
import productReducer from "./features/product.slice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: productReducer,
});

export default rootReducer;
