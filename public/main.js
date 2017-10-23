/* global moment */

const $times = document.querySelector('.times')

const convertTimeObject = (zones) => {
  return zones.map(({ zone }) => ({
    zone: zone.split('/')[1].replace('_', ' '),
    time: moment()
      .tz(zone)
      .format('h:mm:ssA')
  }))
}

const renderTimeAndZone = (zone) => {

  const $zoneContainer = document.createElement('div')
  const $zoneTitle = document.createElement('div')
  const $time = document.createElement('div')
  $zoneContainer.classList.add('time-container')

  $zoneTitle.classList.add('zone')
  $zoneTitle.textContent = zone.zone

  $time.classList.add('time')
  $time.textContent = zone.time

  $zoneContainer
    .appendChild($zoneTitle)
    .appendChild($time)

  return $zoneContainer
}

setInterval(() => {
  return fetch('http://localhost:3000/timezones')
    .then(res => res.json())
    .then(zones => convertTimeObject(zones))
    .then(zones => {
      $times.innerHTML = ''
      zones
        .map(renderTimeAndZone)
        .forEach(zone => $times.appendChild(zone))
    })
}, 16)
