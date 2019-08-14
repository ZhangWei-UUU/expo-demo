import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter } from 'react-native';
import { styles } from '../styles/settings';
import { Ionicons } from '@expo/vector-icons';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: undefined
    }
  }

  _jump = (pageName) => {
    this.props.navigation.navigate(pageName)
  }

  async componentDidMount() {
    var self = this;
    this.listener = DeviceEventEmitter.addListener('BackToLogin', async (url) => {
      let userToken = await AsyncStorage.getItem('user-token');
      self.setState({
        userToken
      });
    });
    try {
      let userToken = await AsyncStorage.getItem('user-token');
      this.setState({
        userToken,
      })
    } catch (error) {
      console.error("获取本地存储错误")
    }
  }

  componentWillUnmount() {
    this.listener.remove();
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
    let { userToken } = this.state;
    return (
      <View style={styles.body}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.Header}>
            {userToken ?
              <View style={{ marginTop: 30, alignItems: "center" }}>
                <TouchableOpacity onPress={() => this._jump("UpdateHead")}>
                  <Ionicons name="md-contact" size={82} backgroundColor="#e8e8e8" color="#e8e8e8" />
                </TouchableOpacity>
                <Text style={styles.blackText}>{userToken}</Text>
              </View>
              :
              <View style={{ marginTop: 30, alignItems: "center" }}>
                <TouchableOpacity onPress={() => this._jump("Phone")}>
                  <Ionicons name="md-contact" size={82} backgroundColor="#e8e8e8" color="#e8e8e8" />
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
          {userToken ? <View style={styles.card}>
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
