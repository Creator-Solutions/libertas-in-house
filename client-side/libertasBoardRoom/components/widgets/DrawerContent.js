import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Avatar, Drawer } from 'react-native-paper';
import account from '../images/account.png';
import Home from '../images/home.png';
import Time from '../images/timer.png';
import Schedule from '../images/sched.png';
import Settings from '../images/settings.png';
import Account from '../images/acc.png';
import Logout from '../images/logout.png';

export default function DrawerContent(props){
  return(
    <View style={styles.parent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.topView}>
          <Avatar.Image size={40} source={account} style={styles.imgProfile}/>
          <View style={styles.acc}>
            <Text style={styles.cap}>Owen Burns</Text>
            <Text style={styles.cap}>owen@libertasgh.com</Text>
          </View>
        </View>
        <Drawer.Section style={styles.section}>
          <TouchableOpacity style={styles.navBtn}>
            <Image source={Home} style={styles.imgHomeIcon}/>
            <Text style={styles.capt}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBtn}>
            <Image source={Time} style={styles.imgHomeIcon}/>
            <Text style={styles.capt}>Meetings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBtn}>
            <Image source={Schedule} style={styles.imgHomeIcon}/>
            <Text style={styles.capt}>New meeting</Text>
          </TouchableOpacity>
        </Drawer.Section>
        <Drawer.Section style={styles.inApp}>
          <TouchableOpacity style={styles.navBtn}>
            <Image source={Account} style={styles.imgHomeIcon}/>
            <Text style={styles.capt}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBtn}>
            <Image source={Settings} style={styles.imgHomeIcon}/>
            <Text style={styles.capt}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBtn}>
            <Image source={Logout} style={styles.imgHomeIcon}/>
            <Text style={styles.capt}>Logout</Text>
          </TouchableOpacity>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  parent:{
    flex: 1,
    backgroundColor:'#fff',
  },
  topView:{
    display:'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
  acc:{
    alignSelf:'center',
    marginStart: 10,
  },
  cap:{
    fontSize: 16,
    color: '#111'
  },
  imgProfile:{
    alignSelf:'center',
  },
  section:{
    marginTop: 45,
  },
  navBtn:{
    width: '85%',
    height: 55,
    marginTop: 15,
    borderWidth: 0,
    borderColor: '#fff',
    alignSelf:'center',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  imgHomeIcon:{
    width: 30,
    height: 30,
    position:'absolute',
    left:5,
    alignSelf:'center',
  },
  capt:{
    color:'#111',
    alignSelf:'center',
    fontSize: 20,
  },
  inApp:{
    height: '75%',
    flex:1,
    borderTopColor: '#C0C0C0',
    borderTopWidth: 1,
  }
})