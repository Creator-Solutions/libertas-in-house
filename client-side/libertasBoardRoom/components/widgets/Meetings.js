import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Modal,
} from 'react-native'
import styles from '../styling/MeetingsStyle'
import Menu from '../images/menu.png'
import { Card, Divider, Subheading, TextInput, Title } from 'react-native-paper'
import CalenderView from './CalenderView'
import { meetings } from '../modules/Meetings'
import { daytime } from '../constants'
import add from '../images/add.png'
import close from '../images/close.png'

const Meetings = ({ navigation }) => {
  const [myMeetings, setMeetings] = useState([])
  const colors = ['#fff44f', '#00bfff', '#39ff14', '#ff9f00']
  let count = 0
  let lowestTime = 0

  const setBack = (index) => {
    return {
      borderLeftWidth: 2,
      borderLeftColor: colors[index],
    }
  }

  const getNumber = (t) => +t.replace(/:/g, '')

  useEffect(() => {
    meetings(setMeetings)

    myMeetings
      .sort((a, b) => {
        return getNumber(a.Start) < getNumber(b.Start)
      })
      .reverse()
  }, [])

  lowestTime = myMeetings
    .sort((a, b) => {
      return getNumber(a.Start) < getNumber(b.Start)
    })
    .reverse()

  return (
    <View style={styles.parent}>
      <View style={styles.topBar}>
        <View style={styles.head}>
          <Title style={styles.dashTitle}>Meetings</Title>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => navigation.openDrawer()}
          >
            <Image source={Menu} />
          </TouchableOpacity>
        </View>
        <View style={styles.Calender}>
          <CalenderView />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.content}>
          <View style={styles.bodyContent}>
            <View style={styles.contentView}>
              <ScrollView fadingEdgeLength={1}>
                {myMeetings.map((item, index) => {
                  if (myMeetings.length > 0) {
                    let cardStyles = [styles.card]
                    let titleBarStyles = [styles.time]
                    let titleStyles = [styles.title]
                    let earliestLeaderStyle = [styles.leader]
                    count = index
                    if (colors.length === index) {
                      count = 0
                    }
                    if (item.Start === lowestTime[0].Start) {
                      cardStyles.push(styles.earliest)
                      titleBarStyles.push(styles.earliestTitle)
                      titleStyles.push(styles.earliestTitle)
                      earliestLeaderStyle.push(styles.earliestLeader)
                    }
                    return (
                      <View style={styles.CardView} key={index}>
                        <Card style={cardStyles}>
                          <View style={[styles.titleBar, setBack(count)]}>
                            <Text style={titleBarStyles}>
                              {item.Start} - {daytime(item.End)}
                            </Text>
                          </View>
                          <Subheading style={titleStyles}>
                            {item.Title}
                          </Subheading>

                          <Subheading style={earliestLeaderStyle}>
                            {item.Team} Team
                          </Subheading>
                        </Card>
                        <Divider style={styles.div} />
                      </View>
                    )
                  } else {
                    return (
                      <View key={0}>
                        <Text>No meetings for today</Text>
                      </View>
                    )
                  }
                })}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
      <StatusBar backgroundColor={'#fff'} />
    </View>
  )
}

export default Meetings
