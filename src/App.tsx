import "./App.css"
import AlbumCard from "./components/AlbumCard/AlbumCard"
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResults from "./components/SearchResults/SearchResults"

function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
    </div>
  )
}

export default App
