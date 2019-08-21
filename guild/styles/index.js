import { Platform, Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  body: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  wrapper: {
    height: 240,
  },
  slide: {
    borderRadius: 10,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000000',
    backgroundColor: "#e8e8e8",
    shadowOffset: {
      width: 0,
      height: 0
    },
    position: "relative",
    overflow: 'hidden',
  },
  mainPicture: {
    height: 240,
    borderRadius: 10,
  },
  grandient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 120,
    height: 100,
    zIndex: 10,
    padding: 10
  },
  newsTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "space-mono"
  },
  timeTitle: {
    marginTop: 8,
    color: "#fff",
    fontSize: 12,
    fontFamily: "space-mono"
  },
  card: {
    borderRadius: 10,
    height: 200,
    width: Dimensions.get('window').width * 0.4,
    marginLeft: 20,
    marginBottom: 10,
    elevation: 2,
    backgroundColor: "#fff",
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  img: {
    height: 40,
    width: 40,
    padding: 10,
  },
  picture: {
    backgroundColor: "#e8e8e8",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 120
  },
  lineSingle: {
    width: Dimensions.get('window').width * 0.2,
    alignItems: 'center',
  },
  lineWrapper: {
    marginTop: 20,
    flex: 0,
    flexDirection: 'row',
  }
})