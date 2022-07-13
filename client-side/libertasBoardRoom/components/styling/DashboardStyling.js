import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  parent:{
    flex: 1,
    backgroundColor:'#fff',
    borderWidth: 0,
    borderColor: '#111',
  },
  topBar:{
    width:'100%',
    height: '7%',
    borderWidth: 0,
    borderColor: '#111',
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  menu:{
    alignSelf:'center',
    marginEnd: '2%',
  },
  calenderView:{
    width: '90%',
    height: '20%',
    borderWidth: 0,
    borderColor: '#111',
    alignSelf:'center',
    marginTop: '5%',
  },
  month:{
    color: '#fff',
    fontSize: 26,
  },
  today:{
    width: '95%',
    height: '20%',
    borderWidth: 0,
    borderColor: '#111',
    alignSelf:'center',
    marginTop: '10%',
    borderRadius: 15,
    shadowColor: "#CCCCCC",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: '100%',
    shadowRadius: 15,

    elevation: 4,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
  },
  stat:{
    width: '50%',
    height: '80%',
    alignSelf:'center',
    justifyContent:'center',
  },
  right:{
    borderLeftWidth: 1,
    borderLeftColor: '#C0C0C0',
  },
  Num:{
    fontSize: 18,
    marginStart: 25,
  },
  cap:{
    fontSize: 25,
    fontWeight:'600',
    marginStart: 25,
    color: '#111',
  },
  Scheduled:{
    width:'95%',
    flex:1,
    borderWidth: 1,
    borderColor: '#111',
    alignSelf:'center',
    marginTop:'5%',
  },
  title:{
    fontSize: 20,
    fontWeight:'600',
    color:'#111',
  },
  view:{
    flex:1,
  },
  scroller:{
    flex:1,
    borderWidth: 1,
    borderColor: '#111',
  },
  card:{
    width: '95%',
    height: 35,
    borderWidth: 1,
    borderColor: '#111',
  }
})