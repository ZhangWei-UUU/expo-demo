import React, { PureComponent } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { BoxShadow } from 'react-native-shadow';

import Swiper from 'react-native-swiper-animated';
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


export default class Extended extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { src: require("../assets/images/test-1.png") },
        { src: require("../assets/images/test-4.png") },
        { src: require("../assets/images/test-2.png") },
        { src: require("../assets/images/test-3.png") },
      ]
    }
  }

  swiper = null;

  prev = () => {
    this.swiper.forceLeftSwipe();
  }

  next = () => {
    this.swiper.forceRightSwipe();
  }

  change = () => {
    this.swiper.jumpToIndex(0);
    this.setState({
      items: [
        { src: require("../assets/images/test-12.png") },
        { src: require("../assets/images/test-2.png") },

      ]
    })
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
              <BoxShadow setting={shadowOpt} >
                <Image source={item.src} style={styles.img} />
              </BoxShadow>
            </View>

          ))}


        </Swiper>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.prev} style={styles.btn}>
            <Text style={styles.btnText}>PREVIOUS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.next} style={styles.btn}>
            <Text style={styles.btnText}>NEXT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.change} style={styles.btn}>
            <Text style={styles.btnText}>换一批</Text>
          </TouchableOpacity>
        </View>
      </View >
    );
  }
}