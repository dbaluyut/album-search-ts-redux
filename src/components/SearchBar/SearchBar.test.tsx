import React from "react"
import SearchBar from "./SearchBar"
import { fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Provider } from "react-redux"
import { store } from "../../app/store"

test("searchbar renders with placeholder", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  )
  const inputEl = getByTestId("search-input")
  expect(inputEl).toBeInTheDocument()
  expect(inputEl.getAttribute("placeholder")).toBe("search")
})

test("input stores correct value onChange", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  )
  const inputEl = getByTestId("search-input")
  fireEvent.change(inputEl, {
    target: {
      value: "123abc",
    },
  })
  expect(inputEl.getAttribute("value")).toBe("123abc")
})
