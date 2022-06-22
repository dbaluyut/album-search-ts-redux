import React from "react"
import SearchBar from "./SearchBar"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { keyboard } from "@testing-library/user-event/dist/keyboard"

test("searchbar render with placeholder", () => {
  const { getByTestId } = render(<SearchBar />)
  const inputEl = getByTestId("search-input")
  expect(inputEl).toBeInTheDocument()
})
