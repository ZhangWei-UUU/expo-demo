import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
  },
  card: {
    borderRadius: 10,
    width: 300,
    height: 500,
    backgroundColor: '#fff',
    marginTop: 30,
    marginLeft: 30
  },
  img: {
    borderRadius: 10,
    width: 300,
    height: 500,
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