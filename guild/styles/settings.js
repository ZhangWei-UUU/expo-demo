import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  body: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: "#e8e8e8"
  },
  Header: {
    height: 250,
    padding: 30,
    marginBottom: 10,
    backgroundColor: "#ffda1f",
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  grayText: {
    alignItems: 'center',
    color: "#000"
  },
  blackText: {
    color: "#000"
  },
  barIcon: {
    width: Dimensions.get('window').width * 0.1,
  },
  barLeft: {
    width: Dimensions.get('window').width * 0.3,
  },
  barRight: {
    width: Dimensions.get('window').width * 0.5,
    alignItems: 'flex-end',
  },
  card: {
    minHeight: 100,
    padding: 20,
    backgroundColor: "#fff",
    width: Dimensions.get('window').width,
    marginBottom: 10,
  },
  cardBar: {
    width: Dimensions.get('window').width,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row'
  },
  Num: {
    fontWeight: "bold",
    fontSize: 20
  },
  head: {
    width: 80,
    height: 80,
    borderRadius: 80
  },
  headWrapper: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: "#fff",
    marginBottom: 15
  },
})