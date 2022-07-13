import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import monthData from '../constants';

//Get current month
const get_Month = () => {
  let currDate = new Date();
  let month = currDate.getMonth();
  return monthData.months[month];
}

//Get days of week
const Get_WeekDay = days => {
  const wk = [];
  let curr = new Date();
  for (let i = 0; i < 7; i++) {
    curr.setDate(curr.getDate() - curr.getDay() + i);
    let day = new Date(curr.toISOString().slice(0, 10));
    let WeekDay = days[day.getDay()].slice(0, 3);
    let date = day.getDate();
    wk.push(WeekDay);
  }
  return wk;
};

//Get Dates For Week
const Get_Dates = () => {
  const wk = [];
  let curr = new Date();
  for (let i = 0; i < 7; i++) {
    curr.setDate(curr.getDate() - curr.getDay() + i);
    let day = new Date(curr.toISOString().slice(0, 10));
    let date = day.getDate();
    wk.push(date);
  }
  return wk;
};

//returns current day date
const Get_today = () => {
  let curr = new Date();
  let day = new Date(curr.toISOString().slice(0, 10));
  let date = day.getDate();

  return date;
};

const isSameDay = (date1, date2) => {
  if (date1 === date2) {
    return true;
  }
  return false;
};

const calenderView = () => {
  const [week, setWeek] = useState([]);
  const [dates, setDates] = useState([]);
  const [today, setToday] = useState(false);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    setWeek(Get_WeekDay(days));
    setDates(Get_Dates(days));
  }, []);

  return (
    <View style={styles.head}>
      <Text style={styles.month}>{get_Month()}</Text>
      <View style={styles.Calendar}>
        {week.map((index, i) => {
          const textStyles = [styles.block];
          const sameDay = isSameDay(dates[i], Get_today());

          if (sameDay) {
            textStyles.push(styles.Today);
          }

          return (
            <View key={index} style={textStyles}>
              <Text style={styles.days}>{week[i]}</Text>
              <Text style={styles.date}>{dates[i]}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    width: '100%',
    height: '58%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 25,
  },
  month:{
    fontSize: 26,
    color: '#111',
    marginStart: '3%',
  },
  Calendar: {
    width: '98%',
    height: '85%',
    borderWidth: 0,
    borderColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
  },
  block: {
    width: '13%',
    height: '100%',
    borderWidth: 0,
    borderColor: '#111',
    justifyContent: 'center',
    backgroundColor: '#404040',
    borderRadius: 10,
  },
  date: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#fff',
  },
  days: {
    alignSelf: 'center',
    fontSize: 12,
    color: '#fff',
  },
  Today: {
    width: '13%',
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: '#C0C0C0',
    borderRadius: 10,
    backgroundColor: '#03DAC5'
  },
});

export default calenderView;
