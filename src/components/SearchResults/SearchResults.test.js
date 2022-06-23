import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import SearchResults from "./SearchResults"
import { Provider } from "react-redux"
import { store } from "../../app/store"

//TODO - test needs to be for async code
test("results container to be empty when there is no search results", () => {
  const { getByRole } = render(
    <Provider store={store}>
      <SearchResults />
    </Provider>
  )
  const resultsContainerEL = getByRole("resultscontainer")
  const cardEls = resultsContainerEL.querySelectorAll("AlbumCard")

  expect(cardEls.length).toBe(0)
})

test("load more button only render when there are search results", () => {
  render(
    <Provider store={store}>
      <SearchResults />
    </Provider>
  )

  const buttonEl = screen.queryByRole("loadmore")
  expect(buttonEl).not.toBeInTheDocument()
})
