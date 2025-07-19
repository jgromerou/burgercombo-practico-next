import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './slices/orderSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = () => {
    return configureStore({
    reducer: {
        order: orderReducer
    }
})
}


export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;