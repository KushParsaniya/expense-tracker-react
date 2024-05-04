import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js";
import expenseReducer from "./slices/expenseSlice.js";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'] // only auth will be persisted
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    expense: expenseReducer
  }
})

export const persistor = persistStore(store)

export default store;

