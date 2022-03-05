import PlaylistsSection from "components/PlaylistsSection";
import Sidebar from "components/Sidebar";
import Layout from "containers/Layout";

export default function IndexPage() {
  return (
    <Layout title="Playlists">
      <Sidebar />
      <PlaylistsSection />
    </Layout>
  );
}
