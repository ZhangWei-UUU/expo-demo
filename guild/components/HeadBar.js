import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Image } from 'react-native';


class CustomHeadBar extends Component {
  constructor(props) {
    super(props)
  }

  onBackPress = () => {
    this.props.navigation.pop()
  }

  render() {
    return (
      <View style={{ height: 55, padding: 15 }}>
        <View>
          <Image source={require('../assets/images/logo-char.jpg')}
            style={{ height: 35, width: 70 }}
          />
        </View>
      </View >
    );
  }
}

export default CustomHeadBar;
