import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';


class CustomTopBar extends Component {
  constructor(props) {
    super(props)
  }

  onBackPress = () => {
    this.props.navigation.pop()
  }

  render() {
    return (
      <View style={{ marginTop: 30, height: 30 }}>
        <TouchableOpacity onPress={this.onBackPress}
          style={{
            flex: 1,
            flexDirection: 'row',
            width: Dimensions.get('window').width,
          }}>
          <AntDesign name="left" size={26}
            style={{ width: Dimensions.get('window').width * 0.2, alignItems: "center", }}
          />
          <Text style={{
            width: Dimensions.get('window').width * 0.8,
            alignItems: "center",
            fontSize: 20
          }}>{this.props.title}</Text>
        </TouchableOpacity>

      </View >
    );
  }
}

export default CustomTopBar;
