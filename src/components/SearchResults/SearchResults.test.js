import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import SearchResults from "./SearchResults"
import { Provider } from "react-redux"
import { store } from "../../app/store"

//TODO - test needs to be for async code
test("results container to be empty when there is no search results", async () => {
  const { getByRole } = render(
    <Provider store={store}>
      <SearchResults />
    </Provider>
  )
  const resultsContainerEL = getByRole("resultscontainer")
  const cardEls = resultsContainerEL.querySelectorAll("AlbumCard")

  expect(cardEls.length).toBe(0)
})
