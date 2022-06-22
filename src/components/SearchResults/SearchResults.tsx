import ALBUM_DATA_ARR from "../../mock/albumDataArr"
import AlbumCard from "../AlbumCard/AlbumCard"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  searchAlbumAsync,
  selectsearchResults,
} from "./searchResultsSlice"
import "./SearchResults.scss"
import { useEffect } from "react"

export default function SearchResults() {
  const results = useAppSelector(selectsearchResults)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(searchAlbumAsync("eminem"))
  }, [])
  return (
    <section role="searchresults" className="SearchResults">
      <h1>search term here</h1>
      <div className="grid-container">
        {results.map((album) => {
          return <AlbumCard album={album} />
        })}
      </div>
    </section>
  )
}
