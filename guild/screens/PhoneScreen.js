import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import CustomTopBar from '../components/TopBar';
import { Asset } from 'expo-asset';

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
      this.props.navigation.navigate("Login", { phone: this.state.number })
    } else {
      Alert.alert("请检查手机号码是否正确")
    }
  }

  render() {
    return (
      <View style={styles.body}>
        <CustomTopBar title="登录/注册" {...this.props} />
        <Image source={require('../assets/images/bird-logo.png')}
          style={{ width: 100, height: 150, marginTop: 100, marginBottom: 30 }} />
        <TextInput style={styles.phoneInput}
          onChange={this.fillNumber}
          keyboardType='numeric'
          selectionColor="yellow"
          placeholder="请输入手机号"
        />
        <TouchableOpacity onPress={this.jump}>
          <View style={styles.custombtn}>
            <Text style={{ color: "#000", fontSize: 18, fontWeight: 'bold' }}>获取验证码</Text>
          </View>
        </TouchableOpacity>
      </View >
    );
  }
}

export default PhoneScreen;