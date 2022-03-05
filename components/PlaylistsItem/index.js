import PlaylistItem from "./PlaylistItem";
import Title from "./Title";

export default function Section({ title, more = false, items }) {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid grid-cols-5 gap-x-6">
        {items.map(item => <PlaylistItem item={item} key={item.id} />)}
      </div>
    </section>
  )
}
