import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./auth/authSlice";
import { TwSlice } from "./tw/twSlice";

export const Store = configureStore({
    reducer:
    {
        authSlice: AuthSlice.reducer,
        tw: TwSlice.reducer,
    }
})