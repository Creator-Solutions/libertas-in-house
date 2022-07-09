import React, {useState} from 'react'
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from '../styling/loginStyle';
import {loginData} from "../constants";

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');

  let Authenticate = () => {
      if (email.trim().length === 0 && pass.trim().length === 0){
        setErr('Please fill in all fields');
      }else {
        let data = {
          Type: 'Login',
          Email: email,
          Password: pass,
        };

        console.log(loginData.API);

        fetch(loginData.API, {
          method: 'POST',
          headers: loginData.header,
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (response) return response.json();
            else {
              setErr('[Error 204] No Content');
              return {};
            }
          })
          .then((response) => {
            let data = response;
            switch (response.Message) {
              case 'Authenticated':
                navigation.navigate('', {
                  Name: data.Name,
                  Email: data.Email
                });
                break;
              case 'Incorrect Password':
                setErr('Incorrect Password');
                break;
              case 'Could not login':
                setErr('Could not login');
                break;
              case 'No Connection':
                setErr('No Connection. Check your internet connection');
                break;
            }
          }).catch((err) => {
          console.log(err);
        });
      }
  }

  return (
    <View style={styles.parent}>
      <View style={styles.topBar}>
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
          <LinearGradient colors={['#ff69b4', '#fc8eac']}  style={styles.linearGradient} start={{ x: 0.55, y: 0.55 }}>
          <Text style={styles.btnCap}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.no_acc}>
        <Text style={styles.acc_cap}>Don't have an account?</Text>
        <Text style={[styles.acc_cap, styles.link]}>Create One</Text>
      </View>
      <StatusBar backgroundColor={'#181818'} />
    </View>
  )
}

export default Login
