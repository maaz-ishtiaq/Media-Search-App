import { configureStore } from '@reduxjs/toolkit';
import searchSlice from "./features/searchSlice"
import collectionStore from "./features/collectionSlice"
export const store = configureStore({
    reducer:{
        search: searchSlice,
        collection:collectionStore
    }
})