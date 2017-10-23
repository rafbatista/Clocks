const $times = document.querySelector('.times')

const renderTimeObject = (zone) => ({
  zone: zone.split('/')[1].replace('_', ' '),
  time: moment().tz(zone).format('h:mm:ss a')
})

const renderTimeAndZone = (zone) => {
  renderTimeObject(zone)
  const $zoneContainer = document.createElement('div')
  const $zoneTitle = document.createElement('div')
  const $time = document.createElement('div')
  $zoneContainer.classList.add('time-container')

  $zoneTitle
    .classList.add('zone')
    .textContent = zone.zone

  $time
    .classList.add('time')
    .textContent = zone.time

  $zoneContainer
    .appendChild($zoneTitle)
    .appendChild($time)

  return $zoneContainer
}

fetch('http://localhost:3000/timezones')
  .then(res => res.json())
  .then(zones => {
    zones
    .map(renderTime)
    .forEach(zone =>)
  })
