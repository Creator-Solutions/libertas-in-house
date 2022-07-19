import React, { useEffect, useState } from 'react'
import { daytime, meeting, months } from '../constants'
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import styles from '../styling/DashboardStyling'
import { Card, Subheading, Surface, Title } from 'react-native-paper'
import icon from '../images/meeting.png'
import yin from '../images/yinyang.png'
import location from '../images/location.png'
import { meetings, checkDayTime, weekday, getDate } from '../modules/Meetings'
import Menu from '../images/menu.png'
import moment from 'moment'

const SCHEDULE = 1000

const Dashboard = ({ navigation, route }) => {
  const [myMeetings, setMyMeetings] = useState([])
  const [weekDay, setWeekDay] = useState('')
  const [venue, setVenue] = useState('')
  const [month, setMonth] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [team, setTeam] = useState('')

  const getNumber = (t) => +t.replace(/:/g, '')

  useEffect(() => {
    const getEarliestSchedule = () => {
      let currDate = getDate
      fetch(meeting.API, {
        method: 'POST',
        headers: meeting.header,
        body: JSON.stringify({ Type: 'nextSched', Date: currDate }),
      })
        .then((response) => {
          if (response) return response.json()
          else {
            console.log('Could not get a response')
            return {}
          }
        })
        .then((res) => {
          setWeekDay(weekday(res[0].Date).slice(0, 3))

          let month = new Date(res[0].Date).getMonth()
          setMonth(months[month])
          setDate(new Date(res[0].Date).getDate())
          setVenue(res[0].Venue)
          setTeam(res[0].Team)
          setTime(`${res[0].Start} - ${daytime(res[0].End)}`)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    getEarliestSchedule()

    const interval = setInterval(() => {
      meetings(setMyMeetings)
      getEarliestSchedule()
    }, SCHEDULE)

    return () => clearInterval(interval)
  }, [])

  myMeetings
    .sort((a, b) => {
      return getNumber(a.Start) < getNumber(b.Start)
    })
    .reverse()

  return (
    <View style={styles.parent}>
      <View style={styles.topBar}>
        <Title style={styles.dashTitle}>Dashboard</Title>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.openDrawer()}
        >
          <Image source={Menu} />
        </TouchableOpacity>
      </View>
      <View style={styles.nextSchedule}>
        <View style={styles.titleBar}>
          <Title style={styles.next}>Next Meeting</Title>
        </View>
        <Surface style={styles.nextCard}>
          <View style={styles.colOne}>
            <View style={styles.colLeft}>
              <Image source={icon} style={styles.icon} />
            </View>
            <View style={styles.ColRight}>
              <Text style={styles.date}>
                {weekDay}, {month.slice(0, 3)} {date}
              </Text>
              <Text style={styles.schedTime}>{time}</Text>
              <View style={styles.team}>
                <Image source={yin} style={styles.yin} />
                <Text style={styles.teamName}>{team} team</Text>
              </View>
              <View style={styles.team}>
                <Image source={location} style={styles.yin} />
                <Text style={styles.venue}>{venue}</Text>
              </View>
            </View>
          </View>
        </Surface>
      </View>

      <View style={styles.today}>
        <Title style={styles.todayTitle}>Schedule</Title>
        <View style={styles.scrollView}>
          <ScrollView contentContainerStyle={styles.scroll}>
            {myMeetings.map((item, index) => {
              return (
                <Card style={styles.card} key={index}>
                  <Title style={styles.cardTitle}>{item.Title}</Title>
                  <View style={styles.sub}>
                    <Subheading style={styles.heading}>
                      {item.Team} Team
                    </Subheading>
                    <Subheading style={styles.cardTime}>
                      {daytime(item.Start)} - {daytime(item.End)}
                    </Subheading>
                  </View>
                </Card>
              )
            })}
          </ScrollView>
        </View>
      </View>

      <StatusBar backgroundColor={'#F5F5F5FD'} barStyle={'dark-content'} />
    </View>
  )
}
export default Dashboard
