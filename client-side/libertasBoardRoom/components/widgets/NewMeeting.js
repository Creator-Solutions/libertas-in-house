import React, { useState } from 'react'
import {
  Image,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native'
import styles from '../styling/newMeetingStyle'
import { Title } from 'react-native-paper'
import Menu from '../images/menu.png'
import calendar from '../images/calendar.png'
import time from '../images/time.png'
import { meeting } from '../constants'
import addNew from '../images/addNew.png'
import magnify from '../images/magnify.png'

const NewMeeting = ({ navigation }) => {
  const [checked, setChecked] = useState(false)
  const [meetingName, setMeetingName] = useState('')
  const [meetingDate, setMeetingDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [team, setTeam] = useState('')
  const [visible, setVisible] = useState(false)
  const [msg, setMsg] = useState('')
  let venue = checked ? 'Board Room' : 'Marketing Room'

  let CreateMeeting = () => {
    let data = {
      Type: 'Create',
      Name: meetingName,
      Date: meetingDate,
      Start: startTime,
      End: endTime,
      Venue: venue,
      Team: team,
    }

    fetch(meeting.API, {
      method: 'POST',
      headers: meeting.header,
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res) return res.json()
        else {
          return {}
        }
      })
      .then((res) => {
        setVisible(true)
        switch (res[0].Message) {
          case 'Meeting created':
            Alert.alert('Meeting Successful', 'Meeting created', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ])
            break
          case 'No spot open':
            Alert.alert('Meeting Unsuccessful', 'No spot open', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ])
            break
          case 'Could not create meeting at this time':
            Alert.alert(
              'Meeting Unsuccessful',
              'Could not create meeting at this time',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ]
            )
            break
          case 'Could not connect to server':
            Alert.alert('Meeting Unsuccessful', 'Could not connect to server', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ])
            break
        }
      })
  }

  return (
    <View style={styles.parent}>
      <View style={styles.topBar}>
        <Title style={styles.Title}>Schedule a Meeting</Title>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.openDrawer()}
        >
          <Image source={Menu} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.block}>
          <Text style={styles.blockTitle}>Name of Meeting</Text>
          <TextInput
            style={styles.input}
            placeholder={'Sales Meeting'}
            value={meetingName}
            onChangeText={(value) => setMeetingName(value)}
          />
        </View>
        <View style={styles.block}>
          <Text style={styles.blockTitle}>Meeting Date</Text>
          <View style={styles.inputBlock}>
            <Image source={calendar} style={styles.imgDate} />
            <TextInput
              style={styles.Dateinput}
              placeholder={date}
              value={meetingDate}
              onChangeText={(value) => setMeetingDate(value)}
            />
          </View>
        </View>
        <View style={styles.outerBlock}>
          <View style={styles.left}>
            <Text style={styles.blockTitle}>Start Time</Text>
            <View style={styles.inputBlock}>
              <Image source={time} style={styles.imgDate} />
              <TextInput
                style={styles.startTime}
                placeholder={'hh:mm'}
                value={startTime}
                onChangeText={(value) => setStartTime(value)}
              />
            </View>
          </View>
          <View style={styles.right}>
            <Text style={styles.blockTitle}>End Time</Text>
            <View style={styles.inputBlock}>
              <Image source={time} style={styles.imgDate} />
              <TextInput
                style={styles.startTime}
                placeholder={'hh:mm'}
                value={endTime}
                onChangeText={(value) => setEndTime(value)}
              />
            </View>
          </View>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Team</Text>
          <TextInput
            style={styles.input}
            placeholder={'Team'}
            value={team}
            onChangeText={(value) => setTeam(value)}
          />
        </View>

        <View style={styles.Venue}>
          <Text style={styles.blockTitle}>Venue</Text>
          <View style={styles.venueBlock}>
            <TouchableOpacity
              style={[
                styles.btnSelected,
                checked ? styles.btnVenue : styles.btnSelected,
              ]}
              onPress={() => setChecked(!checked)}
            >
              <Text
                style={[
                  styles.btnText,
                  checked ? styles.btnText : styles.btnSelectedText,
                ]}
              >
                Board Room
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnSelected,
                checked ? styles.btnSelected : styles.btnVenue,
              ]}
              onPress={() => setChecked(!checked)}
            >
              <Text
                style={[
                  styles.btnText,
                  checked ? styles.btnSelectedText : styles.btnSelectedText,
                ]}
              >
                Marketing Room
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.btnCreateMeeting}
          onPress={() => CreateMeeting()}
        >
          <Text style={styles.btnCaption}>Create Meeting</Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor={'#F5F5F5FD'} />
    </View>
  )
}

export default NewMeeting
