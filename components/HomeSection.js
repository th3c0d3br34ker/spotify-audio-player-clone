import songs from "public/songs";

import Section from "./Section";
import Navbar from "containers/Navbar";

export default function HomeSection() {
  return (
    <main className="flex-auto overflow-auto">

      <Navbar />

      <div className="px-8 py-5">
        <div className="grid gap-y-8">
          <Section
            title="Recently played"
            items={songs}
          />
          <Section
            title="Spotify Originals"
            items={songs}
          />
          <Section
            title="Made For You"
            items={songs}
          />
        </div>
      </div>
    </main>
  )
}
