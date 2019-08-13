import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  body: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  bodyVerifiy: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: "#fff"
  },
  linearGradient: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    minHeight: 555,
  },
  input: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#999',
    color: '#999',
    backgroundColor: '#fff',
    fontSize: 22,
    fontWeight: '700',
    margin: 6
  },
  phoneInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: Dimensions.get('window').width * 0.8,
    padding: 5,
    fontSize: 22,
    borderRadius: 4,
    marginBottom: 30,

  },
  custombtn: {
    padding: 16,
    borderRadius: 28,

    backgroundColor: '#FFDA1F',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.8,
  }
})