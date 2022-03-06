/**
 * Translates seconds into human readable format of seconds, minutes, hours, days, and years
 * 
 * @param  {number} seconds The number of seconds to be processed
 * @return {string}         The phrase describing the amount of time
 */
function forHumans(seconds) {
  const levels = [
    [Math.floor(seconds / 31536000), 'years'],
    [Math.floor((seconds % 31536000) / 86400), 'days'],
    [Math.floor(((seconds % 31536000) % 86400) / 3600), 'hours'],
    [Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), 'minutes'],
    [(((seconds % 31536000) % 86400) % 3600) % 60, 'seconds'],
  ];
  let returntext = '';

  for (let i = 0, max = levels.length; i < max; i++) {
    if (levels[i][0] === 0) continue;
    returntext += ' ' + levels[i][0] + ' ' + (levels[i][0] === 1 ? levels[i][1].substr(0, levels[i][1].length - 1) : levels[i][1]);
  };
  return returntext.trim();
}

/**
 * Translates seconds into  mm:ss
 * 
 * @param  {number} seconds The number of seconds to be processed
 * @return {string}         The phrase describing the amount of time
 */
function formatTime(seconds) {
  {
    const levels = [
      [Math.floor((((seconds % 31536000) % 86400) % 3600) / 60)],
      [(((seconds % 31536000) % 86400) % 3600) % 60],
    ];

    for (let i = 0, max = levels.length; i < max; i++) {
      if (levels[i] <= 9) {
        levels[i] = `0${levels[i]}`
      }
    }

    let returntext = `${levels[0]}:${levels[1]}`;

    return returntext.trim();
  }
}



export { forHumans, formatTime }
