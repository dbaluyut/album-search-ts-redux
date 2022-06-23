import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import AlbumCard from "./AlbumCard"
import albumData from "../../mock/albumData"

test("album card renders correctly", () => {
  render(<AlbumCard album={albumData} />)

  const cardEl = screen.getByTestId("card")
  const imgEl = screen.getByTestId("albumimg")
  const albumNameEl = screen.getByRole("albumname")
  const artistNameEl = screen.getByRole("artistname")

  const testArr = [cardEl, imgEl, albumNameEl, artistNameEl]

  testArr.forEach((item) => expect(item).toBeInTheDocument())
})

test("album image has alt text", () => {
  render(<AlbumCard album={albumData} />)

  const imgEl = screen.getByTestId("albumimg")

  expect(imgEl.getAttribute("alt").length).toBeGreaterThan(0)
})
