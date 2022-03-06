import SongItem from "./SongItem";
import Title from "./Title";

export default function Section({ title, more = false, items }) {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6">
        {items.map(item => <SongItem item={item} key={item.id} />)}
      </div>
    </section>
  )
}
