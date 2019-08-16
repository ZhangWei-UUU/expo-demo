import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50, height: 60, flex: 1, flexDirection: "row",
    backgroundColor: "#ccc"
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
        <TouchableOpacity onPress={this.onBackPress}>
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
