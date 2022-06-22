import React from "react"
import SearchBar from "./SearchBar"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("searchbar render with placeholder", () => {
  const { getByTestId } = render(<SearchBar />)
  const inputEl = getByTestId("search-input")
  expect(inputEl).toBeInTheDocument()
  expect(inputEl.getAttribute("placeholder")).toBe("search")
})
