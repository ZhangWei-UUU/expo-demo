import * as React from 'react';
import {
  TouchableOpacity, Image, View, Alert, Dimensions,
  AsyncStorage
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import TopBarWidthActionSheet from '../components/Topbars/widthActionSheet';
import { ActionSheetProvider, connectActionSheet } from '@expo/react-native-action-sheet';
import request from '../components/request';
import PictureForm from '../constants/PictureForm';
import Layout from '../constants/Layout';


class UpdateHead extends React.Component {
  state = {
    image: null,
    selectedIndex: null
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
    let response = await request("POST", "/userinfo/modify", data);
    if (response.n === 1 && response.nModified === 1 && response.ok === 1) {
      this.props.navigation.navigate("Settings", { refresh: true });
    } else {
      Alert.alert("上传失败请检查当前网络是否畅通")
    }

  }

  pickImageFromSheet = (uri) => {
    this.setState({ image: uri });
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

  // 上传相片到腾讯COS服务器上
  _uploadImage = async () => {
    let data = PictureForm(this.state.image);
    let result = await request("POST", "/api/uploadImage", data);
    if (result.success) {
      this._modifyHead(result.location)
    } else {
      Alert.alert("上传失败", "服务端错误")
    }

  }
  render() {
    let { image } = this.state;
    let { width, height } = Layout.window;
    return (
      <View style={{
        width: width,
        height: height,
        backgroundColor: "#000"
      }}>
        <TopBarWidthActionSheet
          {...this.props}
          pickImageFromSheet={this.pickImageFromSheet}
          showActionSheetWithOptions={this.props.showActionSheetWithOptions}
          title="头像"
          color="black" />
        <View View style={{ flex: 1, flexDirection: 'row-reverse' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {image && <Image source={{ uri: image }} style={{ width: width, height: width }} />}
          </View>
        </View>
      </View>
    );
  }
}

const ConnectedApp = connectActionSheet(UpdateHead)

export default class UpdateHeadScreen extends React.Component {
  render() {
    return (
      <ActionSheetProvider>
        <ConnectedApp {...this.props} />
      </ActionSheetProvider>
    );
  }
}
