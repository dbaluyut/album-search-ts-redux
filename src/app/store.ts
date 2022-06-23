import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import searchResultsReducer from "../components/SearchResults/searchResultsSlice"

export const store = configureStore({
  reducer: {
    searchState: searchResultsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
