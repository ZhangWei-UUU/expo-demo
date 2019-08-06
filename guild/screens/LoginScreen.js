import React, { Component, createRef } from 'react';
import { Text, View, DeviceEventEmitter, Alert, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomTopBar from '../components/TopBar';
import CodeInput from 'react-native-confirmation-code-field';
import { styles } from '../styles/login';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
  handlerOnFulfill = code => console.log(code);

  codeInputRef = createRef();

  _login = () => {

  }

  cellProps = ({ /*index, isFocused,*/ hasValue }) => {
    if (hasValue) {
      return {
        style: [styles.input, styles.inputNotEmpty],
      };
    }

    return {
      style: styles.input,
    };
  };

  _storeData = async (userName = '测试账户', userData = { account: 10000, order: 12 }) => {
    try {
      await AsyncStorage.setItem('userName', userName);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      Alert.alert('这手机要该换啦');
    }
  };

  refresh = () => {

  }
  onFinishCheckingCode = code => {
    if (code === '123456') {
      this._storeData("张伟", { account: 10000, order: 12 });
      this.props.navigation.navigate('Settings', { refresh: this.refresh() });
    } else {
      Alert.alert('验证码未通过', '请检查您的验证码是否输入正确!', [{ text: 'OK' }], {
        cancelable: false,
      });
    }



    // If code does not match, clear input with: this.refs.codeInputRef1.clear()
    this.codeInputRef.current.clear();
  };

  static containerProps = { style: styles.inputWrapStyle };

  componentDidMount() {
    setTimeout(() => {
      Alert.alert("验证码：123456")
    }, 2000)
  }

  componentWillUnmount() {
    DeviceEventEmitter.emit('BackToLogin', { login: true });
  }
  render() {
    return (
      <View style={styles.body}>
        <CustomTopBar title="验证码确认" {...this.props} />
        <Text style={{ marginTop: 90 }}>输入验证码</Text>
        <CodeInput
          ref={this.codeInputRef}
          variant="clear"
          codeLength={6}
          size={45}
          keyboardType="numeric"
          cellProps={this.cellProps}
          onFulfill={this.onFinishCheckingCode}
        />
      </View >
    );
  }
}

export default LoginScreen;