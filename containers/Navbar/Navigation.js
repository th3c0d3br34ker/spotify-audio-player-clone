import Icon from "containers/Icons"
import { useRouter } from "next/router"

export default function Navigation() {

  const router = useRouter()

  return (
    <nav className="flex items-center gap-x-4">
      <button onClick={() => router.back()} className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
        <Icon size={22} name="prev" />
      </button>
      <button onClick={() => router.push("/")} className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
        <Icon size={22} name="next" />
      </button>
    </nav >
  )
}
