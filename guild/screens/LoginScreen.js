import React, { Component, createRef } from 'react';
import { Text, View, DeviceEventEmitter, Alert, AsyncStorage, Image } from 'react-native';
import CustomTopBar from '../components/TopBar';
import CodeInput from 'react-native-confirmation-code-field';
import { styles } from '../styles/login';

const TMP_HOST = "http://10.73.49.153";
const TMP_API = "/mobile/login/verification";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  handlerOnFulfill = code => console.log(code);

  codeInputRef = createRef();

  cellProps = ({ hasValue }) => {
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
  /**
   * 跳转登录界面
   */
  _register = () => {
    let { navigation } = this.props;
    const phone = navigation.getParam('phone');
    this.props.navigation.navigate('Register', { phone });
  }
  /**
   * 提交登录数据到后台
   */
  onFinishCheckingCode = async code => {
    let { navigation } = this.props;
    const phone = navigation.getParam('phone');
    const OPTIONS = {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, code })
    }
    try {
      let res = await fetch(TMP_HOST + TMP_API, OPTIONS);
      let result = await res.json();
      if (result.success === false) {
        Alert.alert(result.reason)
      } else {
        if (result.result === null) {
          Alert.alert("该手机号尚未注册", "是否注册新账户", [
            {
              text: '取消',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: '立即注册', onPress: () => { this._register() } },
          ])
        } else {
          Alert.alert("success")
        }
      }
    } catch (err) {
      console.error(err.toString());
    }

    // if (code === '123456') {
    //   this._storeData("张伟", { account: 10000, order: 12 });
    //   this.props.navigation.navigate('Settings', { refresh: this.refresh() });
    // } else {
    //   Alert.alert('验证码未通过', '请检查您的验证码是否输入正确!', [{ text: 'OK' }], {
    //     cancelable: false,
    //   });
    // }
    this.codeInputRef.current.clear();
  };

  static containerProps = { style: styles.inputWrapStyle };

  componentDidMount() {

  }

  componentWillUnmount() {
    DeviceEventEmitter.emit('BackToLogin', { login: true });
  }

  render() {
    let { navigation } = this.props;
    const phone = navigation.getParam('phone');
    return (
      <View style={styles.body}>
        <CustomTopBar title="登录/注册" {...this.props} />
        <Image source={require('../assets/images/bird-logo.png')}
          style={{ width: 100, height: 150, marginTop: 100 }} />
        <View >
          <Text style={{ marginTop: 90, color: "#ccc" }}>
            已发送验证码至 {phone}
          </Text>
        </View>
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