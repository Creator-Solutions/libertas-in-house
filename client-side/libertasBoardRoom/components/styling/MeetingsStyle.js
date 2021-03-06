import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F5F5F5FD',
    borderWidth: 0,
    borderColor: '#111',
  },
  topBar: {
    width: '100%',
    height: '30%',
    borderWidth: 0,
    borderColor: '#111',
    backgroundColor: '#fff',
  },
  head: {
    width: '100%',
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0,
    borderColor: '#111',
  },
  menu: {
    alignSelf: 'center',
    marginEnd: '2%',
  },
  dashTitle: {
    alignSelf: 'center',
    marginStart: '2%',
    fontSize: 24,
    color: '#111',
    fontFamily: 'Open-Sans',
  },
  body: {
    flex: 1,
    borderWidth: 0,
    borderColor: '#111',
    backgroundColor: '#4E426D',
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55,
  },
  content: {
    flex: 1,
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55,
    borderWidth: 1,
    borderColor: '#111',
  },
  bodyContent: {
    width: '95%',
    height: '90%',
    alignSelf: 'center',
    marginTop: '10%',
    borderWidth: 0,
    borderColor: '#111',
    flex: 1,
  },
  Calender: {
    marginTop: '4%',
  },
  today: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Open-Sans',
    marginStart: '3%',
  },
  contentView: {
    flex: 1,
    borderWidth: 0,
    borderColor: '#111',
    marginTop: '5%',
  },
  CardView: {
    flex: 1,
  },
  card: {
    width: '90%',
    height: 135,
    backgroundColor: '#4E426D',
    elevation: 0,
    alignSelf: 'center',
    marginTop: '5%',
  },
  titleBar: {
    width: '90%',
    alignSelf: 'center',
    marginTop: '2%',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    marginTop: '4%',
    marginStart: '10%',
  },
  time: {
    color: '#fff',
    fontSize: 20,
    marginTop: '3%',
    marginStart: '5%',
  },
  earliest: {
    backgroundColor: '#ffb347',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 0,
  },
  earliestTitle: {
    color: '#111',
    fontSize: 20,
  },
  leader: {
    color: '#C0C0C0',
    fontSize: 20,
    marginStart: '10%',
    marginTop: '3%',
  },
  earliestLeader: {
    color: '#111',
    fontSize: 20,
  },
  div: {
    width: '85%',
    height: 2,
    marginTop: '5%',
    alignSelf: 'center',
  },
  btnAdd: {
    width: 55,
    height: 55,
    position: 'absolute',
    right: '7%',
    bottom: '7%',
    zIndex: 1002,
  },
  imgAdd: {
    width: '100%',
    height: '100%',
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    borderRadius: 15,
    borderColor: '#111',
    borderWidth: 1,
  },
  modalTopBar: {
    width: '100%',
    height: '5%',
    marginTop: 15,
    display: 'flex',
    borderColor: '#111',
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 22,
    alignSelf: 'center',
  },
  btnClose: {
    width: 35,
    height: 35,
    borderColor: '#111',
    borderWidth: 0,
    position: 'absolute',
    left: 10,
    justifyContent: 'center',
  },
  imgClose: {
    width: '50%',
    height: '50%',
    alignSelf: 'center',
  },
  modalContent: {
    width: '98%',
    flex: 1,
    marginTop: 25,
    borderColor: '#111',
    borderWidth: 1,
    alignSelf: 'center',
  },
  block: {
    width: '75%',
    height: '15%',
    marginTop: 15,
    borderColor: '#111',
    borderWidth: 1,
    alignSelf: 'center',
  },
  input: {
    height: 35,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: 15,
    backgroundColor: '#fff',
  },
})
