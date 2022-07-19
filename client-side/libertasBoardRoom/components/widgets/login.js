import React, { useState } from 'react'
import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from '../styling/loginStyle'
import { loginData } from '../constants'
import logo from '../images/icon.png'
import asyncStorage from '@react-native-async-storage/async-storage/src/AsyncStorage'
import { storage } from '../modules/Storage'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')

  let Authenticate = async () => {
    if (email.trim().length === 0 && pass.trim().length === 0) {
      setErr('Please fill in all fields')
    } else {
      setErr('')
      let data = {
        Type: 'Login',
        Email: email,
        Password: pass,
      }

      fetch(loginData.API, {
        method: 'POST',
        headers: loginData.header,
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response) return response.json()
          else {
            setErr('[Error 204] No Content')
            return {}
          }
        })
        .then((res) => {
          console.log(res)
          switch (res[0].Message) {
            case 'Authenticated':
              storage.set('user.Name', res[0].Name)
              storage.set('user.Email', res[0].Email)
              navigation.navigate('dash')
              break
            case 'Incorrect Password or Email':
              setErr('Incorrect credentials')
              break
            case 'No records found':
              setErr('Account not found')
              break
            case 'Could not login':
              setErr('An error has occurred')
              break
            case 'No Connection':
              setErr('No response from server')
              break
            default:
              setErr('Could not login')
              break
          }
        })
        .catch((err) => {
          if (err === 'TypeError: Network request failed') {
            setErr('Could not connect to server')
          } else {
            setErr('Could not authenticate')
          }
        })
    }
  }

  return (
    <View style={styles.parent}>
      <View style={styles.topBar}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.err}>
        <Text style={styles.error}>{err}</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          placeholder={'Email'}
          style={styles.txtInput}
          placeholderTextColor={'#C0C0C0'}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          placeholder={'Password'}
          style={styles.txtInput}
          placeholderTextColor={'#C0C0C0'}
          secureTextEntry={true}
          value={pass}
          onChangeText={(value) => setPass(value)}
        />

        <Text style={styles.lblForgotPassword}>Forgot Password ?</Text>

        <TouchableOpacity
          name={'btnLogin'}
          style={styles.btnLogin}
          onPress={() => Authenticate()}
        >
          <LinearGradient
            colors={['#ff69b4', '#fc8eac']}
            style={styles.linearGradient}
            start={{ x: 0.55, y: 0.55 }}
          >
            <Text style={styles.btnCap}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.no_acc}>
        <Text style={styles.acc_cap}>Don't have an account?</Text>
        <Text
          style={[styles.acc_cap, styles.link]}
          onPress={() => navigation.navigate('SignUp')}
        >
          Create One
        </Text>
      </View>
      <StatusBar backgroundColor={'#181818'} />
    </View>
  )
}

export default Login
