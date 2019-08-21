import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TopBar from '../components/Topbars';
import { styles } from '../styles/account';

class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'xxx',
    }
  }

  componentDidMount() {
    this.setState({ text: "http://facebook.github.io/react-native/" })

  }
  render() {
    let { text } = this.state;
    return (
      <View style={styles.body}>
        <TopBar title="我的账户" {...this.props} />
        <View style={styles.userContainer}>
          <View style={styles.wrapper}>
            <View style={styles.userWrapperLeft}>
              <Text style={styles.userName}>张伟</Text>
              <View style={styles.userNoteWrapper}>
                <Text style={styles.userNote}>账户安全保障中</Text>
              </View>
            </View>
            <View>

            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.wrapper}>
            <View style={styles.assetWrapperLeft}>
              <Text style={styles.userNote}>总资产（元）</Text>
              <Text style={styles.assetNumber}>308,212</Text>
            </View>
            <View style={styles.assetWrapperRight}>
              <Text style={styles.userNote}>昨日收益</Text>
              <Text style={styles.assetBenifit}>+29.21</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardBg}>
          <View style={styles.cardBgWrapper}>
            <View style={styles.grid}>
              <Text style={styles.gridTitle}>借吧</Text>
              <Text style={styles.userNote}>可用资金20,000</Text>
            </View>
            <View style={styles.grid}>
              <Text style={styles.gridTitle}>抵押金</Text>
              <Text style={styles.userNote}>可用资金20,000</Text>
            </View>
            <View style={styles.grid}>
              <Text style={styles.gridTitle}>比特币</Text>
              <Text style={styles.userNote}>可用资金20,000</Text>
            </View>
            <View style={styles.grid}>
              <Text style={styles.gridTitle}>以太坊
              </Text>
              <Text style={styles.userNote}>可用资金20,000</Text>
            </View>
          </View>
        </View>
      </View >
    );
  }
}

export default AccountScreen;