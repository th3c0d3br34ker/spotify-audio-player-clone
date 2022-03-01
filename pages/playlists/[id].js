import useSWR from 'swr'
import { useRouter } from "next/router";

import PlaylistSection from 'components/PlaylistSection';
import Sidebar from 'components/Sidebar';
import Layout from "containers/Layout";
import { fetcher } from 'utils';

export default function PlayListPage({ playlist }) {
  const router = useRouter()
  const { id } = router.query

  const { data, error } = useSWR(`/api/playlist?id=${id}`, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout title={data.playlistName}>
      <Sidebar />
      <PlaylistSection data={data} />
    </Layout>
  )
}
