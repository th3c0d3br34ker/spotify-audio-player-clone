
import Navbar from "containers/Navbar";
import Hero from "./Hero";
import SongTable from "./SongTable";


export default function PlaylistSection({ data }) {
  return (
    <main className="flex-auto overflow-auto bg-gradient-to-b from-blue-600" >

      <Navbar />

      <div className="px-8 py-5">
        <Hero data={data} />
        <SongTable data={data} />
      </div >
    </main >
  )
}
