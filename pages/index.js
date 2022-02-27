import HomeSection from "components/Home";
import Player from "components/Player";
import Sidebar from "components/Sidebar";

export default function IndexPage() {
  return (
    <div className="root">
      <div className="wrapper">
        <Sidebar />
        <HomeSection />
      </div>
      <Player />
    </div >
  );
}
