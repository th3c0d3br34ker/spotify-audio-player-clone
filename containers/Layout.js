import Player from "components/Player";

export default function Layout({ title, children }) {
  return (
    <div className="root">
      <div className="wrapper">
        {children}
      </div>
      <Player />
    </div>
  )
}
