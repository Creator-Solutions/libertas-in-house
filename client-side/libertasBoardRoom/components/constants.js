let loginData = {
    API: 'http://192.168.0.119/libertas-board-room-inHouse/libertas-in-house/server-side-modules/authentication_module/Auth.php',
    header: {'Content-Type': 'application/json'},
}

let month = [
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

module.exports = {
    loginData: loginData,
    months: month,
};