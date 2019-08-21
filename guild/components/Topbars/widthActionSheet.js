import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ShowActionSheetButton from '../ShowActionSheetButton';

export const styles = StyleSheet.create({
  container: {
    height: 80,
  },
  wrapper: {
    paddingTop: 10,
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    width: 200,
  },
  right: {
    flexDirection: 'row',
    height: 50,
    alignItems: "center",
    width: 60
  }
});

class widthActionSheet extends Component {
  state = {
    selectedIndex: null
  };

  onBackPress = () => {
    this.props.navigation.pop()
  }

  // 选择相片
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.props.pickImageFromSheet(result.uri);
      this.setState({ image: result.uri });
    }
  };

  _updateSelectionText = (selectedIndex) => {
    if (selectedIndex === 0) {
      this._pickImage()
    }
  };

  _renderButtons() {
    const { showActionSheetWithOptions } = this.props;
    return (
      <ShowActionSheetButton onSelection={this._updateSelectionText}
        showActionSheetWithOptions={showActionSheetWithOptions}
      />
    );
  }

  render() {
    let { color } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={this.onBackPress}
            style={styles.left}>
            <AntDesign name="left" size={20}
              color={color === 'black' ? "#fff" : "#000"}
              style={{ marginRight: 20, marginLeft: 20, marginTop: 15, alignItems: "center", }}
            />
            <Text style={{
              color: color === 'black' ? "#fff" : "#000",
              alignItems: "center",
              marginTop: 10,
              fontSize: 20
            }}>{this.props.title}</Text>
          </TouchableOpacity>
          <View style={styles.right}>
            {this._renderButtons()}
          </View>
        </View >
      </View>
    );
  }
}

export default widthActionSheet;
