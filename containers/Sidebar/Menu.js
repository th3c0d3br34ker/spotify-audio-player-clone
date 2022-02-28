import Link from 'next/link';
import Icon from 'containers/Icons';

export default function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <Link href="/">
            <a className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
              <span>
                <Icon name="home" />
              </span>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
              <span>
                <Icon name="search" />
              </span>
              Search
            </a>
          </Link>
        </li>
        <li>
          <Link href="/playlists">
            <a className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
              <span>
                <Icon name="collection" />
              </span>
              Your Library
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
