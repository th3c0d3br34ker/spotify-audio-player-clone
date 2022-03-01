import Link from "next/link"
import useSWR from "swr"

import { fetcher } from "utils"

export default function Playlists() {
  const { data, error } = useSWR("/api/playlists", fetcher)

  if (error) return null
  if (!data) return null

  return (
    <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
      <ul>
        {data.map(({ id, playlistName }) => (
          <Link href={`playlists/${id}`}>
            <a className="text-s text-link hover:text-white flex h-8 items-center">
              {playlistName}
            </a>
          </Link>
        ))}
      </ul>
    </nav>)
}
