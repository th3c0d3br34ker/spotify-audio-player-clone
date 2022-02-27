import Section from "./Section";
import songs from "public/songs";

export default function HomeSection() {
  return (
    <main className="flex-auto overflow-auto">

      {/* <Navbar /> */}

      <div className="px-8 py-5">
        <div className="grid gap-y-8">
          <Section
            title="Recently played"
            more="/blabla"
            items={songs}
          />
          <Section
            title="Spotify Originals"
            more="/blabla"
            items={songs}
          />
          <Section
            title="Made For You"
            more="/blabla"
            items={songs}
          />
        </div>
      </div>
    </main>
  )

}
