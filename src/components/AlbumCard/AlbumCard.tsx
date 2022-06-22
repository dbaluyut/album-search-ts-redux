import "./AlbumCard.scss"

type AlbumProps = {
  album: Album
}

type Album = {
  artistId: number
  collectionId: number
  artistName: string
  collectionName: string
  collectionCensoredName: string
  artworkUrl100: string
}

export default function AlbumCard({ album }: AlbumProps) {
  return (
    <div data-testid="card" className="AlbumCard">
      <img
        data-testid="albumimg"
        src={album.artworkUrl100}
        alt={album.collectionName}
      />
      <h2 role="artistname">{album.artistName}</h2>
      <h2 role="albumname">{album.collectionName}</h2>
    </div>
  )
}
