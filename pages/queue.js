import Sidebar from "components/Sidebar";
import Layout from "containers/Layout";
import QueueSection from "components/QueueSection"

export default function IndexPage() {
  return (
    <Layout title="Queue">
      <Sidebar />
      <QueueSection />
    </Layout>
  );
}
