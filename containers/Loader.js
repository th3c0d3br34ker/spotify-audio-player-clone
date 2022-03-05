import Sidebar from "components/Sidebar";
import Layout from "./Layout";

export default function Loader() {
  return (
    <Layout title="Loading...">
      <Sidebar isLoading />
      <div className="flex justify-center self-center w-full">
        <span className="circle animate-loader"></span>
        <span className="circle animate-loader animation-delay-200"></span>
        <span className="circle animate-loader animation-delay-400"></span>
      </div>
    </Layout>
  );
}
