import songs from "public/songs";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;

    const song = songs.find((item) => item.id === id)

    if (!song) return res.json({})

    return res.json(song)
  }

  return res.json({})
}
