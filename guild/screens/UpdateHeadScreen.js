import * as React from 'react';
import { TouchableOpacity, Image, View, Alert, Dimensions, Button, AsyncStorage } from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import CustomTopBar from '../components/TopBar';
import Remote from '../constants/Remote';


export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  componentDidMount() {
    this.getPermissionAsync();
  }

  // 获取相机权限
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

  // 修改用户头像
  _modifyHead = async (value) => {
    let data = {
      field: "head",
      value: "https://" + value
    };
    let userToken = await AsyncStorage.getItem('user-token');

    let options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userToken
      }
    };
    try {
      let res = await fetch(Remote + "/userinfo/modify", options);
      let back = await res.json();
      if (back.n === 1 && back.nModified === 1 && back.ok === 1) {
        this.props.navigation.navigate("Settings", { refresh: true });
      } else {
        Alert.alert("上传失败请检查当前网络是否畅通")
      }
    } catch (err) {
      console.error(err.toString())
    }
  }
  // 选择相片
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

  // 上传相片
  _uploadImage = async () => {
    let uri = this.state.image;
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
      let res = await fetch(Remote + "/api/uploadImage", options);
      let result = await res.json();
      if (result.success) {
        this._modifyHead(result.location)
      } else {
        Alert.alert("上传失败请检查当前网络是否畅通")
      }
    } catch (err) {
      console.error(err.toString())
    }
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