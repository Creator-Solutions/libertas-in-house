import React from 'react'
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from '../styling/loginStyle'

const Login = () => {
  const Authenticate = () => {
    console.log('Login')
  }

  return (
    <View style={styles.parent}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          placeholder={'Email'}
          style={styles.txtInput}
          placeholderTextColor={'#C0C0C0'}
        />
        <TextInput
          placeholder={'Password'}
          style={styles.txtInput}
          placeholderTextColor={'#C0C0C0'}
          secureTextEntry={true}
        />

        <Text style={styles.lblForgotPassword}>Forgot Password ?</Text>

        <TouchableOpacity
          name={'btnLogin'}
          style={styles.btnLogin}
          onPress={() => Authenticate()}
        >
          <LinearGradient colors={['red', 'yellow', 'green']}></LinearGradient>
          <Text style={styles.btnCap}>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor={'#181818'} />
    </View>
  )
}

export default Login
