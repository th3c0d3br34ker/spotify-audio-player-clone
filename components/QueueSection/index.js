import { useSelector } from "react-redux";

import Navbar from "containers/Navbar";
import SongListItem from "./SongListItem";

export default function PlaylistsSection() {
  const { current, queue } = useSelector(state => state.player)

  console.log(current, queue);

  if (!queue) return null;

  return (
    <main className="flex-auto overflow-auto">

      <Navbar />

      <div className="px-8 py-5">
        <div className="grid gap-y-8">
          <section>
            <h3 className="text-2xl text-white font-semibold tracking-tight">
              Queue
            </h3>

            <table className="min-w-full text-center">
              <thead className="border-b-2">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th
                    scope="col"
                    className="text-left px-0 py-4 font-thin">
                    TITLE
                  </th>
                  <th scope="col" className="px-6 py-4 font-thin">ARTIST</th>
                  <th scope="col" className="px-6 py-4 font-thin">DURATION</th>
                </tr>
              </thead>
              <tbody>
                {queue.songsArray?.map((songId, idx) =>
                  <SongListItem id={songId} idx={idx + 1} />
                )}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </main>
  )
}
