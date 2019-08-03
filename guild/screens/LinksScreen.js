import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import Swiper from 'react-native-swiper';
// 1.5.9

class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null,

  };
  /////***** HANDLE BACK PRESS ******//////
  componentWillMount() {
    // Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    console.log('unmount dashboard');
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    if (this.props.currentRoute.index === 0) {
      BackHandler.exitApp();
      return false;
    }
    this.props.navigation.goBack(null);
    return true;
  };

  openAuth() {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        //                showsButtons
        //                removeClippedSubviews={false}
        dotStyle={styles.dotStyle}
        loop={false}
        activeDotStyle={styles.activeDotStyle}>
        <View style={styles.slide1}>
          <Text style={styles.text}>asdasdr</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>

        </View>
      </Swiper>
    );
  }
}

const styles = {
  dotStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
  },
  activeDotStyle: {
    backgroundColor: 'white',
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c77a9',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5ca1a9',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#69a95c',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

export default WelcomeScreen;
