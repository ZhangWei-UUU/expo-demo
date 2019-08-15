import React, { PureComponent } from 'react';
import CustomHeadBar from '../components/HeadBar';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { BackHandler } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../styles/index';

const CASES = [
  { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565702551439&di=7039e85a9157a9038929e1cd8dc1bd64&imgtype=0&src=http%3A%2F%2Fwww.chainske.com%2Ftupian%2F20180909%2Fohssvvzkztq151.jpg", text: "Libp2p带你进入区块链的底层世界" },
  { src: "http://blog.adnansiddiqi.me/wp-content/uploads/2018/03/IPFS.jpg", text: "IPFS分布式存储" },
  { src: "http://test-1253763202.cos.ap-shanghai.myqcloud.com/heads/1564987325493.jpg", text: "Near Protocal入门篇" },
  { src: "https://polkadot.network/content/images/2019/07/image2.png", text: "Substrate 入门篇" },
]

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { src: "fire", color: "#FF1511", text: "新币动态" },
        { src: "apple-safari", color: "#C347FF", text: "周边带" },
        { src: "book-open-page-variant", color: "#FFC120", text: "知识库" },
        { src: "cards", color: "#16C828", text: "我的卡劵" },
        { src: "chart-multiline", color: "#5080FF", text: "实时数据" },

      ]
    }
  }

  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    this.props.navigation.pop()
  }


  render() {
    return (
      <ScrollView style={styles.body}>
        <CustomHeadBar title="首页" {...this.props} />
        <View style={styles.wrapper}>
          <Swiper autoplay >
            <View style={styles.slide1}>
              <Image source={require('../assets/images/head-1.jpg')}
                resizeMode="contain"
                style={styles.headPic} />
            </View>
            <View style={styles.slide2}>
              <Image source={require('../assets/images/head-1.jpg')}
                resizeMode="contain"
                style={styles.headPic} />
            </View>
            <View style={styles.slide3}>
              <Image source={require('../assets/images/head-1.jpg')}
                resizeMode="contain"
                style={styles.headPic} />
            </View>
          </Swiper>
        </View>
        <View style={styles.lineWrapper}>
          {this.state.items.map((item, key) => (
            <View key={key} style={styles.lineSingle}>
              <TouchableOpacity onClick={(e, key) => this.jump(e, item.id)} >
                <MaterialCommunityIcons name={item.src} size={40}
                  style={{ color: item.color }}
                />
                <Text style={{
                  fontSize: 10,
                  textAlign: "center", marginTop: 10
                }}>{item.text}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", margin: 15 }} >超值优惠</Text>

          <View style={{
            flex: 10,
            flexDirection: 'row',
            paddingBottom: 10,
            flexWrap: 'wrap',
          }}>
            {CASES.map((item, key) => (
              <View key={key} style={styles.card}>
                <Image source={{ uri: `${item.src}` }} style={styles.picture} />
                <Text style={{
                  fontSize: 14,
                  padding: 10,
                  textAlign: "center", marginTop: 7
                }}>{item.text}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}