import React, { Component } from 'react';
import {
  Text,
  View,
  BackHandler,
  StatusBar
} from 'react-native';
import TopBar from '../components/Topbars';

class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    this.props.navigation.pop()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TopBar title="向商户付款" {...this.props} />
        <StatusBar
          backgroundColor="#fff"
          barStyle="dark-content" // Here is where you change the font-color
        />
        <Text>向商户付款</Text>
      </View >
    );
  }
}

export default PaymentScreen;