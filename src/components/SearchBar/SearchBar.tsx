import React, { ReactFragment, useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import {
  searchAlbumAsync,
  setSearchTerm,
} from "../SearchResults/searchResultsSlice"
import "./SearchBar.scss"

export default function SearchBar({ placeholder = "search" }) {
  const [input, setInput] = useState("")
  const dispatch = useAppDispatch()
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(setSearchTerm(input))
    dispatch(searchAlbumAsync(input))
  }

  return (
    <div className="SearchBar">
      <form role="searchform" action="" onSubmit={handleSubmit}>
        <input
          data-testid="search-input"
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
