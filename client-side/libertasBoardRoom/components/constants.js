let loginData = {
    API: 'http://192.168.0.103/libertas-board-room-inHouse/libertas-in-house/server-side-modules/authentication_module/Auth.php',
    header: {'Content-Type': 'application/json'},
}

let myMeetingData = {
    API: 'http://192.168.0.103/libertas-board-room-inHouse/libertas-in-house/server-side-modules/meeting-modules/meetings.php',
    header: {'Content-Type': 'application/json'},
}

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const get_Month = () => {
 let today = new Date().getDay();
 let month = new Date().getMonth();
 return `${today} ${months[month]}`;
}

const get_daytime = (time) => {
  let curr_time = parseInt(time.slice(0,2));
  const daytime = curr_time >= 12 ? 'PM':'AM';
  return time + ' ' + daytime;

}

module.exports = {
    loginData: loginData,
    meeting: myMeetingData,
    months: months,
    month: get_Month,
    daytime:get_daytime,
};