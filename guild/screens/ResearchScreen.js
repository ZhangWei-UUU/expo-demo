import React, { Component } from 'react';
import CustomTopBar from '../components/TopBar';

import {
  Text,
  View,
  StatusBar
} from 'react-native';

class ResearchScreen extends Component {
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
        <CustomTopBar title="研报" {...this.props} />
        <StatusBar
          backgroundColor="#fff"
          barStyle="dark-content" // Here is where you change the font-color
        />
        <Text>登录</Text>
      </View >
    );
  }
}

export default ResearchScreen;