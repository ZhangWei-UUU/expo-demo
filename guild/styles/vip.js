import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({

  body: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: "#e8e8e8"
  },
  header: {
    padding: 20
  },
  headerImage: {
    width: Dimensions.get('window').width - 40,
    height: 210,
    borderRadius: 12,
    marginTop: 20
  },
  magazineWrapper: {
    width: Dimensions.get('window').width * 0.4,
    alignItems: "center",
    marginBottom: 10,
  },
  magazineTextWrapper: {
    width: Dimensions.get('window').width * 0.6,
    alignItems: "center",
    marginBottom: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10
  },
  magazine: {
    width: 120,
    height: 160
  }
})