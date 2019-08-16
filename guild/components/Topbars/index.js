import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';

export const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    height: 50,
    width: Layout.window.width
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    width: 200
  }
});

class TopBar extends Component {
  constructor(props) {
    super(props)
  }

  onBackPress = () => {
    this.props.navigation.pop()
  }

  render() {
    let { color } = this.props;
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={this.onBackPress}
          style={styles.left}>
          <AntDesign name="left" size={20}
            color={color === 'black' ? "#fff" : "#000"}
            style={{ marginRight: 20, marginLeft: 20, marginTop: 5, alignItems: "center", }}
          />
          <Text style={{
            color: color === 'black' ? "#fff" : "#000",
            alignItems: "center",
            fontSize: 20
          }}>{this.props.title}</Text>
        </TouchableOpacity>

      </View >
    );
  }
}

export default TopBar;
