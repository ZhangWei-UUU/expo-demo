import React, { PureComponent } from 'react';
import CustomHeadBar from '../components/HeadBar';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { BackHandler } from "react-native";
import { BoxShadow } from 'react-native-shadow';

const styles = StyleSheet.create({
  body: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  wrapper: {
    height: 260,
  },
  slide1: {
    borderRadius: 20,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    borderRadius: 20,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    borderRadius: 20,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  img: {
    width: 40,
    height: 40
  }
})
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { src: require("../assets/images/fire.png") },
        { src: require("../assets/images/location.png") },
        { src: require("../assets/images/pencil.png") },
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
      <View style={styles.body}>
        <CustomHeadBar title="首页" {...this.props} />
        <View style={styles.wrapper}>
          <Swiper autoplay >
            <View style={styles.slide1}>
              <Text style={styles.text}>HTEsr</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </View>
        {this.state.items.map((item, key) => (
          <TouchableOpacity onClick={(e, key) => this.jump(e, item.id)} key={key}>
            <Image source={item.src} style={styles.img} />
          </TouchableOpacity>
        ))}
      </View >
    );
  }
}