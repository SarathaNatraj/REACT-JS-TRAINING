import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage: storage
}

const reducer = combineReducers({
    auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultSerializer => getDefaultSerializer({ serializableCheck: false })
})

export default store;