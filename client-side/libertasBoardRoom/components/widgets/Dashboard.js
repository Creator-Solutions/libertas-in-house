import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native'
import styles from '../styling/DashboardStyling'
import profile from '../images/profile.png'
import CalenderView from './CalenderView'
import scheduled from '../images/sched.png'
import current from '../images/current.png'
import finished from '../images/finished.png'

import { month, months, meeting, daytime } from '../constants'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import DrawerContent from './DrawerContent'
import Dashboard from './dash'
import Meetings from './Meetings'

import icon from '../images/meeting.png'
import { Surface, Title, Card, Subheading } from 'react-native-paper'
import location from '../images/location.png'
import yin from '../images/yinyang.png'
import NewMeeting from './NewMeeting'

const Drawer = createDrawerNavigator()

const Dash = () => {
  return (
    <Drawer.Navigator
      initialRouteName={'Dash'}
      drawerContent={(props) => <DrawerContent navigation={props.navigation} />}
    >
      <Drawer.Screen
        name={'Dash'}
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name={'Meetings'}
        component={Meetings}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name={'newMeeting'}
        component={NewMeeting}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  )
}
export default Dash
