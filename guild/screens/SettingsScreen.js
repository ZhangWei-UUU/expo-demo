import React, { Component } from 'react';
import {
  ScrollView, View, Text, TouchableOpacity, AsyncStorage,
  StatusBar,
  Alert, DeviceEventEmitter, Image
} from 'react-native';
import { styles } from '../styles/settings';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from "react-navigation";

import Remote from '../constants/Remote';
const API = "/userinfo";

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      refresh: false
    }
  }

  // 页面跳转
  _jump = (pageName) => {
    let { user } = this.state;
    if (pageName === "UpdateHead") {
      this.props.navigation.navigate(pageName, { head: user.head })
    } else {
      this.props.navigation.navigate(pageName)
    }

  }

  // 获取用户
  _getUserInfo = async (token) => {
    try {
      let res = await fetch(Remote + API + `?token=${token}`);
      let result = await res.json();
      if (result.success) {
        this.setState({
          user: result.result,
          refresh: false
        })
      } else {
        Alert.alert("获取用户登录信息失败", "请检查当前网络是否正常")
      }
    } catch (err) {
      Alert.alert("获取用户登录信息失败", "请检查当前网络是否正常")
    }
  }

  async componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", async () => {
      let userToken = await AsyncStorage.getItem('user-token');
      if (userToken) {
        this._getUserInfo(userToken);
      }
    });

    this.listener = DeviceEventEmitter.addListener('BackToLogin', async (url) => {
      let userToken = await AsyncStorage.getItem('user-token');
      if (userToken) {
        this._getUserInfo(userToken);
      }
    });

    try {
      let userToken = await AsyncStorage.getItem('user-token');
      if (userToken) {
        this._getUserInfo(userToken);
      }
    } catch (error) {
      console.error("获取本地存储错误")
    }
  }

  componentWillUnmount() {
    this.listener.remove();
    this.focusListener.remove();
  }

  _logout = async () => {
    try {
      await AsyncStorage.removeItem('user-token');
      Alert.alert("退出成功");
    } catch (error) {
      console.error("删除本地存储错误");
      Alert.alert("退出失败");
    } finally {
      this.props.navigation.replace("Settings")
    }
  }

  render() {
    let { user } = this.state;
    return (
      <View style={styles.body}>
        <StatusBar backgroundColor="#ffda1f" barStyle="dark-content" />
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.Header}>
            {user ?
              <View style={{ marginTop: 30, alignItems: "center" }}>
                <TouchableOpacity onPress={() => this._jump("UpdateHead")}>
                  <View style={styles.headWrapper}>
                    <Image source={{ uri: user.head }} style={styles.head} />
                  </View>
                </TouchableOpacity>
                <Text style={styles.blackText}>{user.username}</Text>
              </View>
              :
              <View style={{ marginTop: 30, alignItems: "center" }}>
                <TouchableOpacity onPress={() => this._jump("Phone")}>
                  <Ionicons name="md-contact" size={82} backgroundColor="#fff" color="#000" />
                </TouchableOpacity>
                <Text style={styles.grayText}>点击登录</Text>
              </View>
            }
          </View>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => this._jump("Account")}>
              <View style={styles.cardBar}>
                <Ionicons name="md-card" size={24} color="#fb507a" style={styles.barIcon} />
                <View style={styles.barLeft}>
                  <Text>账户</Text>
                </View>
                <View style={styles.barRight}>
                  <Text style={styles.Num}>{user ? user.coin : 0}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.cardBar}>
              <Ionicons name="md-journal" size={24} color="#ffc73a" style={styles.barIcon} />
              <View style={styles.barLeft}>
                <Text>订阅期刊</Text>
              </View>
              <View style={styles.barRight}>
                <Text style={styles.Num}>0</Text>
              </View>
            </View>
            <View style={styles.cardBar}>
              <Ionicons name="md-analytics" size={24} color="#ff6165" style={styles.barIcon} />
              <View style={styles.barLeft}>
                <Text>消息</Text>
              </View>
              <View style={styles.barRight}>
                <Text style={styles.Num}>0</Text>
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
            <TouchableOpacity onPress={() => this._jump("Register")}>

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
          {user ? <View style={styles.card}>
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

export default withNavigation(SettingsScreen);
