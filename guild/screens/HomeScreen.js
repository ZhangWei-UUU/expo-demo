import React, { PureComponent } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import DoubleClick from 'react-native-double-click';
import Swiper from 'react-native-swiper-animated';
import { BackHandler } from "react-native";

import { styles } from '../styles/deck';

const shadowOpt = {
  height: 500,
  width: 300,
  color: "#000",
  border: 8,
  radius: 8,
  opacity: 0.1,
  x: 3,
  y: 3,
  style: { marginVertical: -10 },
}


export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { src: require("../assets/images/test-1.png") },
        { src: require("../assets/images/test-4.png") },
        { src: require("../assets/images/test-2.png") },
        { src: require("../assets/images/test-3.png") },
        { src: require("../assets/images/test-11.png") },
        { src: require("../assets/images/test-12.png") },
      ]
    }
  }

  swiper = null;

  // prev = () => {
  //   this.swiper.forceLeftSwipe();
  // }

  // next = () => {
  //   this.swiper.forceRightSwipe();
  // }

  change = () => {
    this.swiper.jumpToIndex(0);
    this.setState({
      items: [
        { src: require("../assets/images/test-11.png") },
        { src: require("../assets/images/test-12.png") },
        { src: require("../assets/images/test-2.png") },
        { src: require("../assets/images/test-3.png") },
      ]
    })
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  jump = (e, key) => {
    this.props.navigation.navigate('Content')
  }

  onBackPress = () => {
    this.props.navigation.pop()
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper
          ref={(swiper) => {
            this.swiper = swiper;
          }}
          stack={true}
          showPagination={false}
          style={styles.wrapper}
          paginationStyle={{ container: { backgroundColor: 'transparent' } }}
          paginationLeft={''}
          paginationRight={''}
        >
          {this.state.items.map((item, key) => (
            <View style={styles.card} key={key}>
              <DoubleClick onClick={(e, key) => this.jump(e, 1)}>
                <BoxShadow setting={shadowOpt} >

                  <Image source={item.src} style={styles.img} />

                </BoxShadow>
              </DoubleClick>
            </View>
          ))}
        </Swiper>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.change} style={styles.btn}>
            <Text style={styles.btnText}>换一批</Text>
          </TouchableOpacity>
        </View>
      </View >
    );
  }
}