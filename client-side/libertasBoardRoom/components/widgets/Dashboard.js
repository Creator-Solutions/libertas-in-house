import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../styling/DashboardStyling';
import profile from '../images/profile.png';
import CalenderView from './CalenderView'
import scheduled from '../images/sched.png';
import current from '../images/current.png';
import finished from '../images/finished.png';


const Dashboard = () => {
  const [myMeetings, setMyMeetings] = useState([]);
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
              myMeetings.map((item, i) => {
                return(
                  <View style={styles.block} key={i}>
                    <View style={styles.sep}></View>
                    <View style={styles.mtBlock}>
                      <Text style={styles.mtCap}>item.title</Text>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </View>

    </View>
  );
}

export default Dashboard;