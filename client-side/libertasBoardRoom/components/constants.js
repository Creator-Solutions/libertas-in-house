let loginData = {
    API: 'http://192.168.0.103/libertas-board-room-inHouse/libertas-in-house/server-side-modules/authentication_module/Auth.php',
    header: {'Content-Type': 'application/json'},
}

let myMeetingData = {
    API: 'http://192.168.0.119/libertas-board-room-inHouse/libertas-in-house/server-side-modules/meeting-modules/meetings.php',
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

module.exports = {
    loginData: loginData,
    meetings: myMeetingData,
    months: months,
    month: get_Month,
};