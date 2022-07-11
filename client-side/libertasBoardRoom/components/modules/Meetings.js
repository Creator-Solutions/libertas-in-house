import { meetings } from '../constants'

const getMyMeetings = (id, meeting, setMeeting) => {
  fetch(meetings.API, {
    method: 'POST',
    headers: meetings.header,
    body: JSON.stringify({UUID: id, Type:'MyTasks'}),
  }).then((res) => {
    if (res) return res.json();
    else{
      console.log('No response from server');
      return {};
    }
  }).then((res)=> {
    console.log(res);
    setMeeting(res);
  }).catch((err)=> {
    console.log(err);
  });
}

const checkDayTime = (date) => {
  let timeNum = parseInt(date);
  let dayTime = timeNum >= 12 ? "PM" : "AM";
  return date+" "+dayTime;
}

module.exports = {
  checkDayTime: checkDayTime,
  meetings: getMyMeetings,
};
