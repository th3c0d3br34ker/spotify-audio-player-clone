import { useRouter } from "next/router"

import Navigation from "./Navigation"
import UserAvatar from "./UserAvatar"

export default function Navbar() {

  const router = useRouter('/search')

  console.log(router.pathname)

  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10">
      <Navigation />
      <UserAvatar />
    </nav>
  )
}
