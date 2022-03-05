import playlists from "public/playlists";

import PlaylistsItem from "./PlaylistsItem";
import Navbar from "containers/Navbar";

export default function PlaylistsSection() {
  return (
    <main className="flex-auto overflow-auto">

      <Navbar />

      <div className="px-8 py-5">
        <div className="grid gap-y-8">
          <PlaylistsItem
            title="Favourites"
            items={playlists}
          />
        </div>
      </div>
    </main>
  )
}
