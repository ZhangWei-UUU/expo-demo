import React, { Component } from 'react';

import {
  Text,
  View,
  Alert,
  StatusBar
} from 'react-native';

class RevenueScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [

      ]
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#fff"
          barStyle="dark-content" // Here is where you change the font-color
        />
        <Text>登录</Text>
      </View >
    );
  }
}

export default RevenueScreen;