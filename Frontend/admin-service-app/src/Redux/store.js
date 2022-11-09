import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }

 const persistedReducer = persistReducer(persistConfig, userSlice)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]

  });

export const persistor = persistStore(store)