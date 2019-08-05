import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  body: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: "#e8e8e8"
  },
  Header: {
    height: 150,
    padding: 30,
    marginBottom: 10,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  grayText: {
    color: "#ccc"
  },
  barLeft: {
    width: Dimensions.get('window').width * 0.5,
  },
  barRight: {
    width: Dimensions.get('window').width * 0.4,
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
  }
})