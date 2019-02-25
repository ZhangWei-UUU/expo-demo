import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {  Constants, BarCodeScanner, Permissions } from 'expo';
import QRCode from 'react-native-qrcode';

class QrScreen extends Component {
  static navigationOptions = {
    title: '二维码',
  };

  state = {
    text: 'http://facebook.github.io/react-native/',
  };
  
  async componentDidMount() {
  
  }

      
    render() {
   
        return (
          <View style={{ flex: 1 }}>
             <QRCode
                value={this.state.text}
                size={200}
                bgColor='purple'
                fgColor='white'/>
          </View>
        );
      }

}

const styles = StyleSheet.create({
    absoluteFill: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    }
  });
export default QrScreen
