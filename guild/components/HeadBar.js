import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';


class CustomHeadBar extends Component {
  constructor(props) {
    super(props)
  }

  onBackPress = () => {
    this.props.navigation.pop()
  }

  render() {
    return (
      <View style={{ marginTop: 30, height: 55, padding: 15 }}>

        <Text style={{
          width: Dimensions.get('window').width * 0.8,
          alignItems: "center",
          fontSize: 28,
          fontWeight: 'bold'
        }}>{this.props.title}</Text>

      </View >
    );
  }
}

export default CustomHeadBar;
