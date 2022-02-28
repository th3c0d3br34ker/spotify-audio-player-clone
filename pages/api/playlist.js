import playlists from "public/playlists";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;

    const playlist = playlists.find((item) => item.id === id)

    if (!playlist) return res.json({})

    return res.json(playlist)
  }

  return res.json({})
}
