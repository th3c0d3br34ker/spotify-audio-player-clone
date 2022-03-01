
import Navbar from "containers/Navbar";
import Hero from "./Hero";


export default function PlaylistSection({ data }) {
  return (
    <main className="flex-auto overflow-auto bg-gradient-to-b from-blue-600" >

      <Navbar />

      <div className="px-8 py-5">

        <Hero data={data} />

        <section>
          <div className="backdrop-blur-md bg-backdrop/30">
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        </section>
      </div >
    </main >
  )
}
