import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import { View, Platform, Image } from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import { styles } from '../styles/deck';

const shadowOpt = {
  height: 500,
  width: 300,
  color: "#000",
  border: 8,
  radius: 8,
  opacity: 0.1,
  x: 0,
  y: 3,
  style: { marginVertical: 5 },
}

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { src: require("../assets/images/test-1.png") },
        { src: require("../assets/images/test-2.png") },
        { src: require("../assets/images/test-3.png") },
        { src: require("../assets/images/test-4.png") }
      ]
    }
  }

  reload = () => {
    this.props.reload();
  }
  render() {
    let { items, cardIndex } = this.props;
    return (
      <View>
        <Swiper
          stack={}
          useViewOverflow={Platform.OS === 'ios'}
          cards={this.state.items}
          ref={swiper => {
            this.swiper = swiper;
          }}
          cardIndex={cardIndex}
          renderCard={(card, key) => {
            return (
              <BoxShadow setting={shadowOpt}>
                <View style={styles.card}>
                  <Image
                    style={styles.img}
                    source={card.src}
                  />
                </View>
              </BoxShadow>
            )
          }}
          onSwiped={(cardIndex) => { console.log(cardIndex) }}
          onSwipedAll={() => this.reload()}
          backgroundColor={'#4FD0E9'}
          cardIndex={0}
          stackSize={3}>
        </Swiper >
      </View>
    )
  }
}

export default Deck;