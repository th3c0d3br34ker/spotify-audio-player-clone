import Link from "next/link";

export default function Title({ title, more = false }) {
  return (
    <header className="flex items-center justify-between mb-4">

      <Link href={more ?? '/'}>
        <a>
          <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">{title}</h3>
        </a>
      </Link>

      {more && (
        <Link href={more}>
          <a className="text-xs hover:underline font-semibold uppercase text-link tracking-wider">
            SEE ALL
          </a>
        </Link>
      )}
    </header>
  )
}
