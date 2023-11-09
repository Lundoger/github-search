import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { githubApi } from "../api/github.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from './reducers/githubSlice'

const rootReducer = combineReducers({
	[githubApi.reducerPath]: githubApi.reducer,
	userReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware) 
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch