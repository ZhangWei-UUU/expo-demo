import React, { Component } from 'react';
import { View, Text, ImagePicker } from 'react-native';
import * as Permissions from 'expo-permissions';

class UpdateHeadScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: undefined
    }
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
      this._pickImage()
    } else {
      this.props.navigation.navigate('Settings')
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result)
  }
  render() {
    return (
      <View>
        <Text>上传</Text>
      </View>
    )
  }
}

export default UpdateHeadScreen;
