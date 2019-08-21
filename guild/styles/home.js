
import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    barStyle: "#000"
  },

  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },

  cardContainer: {
    width: 300,
    height: 500,
    borderRadius: 12,
    marginTop: 20,
  },

  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  welcomeImage: {
    resizeMode: 'contain',
    width: 300,
    height: 550,
    borderRadius: 12,
    marginTop: 0
  },

});
