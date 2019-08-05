import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
  },
  img: {
    marginTop: 60,
    marginLeft: 30,
    borderRadius: 10,
    width: 300,
    height: 450,

  },
  text: {
    color: '#ccc',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    flex: 1
  },
  btn: {
    height: 45,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#0466D6',
  },
})