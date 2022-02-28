import Link from "next/link";
import Image from "next/image";

import Icon from "containers/Icons";
import Menu from "containers/Sidebar/Menu";
import Playlists from "containers/Sidebar/Playlists";
import InstallApp from "containers/Sidebar/InstallApp";

export default function Sidebar() {
  return (
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
      <Link href="/">
        <a className="mb-7 px-6">
          <Image
            height="40"
            width="131"
            alt="spotify logo"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          />
        </a>
      </Link>

      <Menu />

      <nav className="mt-6">
        <ul>
          <li>
            <Link href="/">
              <a className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
                <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
                  <Icon name="plus" size={12} />
                </span>
                Create Playlist
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
                <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100">
                  <Icon name="heartFilled" size={12} />
                </span>
                Liked Songs
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <Playlists />

      <InstallApp />

      {/* Add other components */}

    </aside>)
}
