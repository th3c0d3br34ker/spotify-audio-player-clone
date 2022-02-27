import Icon from "containers/Icons"

export default function InstallApp() {
  return (
    <a href="#" className="h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white gap-x-4 items-center px-6">
      <Icon name="download" size={20} />
      Install App
    </a>
  )
}
