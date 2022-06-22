import React, { ReactFragment, useState } from "react"
import "./SearchBar.scss"

export default function SearchBar() {
  const [input, setInput] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(input)
  }

  return (
    <div className="SearchBar">
      <form action="" onSubmit={handleSubmit}>
        <input
          data-testid="search-input"
          type="text"
          placeholder="search"
          value={input}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
