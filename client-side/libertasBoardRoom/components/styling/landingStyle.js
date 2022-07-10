import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  parent:{
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: '#181818',
    flex: 1,
    justifyContent:'space-evenly',
    display: 'flex',
    flexDirection: 'column',
  },
  topBar:{
    width: '95%',
    height: '10%',
    borderWidth: 0,
    borderColor: '#fff',
    alignSelf:'center',
    justifyContent:'center',
    position:'absolute',
    top: '5%',
  },
  title:{
    fontSize: 32,
    color: '#fff',
    alignSelf:'center',
  },
  logo:{
    alignSelf:'center',
  },
  container:{
    width: '95%',
    height: '35%',
    alignSelf:'center',
    justifyContent:'center',
    borderWidth: 0,
    borderColor: '#fff',
  },
  cap:{
    color: '#fff',
    fontSize: 24,
    alignSelf:'center',
    marginTop: 15,
  },
  sub:{
    color: '#fff',
    fontSize: 20,
    alignSelf:'center',
  }
})