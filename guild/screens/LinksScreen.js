import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { BackHandler } from "react-native";
import { styles } from '../styles/vip';

class VipScreen extends Component {
  static navigationOptions = {
    header: null,

  };
  /////***** HANDLE BACK PRESS ******//////
  componentWillMount() {
    // Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    console.log('unmount dashboard');
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    // if (this.props.currentRoute.index === 0) {
    //   BackHandler.exitApp();
    //   return false;
    // }
    this.props.navigation.goBack(null);
    return true;
  };

  openAuth() {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <View style={styles.body}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.header}>
            <Image source={require('../assets/images/sendCoin.jpg')} style={styles.headerImage} />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'stretch',
              borderBottomWidth: 1,
              borderBottomColor: "#e8e8e8",
              marginBottom: 20
            }}>
            <View style={styles.magazineWrapper}>
              <Image source={require('../assets/images/caixin-1.jpg')} style={styles.magazine} />
            </View>
            <View style={styles.magazineTextWrapper} >
              <Text style={styles.title}>人民币"破七"之殇</Text>
              <Text>受单边主义和贸易保护主义措施及对中国加征关税预期等影响，今日人民币对美元汇率有所贬值，
                突破了7元，但人民币对一篮子货币继续保持稳定和强势，这是市场供求和国际汇市波动的反映。
</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'stretch',

            }}>
            <View style={styles.magazineWrapper}>
              <Image source={require('../assets/images/economic.jpg')} style={styles.magazine} />
            </View>
            <View style={styles.magazineTextWrapper} >
              <Text style={styles.title}>《经济学人》：比特币资产</Text>
              <Text>谈到比特币，一定会有两种声音：一类是拥护者，他们预测比特币就是互联网时代的通用货币，甚至有着取代现有货币的趋势；而另一类则是批评者，将它和17世纪荷兰的郁金香事件类比，认为不过是疯狂投机的假象。
</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default VipScreen;
