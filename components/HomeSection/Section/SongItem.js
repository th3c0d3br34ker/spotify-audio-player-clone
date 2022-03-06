import Image from "next/image";
import Link from "next/link";

import Icon from "containers/Icons";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "store/player";

export default function SongItem({ item }) {
  const dispatch = useDispatch()

  const { current, playing, controls } = useSelector(state => state.player)
  const imageStyle = item => {
    switch (item.type) {
      case 'artist':
        return 'rounded-full'

      case 'podcast':
        return 'rounded-xl'

      default:
        return 'rounded'
    }
  }

  const updateCurrent = () => {
    if (current.id === item.id) {
      if (playing) {
        controls.pause()
      } else {
        controls.play()
      }
    } else {
      dispatch(setCurrent(item))
    }
  }

  const isCurrentItem = (current?.id === item.id && playing)

  return (
    <Link
      key={item.id}
      href="/"
    >
      <a className={"bg-footer p-4 rounded-lg hover:bg-active group"}>
        <div className="pt-[100%] relative mb-4">
          <div className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`}>
            <Image src={item.image} layout="fill" />
          </div>
          <button
            onClick={updateCurrent}
            className={`w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center ${isCurrentItem ? 'flex' : 'hidden'}`}>
            <Icon name={isCurrentItem ? 'pause' : 'play'} size={16} />
          </button>
        </div>
        <h6 className={`overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold ${isCurrentItem ? 'text-primary' : ''}`}>
          {item.name}
        </h6>
        <p className="line-clamp-2 text-link text-sm mt-1">
          {item.description}
        </p>
      </a>
    </Link>
  )
}
