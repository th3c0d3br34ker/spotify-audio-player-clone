import Head from "next/head";

import Player from "components/Player";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="root">
        <div className="wrapper">
          {children}
        </div>
        <Player />
      </div>
    </>
  )
}
