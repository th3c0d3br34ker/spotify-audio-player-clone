import HomeSection from "components/HomeSection";
import Sidebar from "components/Sidebar";
import Layout from "containers/Layout";

export default function IndexPage() {
  return (
    <Layout title="Home">
      <Sidebar />
      <HomeSection />
    </Layout>
  );
}
