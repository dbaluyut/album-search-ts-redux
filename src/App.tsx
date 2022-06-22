import "./App.css"
import AlbumCard from "./components/AlbumCard/AlbumCard"
import SearchBar from "./components/SearchBar/SearchBar"

function App() {
  return (
    <div className="App">
      <SearchBar />
      <AlbumCard album={albumData} />
    </div>
  )
}

export default App
