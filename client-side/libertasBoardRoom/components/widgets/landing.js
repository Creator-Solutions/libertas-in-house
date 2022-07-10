import React from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import styles from '../styling/landingStyle';


const Landing = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Libertas™</Text>
      </View>

      <View style={styles.container}>

        <Text style={styles.cap}>Lib-Consult</Text>
        <Text style={styles.sub}>Schedule Board-Room Meetings</Text>
      </View>
      <StatusBar backgroundColor={'#181818'} />
    </View>
  )
}

export default Landing;
 