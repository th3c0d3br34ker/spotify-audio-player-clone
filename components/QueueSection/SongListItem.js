import useSWR from "swr";
import { useSelector } from "react-redux";

import { fetcher, secondsToTime } from "utils";

export default function SongListItem({ id, idx }) {

  const { playing, current } = useSelector(state => state.player)
  const { data, error } = useSWR(`/api/songs?id=${id}`, fetcher)

  if (error) return null;
  if (!data) return null;

  const isCurrentItem = (current?.id === data.id && playing)

  return (
    <tr>
      <td className="py-4">{idx}</td>
      <td className="text-left py-4 flex">
        <img src={data.image} className="h-12 w-12 mr-4 rounded-lg" />
        <span
          className={`space-y-2 text-left ${isCurrentItem ? "text-primary" : ""}`}>
          {data.name}
          <br />
          <span className="text-sm text-white">{data.album}</span>
        </span>
      </td>
      <td className="py-4">{data.artist}</td>
      <td className="py-4">{secondsToTime(data.duration)}</td>
    </tr>
  )
}
