import { Platform, Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  body: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  wrapper: {
    height: 240,
  },
  slide1: {
    borderRadius: 20,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    position: "relative",
    overflow: 'hidden',
  },
  slide2: {
    borderRadius: 20,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    position: "relative",
    overflow: 'hidden',
  },
  slide3: {
    borderRadius: 20,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    position: "relative",
    overflow: 'hidden',
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
  headPic: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 6,
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