import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './reducer';

export const store = configureStore( {
    reducer:storeReducer,
});

