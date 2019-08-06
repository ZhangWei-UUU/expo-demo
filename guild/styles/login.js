import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  body: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
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
    borderStyle: "solid",
    borderColor: "#999",
    borderWidth: 1,
    width: 270,
    padding: 5,
    fontSize: 22,
    borderRadius: 4,
    marginBottom: 30,

  },
  custombtn: {
    padding: 10,
    borderRadius: 18,
    color: '#fff',
    backgroundColor: '#FF5A4F',
    alignItems: 'center',
    width: 180,
  }
})