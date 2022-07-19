import { meeting, months } from '../constants'

const getMyMeetings = (setMeeting) => {
  fetch(meeting.API, {
    method: 'POST',
    headers: meeting.header,
    body: JSON.stringify({ Type: 'Meetings' }),
  })
    .then((res) => {
      if (res) return res.json()
      else {
        console.log('No response from server')
        return {}
      }
    })
    .then((res) => {
      setMeeting(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

const getDate = () => {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  if (month.toString().length === 1) {
    month = `0${month}`
  }
  return `${year}-${month}-${day}`
}

const checkDayTime = (date) => {
  let timeNum = parseInt(date)
  let dayTime = timeNum >= 12 ? 'PM' : 'AM'
  return date + ' ' + dayTime
}

const getDayOfWeek = (date) => {
  const dayOfWeek = new Date(date).getDay()
  return isNaN(dayOfWeek)
    ? null
    : [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ][dayOfWeek]
}

module.exports = {
  checkDayTime: checkDayTime,
  meetings: getMyMeetings,
  weekday: getDayOfWeek,
  getDate: getDate(),
}
