import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  parent: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    flex: 1,
    zIndex: 101,
  },
  container: {
    width: '100%',
    height: '60%',
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: '#fff',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  title: {
    fontSize: 26,
    color: '#111',
    fontFamily: 'Inter',
    marginStart: '10%',
    marginTop: '3%',
    fontWeight: '700',
  },
  content: {
    flex: 1,
    borderWidth: 0,
    borderColor: '#111',
    marginTop: '5%',
  },
  error: {
    alignSelf: 'center',
    marginTop: '2%',
    fontSize: 16,
    color: 'red',
  },
  input: {
    width: '75%',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  btnRegister: {
    width: '55%',
    height: '12%',
    alignSelf: 'center',
    backgroundColor: '#4169e1',
    marginTop: '7%',
    color: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Open-Sans',
    fontWeight: '700',
  },
})
