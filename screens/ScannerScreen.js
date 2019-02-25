import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {  Constants, BarCodeScanner, Permissions } from 'expo';

class ScannerScreen extends Component {
  static navigationOptions = {
    title: '扫一扫',
    headerTransparent: true,
    headerTintColor: '#fff',
  };

  state = {
    hasCameraPermission: null,
  }
  
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

      
  handleBarCodeScanned = ({ type, data }) => {
      //在扫描之后就输出相应信息
      console.log(type,data)
      if(data){
        this.props.navigation.navigate('Qrcode')
      }
  }
    render() {
        const { hasCameraPermission } = this.state;
    
        if (hasCameraPermission === null) {
          return <Text>正在请求相机权限中</Text>;
        }
        if (hasCameraPermission === false) {
          return <Text>没有相机权限</Text>;
        }
        return (
          <View style={{ flex: 1 }}>
            <BarCodeScanner
              onBarCodeScanned={this.handleBarCodeScanned}
              style={styles.absoluteFill}
            />
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
export default ScannerScreen
