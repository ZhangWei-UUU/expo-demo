import * as React from 'react';
import {
  TouchableOpacity, Image, View, Alert, Dimensions,
  Modal, AsyncStorage, Text, TouchableHighlight
} from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import CustomTopBar from '../components/TopBar';
import Remote from '../constants/Remote';
import { Entypo } from '@expo/vector-icons';
import { connectActionSheet } from '@expo/react-native-action-sheet'


class UpdateHeadScreen extends React.Component {
  state = {
    image: null,
    modalVisible: false
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
  // 打开底部弹出框
  _openModal = () => {
    const options = ['Delete', 'Save', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      buttonIndex => {
        // Do something here depending on the button index selected
      },
    );
  }
  // 关闭弹出框
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
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
        Alert.alert("上传失败", "服务端错误")
      }
    } catch (err) {
      Alert.alert("上传失败", "请检查当前网络是否畅通")
    }
  }
  render() {
    let { image } = this.state;
    return (
      <View style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: "#000"
      }}>
        <CustomTopBar title="头像" {...this.props} color="black" />
        <View View style={{ flex: 1, flexDirection: 'row-reverse' }}>
          <TouchableOpacity onPress={this._openModal}>
            <Entypo name="dots-three-horizontal" size={26} color="#fff" />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={this._pickImage}
            >
              {image &&
                <Image source={{ uri: image }} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width }} />}
            </TouchableOpacity>
            {/* <Button title="确认上传" onPress={this._uploadImage} /> */}
          </View>
        </View>

      </View>
    );
  }
}

const ConnectedApp = connectActionSheet(UpdateHeadScreen)

export default ConnectedApp;