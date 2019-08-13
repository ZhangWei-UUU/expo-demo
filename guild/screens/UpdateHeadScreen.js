import * as React from 'react';
import { TouchableOpacity, Image, View, Alert, Dimensions, Button } from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import CustomTopBar from '../components/TopBar';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Alert.alert('请开启相机权限!');
      } else {
        this._pickImage()
      }
    } else {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Alert.alert('请开启相机权限!');
      } else {
        this._pickImage()
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _uploadImage = async () => {
    let uri = this.state.image;
    let apiUrl = 'https://polkadot.cloud-wave.cn/api/uploadImage';
    let uriParts = uri.split('.');
    let fileType = uriParts[uriParts.length - 1];
    let formData = new FormData();

    formData.append('photo', {
      uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`,
    });

    let options = {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      let res = await fetch(apiUrl, options);
      let result = await res.json();
      console.log(result);
    } catch (err) {
      console.error(err.toString())
    }

    console.log(result)
  }
  render() {
    let { image } = this.state;
    return (
      <View style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
      }}>
        <CustomTopBar title="返回" {...this.props} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={this._pickImage}
          >
            {image &&
              <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </TouchableOpacity>
          <Button title="确认上传" onPress={this._uploadImage} />
        </View>
      </View>
    );
  }
}