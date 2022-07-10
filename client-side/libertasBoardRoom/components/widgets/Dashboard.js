import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import styles from '../styling/DashboardStyling';
import back from '../images/back.png';
import profile from '../images/profile.png';
import add from '../images/add.png';
import CalenderView from './CalenderView'


const Dashboard = () => {

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
        <View style={styles.currMeetings}>

        </View>
      </View>

    </View>
  );
}

export default Dashboard;