import React, { PureComponent } from 'react';

import {
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DoubleClick from 'react-native-double-click';
import { BackHandler } from "react-native";

import { styles } from '../styles/deck';



export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [

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

  fetchDataFromServer = () => {
    fetch('https://polkadot.cloud-wave.cn/read?collection=articals')
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success) {
          this.setState({
            items: responseJson.result
          })
        } else {
          Alert.alert("请检查您的网络是否通畅")
        }
      })
      .catch(error => {
        console.error(error);
      });
  };


  change = () => {
    this.swiper.jumpToIndex(0);
    this.fetchDataFromServer();
  }

  async componentDidMount() {
    this.fetchDataFromServer();
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);

  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  jump = (e, id) => {
    this.props.navigation.navigate('Content', { id: id })
  }

  onBackPress = () => {
    this.props.navigation.pop()
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#fff"
          barStyle="dark-content" // Here is where you change the font-color
        />
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
            <DoubleClick onClick={(e, key) => this.jump(e, item.id)} key={key}>
              <Image source={{ uri: `https://${item.cover}` }} style={styles.img} />
            </DoubleClick>
          ))}
        </Swiper>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.prev} style={styles.btn}>
            <Ionicons name="md-arrow-dropleft" size={32} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.change} style={styles.btn}>
            <Text style={styles.btnText}>换一批</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.next} style={styles.btn}>
            <Ionicons name="md-arrow-dropright" size={32} />
          </TouchableOpacity>
        </View>
      </View >
    );
  }
}