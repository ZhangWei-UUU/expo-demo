import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter } from 'react-native';
import { styles } from '../styles/settings';
import { Ionicons } from '@expo/vector-icons';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: undefined
    }
  }

  _jump = (pageName) => {
    this.props.navigation.navigate(pageName)
  }

  async componentDidMount() {
    var self = this;
    this.listener = DeviceEventEmitter.addListener('BackToLogin', async (url) => {
      let userName = await AsyncStorage.getItem('userName');
      self.setState({
        userName: userName
      });
    });
    try {
      let userName = await AsyncStorage.getItem('userName');
      this.setState({
        userName: userName,
        refresh: false
      })
    } catch (error) {
      console.error("获取本地存储错误")
    }
  }

  componentWillUnmount() {
    this.listener.remove();
  }

  // async componentDidUpdate(preProps, preState) {

  //   try {
  //     let userName = await AsyncStorage.getItem('userName');
  //     console.log("update", userName, preState.userName)
  //     if (userName !== preState.userName) {
  //       this.setState({
  //         userName
  //       })
  //     }

  //   } catch (error) {
  //     console.error("获取本地存储错误")
  //   }
  // }
  // 退出登录
  _logout = async () => {
    try {
      await AsyncStorage.removeItem('userName');
      await AsyncStorage.removeItem('userData');
      Alert.alert("退出成功");
    } catch (error) {
      console.error("删除本地存储错误");
      Alert.alert("退出失败");
    } finally {
      this.props.navigation.replace("Settings")
    }
  }
  render() {
    let { userName } = this.state;
    return (
      <View style={styles.body}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.Header}>
            <TouchableOpacity onPress={() => this._jump("Phone")}>
              <Ionicons name="md-contact" size={82} backgroundColor="#e8e8e8" color="#e8e8e8" />
            </TouchableOpacity>
            {userName ? <Text style={styles.blackText}>{userName}</Text> : <Text style={styles.grayText}>点击登录</Text>}
          </View>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => this._jump("Account")}>
              <View style={styles.cardBar}>
                <Ionicons name="md-card" size={24} color="#fb507a" style={styles.barIcon} />
                <View style={styles.barLeft}>
                  <Text>账户</Text>
                </View>
                <View style={styles.barRight}>
                  <Text style={styles.Num}>0.00</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.cardBar}>
              <Ionicons name="md-journal" size={24} color="#ffc73a" style={styles.barIcon} />
              <View style={styles.barLeft}>
                <Text>订阅期刊</Text>
              </View>
              <View style={styles.barRight}>
                <Text style={styles.Num}>0份</Text>
              </View>
            </View>
            <View style={styles.cardBar}>
              <Ionicons name="md-analytics" size={24} color="#ff6165" style={styles.barIcon} />
              <View style={styles.barLeft}>
                <Text>收益率</Text>
              </View>
              <View style={styles.barRight}>
                <Text style={styles.Num}>0%</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => this._jump("Account")}>

              <View style={styles.cardBar}>
                <Ionicons name="md-paper" size={24} color="#72d658" style={styles.barIcon} />
                <View style={styles.barLeft}>
                  <Text>研报</Text>
                </View>
                <View style={styles.barRight}>
                  <Text style={styles.Num}></Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._jump("LineTrend")}>

              <View style={styles.cardBar}>
                <Ionicons name="md-pie" size={24} color="#46db97" style={styles.barIcon} />
                <View style={styles.barLeft}>
                  <Text>数据分析</Text>
                </View>
                <View style={styles.barRight}>
                  <Text style={styles.Num}></Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._jump("Account")}>

              <View style={styles.cardBar}>
                <Ionicons name="md-settings" size={24} color="gray" style={styles.barIcon} />
                <View style={styles.barLeft}>
                  <Text>设置</Text>
                </View>
                <View style={styles.barRight}>
                  <Text style={styles.Num}></Text>
                </View>
              </View>
            </TouchableOpacity>

          </View>
          {userName ? <View style={styles.card}>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity onPress={this._logout}>
                <Text style={{ color: "red", fontSize: 18 }}>退出登录</Text>
              </TouchableOpacity>
            </View>
          </View> : null}


        </ScrollView >
      </View >
    );

  }
}

export default SettingsScreen;
