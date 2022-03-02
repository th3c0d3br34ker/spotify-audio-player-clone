import { forHumans, formatTime } from "./time"

function secondsToTime(seconds) {
  return new Date(1000 * seconds)
    .toISOString()
    .substr(14, 5)
}

function fetcher(...args) {
  return fetch(...args).then((res) => res.json())
}


export { secondsToTime, fetcher, forHumans, formatTime }
