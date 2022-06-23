import ALBUM_DATA_ARR from "../../mock/albumDataArr"
import AlbumCard from "../AlbumCard/AlbumCard"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  searchAlbumAsync,
  selectsearchResults,
  loadMoreResults,
} from "./searchResultsSlice"
import "./SearchResults.scss"
import { useEffect } from "react"

export default function SearchResults() {
  const dispatch = useAppDispatch()

  const { searchResults, searchTerm, status, arrayIndex } =
    useAppSelector(selectsearchResults)

  const paginatedSearchResults = searchResults.slice(0, arrayIndex)

  useEffect(() => {
    dispatch(searchAlbumAsync(searchTerm))
  }, [])

  function handleLoadMore() {
    dispatch(loadMoreResults())
  }

  return (
    <section role="searchresults" className="SearchResults">
      {searchResults.length === 0 ? (
        <h1>search term here</h1>
      ) : (
        <h1>
          {searchResults.length} results for "{searchTerm}"
        </h1>
      )}
      <div role="resultscontainer" className="grid-container">
        {searchResults &&
          paginatedSearchResults.map((album) => {
            return <AlbumCard album={album} />
          })}
      </div>
      {searchResults.length > 0 && (
        <button role="loadmorebutton" onClick={handleLoadMore}>
          load more
        </button>
      )}
    </section>
  )
}
