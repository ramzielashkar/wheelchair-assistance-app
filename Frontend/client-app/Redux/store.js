import {configureStore} from '@reduxjs/toolkit';
import userSlice from './Slices/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

 const persistedReducer = persistReducer(persistConfig, userSlice)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]

  });

export const persistor = persistStore(store)