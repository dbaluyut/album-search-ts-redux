import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import { Album } from "../AlbumCard/AlbumCard"
import ALBUM_DATA_ARR from "../../mock/albumDataArr"
import axios from "axios"

export interface searchResultsState {
  searchResults: Album[]
  status: "idle" | "loading" | "failed"
  searchTerm: string
  arrayIndex: number
}

const initialState: searchResultsState = {
  searchResults: [],
  searchTerm: "",
  status: "idle",
  arrayIndex: 10,
}

export const searchAlbumAsync = createAsyncThunk(
  "searchResults/getSearchResults",
  async (searchTerm: string) => {
    const response = await axios.get(
      `https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=album&attribute=artistTerm&limit=200`
    )
    return response.data
  }
)

export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState,

  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    loadMoreResults: (state) => {
      state.arrayIndex += 5
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(searchAlbumAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(searchAlbumAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.searchResults = action.payload.results
      })
      .addCase(searchAlbumAsync.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const { setSearchTerm, loadMoreResults } =
  searchResultsSlice.actions

export const selectsearchResults = (state: RootState) =>
  state.searchState

export default searchResultsSlice.reducer
