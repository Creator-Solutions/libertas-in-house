import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native'
import styles from '../styling/SignUpStyle'
import { Button, TextInput } from 'react-native-paper'
import background from '../images/background.jpg'
import { loginData } from '../constants'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const [load, setLoad] = useState(false)

  let createAccount = () => {
    //ToDo
    let data = {
      Type: 'Register',
      Email: email,
      Name: name,
      Password: pass,
    }

    fetch(loginData.API, {
      method: 'POST',
      headers: loginData.header,
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response) {
          return response.json()
        } else {
          setError('Could not return response from server')
          return {}
        }
      })
      .then(async (res) => {
        switch (res[0].Message) {
          case 'Success':
            setLoad(!load)
            await AsyncStorage.setItem('Name', name)
            await AsyncStorage.setItem('Email', email)
            navigation.navigate('dash')
            break
          case 'Could not create account':
            setError('Could not create an account!')
            break
          case 'Could not connect to server':
            setError('Check network connection')
            break
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.parent}>
        <View style={styles.container}>
          <Text style={styles.title}>New{'\n'}Account</Text>
          <Text style={styles.error}>{error}</Text>
          <View style={styles.content}>
            <TextInput
              label={'Full Name'}
              mode={'flat'}
              style={styles.input}
              value={name}
              onChangeText={(value) => setName(value)}
            />
            <TextInput
              label={'Email'}
              mode={'flat'}
              style={styles.input}
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <TextInput
              label={'Password'}
              mode={'flat'}
              style={styles.input}
              value={pass}
              onChangeText={(value) => setPass(value)}
            />

            <Button
              type={'text'}
              loading={load}
              style={styles.btnRegister}
              onPress={() => createAccount()}
            >
              <Text style={styles.btnText}>Register</Text>
            </Button>
          </View>
        </View>

        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </View>
    </ImageBackground>
  )
}

export default SignUp
