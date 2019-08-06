import React, { Component } from 'react';

import {
  Text,
  View,
  Alert,
  StatusBar
} from 'react-native';

class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#fff"
          barStyle="dark-content" // Here is where you change the font-color
        />
        <Text>我的账户</Text>
      </View >
    );
  }
}

export default AccountScreen;