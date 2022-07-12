import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import styles from '../styling/DashboardStyling';
import profile from '../images/profile.png';
import CalenderView from './CalenderView'
import scheduled from '../images/sched.png';
import current from '../images/current.png';
import finished from '../images/finished.png';
import {meetings, checkDayTime} from '../modules/Meetings';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const SCHEDULE = 10000;

const Dashboard = () => {
  const [myMeetings, setMyMeetings] = useState([]);
  const [err, setError] = useState('');
  let id = 'a0f8ced5-2e14-4f90-a026-b10be3c7ad15';

  useEffect(() => {
    const interval = setInterval(() => {
      meetings(id, myMeetings, setMyMeetings);
    }, SCHEDULE);

    return () => clearInterval(interval);
  }, []);

  return(
    <View style={styles.parent}>
      <View style={styles.topBar}>
        <View style={styles.leftBar}>
          <Text style={styles.date}>Mon, Jul 10, 2022</Text>
          <Text style={styles.title}>Daily Activity</Text>
        </View>

        <TouchableOpacity
          name={'btnProfile'}
          style={styles.btnProfile}>
          <Image source={profile} style={styles.imgProfile}/>
        </TouchableOpacity>
      </View>

      <View style={styles.calenderView}>
        <CalenderView />
      </View>

      <View style={styles.currMeetings}>
        <Text style={styles.meetingTitle}>Scheduled Meetings</Text>
        <View style={styles.meetings}>
          <View style={styles.sched_meet}>
            <Image source={scheduled} style={styles.imgIcon}/>
            <Text style={styles.top}>0</Text>
            <Text style={styles.cap}>Scheduled</Text>
          </View>
          <View style={styles.sched_meet}>
            <Image source={current} style={styles.imgIcon}/>
            <Text style={styles.top}>0</Text>
            <Text style={styles.cap}>Current</Text>
          </View>
          <View style={styles.sched_meet}>
            <Image source={finished} style={styles.imgIcon}/>
            <Text style={styles.top}>0</Text>
            <Text style={styles.cap}>Finished</Text>
          </View>
        </View>
      </View>

      <View style={styles.myMeetings}>
        <Text style={styles.myMeetingsTitle}>My Meetings</Text>
        <View style={styles.meeting}>
          <ScrollView contentContainerStyle={styles.scroller}>
            {
              myMeetings.map((item, index) => {
                const blockStyles = [styles.mtBlock];
                const capStyles = [styles.mtCap];

                if (index % 2 !== 0) {
                  blockStyles.push(styles.mtEven);
                  capStyles.push(styles.mtEvenCap);
                } else {
                  blockStyles.push(styles.mtOdd);
                }
                return(
                  <View style={styles.block} key={index}>
                    <View style={styles.sep}></View>
                    <View style={blockStyles}>
                      <Text style={capStyles}>{item.Title}</Text>
                      <Text style={capStyles}>{checkDayTime(item.Start)}-{checkDayTime(item.End)}</Text>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </View>
      <StatusBar backgroundColor={'#181818'} />
    </View>
  );
}

export default Dashboard;