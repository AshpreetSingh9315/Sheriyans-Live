import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserReducer";
import ProductReducer  from "./reducers/ProductReducer";

export const store = configureStore({
    reducer : {
        user: userReducer,
        products : ProductReducer,
    }
})