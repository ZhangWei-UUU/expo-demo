import React,{Component} from 'react';
import {Text,View} from 'react-native';
class LoginScreen extends Component {
  static navigationOptions = {
    title: '登录',
  };

  render() {
    return <View>
        <Text>登录</Text>
    </View>;
  }
}

export default LoginScreen
