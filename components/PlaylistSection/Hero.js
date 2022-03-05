
import { forHumans } from "utils";

export default function Hero({ data }) {
  const { image, playlistName, createdBy, totalDuration, numberOfSongs } = data

  return (
    <section className="flex flex-row">

      <div className="rounded-lg">
        <img src={image} width="200" height="200" className="rounded-lg" />
      </div>

      <div className="flex flex-col m-8">
        <p className="text-sm font-bold">PLAYLIST</p>
        <h1 className="text-8xl font-bold">{playlistName}</h1>
        <p className="text-sm">
          {createdBy} • {numberOfSongs} songs, {forHumans(totalDuration)}
        </p>
      </div>
    </section>
  )
}
