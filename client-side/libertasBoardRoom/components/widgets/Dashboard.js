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
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from './DrawerContent';
import Menu from '../images/menu.png'
import {month } from '../constants';
import Animated from 'react-native-reanimated'

const Drawer = createDrawerNavigator();
const SCHEDULE = 10000;

const Dashboard = ({navigation}) => {
    const [myMeetings, setMyMeetings] = useState([]);
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
          <TouchableOpacity
            style={styles.menu}
            onPress={() => navigation.openDrawer()}>
            <Image source={Menu}/>
          </TouchableOpacity>
        </View>
        <View style={styles.calenderView}>
          <CalenderView/>
        </View>
        <View style={styles.today}>
          <View style={[styles.stat, styles.left]}>
            <Text style={styles.cap}>Today</Text>
            <Text style={styles.Num}>7 scheduled</Text>
          </View>
          <View style={[styles.stat, styles.right]}>
            <Text style={styles.cap}>Scheduled</Text>
            <Text style={styles.Num}>7 Upcoming</Text>
          </View>
        </View>
        <View style={styles.Scheduled}>
          <Text style={styles.title}>Today ({month()})</Text>
          <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.scroller}>
              {
                myMeetings.map((item, index) => {
                  if (index > 0){
                    return(
                      <View style={styles.card}>
                        <Text>{item.Title}</Text>
                      </View>
                    )
                  }else{
                    return (
                      <View style={styles.card}>
                        <Text>No Tasks For Today</Text>
                      </View>
                    )
                  }
                })
              }
            </ScrollView>
          </View>
        </View>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
      </View>
  );
}

const Dash = () => {
  return(
      <Drawer.Navigator drawerContent={props => <DrawerContent />}>
        <Drawer.Screen name={'Dash'} component={Dashboard} options={{headerShown:false}}/>
      </Drawer.Navigator>
  )
}
export default Dash;