import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  parent: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: '#181818',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  topBar:{
    width: '100%',
    height: '10%',
    borderWidth: 0,
    borderColor: '#fff',
    justifyContent:'space-between',
    display: 'flex',
    flexDirection: 'row',
    position:'absolute',
    top: 0,
  },
  leftBar:{
    width: '35%',
    height: '50%',
    justifyContent:'center',
    alignSelf: 'center',
    borderWidth: 0,
    borderColor: '#fff',
    marginStart: '2%',
  },
  date:{
    color: '#C0C0C0',
    fontSize: 12,
  },
  title:{
    color:'#fff',
    fontSize: 18,
  },
  btnProfile:{
    width: '10%',
    height: '50%',
    borderWidth: 0,
    borderColor: '#fff',
    marginStart: '3%',
    alignSelf: 'center',
  },
  imgProfile:{
    width: '100%',
    height: '100%',
    alignSelf:'center',
    marginEnd: 20,
  },
  calenderView:{
    width: '100%',
    height: '18%',
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf:'center',
    position:'absolute',
    top: '12%',
  },
  currMeetings:{
    width: '90%',
    height: '25%',
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf:'center',
  },
})