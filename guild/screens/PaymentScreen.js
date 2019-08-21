import React, { Component } from 'react';
import { Text, View } from 'react-native';
import QRCode from 'react-native-qrcode';
import TopBar from '../components/Topbars';
import { styles } from '../styles/payment';
import Barcode from 'react-native-barcode-builder';

class PaymentScreen extends Component {
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
        <TopBar title="向商户付款" {...this.props} />
        <View style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.headText}>铂金会员</Text>
          </View>
          <Barcode value="Hello World" format="CODE128" />
          <View style={styles.qrcodeContainer}>
            <QRCode
              value={text}
              size={148}
              bgColor='#000'
              fgColor='white' />
          </View>
        </View>
      </View >
    );
  }
}

export default PaymentScreen;