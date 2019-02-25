import React,{Component} from 'react';
import {Text,View} from 'react-native';
class LoginScreen extends Component {
  static navigationOptions = {
    title: '指纹案例',
  };

  render() {
    return <View>
        <Text>指纹</Text>
    </View>;
  }
}

export default LoginScreen
