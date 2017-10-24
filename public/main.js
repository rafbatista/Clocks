/* global moment */

const $times = document.querySelector('.times')

const convertTimeObject = (zones) => {
  return zones.map(({ zone }) => ({
    zone: zone.split('/')[1].replace('_', ' '),
    time: moment()
      .tz(zone)
      .format('h:mm:ss A')
  }))
}

const renderTimeAndZone = (zone) => {

  const $zoneContainer = document.createElement('div')
  const $zoneAndTime = document.createElement('div')
  $zoneContainer.classList.add('time-container')

  $zoneAndTime.classList.add('zone-time')
  $zoneAndTime.textContent = zone.zone + ' ' + zone.time

  $zoneContainer
    .appendChild($zoneAndTime)

  return $zoneContainer
}

const fetchTimes = () => {
  return fetch('http://localhost:3000/timezones')
    .then(res => res.json())
    .then(zones => convertTimeObject(zones))
    .then(zones => {
      $times.innerHTML = ''
      zones
        .map(renderTimeAndZone)
        .forEach(zone => $times.appendChild(zone))
    })
}

setInterval(fetchTimes, 16)
