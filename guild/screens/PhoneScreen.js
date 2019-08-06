import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import CustomTopBar from '../components/TopBar';

import { styles } from '../styles/login';
const phoneReg = /^1(3|4|5|7|8)\d{9}$/;

class PhoneScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ""
    }
  }

  fillNumber = (event) => {
    const { text } = event.nativeEvent;
    this.setState({ number: text })
  }
  //验证手机号码
  jump = () => {
    if (phoneReg.test(this.state.number)) {
      Alert.alert("验证码请求发送成功");
      this.props.navigation.navigate("Login")
    } else {
      Alert.alert("请检查手机号码是否正确")
    }
  }


  render() {
    return (
      <View style={styles.body}>
        <CustomTopBar title="手机登录" {...this.props} />
        <Text style={{ marginTop: 90, marginBottom: 20 }}>输入手机号</Text>
        <TextInput style={styles.phoneInput}
          onChange={this.fillNumber}
          keyboardType='numeric'
          selectionColor="#FF5A4F" />
        <TouchableOpacity onPress={this.jump}>
          <View style={styles.custombtn}>
            <Text style={{ color: "#fff" }}>获取验证码</Text>
          </View>
        </TouchableOpacity>
      </View >
    );
  }
}

export default PhoneScreen;