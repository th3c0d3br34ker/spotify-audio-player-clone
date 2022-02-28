import playlists from "public/playlists";


export default function handler(req, res) {
  if (req.method === "GET") {
    return res.json(playlists)
  }

  res.json({})
}
