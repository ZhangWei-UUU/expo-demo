import React, { Component } from 'react';
import { Text, View, DeviceEventEmitter, Alert, TouchableOpacity, Image, TextInput, AsyncStorage } from 'react-native';
import TopBar from '../components/Topbars';
import { styles } from '../styles/login';
import Remote from '../constants/Remote';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  setName = (event) => {
    const { text } = event.nativeEvent;
    this.setState({ username: text })
  }

  setPwd = (event) => {
    const { text } = event.nativeEvent;
    this.setState({ password: text })
  }

  componentWillUnmount() {
    DeviceEventEmitter.emit('BackToLogin', { login: true });
  }

  submit = async () => {
    let { username, password } = this.state;
    let { navigation } = this.props;
    const phone = navigation.getParam('phone');
    const OPTIONS = {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, phone, coin: 0, head: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" })
    }
    try {
      let res = await fetch(`${Remote}/api/registry`, OPTIONS);
      let result = await res.json();
      if (result.success === true) {
        await AsyncStorage.setItem('user-token', result.token);
        this.props.navigation.push("Settings")
      } else {
        Alert.alert('注册失败', '请检查网络是否正常');
      }
    } catch (err) {
      console.log(err)
    }
  }

  render() {

    return (
      <View style={styles.body}>
        <TopBar title="新用户注册" {...this.props} />
        <Image source={require('../assets/images/bird-logo.png')}
          style={{ width: 100, height: 150, marginTop: 100, marginBottom: 50 }} />
        <TextInput style={styles.phoneInput}
          onChange={this.setName}
          autoCompleteType='name'
          selectionColor="yellow"
          placeholder="请设置昵称"
        />
        <TextInput style={styles.phoneInput}
          onChange={this.setPwd}
          autoCompleteType='password'
          secureTextEntry={true}
          selectionColor="yellow"
          placeholder="请设置8～20位密码"
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.custombtn}>
            <Text style={{ color: "#000", fontSize: 18, fontWeight: 'bold' }}>注册</Text>
          </View>
        </TouchableOpacity>
      </View >
    );
  }
}

export default RegisterScreen;