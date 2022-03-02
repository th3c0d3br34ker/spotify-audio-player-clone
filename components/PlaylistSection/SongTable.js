import useSWR from "swr";

import Icon from "containers/Icons";
import { fetcher, formatTime } from "utils";

function SongListItem({ id, idx }) {
  const { data, error } = useSWR(`/api/songs?id=${id}`, fetcher)

  if (error) return null;
  if (!data) return null;

  return (
    <tr>
      <td className="py-4">{idx}</td>
      <td className="text-left py-4 flex">
        <img src={data.image} width="50" className="h-12 w-12 mr-4 rounded-lg" />
        <span className="space-y-2 text-left">
          {data.name}
          <br />
          <span className="text-sm">{data.album}</span>
        </span>
      </td>
      <td className="py-4">{data.artist}</td>
      <td className="py-4">{formatTime(data.duration)}</td>
    </tr>
  )
}

export default function SongTable({ data }) {
  return (
    <section className="backdrop-blur-md bg-backdrop/30 mt-2 pb-8">
      <div className="flex flex-row">
        <button className="bg-primary p-4 m-6 text-black rounded-full">
          <Icon name="play" />
        </button>
      </div>
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
          {data.songsArray.map((songId, idx) =>
            <SongListItem id={songId} idx={idx + 1} />
          )}
        </tbody>
      </table >
    </section >
  )
}
