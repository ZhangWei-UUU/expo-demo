import { StyleSheet, Dimensions } from 'react-native';
export const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ffda1f",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: "center",
  },
  container: {
    width: Dimensions.get('window').width * 0.9,
    height: 500,
    backgroundColor: "#fff",
    marginTop: 50,
    alignItems: "center"
  },
  head: {
    backgroundColor: "#000",
    height: 30,
    width: Dimensions.get('window').width * 0.9,
    alignItems: "center",
  },
  headText: {
    color: "#fff",
    marginTop: 5,
    fontWeight: "bold"
  },
  qrcodeContainer: {
    width: 150,
    height: 150,
    overflow: 'hidden',
    marginTop: 50
  }
});