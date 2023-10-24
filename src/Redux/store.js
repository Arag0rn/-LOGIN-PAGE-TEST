
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/slice";
import { tableReducer } from "./Table/slice";





export const store = configureStore({
  reducer: {
    auth:  authReducer,
    table: tableReducer,
  }
});





